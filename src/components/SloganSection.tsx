import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slogans = [
  "Packing mein hai naye zamane ka dum,\nEk baar try karo, Phir har jagah hum",
  "Smart Packing, Fast Moving",
  "Uthao Pack Karo Always Proving"
];

const SloganSection = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 bg-gradient-to-b from-accent/20 to-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-br-full" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-tr-full" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-tl-full" />
      
      <div className="container mx-auto px-4">
        <div className="min-h-[200px] flex items-center justify-center">
          <motion.div
            key={currentSlogan}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground whitespace-pre-line leading-relaxed">
              {slogans[currentSlogan]}
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;