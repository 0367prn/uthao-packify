import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/fleet/VehicleCard";
import PriceCalculator from "@/components/fleet/PriceCalculator";
import { Vehicle } from "@/types/fleet";
import { useNavigate } from "react-router-dom";

const Fleet = () => {
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const vehicles: Vehicle[] = [
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

  const handleCalculate = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsCalculatorOpen(true);
  };

  const handleBook = (vehicle: Vehicle) => {
    localStorage.setItem('selectedService', `${vehicle.type} Booking`);
    navigate('/#quote');
  };

  const handleCalculatorClose = () => {
    setIsCalculatorOpen(false);
    setSelectedVehicle(null);
  };

  const handleCalculatorBook = (distance: number) => {
    if (selectedVehicle) {
      localStorage.setItem('selectedService', `${selectedVehicle.type} Booking (${distance}km)`);
      navigate('/#quote');
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <Navbar />
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Premium Fleet</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Modern and well-maintained vehicles equipped with advanced features for all your transportation needs
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.type}
                vehicle={vehicle}
                onCalculate={handleCalculate}
                onBook={handleBook}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {selectedVehicle && (
        <PriceCalculator
          vehicle={selectedVehicle}
          isOpen={isCalculatorOpen}
          onClose={handleCalculatorClose}
          onBook={handleCalculatorBook}
        />
      )}

      <Footer />
    </div>
  );
};

export default Fleet;
