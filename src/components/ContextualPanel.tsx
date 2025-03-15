import React from 'react';

interface ContextualPanelProps {
  mode: string;
}

const ContextualPanel: React.FC<ContextualPanelProps> = ({ mode }) => {
  return (
    <div className="m-4 w-64 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-4">
      <h2 className="font-semibold mb-4 capitalize">{mode} Properties</h2>
      
      <div className="space-y-4">
        {/* Mode-specific controls */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold mb-2">Canvas Controls</h3>
          <div className="flex flex-col gap-2">
            <button className="btn flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
              Toggle Grid
            </button>
            <button className="btn flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
              Show Guides
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextualPanel;
