import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Truck, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileQuoteButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Truck / Mini Truck",
      description: "For moving goods and cargo"
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Packers & Movers",
      description: "Professional packing and moving services"
    }
  ];

  const handleServiceSelect = (serviceTitle: string) => {
    setIsOpen(false);
    // Using window.location to ensure proper scroll and state handling
    window.location.href = '/#quote';
    // Set the selected service in localStorage to persist through navigation
    localStorage.setItem('selectedService', serviceTitle);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="fixed bottom-4 left-4 right-4 z-50 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-[bounce_2s_ease-in-out_infinite]"
            size="lg"
          >
            Get Quote in Minutes
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="bottom" 
          className="h-[300px] rounded-t-3xl bg-white dark:bg-gray-900"
        >
          <div className="space-y-6 pt-6">
            <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200">
              How can we assist you?
            </h3>
            {services.map((service, index) => (
              <motion.button
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-accent hover:bg-accent/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                onClick={() => handleServiceSelect(service.title)}
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileQuoteButton;