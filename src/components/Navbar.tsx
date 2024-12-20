import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Facebook, Twitter, Instagram, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useToast } from "./ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else {
      toast({
        title: "Section not found",
        description: "We couldn't find that section. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Process", id: "process" },
    { label: "About", id: "about" }
  ];

  const phoneNumbers = [
    { number: "8090002299", label: "Main Office" },
    { number: "8924839930", label: "Customer Support" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary dark:text-white"
          >
            Uthao Pack Karo
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.label}
              </motion.button>
            ))}

            {/* Contact Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Contact
                </motion.button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl font-semibold mb-4">Contact Us</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col space-y-4">
                  {phoneNumbers.map((phone) => (
                    <button
                      key={phone.number}
                      onClick={() => handlePhoneCall(phone.number)}
                      className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <PhoneCall className="h-5 w-5 text-primary" />
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 dark:text-white">{phone.label}</span>
                          <span className="text-gray-600 dark:text-gray-300">{phone.number}</span>
                        </div>
                      </div>
                      <PhoneCall className="h-5 w-5 text-primary animate-pulse" />
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </motion.button>

            <Button 
              onClick={() => scrollToSection('quote')}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300">
                  <PhoneCall className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl font-semibold mb-4">Contact Us</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col space-y-4">
                  {phoneNumbers.map((phone) => (
                    <button
                      key={phone.number}
                      onClick={() => handlePhoneCall(phone.number)}
                      className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <PhoneCall className="h-5 w-5 text-primary" />
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 dark:text-white">{phone.label}</span>
                          <span className="text-gray-600 dark:text-gray-300">{phone.number}</span>
                        </div>
                      </div>
                      <PhoneCall className="h-5 w-5 text-primary animate-pulse" />
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
            
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-6 py-4 border-t dark:border-gray-800">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <Button 
              onClick={() => scrollToSection('quote')}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get Quote
            </Button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;