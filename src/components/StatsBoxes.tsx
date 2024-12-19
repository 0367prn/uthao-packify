import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Clock, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";

const StatsBoxes = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (inView) {
      const clientsAnimation = animate(0, 2500, {
        duration: 2,
        onUpdate: (latest) => setCount(Math.round(latest)),
      });

      const ratingAnimation = animate(0, 4.9, {
        duration: 1.5,
        onUpdate: (latest) => setRating(Number(latest.toFixed(1))),
      });

      return () => {
        clientsAnimation.stop();
        ratingAnimation.stop();
      };
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full max-w-5xl mx-auto px-4 absolute -bottom-20 left-1/2 -translate-x-1/2">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        {/* Happy Clients Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300 w-full md:w-[200px] h-[140px] flex flex-col items-center justify-center"
        >
          <div className="mb-2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary dark:text-white mb-1">{count}+</h3>
          <p className="text-sm text-foreground/70 dark:text-white/80">Happy Clients</p>
        </motion.div>

        {/* Rating Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300 w-full md:w-[200px] h-[140px] flex flex-col items-center justify-center"
        >
          <div className="mb-2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
            <Star className="h-5 w-5 text-secondary" />
          </div>
          <h3 className="text-2xl font-bold text-secondary dark:text-white mb-1">{rating}</h3>
          <div className="flex justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(rating)
                    ? "text-secondary fill-current"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-foreground/70 dark:text-white/80">Average Rating</p>
        </motion.div>

        {/* Service Hours Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300 w-full md:w-[200px] h-[140px] flex flex-col items-center justify-center"
        >
          <div className="mb-2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/20">
            <Clock className="h-5 w-5 text-accent-foreground dark:text-white" />
          </div>
          <h3 className="text-2xl font-bold text-accent-foreground dark:text-white mb-1">24/7</h3>
          <p className="text-sm text-foreground/70 dark:text-white/80">Support Available</p>
          <p className="text-xs text-foreground/60 dark:text-white/70">365 Days</p>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsBoxes;