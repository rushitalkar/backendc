import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Calendar, Plus } from 'lucide-react';
import axios from 'axios';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const createRoom = async () => {
    if (!userName.trim()) {
      alert('Please enter your name');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/create-room');
      const { roomId } = response.data;
      navigate(`/room/${roomId}?name=${encodeURIComponent(userName)}`);
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  const joinRoom = () => {
    if (!userName.trim() || !roomId.trim()) {
      alert('Please enter your name and room ID');
      return;
    }
    navigate(`/room/${roomId}?name=${encodeURIComponent(userName)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Video className="w-12 h-12 text-blue-600" />
            <h1 className="text-5xl font-bold text-gray-800">ZoomApp</h1>
          </div>
          <p className="text-xl text-gray-600">
            Video conferencing made simple
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Create Meeting */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow"
                 onClick={createRoom}>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Plus className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">New Meeting</h3>
              </div>
              <p className="text-blue-100">
                Start an instant meeting
              </p>
            </div>

            {/* Schedule */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Schedule</h3>
              </div>
              <p className="text-purple-100">
                Plan a future meeting
              </p>
            </div>
          </div>

          {/* Join Meeting */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Join a Meeting
            </h3>
            <div className="flex gap-3">
              <input
                type="text"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                placeholder="Enter Room ID"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button
                onClick={joinRoom}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">HD Video</h4>
            <p className="text-gray-600 text-sm">Crystal clear video quality</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Easy Scheduling</h4>
            <p className="text-gray-600 text-sm">Plan your meetings ahead</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Instant Join</h4>
            <p className="text-gray-600 text-sm">Start meetings instantly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
