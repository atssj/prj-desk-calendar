import React from 'react';
import { Minus, Plus, ChevronDown } from 'lucide-react';
import { create } from 'zustand';

type ZoomLevel = 50 | 75 | 100 | 150 | 200;

interface ZoomStore {
  zoom: ZoomLevel;
  setZoom: (zoom: ZoomLevel) => void;
}

const useZoomStore = create<ZoomStore>((set) => ({
  zoom: 100,
  setZoom: (zoom): void => set({ zoom }),
}));

const ZoomButton: React.FC<{
  onClick: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
  label: string;
}> = ({ onClick, disabled, icon, label }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    className="p-1.5 flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-all 
      disabled:opacity-50 disabled:cursor-not-allowed rounded-md hover:bg-gray-100"
  >
    {icon}
    <span className="text-sm hidden sm:inline">{label}</span>
  </button>
);

const ZoomSelect: React.FC = () => {
  const { zoom, setZoom } = useZoomStore();
  const zoomLevels: ZoomLevel[] = [50, 75, 100, 150, 200];

  return (
    <div className="relative">
      <select
        value={zoom}
        onChange={(e) => setZoom(Number(e.target.value) as ZoomLevel)}
        className="appearance-none bg-transparent w-20 px-2 py-1.5 pr-7 text-sm text-center
          rounded-md hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Zoom level"
      >
        {zoomLevels.map((level) => (
          <option key={level} value={level}>{level}%</option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 pointer-events-none text-gray-500" />
    </div>
  );
};

export const RightCornerControls: React.FC = () => {
  const { zoom, setZoom } = useZoomStore();
  
  const handleZoomIn = (): void => {
    const levels: ZoomLevel[] = [50, 75, 100, 150, 200];
    const currentIndex = levels.indexOf(zoom);
    if (currentIndex < levels.length - 1) {
      setZoom(levels[currentIndex + 1]);
    }
  };

  const handleZoomOut = (): void => {
    const levels: ZoomLevel[] = [50, 75, 100, 150, 200];
    const currentIndex = levels.indexOf(zoom);
    if (currentIndex > 0) {
      setZoom(levels[currentIndex - 1]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-10 flex items-center gap-1.5 rounded-lg 
      bg-white/90 backdrop-blur-sm px-2 py-1.5 shadow-lg border border-gray-200">
      <ZoomButton
        onClick={handleZoomOut}
        disabled={zoom === 50}
        icon={<Minus className="h-4 w-4" />}
        label="Zoom out"
      />
      <ZoomSelect />
      <ZoomButton
        onClick={handleZoomIn}
        disabled={zoom === 200}
        icon={<Plus className="h-4 w-4" />}
        label="Zoom in"
      />
    </div>
  );
};

export default RightCornerControls;
