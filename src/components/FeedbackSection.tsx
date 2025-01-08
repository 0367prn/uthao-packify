import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
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
  },
  {
    name: "Prince",
    role: "Business Owner",
    image: null,
    content: "Excellent service for our office relocation. Team was organized and completed ahead of schedule! 🏢✨",
    rating: 5,
  },
  {
    name: "Ramraj",
    role: "Apartment Resident",
    image: null,
    content: "Very impressed with their packing service. Made my interstate move completely stress-free! 📦",
    rating: 4,
  },
  {
    name: "Priya Sharma",
    role: "Restaurant Owner",
    image: null,
    content: "Fantastic experience! They handled all our delicate restaurant equipment with utmost care. 🍽️ Highly recommended! ⭐",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "IT Professional",
    image: null,
    content: "Seamless relocation of my home office setup. Everything arrived in perfect condition! 💻 Great job! 👍",
    rating: 4.5,
  },
  {
    name: "Anita Patel",
    role: "School Principal",
    image: null,
    content: "Helped us move our entire library during summer break. Extremely organized and professional! 📚 Amazing service! ✨",
    rating: 5,
  },
  {
    name: "Karan Singh",
    role: "Gym Owner",
    image: null,
    content: "Relocated all our heavy gym equipment without any issues. Punctual and professional team! 💪 Outstanding work! 🎯",
    rating: 4.5,
  },
  {
    name: "Maya Reddy",
    role: "Artist",
    image: null,
    content: "They took special care of my artwork during the move. Couldn't be happier with the service! 🎨 Thank you! 🙏",
    rating: 5,
  }
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
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers about their experience with Uthao Pack Karo.
          </p>
        </motion.div>

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
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
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