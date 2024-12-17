import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackSection from "@/components/FeedbackSection";
import GetQuoteSection from "@/components/GetQuoteSection";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import SloganSection from "@/components/SloganSection";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Calendar, Home, MapPin, Package, Phone, User } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-24 pb-32 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Moving & Storage
              <br />
              <span className="text-primary">Made Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Moving Express is the quick, convenient option that makes long-distance moving easy.
            </p>
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
              className="w-full h-auto rounded-lg shadow-xl mb-12"
            />

            {/* Quote Form */}
            <div className="glass p-6 rounded-xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative">
                  <label className="flex items-center gap-2 mb-2 text-foreground">
                    <User className="h-5 w-5" />
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div className="relative">
                  <label className="flex items-center gap-2 mb-2 text-foreground">
                    <Phone className="h-5 w-5" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div className="relative">
                  <label className="flex items-center gap-2 mb-2 text-foreground">
                    <Home className="h-5 w-5" />
                    Moving From
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter origin address"
                    value={formData.from}
                    onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div className="relative">
                  <label className="flex items-center gap-2 mb-2 text-foreground">
                    <MapPin className="h-5 w-5" />
                    Moving To
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter destination address"
                    value={formData.to}
                    onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div className="relative">
                  <label className="flex items-center gap-2 mb-2 text-foreground">
                    <Calendar className="h-5 w-5" />
                    Moving Date
                  </label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div className="relative">
                  <label className="flex items-center gap-2 mb-2 text-foreground">
                    <Package className="h-5 w-5" />
                    Home Size
                  </label>
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
                </div>
              </div>
              <Button 
                className="w-full mt-6 bg-primary hover:bg-primary-hover"
                onClick={handleWhatsApp}
              >
                Get Free Quote via WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slogan Section */}
      <SloganSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive moving solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="service-card"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process">
        <ProcessSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">About Us</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are dedicated to providing exceptional moving and packing services with a focus on reliability, efficiency, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback">
        <FeedbackSection />
      </section>

      {/* Quote Section */}
      <section id="quote">
        <GetQuoteSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Footer />
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <ContactForm onClose={() => setShowContactForm(false)} />
        </div>
      )}
    </div>
  );
};

export default Index;
