
import { useEffect, useCallback } from 'react';

export const useMemoryOptimization = () => {
  const cleanupMemory = useCallback(() => {
    // Clean up any lingering timeouts or intervals
    if (typeof window !== 'undefined' && window.gc) {
      window.gc();
    }
  }, []);

  const observeMemoryPressure = useCallback(() => {
    if ('memory' in performance && (performance as any).memory) {
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo.usedJSHeapSize / memoryInfo.totalJSHeapSize;
      
      if (memoryUsage > 0.8) {
        console.warn('High memory usage detected:', memoryUsage);
        cleanupMemory();
      }
    }
  }, [cleanupMemory]);

  useEffect(() => {
    const interval = setInterval(observeMemoryPressure, 30000); // Check every 30 seconds
    
    return () => {
      clearInterval(interval);
      cleanupMemory();
    };
  }, [observeMemoryPressure, cleanupMemory]);

  return { cleanupMemory };
};
