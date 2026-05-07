import { useEffect } from 'react';

export function useCanvas(canvasRef, startFn) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !startFn) return;
    const stop = startFn(canvas);
    return stop;
  }, [canvasRef, startFn]);
}
