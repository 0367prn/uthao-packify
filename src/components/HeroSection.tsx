import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MotionWrapper = ({ children, delay = 0 }) => {
    if (isMobile) {
      return <>{children}</>;
    }
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#E7EEFF] to-[#F9FAFF] dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Center Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <MotionWrapper delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Moving & Storage
              <br />
              <span className="text-primary">Made Simple</span>
            </h1>
          </MotionWrapper>
          
          <MotionWrapper delay={0.6}>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Moving Express is the quick, convenient option that makes long-distance moving easy.
            </p>
          </MotionWrapper>
          
          <MotionWrapper delay={0.8}>
            <Button 
              onClick={scrollToQuote}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white text-lg px-8 py-6 rounded-full"
            >
              Get Started Now
            </Button>
          </MotionWrapper>
        </div>

        {/* Image Section */}
        <MotionWrapper delay={1}>
          <div className="relative max-w-5xl mx-auto">
            <img 
              src="/lovable-uploads/204deac8-5ad8-4a7f-a014-f8d461ed1cb7.png" 
              alt="Moving Service Illustration" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </MotionWrapper>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50"></div>
    </section>
  );
};

export default HeroSection;