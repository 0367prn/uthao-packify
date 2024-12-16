import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, MessageSquare } from "lucide-react";
import { useToast } from "./ui/use-toast";

const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    toast({
      title: "Form submitted successfully!",
      description: "Choose your preferred contact method below.",
    });
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/+1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+1234567890`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold mb-6">Get Your Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <Textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <Button
          variant="secondary"
          className="flex items-center justify-center gap-2"
          onClick={handleWhatsApp}
        >
          <MessageSquare className="h-5 w-5" />
          Via WhatsApp
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2"
          onClick={handleCall}
        >
          <Phone className="h-5 w-5" />
          Via Call
        </Button>
      </div>

      <Button
        variant="ghost"
        className="mt-4"
        onClick={onClose}
      >
        Close
      </Button>
    </motion.div>
  );
};

export default ContactForm;