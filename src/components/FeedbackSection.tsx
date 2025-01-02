import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Vijay Dixit",
    role: "Homeowner",
    image: "/lovable-uploads/204deac8-5ad8-4a7f-a014-f8d461ed1cb7.png",
    content: "The best moving service I've ever used! They were professional, efficient, and careful with all my belongings.",
    rating: 4.5,
  },
  {
    name: "Prince",
    role: "Business Owner",
    image: null,
    content: "Excellent service for our office relocation. The team was organized and completed the move ahead of schedule.",
    rating: 5,
  },
  {
    name: "Ramraj",
    role: "Apartment Resident",
    image: null,
    content: "Very impressed with their packing service. They made my interstate move completely stress-free.",
    rating: 4,
  },
];

const FeedbackSection = () => {
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

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-current" />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="h-5 w-5 text-yellow-400 fill-current" />
      );
    }

    // Add empty stars
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
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers about their experience with Uthao Pack Karo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
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
              <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;