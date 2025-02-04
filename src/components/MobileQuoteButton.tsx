import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Truck, Package } from "lucide-react";

const MobileQuoteButton = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="fixed bottom-4 left-4 right-4 z-50 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg animate-bounce"
            size="lg"
          >
            Get Quote in Minutes
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="bottom" 
          className="h-[300px] rounded-t-3xl"
        >
          <div className="space-y-6 pt-6">
            {services.map((service, index) => (
              <motion.button
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-accent hover:bg-accent/80 transition-colors"
                onClick={() => {
                  // Handle service selection
                  setIsOpen(false);
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">{service.title}</h3>
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