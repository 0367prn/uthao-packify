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
    <section className="w-full py-16 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          {/* Happy Clients Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass w-full md:w-[280px] p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 dark:bg-black dark:border-gray-800"
          >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{count}+</h3>
            <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
          </motion.div>

          {/* Rating Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass w-full md:w-[280px] p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 dark:bg-black dark:border-gray-800"
          >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
              <Star className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{rating}</h3>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "text-secondary fill-current"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300">Average Rating</p>
          </motion.div>

          {/* Service Hours Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass w-full md:w-[280px] p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 dark:bg-black dark:border-gray-800"
          >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
              <Clock className="h-6 w-6 text-accent-foreground dark:text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">24/7</h3>
            <p className="text-gray-600 dark:text-gray-300">Support Available</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">365 Days</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsBoxes;