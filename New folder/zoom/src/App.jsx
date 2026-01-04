import Header from './components/Header';
import VideoGrid from './components/VideoGrid';
import ControlBar from './components/ControlBar';

function App() {
  return (
    <div className="h-screen bg-gray-950 flex flex-col">
      <Header />
      <div className="flex-1 pt-16 pb-24 overflow-auto">
        <VideoGrid />
      </div>
      <ControlBar />
    </div>
  );
}

export default App;
