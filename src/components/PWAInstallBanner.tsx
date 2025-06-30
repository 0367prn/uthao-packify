
import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePWA } from '@/hooks/usePWA';

const PWAInstallBanner = () => {
  const { isInstallable, installPWA } = usePWA();
  const [dismissed, setDismissed] = useState(false);

  if (!isInstallable || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg z-50">
      <div className="flex items-start gap-3">
        <Download className="h-5 w-5 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Install Our App</h3>
          <p className="text-xs opacity-90 mt-1">
            Get quick access to our moving services with our mobile app!
          </p>
          <div className="flex gap-2 mt-3">
            <Button 
              size="sm" 
              variant="secondary" 
              onClick={installPWA}
              className="text-xs"
            >
              Install
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={() => setDismissed(true)}
              className="text-xs"
            >
              Later
            </Button>
          </div>
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setDismissed(true)}
          className="p-1 h-auto"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PWAInstallBanner;
