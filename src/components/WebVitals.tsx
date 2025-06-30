
import { useEffect } from 'react';

const WebVitals = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log);
        onFID(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
      }).catch(() => {
        // web-vitals not available, that's okay
      });
    }
  }, []);

  return null;
};

export default WebVitals;
