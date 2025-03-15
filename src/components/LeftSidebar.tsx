import React from 'react';
import { Clover, CalendarDays, Settings } from 'lucide-react';

interface LeftSidebarProps {
  activeMode: 'cover' | 'month';
  onModeChange: (mode: 'cover' | 'month') => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ activeMode, onModeChange }) => {
  return (
    <div className="m-4 w-64 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-4">
      <div className="flex flex-col gap-4">
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Calendar Views
          </h3>
            <nav className="flex flex-col gap-1.5">
            <button 
              className={`flex items-center gap-1.5 w-full px-3 py-1.5 rounded-md text-sm transition-colors
              ${activeMode === 'cover' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
              onClick={() => onModeChange('cover')}
            >
              <Clover className="h-4 w-4" />
              <span>Cover</span>
            </button>
            <button 
              className={`flex items-center gap-1.5 w-full px-3 py-1.5 rounded-md text-sm transition-colors
              ${activeMode === 'month' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
              onClick={() => onModeChange('month')}
            >
              <CalendarDays className="h-4 w-4" />
              <span>Month</span>
            </button>
            </nav>
        </div>

        <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <span className="w-5 h-5"><Settings className="h-5 w-5" /></span>
            Tools
            </h3>
          {/* Add tool buttons here */}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
