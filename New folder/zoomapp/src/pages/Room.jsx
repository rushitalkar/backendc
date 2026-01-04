import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSocket } from '../context/SocketContext';
import VideoGrid from '../components/VideoGrid';
import ControlBar from '../components/ControlBar';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';

const Room = () => {
  const { roomId } = useParams();
  const [searchParams] = useSearchParams();
  const userName = searchParams.get('name') || 'Guest';
  const socket = useSocket();

  const [participants, setParticipants] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [screenStream, setScreenStream] = useState(null);
  const [sharingUserId, setSharingUserId] = useState(null);

  useEffect(() => {
    if (!socket) return;

    // Join room
    socket.emit('join-room', { roomId, userName });

    // Listen for existing participants
    socket.on('existing-participants', (existingParticipants) => {
      setParticipants(existingParticipants);
    });

    // Listen for new users
    socket.on('user-joined', (newUser) => {
      setParticipants((prev) => [...prev, newUser]);
    });

    // Listen for user left
    socket.on('user-left', ({ id }) => {
      setParticipants((prev) => prev.filter((p) => p.id !== id));
    });

    // Listen for mute toggle
    socket.on('user-toggled-mute', ({ id, isMuted }) => {
      setParticipants((prev) =>
        prev.map((p) => (p.id === id ? { ...p, isMuted } : p))
      );
    });

    // Listen for video toggle
    socket.on('user-toggled-video', ({ id, isVideoOn }) => {
      setParticipants((prev) =>
        prev.map((p) => (p.id === id ? { ...p, isVideoOn } : p))
      );
    });

    // Listen for messages
    socket.on('receive-message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Listen for screen sharing
    socket.on('user-started-screen-share', ({ id, userName }) => {
      setSharingUserId(id);
    });

    socket.on('user-stopped-screen-share', ({ id }) => {
      if (sharingUserId === id) {
        setSharingUserId(null);
      }
    });

    return () => {
      socket.off('existing-participants');
      socket.off('user-joined');
      socket.off('user-left');
      socket.off('user-toggled-mute');
      socket.off('user-toggled-video');
      socket.off('receive-message');
      socket.off('user-started-screen-share');
      socket.off('user-stopped-screen-share');
    };
  }, [socket, roomId, userName]);

  const handleToggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    socket?.emit('toggle-mute', { roomId, isMuted: newMuteState });
  };

  const handleToggleVideo = () => {
    const newVideoState = !isVideoOn;
    setIsVideoOn(newVideoState);
    socket?.emit('toggle-video', { roomId, isVideoOn: newVideoState });
  };

  const handleSendMessage = (message) => {
    socket?.emit('send-message', { roomId, message, userName });
  };

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleToggleScreenShare = async () => {
    if (isScreenSharing) {
      // Stop screen sharing
      if (screenStream) {
        screenStream.getTracks().forEach((track) => track.stop());
        setScreenStream(null);
      }
      setIsScreenSharing(false);
      setSharingUserId(null);
      socket?.emit('stop-screen-share', { roomId });
    } else {
      // Start screen sharing
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: {
            cursor: 'always',
          },
          audio: false,
        });
        
        setScreenStream(stream);
        setIsScreenSharing(true);
        setSharingUserId(socket?.id);
        socket?.emit('start-screen-share', { roomId, userName });

        // Handle when user stops sharing via browser UI
        stream.getVideoTracks()[0].onended = () => {
          setIsScreenSharing(false);
          setScreenStream(null);
          setSharingUserId(null);
          socket?.emit('stop-screen-share', { roomId });
        };
      } catch (error) {
        console.error('Error sharing screen:', error);
        alert('Failed to share screen. Please grant permission.');
      }
    }
  };

  return (
    <div className="h-screen bg-gray-950 flex flex-col">
      <Header roomId={roomId} participantCount={participants.length + 1} />
      
      <div className="flex-1 pt-16 pb-24 flex overflow-hidden">
        <div className={`flex-1 transition-all ${isChatOpen ? 'mr-80' : ''}`}>
          <VideoGrid
            participants={[
              {
                id: socket?.id,
                name: userName,
                isMuted,
                isVideoOn,
                isCurrentUser: true,
                isScreenSharing,
                screenStream,
              },
              ...participants,
            ]}
            sharingUserId={sharingUserId}
          />
        </div>
        
        {isChatOpen && (
          <ChatPanel
            messages={messages}
            onSendMessage={handleSendMessage}
            onClose={handleToggleChat}
            currentUserName={userName}
          />
        )}
      </div>

      <ControlBar
        isMuted={isMuted}
        isVideoOn={isVideoOn}
        onToggleMute={handleToggleMute}
        onToggleVideo={handleToggleVideo}
        onToggleChat={handleToggleChat}
        isChatOpen={isChatOpen}
        roomId={roomId}
        isScreenSharing={isScreenSharing}
        onToggleScreenShare={handleToggleScreenShare}
      />
    </div>
  );
};

export default Room;
