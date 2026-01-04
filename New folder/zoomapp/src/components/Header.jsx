import { Clock, Copy } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = ({ roomId, participantCount }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    alert('Room ID copied!');
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-6 py-3 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Meeting in Progress</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>{formatTime(time)}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div
            onClick={copyRoomId}
            className="bg-gray-800 px-3 py-1 rounded-md flex items-center gap-2 cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <span className="text-gray-300 text-sm">Room: {roomId}</span>
            <Copy className="w-4 h-4 text-gray-400" />
          </div>
          <div className="bg-gray-800 px-3 py-1 rounded-md">
            <span className="text-green-400 text-sm font-medium">
              {participantCount} Participant{participantCount !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
