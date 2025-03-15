import React from 'react';

const CenterContent: React.FC = () => {
  return (
    <div className="absolute left-[2500px] top-[2500px] bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Center of Canvas</h2>
      <p>Drag to explore the infinite canvas</p>
    </div>
  );
};

export default CenterContent;
