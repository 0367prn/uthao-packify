
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetQuoteSection from "@/components/GetQuoteSection";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import SloganSection from "@/components/SloganSection";
import StatsBoxes from "@/components/StatsBoxes";
import PartnersSection from "@/components/PartnersSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeedbackSection from "@/components/FeedbackSection";
import MobileQuoteButton from "@/components/MobileQuoteButton";
import { useState } from "react";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <HeroSection />

        <motion.section 
          className="py-20 relative z-10 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <StatsBoxes />
        </motion.section>

        <PartnersSection />

        <SloganSection />

        <ServicesSection />

        <section id="process" className="py-20 bg-background">
          <ProcessSection />
        </section>

        <FeedbackSection />

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 dark:text-white">About Us</h2>
            <p className="text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
              We are dedicated to providing exceptional moving and packing services with a focus on reliability, efficiency, and customer satisfaction.
            </p>
          </div>
        </section>

        <section id="quote">
          <GetQuoteSection />
        </section>
      </main>

      <Footer />

      <div className="md:hidden">
        <MobileQuoteButton />
      </div>

      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <ContactForm onClose={() => setShowContactForm(false)} />
        </div>
      )}
    </div>
  );
};

export default Index;
