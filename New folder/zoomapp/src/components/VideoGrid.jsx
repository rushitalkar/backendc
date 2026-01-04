import { Mic, MicOff, Video, VideoOff, Monitor } from 'lucide-react';
import { useEffect, useRef } from 'react';

const VideoGrid = ({ participants, sharingUserId }) => {
  const sharingParticipant = participants.find((p) => p.id === sharingUserId);
  const otherParticipants = participants.filter((p) => p.id !== sharingUserId);

  const ParticipantTile = ({ participant, isLarge = false }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (participant.isScreenSharing && participant.screenStream && videoRef.current) {
        videoRef.current.srcObject = participant.screenStream;
      }
    }, [participant.isScreenSharing, participant.screenStream]);

    return (
      <div
        className={`relative bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center group ${
          isLarge ? 'aspect-video' : 'aspect-video'
        }`}
      >
        {participant.isScreenSharing && participant.screenStream ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            />
            <div className="absolute top-3 right-3 bg-blue-600 px-3 py-1 rounded-md flex items-center gap-2">
              <Monitor className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Screen Sharing</span>
            </div>
          </>
        ) : participant.isVideoOn ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
            <div className="text-6xl font-bold text-white opacity-50">
              {participant.name.charAt(0).toUpperCase()}
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-center">
            <VideoOff className="w-16 h-16 text-gray-500 mb-2" />
            <span className="text-gray-400 text-sm">Camera Off</span>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {participant.isMuted ? (
              <MicOff className="w-4 h-4 text-red-500" />
            ) : (
              <Mic className="w-4 h-4 text-white" />
            )}
            <span className="text-white text-sm font-medium">
              {participant.name} {participant.isCurrentUser ? '(You)' : ''}
            </span>
          </div>
        </div>
      </div>
    );
  };

  if (sharingParticipant) {
    // Screen sharing layout: large screen share + sidebar with other participants
    return (
      <div className="flex gap-4 p-4 h-full">
        {/* Main screen share area */}
        <div className="flex-1">
          <ParticipantTile participant={sharingParticipant} isLarge />
        </div>
        
        {/* Sidebar with other participants */}
        {otherParticipants.length > 0 && (
          <div className="w-64 space-y-3 overflow-y-auto">
            {otherParticipants.map((participant) => (
              <ParticipantTile key={participant.id} participant={participant} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Normal grid layout when no one is sharing
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-full">
      {participants.map((participant) => (
        <ParticipantTile key={participant.id} participant={participant} />
      ))}
    </div>
  );
};

export default VideoGrid;
