import React from "react";
import Button from "@/components/ui/Button";
import { Minus, Plus } from "lucide-react";

interface CanvasZoomControlsProps {
  scale: number;
  setScale: (value: number | ((prev: number) => number)) => void;
}

const CanvasZoomControls: React.FC<CanvasZoomControlsProps> = ({ scale, setScale }) => {
  const handleZoomIn = (): void => {
    setScale(prev => {
      const nextScale = Math.min(5, prev + 0.1);
      return Number(nextScale.toFixed(1));
    });
  };

  const handleZoomOut = (): void => {
    setScale(prev => {
      const nextScale = Math.max(0.1, prev - 0.1);
      return Number(nextScale.toFixed(1));
    });
  };

  const handleReset = (): void => {
    setScale(1);
  };

  return (
    <div className="absolute bottom-10 left-20 flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm">
      <Button
        size="sm"
        variant="default"
        onClick={handleZoomOut}
        className="h-8 w-8 p-0"
        title="Zoom out"
      >
        <Minus size={14} />
      </Button>
      <Button 
        size="sm" 
        variant="text" 
        onClick={handleReset}
        className="px-2 h-8 text-sm font-medium w-16 text-center"
        title="Reset zoom"
      >
        {Math.round(scale * 100)}%
      </Button>
      <Button
        size="sm"
        variant="default"
        onClick={handleZoomIn}
        className="h-8 w-8 p-0"
        title="Zoom in"
      >
        <Plus size={14} />
      </Button>
    </div>
  );
};

export default CanvasZoomControls;
