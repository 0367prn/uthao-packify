import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [tappedService, setTappedService] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const serviceDetails = {
    "Local Moving": [
      "Residential Moving",
      "Apartment Moving",
      "Office Relocation",
      "Same-Day Moving",
      "Loading & Unloading"
    ],
    "Long Distance": [
      "Interstate Moving",
      "Cross-Country Moving",
      "State-to-State Moving",
      "Long Haul Transport",
      "Nationwide Coverage"
    ],
    "Packing Services": [
      "Full Packing Service",
      "Partial Packing",
      "Unpacking Service",
      "Specialty Item Packing",
      "Packing Supplies"
    ],
    "Storage": [
      "Short-Term Storage",
      "Long-Term Storage",
      "Climate Controlled",
      "Secure Facilities",
      "24/7 Monitoring"
    ]
  };

  const handleServiceInteraction = (title: string) => {
    if (isMobile) {
      setTappedService(tappedService === title ? null : title);
    } else {
      setHoveredService(title);
    }
  };

  const isServiceActive = (title: string) => {
    if (isMobile) {
      return tappedService === title;
    }
    return hoveredService === title;
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive moving solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              isActive={isServiceActive(service.title)}
              onInteraction={handleServiceInteraction}
              isMobile={isMobile}
              serviceDetails={serviceDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;