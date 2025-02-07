
import { motion } from "framer-motion";
import { Star, StarHalf, Award, Shield, Building2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    name: "Vijay Dixit",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    content: "The best moving service I've ever used! Professional, efficient, and careful with all my belongings. 🌟",
    rating: 4.5,
    verifiedMove: "Gomti Nagar to Hazratganj",
    date: "2024-02-15"
  },
  {
    name: "Prince Kumar",
    role: "Business Owner",
    image: null,
    content: "Excellent service for our office relocation. Team was organized and completed ahead of schedule! 🏢✨",
    rating: 5,
    verifiedMove: "Indira Nagar to Aliganj",
    date: "2024-02-10"
  },
  {
    name: "Ramraj",
    role: "Apartment Resident",
    image: null,
    content: "Very impressed with their packing service. Made my interstate move completely stress-free! 📦",
    rating: 4,
    verifiedMove: "Aliganj to Kanpur",
    date: "2024-01-20"
  },
  {
    name: "Priya Sharma",
    role: "Restaurant Owner",
    image: null,
    content: "Fantastic experience! They handled all our delicate restaurant equipment with utmost care. 🍽️ Highly recommended! ⭐",
    rating: 5,
    verifiedMove: "Hazratganj to Mahanagar",
    date: "2024-01-15"
  },
  {
    name: "Rahul Mehta",
    role: "IT Professional",
    image: null,
    content: "Seamless relocation of my home office setup. Everything arrived in perfect condition! 💻 Great job! 👍",
    rating: 4.5,
    verifiedMove: "Mahanagar to Gomti Nagar",
    date: "2024-01-10"
  },
  {
    name: "Anita Patel",
    role: "School Principal",
    image: null,
    content: "Helped us move our entire library during summer break. Extremely organized and professional! 📚 Amazing service! ✨",
    rating: 5,
    verifiedMove: "Indira Nagar to Varanasi",
    date: "2024-01-05"
  },
  {
    name: "Karan Singh",
    role: "Gym Owner",
    image: null,
    content: "Relocated all our heavy gym equipment without any issues. Punctual and professional team! 💪 Outstanding work! 🎯",
    rating: 4.5,
    verifiedMove: "Gomti Nagar to Kanpur",
    date: "2023-12-30"
  },
  {
    name: "Maya Reddy",
    role: "Artist",
    image: null,
    content: "They took special care of my artwork during the move. Couldn't be happier with the service! 🎨 Thank you! 🙏",
    rating: 5,
    verifiedMove: "Mahanagar to Lucknow",
    date: "2023-12-25"
  }
];

const companyStats = [
  {
    icon: Award,
    stat: "4.8/5",
    label: "Average Rating",
    subtext: "Based on 350+ Reviews"
  },
  {
    icon: Shield,
    stat: "100%",
    label: "Insured Moves",
    subtext: "Full Coverage"
  },
  {
    icon: Building2,
    stat: "5+",
    label: "Years Experience",
    subtext: "Est. 2019"
  }
];

const certifications = [
  "ISO 9001:2015 Certified",
  "IBA Approved",
  "GST: 09AALCS0939N1Z2",
  "MSME Registered"
];

const FeedbackSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="h-5 w-5 text-yellow-400 fill-current" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Customer Trust & Recognition</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our community of 350+ satisfied customers who trust Uthao Pack Karo for their moving needs.
          </p>
        </motion.div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.stat}</h3>
              <p className="font-semibold text-gray-700">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {certifications.map((cert, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              {cert}
            </span>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      {testimonial.image ? (
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      ) : (
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {getInitials(testimonial.name)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4 items-center gap-1">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      ({testimonial.rating}/5)
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p>✓ Verified Move: {testimonial.verifiedMove}</p>
                    <p>📅 {new Date(testimonial.date).toLocaleDateString()}</p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 hover:scale-110 transition-transform" />
          <CarouselNext className="hidden md:flex -right-12 hover:scale-110 transition-transform" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeedbackSection;
