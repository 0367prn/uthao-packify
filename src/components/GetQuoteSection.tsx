import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Calendar, Home, MapPin, Package } from "lucide-react";

const GetQuoteSection = () => {
  const handleGetQuote = () => {
    // Dispatch an event that Index.tsx will listen to
    window.dispatchEvent(new CustomEvent('openContactForm'));
  };

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Bubble Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            initial={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get Your Free Quote Today</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a detailed quote for your move.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block text-gray-700">
                <span className="flex items-center gap-2 mb-2">
                  <Home className="h-5 w-5" />
                  Moving From
                </span>
                <Input type="text" placeholder="Enter origin address" className="w-full" />
              </label>
              <label className="block text-gray-700">
                <span className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  Moving To
                </span>
                <Input type="text" placeholder="Enter destination address" className="w-full" />
              </label>
            </div>
            <div className="space-y-4">
              <label className="block text-gray-700">
                <span className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5" />
                  Moving Date
                </span>
                <Input type="date" className="w-full" />
              </label>
              <label className="block text-gray-700">
                <span className="flex items-center gap-2 mb-2">
                  <Package className="h-5 w-5" />
                  Home Size
                </span>
                <select className="w-full h-10 px-3 border rounded-md">
                  <option>Studio</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3+ Bedrooms</option>
                </select>
              </label>
            </div>
          </div>
          <Button 
            className="w-full mt-6 bg-primary hover:bg-primary-hover"
            onClick={handleGetQuote}
          >
            Get Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetQuoteSection;