import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;