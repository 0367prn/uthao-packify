import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: Array<{ label: string; id: string }>;
  socialLinks: Array<{ icon: any; href: string; label: string }>;
  onMenuItemClick: (id: string) => void;
}

const MobileMenu = ({ isOpen, menuItems, socialLinks, onMenuItemClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden py-4 space-y-4"
    >
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => onMenuItemClick(item.id)}
          className="block w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
        >
          {item.label}
        </button>
      ))}
      
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
        onClick={() => onMenuItemClick('quote')}
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
      >
        Get Quote
      </Button>
    </motion.div>
  );
};

export default MobileMenu;