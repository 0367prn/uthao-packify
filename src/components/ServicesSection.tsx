import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative h-[300px] overflow-hidden rounded-lg 
                border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-800 p-6
                md:border-b-0
                ${index !== services.length - 1 ? 'border-b-2 md:border-b-0 mb-8 md:mb-0' : ''}
              `}
              onHoverStart={() => !isMobile && handleServiceInteraction(service.title)}
              onHoverEnd={() => !isMobile && handleServiceInteraction("")}
              onClick={() => isMobile && handleServiceInteraction(service.title)}
            >
              <motion.div
                className="absolute inset-0 p-6 bg-white dark:bg-gray-800"
                initial={{ x: 0 }}
                animate={{ 
                  x: isServiceActive(service.title) ? '-100%' : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>

              <motion.div
                className="absolute inset-0 p-6 bg-white dark:bg-gray-800"
                initial={{ x: '100%' }}
                animate={{ 
                  x: isServiceActive(service.title) ? '0' : '100%',
                }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-3 text-primary">
                  {service.title} Services
                </h4>
                <ul className="text-sm space-y-2 text-left">
                  {serviceDetails[service.title as keyof typeof serviceDetails]?.map((detail, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;