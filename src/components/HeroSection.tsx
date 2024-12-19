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
    <section id="home" className="relative min-h-screen pt-24 pb-32 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-white">
            Moving & Storage
            <br />
            <span className="text-primary">Made Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground dark:text-gray-300 mb-12">
            Moving Express is the quick, convenient option that makes long-distance moving easy.
          </p>
          <Button 
            size="lg"
            onClick={scrollToQuote}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
          >
            Get Started Now
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          <img 
            src="/lovable-uploads/204deac8-5ad8-4a7f-a014-f8d461ed1cb7.png" 
            alt="Moving Service" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;