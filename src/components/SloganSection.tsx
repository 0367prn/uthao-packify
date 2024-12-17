import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

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

  const decorativeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const rotatingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <InView threshold={0.2} triggerOnce={false}>
      {({ inView, ref }) => (
        <section ref={ref} className="relative py-16 bg-gradient-to-b from-accent/20 to-background overflow-hidden">
          {/* Top Left Decorative Element */}
          <motion.div
            variants={decorativeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute top-0 left-0 w-24 h-24"
          >
            <motion.div
              variants={rotatingVariants}
              animate="animate"
              className="w-full h-full bg-primary/10 rounded-br-full"
            />
          </motion.div>

          {/* Top Right Decorative Element */}
          <motion.div
            variants={decorativeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute top-0 right-0 w-24 h-24"
          >
            <motion.div
              variants={rotatingVariants}
              animate="animate"
              className="w-full h-full bg-primary/10 rounded-bl-full"
            />
          </motion.div>

          {/* Bottom Left Decorative Element */}
          <motion.div
            variants={decorativeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute bottom-0 left-0 w-24 h-24"
          >
            <motion.div
              variants={rotatingVariants}
              animate="animate"
              className="w-full h-full bg-primary/10 rounded-tr-full"
            />
          </motion.div>

          {/* Bottom Right Decorative Element */}
          <motion.div
            variants={decorativeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute bottom-0 right-0 w-24 h-24"
          >
            <motion.div
              variants={rotatingVariants}
              animate="animate"
              className="w-full h-full bg-primary/10 rounded-tl-full"
            />
          </motion.div>
          
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
      )}
    </InView>
  );
};

export default SloganSection;