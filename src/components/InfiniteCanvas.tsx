import React, { useRef, useState, useEffect } from "react";
import CanvasZoomControls from "@/components/CanvasZoomControls";

const InfiniteCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const isPanning = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    isPanning.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    if (!isPanning.current || !lastPos.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };

  const handleMouseUp = (): void => {
    isPanning.current = false;
    lastPos.current = null;
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>): void => {
    e.preventDefault();
    setScale(prev => {
      const nextScale = e.deltaY < 0
        ? Math.min(5, prev + 0.1)
        : Math.max(0.1, prev - 0.1);
      return Number(nextScale.toFixed(1));
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.save();
    ctx.translate(offset.x, offset.y);
    ctx.scale(scale, scale);
    
    ctx.restore();
  }, [offset, scale]);

  const getCursorClass = (): string => {
    if (isPanning.current) return "cursor-grabbing";
    return "cursor-grab";
  };

  return (
    <div className="absolute inset-0 overflow-hidden touch-none">
      <canvas
        ref={canvasRef}
        className={`w-full h-full bg-white select-none ${getCursorClass()}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      />
      <CanvasZoomControls scale={scale} setScale={setScale} />
    </div>
  );
};

export default InfiniteCanvas;
