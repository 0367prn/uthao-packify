import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Package, ShieldCheck } from "lucide-react";

const Fleet = () => {
  const vehicles = [
    {
      type: "Container Trucks",
      capacity: "20ft & 40ft",
      features: ["GPS Tracking", "Temperature Control", "24/7 Support"],
      image: "/lovable-uploads/58dfb9a3-a70c-410d-a1d7-afec9a3b1adb.png"
    },
    {
      type: "Closed Body Trucks",
      capacity: "14ft - 19ft",
      features: ["Waterproof", "Security Locks", "Loading Ramp"],
      image: "/lovable-uploads/204deac8-5ad8-4a7f-a014-f8d461ed1cb7.png"
    },
    {
      type: "Mini Trucks",
      capacity: "8ft - 12ft",
      features: ["City Friendly", "Quick Service", "Cost Effective"],
      image: "/lovable-uploads/28d6b83b-ca33-489a-bfaf-b1df54e75324.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Our Fleet</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern and well-maintained vehicles for all your moving needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.type}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vehicle.type}</h3>
                  <p className="text-primary mb-4">Capacity: {vehicle.capacity}</p>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <ShieldCheck className="w-4 h-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Fleet;