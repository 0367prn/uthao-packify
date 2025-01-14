import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleMapClick = () => {
    // Convert DMS coordinates to decimal degrees
    const latitude = 26.927944;  // 26°55'40.6"N
    const longitude = 80.969944; // 80°58'11.8"E
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        <img 
          src="/lovable-uploads/268e1309-dfdd-42bd-a330-c757a6dc1009.png"
          alt="Background Illustration"
          className="absolute right-0 bottom-0 w-1/3 opacity-20 transform translate-x-1/6 translate-y-1/6"
        />
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50/20 dark:bg-blue-900/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gray-100/20 dark:bg-purple-900/10 rounded-full translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Moving & Packing
            <br />
            <motion.span 
              className="text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Made Simple
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Moving Express is the quick, convenient option that makes long-distance moving easy.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full flex justify-center"
          >
            <Button 
              onClick={scrollToQuote}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white text-sm md:text-lg px-4 md:px-8 py-2 md:py-6 rounded-full w-[200px] md:w-auto cursor-pointer"
            >
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-12 md:px-16"
        >
          <img 
            src="/lovable-uploads/58dfb9a3-a70c-410d-a1d7-afec9a3b1adb.png" 
            alt="Professional Movers with Couch" 
            className="w-full h-auto object-contain rounded-lg shadow-xl"
          />
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center items-center z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="cursor-pointer"
          onClick={handleMapClick}
        >
          <div className="glass p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <MapPin size={20} className="text-red-500 md:w-6 md:h-6" />
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/30 to-transparent dark:from-gray-900/50"></div>
    </section>
  );
};

export default HeroSection;