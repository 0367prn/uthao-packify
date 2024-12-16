import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackSection from "@/components/FeedbackSection";
import GetQuoteSection from "@/components/GetQuoteSection";
import { services, steps } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-32 bg-gradient-to-b from-white to-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Moving & Storage
              <br />
              <span className="text-primary">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
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
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Moving From"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Moving To"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <Button 
                  variant="secondary"
                  className="w-full py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Get A Quote
                </Button>
              </div>
            </div>

            {/* Floating Bubbles Animation */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-primary/10"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process makes moving easy
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="process-step"
              >
                <div className="flex-shrink-0">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeedbackSection />
      <GetQuoteSection />
      <Footer />
    </div>
  );
};

export default Index;