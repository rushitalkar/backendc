const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

// MongoDB Connection (optional - uncomment if using MongoDB)
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/zoomapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Store active rooms and participants
const rooms = new Map();

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join room
  socket.on('join-room', ({ roomId, userName }) => {
    socket.join(roomId);
    
    if (!rooms.has(roomId)) {
      rooms.set(roomId, new Map());
    }
    
    const room = rooms.get(roomId);
    room.set(socket.id, {
      id: socket.id,
      name: userName,
      isMuted: false,
      isVideoOn: true,
    });

    // Notify others in the room
    socket.to(roomId).emit('user-joined', {
      id: socket.id,
      name: userName,
      isMuted: false,
      isVideoOn: true,
    });

    // Send existing participants to the new user
    const participants = Array.from(room.values()).filter(p => p.id !== socket.id);
    socket.emit('existing-participants', participants);

    console.log(`${userName} joined room ${roomId}`);
  });

  // Toggle mute
  socket.on('toggle-mute', ({ roomId, isMuted }) => {
    const room = rooms.get(roomId);
    if (room && room.has(socket.id)) {
      const participant = room.get(socket.id);
      participant.isMuted = isMuted;
      socket.to(roomId).emit('user-toggled-mute', { id: socket.id, isMuted });
    }
  });

  // Toggle video
  socket.on('toggle-video', ({ roomId, isVideoOn }) => {
    const room = rooms.get(roomId);
    if (room && room.has(socket.id)) {
      const participant = room.get(socket.id);
      participant.isVideoOn = isVideoOn;
      socket.to(roomId).emit('user-toggled-video', { id: socket.id, isVideoOn });
    }
  });

  // Chat message
  socket.on('send-message', ({ roomId, message, userName }) => {
    io.to(roomId).emit('receive-message', {
      id: socket.id,
      message,
      userName,
      timestamp: new Date(),
    });
  });

  // Screen sharing
  socket.on('start-screen-share', ({ roomId, userName }) => {
    socket.to(roomId).emit('user-started-screen-share', { id: socket.id, userName });
  });

  socket.on('stop-screen-share', ({ roomId }) => {
    socket.to(roomId).emit('user-stopped-screen-share', { id: socket.id });
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    
    rooms.forEach((room, roomId) => {
      if (room.has(socket.id)) {
        room.delete(socket.id);
        socket.to(roomId).emit('user-left', { id: socket.id });
        
        if (room.size === 0) {
          rooms.delete(roomId);
        }
      }
    });
  });
});

// REST API endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.post('/api/create-room', (req, res) => {
  const roomId = Math.random().toString(36).substring(7);
  res.json({ roomId });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
