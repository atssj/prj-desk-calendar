import { create } from 'zustand';

interface CanvasState {
  isPanning: boolean;
  startPan: () => void;
  endPan: () => void;
  pan: (e: React.MouseEvent) => void;
}

export const useCanvasStore = create<CanvasState>((set) => ({
  isPanning: false,
  startPan: (): void => {
    set({ isPanning: true });
  },
  endPan: (): void => {
    set({ isPanning: false });
  },
  pan: (e: React.MouseEvent): void => {
    if (!useCanvasStore.getState().isPanning) return;
    window.scrollBy(-e.movementX, -e.movementY);
  }
}));
