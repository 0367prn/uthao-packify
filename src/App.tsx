
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Certifications from "./pages/Certifications";
import ErrorBoundary from "@/components/ErrorBoundary";
import WebVitals from "@/components/WebVitals";
import PWAInstallBanner from "@/components/PWAInstallBanner";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { preloadCriticalImages } from "@/utils/preload";
import { analytics } from "@/utils/analytics";
import { useMemoryOptimization } from "@/hooks/useMemoryOptimization";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const AppContent = () => {
  useMemoryOptimization();

  useEffect(() => {
    // Preload critical resources
    preloadCriticalImages();
    
    // Track initial page load
    analytics.trackPageView(window.location.pathname);
  }, []);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Professional moving and packing services" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/lovable-uploads/58dfb9a3-a70c-410d-a1d7-afec9a3b1adb.png" as="image" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
      <Sonner />
      <PWAInstallBanner />
      <WebVitals />
      <PerformanceMonitor />
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
