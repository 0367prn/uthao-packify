import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackSection from "@/components/FeedbackSection";
import GetQuoteSection from "@/components/GetQuoteSection";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import SloganSection from "@/components/SloganSection";
import StatsBoxes from "@/components/StatsBoxes";
import PartnersSection from "@/components/PartnersSection";
import HeroSection from "@/components/HeroSection";
import { services } from "@/lib/data";
import { useState } from "react";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <HeroSection />

      <section className="py-20 relative z-10 bg-background">
        <StatsBoxes />
      </section>

      <PartnersSection />

      <SloganSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-background">
        <ProcessSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 dark:text-white">About Us</h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            We are dedicated to providing exceptional moving and packing services with a focus on reliability, efficiency, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection />

      {/* Quote Section */}
      <section id="quote">
        <GetQuoteSection />
      </section>

      {/* Contact Section */}
      <Footer />

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
