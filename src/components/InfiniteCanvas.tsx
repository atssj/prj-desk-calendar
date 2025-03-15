import React, { useRef, useState, useEffect } from "react";

// interface InfiniteCanvasProps {
//   activeTool: "select" | "hand";
// }

const InfiniteCanvas: React.FC = () => {
  // Ref for the HTMLCanvasElement
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // State to store the current translation offset
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  // State to store the current scale (for zooming)
  const [scale, setScale] = useState(1);

  // Use refs to store panning info without triggering re-renders on mouse move
  const isPanning = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  // Begin panning on mouse down
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    // if (activeTool !== "hand") return;
    isPanning.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  // Update offset as the mouse moves while panning
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    if (!isPanning.current || !lastPos.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    // Update the offset state with the new delta
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };

  // End panning on mouse up or when the mouse leaves the canvas
  const handleMouseUp = (): void => {
    isPanning.current = false;
    lastPos.current = null;
  };

  // Handle the wheel event for zooming in and out
  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>): void => {
    e.preventDefault();
    // A simple zoom factor multiplier
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    setScale((prev) => prev * zoomFactor);
  };

  // Setup canvas and apply transformations when offset or scale changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Update canvas dimensions to match the rendered size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Apply panning and zooming transformations
    ctx.save();
    ctx.translate(offset.x, offset.y);
    ctx.scale(scale, scale);
    
    // No grid drawing - leaving a clean canvas with the bg-gray-50 color from Tailwind
    
    ctx.restore();
  }, [offset, scale]);

  const getCursorClass = (): string => {
    if (isPanning.current) return "cursor-grabbing";
    // if (activeTool === "hand") return "cursor-grab";
    return "cursor-default";
  };

  return (
    <div className="h-full">
      <canvas
        ref={canvasRef}
        className={`w-full h-full bg-gray-100 select-none ${getCursorClass()}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      />
    </div>
  );
};

export default InfiniteCanvas;
