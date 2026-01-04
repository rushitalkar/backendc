import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  ScreenShare,
  StopCircle,
  Users,
  MessageSquare,
  MoreVertical,
  Shield,
  Copy,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ControlBar = ({
  isMuted,
  isVideoOn,
  onToggleMute,
  onToggleVideo,
  onToggleChat,
  isChatOpen,
  roomId,
  isScreenSharing,
  onToggleScreenShare,
}) => {
  const navigate = useNavigate();

  const ControlButton = ({ icon: Icon, label, active, onClick, dangerous }) => (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
        active
          ? 'bg-blue-600 hover:bg-blue-700'
          : dangerous
          ? 'bg-red-600 hover:bg-red-700'
          : 'bg-gray-700 hover:bg-gray-600'
      }`}
    >
      <Icon className="w-6 h-6 text-white" />
      <span className="text-xs text-white">{label}</span>
    </button>
  );

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    alert('Room ID copied to clipboard!');
  };

  const handleEndCall = () => {
    if (confirm('Are you sure you want to leave the meeting?')) {
      navigate('/');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ControlButton
            icon={isMuted ? MicOff : Mic}
            label={isMuted ? 'Unmute' : 'Mute'}
            active={!isMuted}
            onClick={onToggleMute}
          />
          <ControlButton
            icon={isVideoOn ? Video : VideoOff}
            label={isVideoOn ? 'Stop Video' : 'Start Video'}
            active={isVideoOn}
            onClick={onToggleVideo}
          />
        </div>

        <div className="flex items-center gap-3">
          <ControlButton icon={Shield} label="Security" />
          <ControlButton icon={Users} label="Participants" />
          <ControlButton
            icon={MessageSquare}
            label="Chat"
            active={isChatOpen}
            onClick={onToggleChat}
          />
          <ControlButton
            icon={isScreenSharing ? StopCircle : ScreenShare}
            label={isScreenSharing ? 'Stop Share' : 'Share Screen'}
            active={isScreenSharing}
            onClick={onToggleScreenShare}
          />
          <ControlButton icon={Copy} label="Copy ID" onClick={copyRoomId} />
          <ControlButton icon={MoreVertical} label="More" />
        </div>

        <div>
          <ControlButton
            icon={PhoneOff}
            label="End"
            dangerous
            onClick={handleEndCall}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlBar;
