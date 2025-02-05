import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, MapPin, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Vehicle } from "@/types/fleet";

interface VehicleCardProps {
  vehicle: Vehicle;
  onCalculate: (vehicle: Vehicle) => void;
  onBook: (vehicle: Vehicle) => void;
}

const VehicleCard = ({ vehicle, onCalculate, onBook }: VehicleCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="group"
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative">
          <img
            src={vehicle.image}
            alt={vehicle.type}
            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-0.5 rounded-full text-xs">
            {vehicle.availability}
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-semibold">{vehicle.type}</h3>
            <div className="flex items-center">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="ml-1 text-xs">{vehicle.rating}</span>
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="specifications" className="border-none">
              <AccordionTrigger className="text-xs py-1 hover:no-underline">
                Specifications
              </AccordionTrigger>
              <AccordionContent className="pt-0">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>Length: {vehicle.specifications.length}</div>
                  <div>Width: {vehicle.specifications.width}</div>
                  <div>Height: {vehicle.specifications.height}</div>
                  <div>Max Load: {vehicle.specifications.maxLoad}</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="features" className="border-none">
              <AccordionTrigger className="text-xs py-1 hover:no-underline">
                Features
              </AccordionTrigger>
              <AccordionContent className="pt-0">
                <ul className="space-y-1">
                  {vehicle.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs">
                      <ShieldCheck className="w-3 h-3 mr-1 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="service-areas" className="border-none">
              <AccordionTrigger className="text-xs py-1 hover:no-underline">
                Service Areas
              </AccordionTrigger>
              <AccordionContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {vehicle.serviceAreas.map((area, i) => (
                    <span
                      key={i}
                      className="bg-accent px-1.5 py-0.5 rounded-full text-xs flex items-center"
                    >
                      <MapPin className="w-2 h-2 mr-0.5" />
                      {area}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span>Base Rate:</span>
              <span className="font-semibold">{vehicle.pricing.baseRate}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span>Per KM:</span>
              <span className="font-semibold">{vehicle.pricing.perKm}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                size="sm"
                className="text-xs"
                onClick={() => onCalculate(vehicle)}
              >
                Calculate
              </Button>
              <Button 
                variant="secondary"
                size="sm"
                className="text-xs"
                onClick={() => onBook(vehicle)}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default VehicleCard;