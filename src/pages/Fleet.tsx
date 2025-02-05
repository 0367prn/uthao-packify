import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Package, ShieldCheck, Calendar, MapPin, Calculator, RotateCw, Star } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const vehicles = [
    {
      type: "Container Trucks",
      capacity: "20ft & 40ft",
      features: ["GPS Tracking", "Temperature Control", "24/7 Support"],
      specifications: {
        length: "40 feet",
        width: "8 feet",
        height: "8.5 feet",
        maxLoad: "26,000 kg"
      },
      pricing: {
        baseRate: "₹5000",
        perKm: "₹50"
      },
      availability: "Available Now",
      serviceAreas: ["Mumbai", "Pune", "Nashik"],
      rating: 4.8,
      reviews: 156,
      image: "/lovable-uploads/58dfb9a3-a70c-410d-a1d7-afec9a3b1adb.png"
    },
    {
      type: "Closed Body Trucks",
      capacity: "14ft - 19ft",
      features: ["Waterproof", "Security Locks", "Loading Ramp"],
      specifications: {
        length: "19 feet",
        width: "7.5 feet",
        height: "7 feet",
        maxLoad: "15,000 kg"
      },
      pricing: {
        baseRate: "₹3500",
        perKm: "₹40"
      },
      availability: "2 Units Available",
      serviceAreas: ["Mumbai", "Thane", "Navi Mumbai"],
      rating: 4.9,
      reviews: 203,
      image: "/lovable-uploads/204deac8-5ad8-4a7f-a014-f8d461ed1cb7.png"
    },
    {
      type: "Mini Trucks",
      capacity: "8ft - 12ft",
      features: ["City Friendly", "Quick Service", "Cost Effective"],
      specifications: {
        length: "12 feet",
        width: "6.5 feet",
        height: "6 feet",
        maxLoad: "8,000 kg"
      },
      pricing: {
        baseRate: "₹2000",
        perKm: "₹30"
      },
      availability: "5 Units Available",
      serviceAreas: ["Mumbai Local", "Thane Local"],
      rating: 4.7,
      reviews: 312,
      image: "/lovable-uploads/28d6b83b-ca33-489a-bfaf-b1df54e75324.png"
    }
  ];

  const calculateEstimate = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsCalculatorOpen(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <Navbar />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Our Premium Fleet</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern and well-maintained vehicles equipped with advanced features for all your transportation needs
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.type}
                variants={item}
                className="group"
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={vehicle.image}
                      alt={vehicle.type}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {vehicle.availability}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">{vehicle.type}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">{vehicle.rating}</span>
                      </div>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="specifications">
                        <AccordionTrigger>Specifications</AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>Length: {vehicle.specifications.length}</div>
                            <div>Width: {vehicle.specifications.width}</div>
                            <div>Height: {vehicle.specifications.height}</div>
                            <div>Max Load: {vehicle.specifications.maxLoad}</div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="features">
                        <AccordionTrigger>Features</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {vehicle.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-sm">
                                <ShieldCheck className="w-4 h-4 mr-2 text-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="service-areas">
                        <AccordionTrigger>Service Areas</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-wrap gap-2">
                            {vehicle.serviceAreas.map((area, i) => (
                              <span
                                key={i}
                                className="bg-accent px-2 py-1 rounded-full text-xs"
                              >
                                <MapPin className="w-3 h-3 inline mr-1" />
                                {area}
                              </span>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="mt-6 space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span>Base Rate:</span>
                        <span className="font-semibold">{vehicle.pricing.baseRate}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Per KM:</span>
                        <span className="font-semibold">{vehicle.pricing.perKm}</span>
                      </div>
                      <Button 
                        className="w-full"
                        onClick={() => calculateEstimate(vehicle)}
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Cost
                      </Button>
                      <Button 
                        variant="secondary"
                        className="w-full"
                        onClick={() => window.location.href = '/#quote'}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-6">
              Contact us for specialized transportation requirements or fleet management solutions
            </p>
            <Button
              size="lg"
              onClick={() => window.location.href = '/#quote'}
            >
              Get a Custom Quote
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Fleet;