import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

interface ContactDialogProps {
  phoneNumbers: Array<{ number: string; label: string }>;
  onPhoneCall: (number: string) => void;
}

const ContactDialog = ({ phoneNumbers, onPhoneCall }: ContactDialogProps) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
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
          <DialogTitle className="text-center text-xl font-semibold mb-2">Contact Us</DialogTitle>
        </DialogHeader>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-2"
        >
          {phoneNumbers.map((phone) => (
            <motion.button
              key={phone.number}
              variants={itemVariants}
              onClick={() => onPhoneCall(phone.number)}
              className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-primary animate-pulse" />
                <div className="flex flex-col items-start">
                  <span className="font-medium text-gray-900 dark:text-white text-sm">{phone.label}</span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{phone.number}</span>
                </div>
              </div>
              <PhoneCall className="h-4 w-4 text-primary" />
            </motion.button>
          ))}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;