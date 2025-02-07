import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      icon: Shield,
      date: "Valid till 2025"
    },
    {
      title: "IBA Approved",
      description: "Indian Banks' Association Approved Transport Operator",
      icon: Award,
      date: "Renewed Annually"
    },
    {
      title: "FIDI-FAIM",
      description: "International Federation of International Movers",
      icon: CheckCircle,
      date: "Active Member"
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
            <h1 className="text-4xl font-bold mb-4">Our Certifications</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards in the moving industry through our certifications and accreditations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <cert.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <p className="text-sm text-primary">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Certifications;