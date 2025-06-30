
import { useEffect } from 'react';
import { analytics } from '@/utils/analytics';

const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals thresholds
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          
          // Track loading performance
          const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
          
          if (loadTime > 3000) {
            analytics.track({
              event: 'performance_issue',
              category: 'performance',
              action: 'slow_load',
              label: `${loadTime}ms`
            });
          }

          console.log('Performance metrics:', {
            loadTime,
            domContentLoaded,
            firstContentfulPaint: navEntry.responseEnd - navEntry.requestStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          analytics.track({
            event: 'performance_issue',
            category: 'performance',
            action: 'long_task',
            label: `${entry.duration}ms`
          });
        }
      }
    });

    try {
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // longtask observer not supported in all browsers
      console.log('Long task observer not supported');
    }

    return () => {
      observer.disconnect();
      longTaskObserver.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
