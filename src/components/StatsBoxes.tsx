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
    <div ref={ref} className="max-w-5xl mx-auto -mt-16 mb-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Happy Clients Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 min-w-[280px] min-h-[200px] flex flex-col items-center justify-center"
        >
          <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-5xl font-bold text-primary mb-3">{count}+</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Happy Clients</p>
        </motion.div>

        {/* Rating Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 min-w-[280px] min-h-[200px] flex flex-col items-center justify-center"
        >
          <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
            <Star className="h-8 w-8 text-secondary" />
          </div>
          <h3 className="text-5xl font-bold text-secondary mb-3">{rating}</h3>
          <div className="flex justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(rating)
                    ? "text-secondary fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">Average Rating</p>
        </motion.div>

        {/* Service Hours Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 min-w-[280px] min-h-[200px] flex flex-col items-center justify-center"
        >
          <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20">
            <Clock className="h-8 w-8 text-accent-foreground" />
          </div>
          <h3 className="text-5xl font-bold text-accent-foreground mb-3">24/7</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Support Available</p>
          <p className="text-base text-gray-500 dark:text-gray-400">365 Days</p>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsBoxes;