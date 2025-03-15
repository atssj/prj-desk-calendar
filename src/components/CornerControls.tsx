import React from 'react';

type ViewMode = 'cover' | 'month';

interface CornerControlsProps {
  activeView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const CornerControls: React.FC<CornerControlsProps> = ({ activeView, onViewChange }) => {
  return (
    <div className="fixed top-20 left-6 z-10 flex flex-row gap-2 rounded-lg bg-white p-2 shadow-lg">
      <button
        onClick={() => onViewChange('cover')}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
          ${activeView === 'cover' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-700 hover:bg-gray-100'
          }`}
      >
        Cover
      </button>
      <button
        onClick={() => onViewChange('month')}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
          ${activeView === 'month' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-700 hover:bg-gray-100'
          }`}
      >
        Month
      </button>
    </div>
  );
};

export default CornerControls;
