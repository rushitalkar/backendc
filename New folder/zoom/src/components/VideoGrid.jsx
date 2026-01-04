import { Mic, MicOff, Video, VideoOff } from 'lucide-react';

const VideoGrid = () => {
  const participants = [
    { id: 1, name: 'John Doe', isMuted: false, isVideoOn: true },
    { id: 2, name: 'Jane Smith', isMuted: true, isVideoOn: true },
    { id: 3, name: 'Mike Johnson', isMuted: false, isVideoOn: false },
    { id: 4, name: 'Sarah Williams', isMuted: true, isVideoOn: true },
    { id: 5, name: 'Tom Brown', isMuted: false, isVideoOn: true },
    { id: 6, name: 'Emily Davis', isMuted: true, isVideoOn: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-full">
      {participants.map((participant) => (
        <div
          key={participant.id}
          className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video flex items-center justify-center group"
        >
          {participant.isVideoOn ? (
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-6xl font-bold text-white opacity-50">
                {participant.name.charAt(0)}
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
                {participant.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
