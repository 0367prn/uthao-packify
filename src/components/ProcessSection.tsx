import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Package, Truck, ClipboardList } from "lucide-react";
import { Button } from "./ui/button";

const ProcessSection = () => {
  const processes = [
    {
      id: 1,
      title: "Plan",
      icon: ClipboardList,
      description: "Use our planning timeline and moving tips to prepare for a smooth move.",
      link: "#plan",
      color: "bg-primary"
    },
    {
      id: 2,
      title: "Pack",
      icon: Package,
      description: "Professional packing service to ensure your belongings are safely packed.",
      link: "#pack",
      color: "bg-white"
    },
    {
      id: 3,
      title: "Load",
      icon: Truck,
      description: "Careful loading of your items using proper equipment and techniques.",
      link: "#load",
      color: "bg-white"
    },
    {
      id: 4,
      title: "Delivery",
      icon: Smartphone,
      description: "Timely delivery and proper placement of items in your new location.",
      link: "#delivery",
      color: "bg-white"
    }
  ];

  return (
    <section className="py-20 bg-accent/10 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/lovable-uploads/001011d8-65a8-478d-820e-803d085aa3e2.png"
          alt="Background Illustration"
          className="absolute left-0 bottom-0 w-2/3 opacity-15 dark:opacity-10 dark:invert dark:brightness-50 transform -translate-x-1/6"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="bg-secondary/20 text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
            OUR PROCESS
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6">4 Easy Steps Plan Your Move</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${process.color} rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col h-full">
                <process.icon className={`h-12 w-12 mb-4 ${process.id === 1 ? 'text-white' : 'text-primary'}`} />
                <h3 className={`text-xl font-semibold mb-2 ${process.id === 1 ? 'text-white' : 'text-gray-800'}`}>
                  {process.id}. {process.title}
                </h3>
                <p className={`mb-4 ${process.id === 1 ? 'text-white/90' : 'text-gray-600'}`}>
                  {process.description}
                </p>
                <Button
                  variant={process.id === 1 ? "secondary" : "default"}
                  className="mt-auto group"
                  onClick={() => window.location.href = process.link}
                >
                  Go to {process.title}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              {index < processes.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
