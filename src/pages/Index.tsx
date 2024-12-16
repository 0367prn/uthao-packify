import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Truck,
  Package,
  MapPin,
  Calendar,
  Clock,
  Shield,
  Star,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Local Moving",
    description: "Professional moving services within your city",
    icon: Truck,
  },
  {
    title: "Long Distance",
    description: "Reliable interstate moving solutions",
    icon: MapPin,
  },
  {
    title: "Packing Services",
    description: "Expert packing and unpacking assistance",
    icon: Package,
  },
  {
    title: "Storage",
    description: "Secure storage facilities for your belongings",
    icon: Shield,
  },
];

const steps = [
  {
    title: "Plan",
    description: "Schedule your move and get a free quote",
    icon: Calendar,
  },
  {
    title: "Pack",
    description: "We carefully pack your belongings",
    icon: Package,
  },
  {
    title: "Load",
    description: "Professional loading of your items",
    icon: Truck,
  },
  {
    title: "Deliver",
    description: "Safe and timely delivery to your new location",
    icon: Clock,
  },
];

const Index = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-accent/20 pt-16 pb-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading">
              <span className="text-primary">Moving & Storage</span>
              <br />
              Made Simple
            </h1>
            <p className="subheading max-w-2xl mx-auto">
              Professional moving services that make your relocation stress-free.
              Get started with a free quote today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-lg mx-auto glass rounded-2xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Moving From" className="glass" />
              <Input placeholder="Moving To" className="glass" />
              <Input type="date" placeholder="Date" className="glass" />
              <Button className="w-full bg-primary hover:bg-primary-hover">
                Get Quote
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading">Our Services</h2>
            <p className="subheading max-w-2xl mx-auto">
              Comprehensive moving solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="service-card">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-accent/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading">How It Works</h2>
            <p className="subheading max-w-2xl mx-auto">
              Our simple 4-step process makes moving easy
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="process-step"
              >
                <div className="flex-shrink-0">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading">Ready to Move?</h2>
            <p className="subheading text-white/80 max-w-2xl mx-auto">
              Get your free quote today and experience stress-free moving
            </p>
            <Button
              className="mt-8 bg-white text-primary hover:bg-white/90"
              size="lg"
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;