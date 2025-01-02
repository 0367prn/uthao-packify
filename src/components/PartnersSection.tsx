import { motion } from "framer-motion";

const partners = [
  {
    name: "Lucknow Transport Co.",
    logo: "🚛",
    description: "Premier logistics partner in Lucknow"
  },
  {
    name: "Delhi Cargo Services",
    logo: "📦",
    description: "Leading cargo solutions in Delhi NCR"
  },
  {
    name: "Transport Cargo Express",
    logo: "🚚",
    description: "Nationwide cargo transportation"
  }
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-accent/5 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        <img 
          src="/lovable-uploads/3a0b7f56-94c0-45a1-83de-5c6a5a606fdb.png"
          alt="Background Illustration"
          className="absolute right-0 top-0 w-2/5 opacity-15 transform translate-x-1/6"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Trusted Partners</h2>
          <p className="text-gray-600">Working with the best in the industry</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              className="bg-white p-8 rounded-xl text-center transition-all duration-300 shadow-lg border border-gray-100"
            >
              <div className="text-4xl mb-4 transform transition-transform duration-300 hover:scale-110">{partner.logo}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;