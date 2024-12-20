import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#E7EEFF] to-[#F9FAFF] dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-left max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            CASH ON
            <br />
            <span className="text-primary">DELIVERY</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Experience hassle-free moving with our professional packing and delivery services. Pay only when your items are safely delivered.
          </p>
          <Button 
            onClick={scrollToQuote}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-white text-lg px-8 py-6 rounded-full"
          >
            Get Started
          </Button>
        </motion.div>

        {/* Right Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative"
        >
          <img 
            src="/lovable-uploads/28d6b83b-ca33-489a-bfaf-b1df54e75324.png" 
            alt="Delivery Illustration" 
            className="w-full h-auto max-w-lg mx-auto"
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50"></div>
    </section>
  );
};

export default HeroSection;