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
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-muted-foreground">Working with the best in the industry</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{partner.logo}</div>
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-muted-foreground text-sm">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;