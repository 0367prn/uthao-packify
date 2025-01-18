import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onInteraction: (title: string) => void;
  isMobile: boolean;
  serviceDetails: Record<string, string[]>;
}

const ServiceCard = ({ service, isActive, onInteraction, isMobile, serviceDetails }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`
        relative h-[300px] overflow-hidden rounded-lg 
        border border-gray-200 dark:border-gray-700 
        bg-white dark:bg-gray-800 p-6
        md:border-b-0
      `}
      onHoverStart={() => !isMobile && onInteraction(service.title)}
      onHoverEnd={() => !isMobile && onInteraction("")}
    >
      <FrontCard 
        service={service} 
        isActive={isActive} 
        isMobile={isMobile} 
        onInteraction={onInteraction} 
      />
      <BackCard 
        service={service} 
        isActive={isActive} 
        isMobile={isMobile} 
        onInteraction={onInteraction}
        serviceDetails={serviceDetails} 
      />
    </motion.div>
  );
};

const FrontCard = ({ service, isActive, isMobile, onInteraction }: Omit<ServiceCardProps, 'serviceDetails'>) => (
  <motion.div
    className="absolute inset-0 p-6 bg-white dark:bg-gray-800"
    initial={{ x: 0 }}
    animate={{ x: isActive ? '-100%' : 0 }}
    transition={{ duration: 0.3 }}
  >
    <service.icon className="h-12 w-12 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
      {service.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      {service.description}
    </p>
    {isMobile && <DetailButton onClick={() => onInteraction(service.title)} />}
  </motion.div>
);

const BackCard = ({ service, isActive, isMobile, onInteraction, serviceDetails }: ServiceCardProps) => (
  <motion.div
    className="absolute inset-0 p-6 bg-white dark:bg-gray-800"
    initial={{ x: '100%' }}
    animate={{ x: isActive ? '0' : '100%' }}
    transition={{ duration: 0.3 }}
  >
    <h4 className="text-lg font-semibold mb-3 text-primary">
      {service.title} Services
    </h4>
    <ul className="text-sm space-y-2 text-left">
      {serviceDetails[service.title]?.map((detail, i) => (
        <li key={i} className="text-gray-600 dark:text-gray-300">
          • {detail}
        </li>
      ))}
    </ul>
    {isMobile && <BackButton onClick={() => onInteraction(service.title)} />}
  </motion.div>
);

const DetailButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className="mt-4 flex items-center gap-2 text-primary text-sm font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span>Tap for details</span>
    <motion.div
      animate={{ x: [0, 5, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronRight className="h-4 w-4" />
    </motion.div>
  </motion.button>
);

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className="mt-4 flex items-center gap-2 text-primary text-sm font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span>Back to service</span>
    <motion.div
      animate={{ x: [0, -5, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronRight className="h-4 w-4 rotate-180" />
    </motion.div>
  </motion.button>
);

export default ServiceCard;