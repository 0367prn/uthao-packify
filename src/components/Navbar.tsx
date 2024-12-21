import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Facebook, Twitter, Instagram, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import ContactDialog from "./ContactDialog";
import MobileMenu from "./MobileMenu";

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
    { number: "8924839930", label: "Customer Support & Enquiries" }
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

            <ContactDialog phoneNumbers={phoneNumbers} onPhoneCall={handlePhoneCall} />

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
            <ContactDialog phoneNumbers={phoneNumbers} onPhoneCall={handlePhoneCall} />
            
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
        <MobileMenu 
          isOpen={isOpen}
          menuItems={menuItems}
          socialLinks={socialLinks}
          onMenuItemClick={scrollToSection}
        />
      </div>
    </nav>
  );
};

export default Navbar;
