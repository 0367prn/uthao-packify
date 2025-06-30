
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = async () => {
  const criticalImages = [
    '/lovable-uploads/58dfb9a3-a70c-410d-a1d7-afec9a3b1adb.png',
    '/lovable-uploads/268e1309-dfdd-42bd-a330-c757a6dc1009.png'
  ];

  try {
    await Promise.all(criticalImages.map(preloadImage));
    console.log('Critical images preloaded successfully');
  } catch (error) {
    console.warn('Some critical images failed to preload:', error);
  }
};

export const preloadRoute = (path: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  document.head.appendChild(link);
};
