import React from 'react';
import { FileDown } from 'lucide-react'; 

const TopToolbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => {/* TODO: Implement PDF export */}}
          className="btn flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <FileDown className="w-4 h-4" />
          Export PDF
        </button>
        <button className="btn flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Print Settings
        </button>
      </div>
    </div>
  );
};

export default TopToolbar;