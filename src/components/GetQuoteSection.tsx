import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Calendar, Home, MapPin, Package, Phone, User } from "lucide-react";
import { useState } from "react";

const GetQuoteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    size: "Studio"
  });

  const handleWhatsApp = () => {
    const message = `Hi, I'm ${formData.name}. I need moving services from ${formData.from} to ${formData.to} on ${formData.date}. Home size: ${formData.size}`;
    const whatsappUrl = `https://wa.me/+1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
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
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a detailed quote for your move.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-background rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block text-foreground">
                <span className="flex items-center gap-2 mb-2">
                  <User className="h-5 w-5" />
                  Your Name
                </span>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </label>
              <label className="block text-foreground">
                <span className="flex items-center gap-2 mb-2">
                  <Phone className="h-5 w-5" />
                  Phone Number
                </span>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full"
                />
              </label>
              <label className="block text-foreground">
                <span className="flex items-center gap-2 mb-2">
                  <Home className="h-5 w-5" />
                  Moving From
                </span>
                <Input
                  type="text"
                  placeholder="Enter origin address"
                  value={formData.from}
                  onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                  className="w-full"
                />
              </label>
            </div>
            <div className="space-y-4">
              <label className="block text-foreground">
                <span className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  Moving To
                </span>
                <Input
                  type="text"
                  placeholder="Enter destination address"
                  value={formData.to}
                  onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                  className="w-full"
                />
              </label>
              <label className="block text-foreground">
                <span className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5" />
                  Moving Date
                </span>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full"
                />
              </label>
              <label className="block text-foreground">
                <span className="flex items-center gap-2 mb-2">
                  <Package className="h-5 w-5" />
                  Home Size
                </span>
                <select 
                  className="w-full h-10 px-3 border rounded-md bg-background text-foreground"
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                >
                  <option>Studio</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3+ Bedrooms</option>
                </select>
              </label>
            </div>
          </div>
          <Button 
            className="w-full mt-6 bg-primary hover:bg-primary-hover text-primary-foreground"
            onClick={handleWhatsApp}
          >
            Get Free Quote via WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetQuoteSection;
