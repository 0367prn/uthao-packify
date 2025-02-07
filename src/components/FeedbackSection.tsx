import { motion } from "framer-motion";
import { Star, StarHalf, Award, Shield, Building2, ThumbsUp, UserCheck, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    name: "Vijay Dixit",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    content: "The best moving service I've ever used! Professional, efficient, and careful with all my belongings. 🌟",
    rating: 4.5,
    serviceRatings: {
      punctuality: 5,
      professionalism: 4.5,
      carefulness: 4.5,
      communication: 4
    },
    verifiedMove: "Gomti Nagar to Hazratganj",
    date: "2024-02-15",
    moveDetails: {
      distance: "12 km",
      items: "3 BHK",
      duration: "6 hours"
    }
  },
  {
    name: "Prince Kumar",
    role: "Business Owner",
    image: null,
    content: "Excellent service for our office relocation. Team was organized and completed ahead of schedule! 🏢✨",
    rating: 5,
    serviceRatings: {
      punctuality: 5,
      professionalism: 5,
      carefulness: 5,
      communication: 5
    },
    verifiedMove: "Indira Nagar to Aliganj",
    date: "2024-02-10",
    moveDetails: {
      distance: "10 km",
      items: "2 BHK",
      duration: "5 hours"
    }
  },
  {
    name: "Ramraj",
    role: "Apartment Resident",
    image: null,
    content: "Very impressed with their packing service. Made my interstate move completely stress-free! 📦",
    rating: 4,
    serviceRatings: {
      punctuality: 4,
      professionalism: 4,
      carefulness: 4,
      communication: 4
    },
    verifiedMove: "Aliganj to Kanpur",
    date: "2024-01-20",
    moveDetails: {
      distance: "15 km",
      items: "4 BHK",
      duration: "7 hours"
    }
  },
  {
    name: "Priya Sharma",
    role: "Restaurant Owner",
    image: null,
    content: "Fantastic experience! They handled all our delicate restaurant equipment with utmost care. 🍽️ Highly recommended! ⭐",
    rating: 5,
    serviceRatings: {
      punctuality: 5,
      professionalism: 5,
      carefulness: 5,
      communication: 5
    },
    verifiedMove: "Hazratganj to Mahanagar",
    date: "2024-01-15",
    moveDetails: {
      distance: "18 km",
      items: "5 BHK",
      duration: "8 hours"
    }
  },
  {
    name: "Rahul Mehta",
    role: "IT Professional",
    image: null,
    content: "Seamless relocation of my home office setup. Everything arrived in perfect condition! 💻 Great job! 👍",
    rating: 4.5,
    serviceRatings: {
      punctuality: 4.5,
      professionalism: 4.5,
      carefulness: 4.5,
      communication: 4.5
    },
    verifiedMove: "Mahanagar to Gomti Nagar",
    date: "2024-01-10",
    moveDetails: {
      distance: "12 km",
      items: "3 BHK",
      duration: "6 hours"
    }
  },
  {
    name: "Anita Patel",
    role: "School Principal",
    image: null,
    content: "Helped us move our entire library during summer break. Extremely organized and professional! 📚 Amazing service! ✨",
    rating: 5,
    serviceRatings: {
      punctuality: 5,
      professionalism: 5,
      carefulness: 5,
      communication: 5
    },
    verifiedMove: "Indira Nagar to Varanasi",
    date: "2024-01-05",
    moveDetails: {
      distance: "10 km",
      items: "2 BHK",
      duration: "5 hours"
    }
  },
  {
    name: "Karan Singh",
    role: "Gym Owner",
    image: null,
    content: "Relocated all our heavy gym equipment without any issues. Punctual and professional team! 💪 Outstanding work! 🎯",
    rating: 4.5,
    serviceRatings: {
      punctuality: 4.5,
      professionalism: 4.5,
      carefulness: 4.5,
      communication: 4.5
    },
    verifiedMove: "Gomti Nagar to Kanpur",
    date: "2023-12-30",
    moveDetails: {
      distance: "15 km",
      items: "4 BHK",
      duration: "7 hours"
    }
  },
  {
    name: "Maya Reddy",
    role: "Artist",
    image: null,
    content: "They took special care of my artwork during the move. Couldn't be happier with the service! 🎨 Thank you! 🙏",
    rating: 5,
    serviceRatings: {
      punctuality: 5,
      professionalism: 5,
      carefulness: 5,
      communication: 5
    },
    verifiedMove: "Mahanagar to Lucknow",
    date: "2023-12-25",
    moveDetails: {
      distance: "18 km",
      items: "5 BHK",
      duration: "8 hours"
    }
  }
];

const companyStats = [
  {
    icon: Award,
    stat: "4.8/5",
    label: "Overall Rating",
    subtext: "Based on 350+ Reviews",
    tooltip: "Average rating across all services"
  },
  {
    icon: Users,
    stat: "1500+",
    label: "Happy Customers",
    subtext: "And Growing",
    tooltip: "Total number of satisfied customers"
  },
  {
    icon: Shield,
    stat: "100%",
    label: "Insured Moves",
    subtext: "Full Coverage",
    tooltip: "All moves are fully insured"
  },
  {
    icon: Building2,
    stat: "5+",
    label: "Years Experience",
    subtext: "Est. 2019",
    tooltip: "Years of professional service"
  }
];

const serviceQualityMetrics = [
  { label: "Punctuality", value: 98 },
  { label: "Care in Handling", value: 96 },
  { label: "Communication", value: 95 },
  { label: "Professionalism", value: 97 }
];

const FeedbackSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
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
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Customer Trust & Recognition</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join our community of 1500+ satisfied customers who trust us for their moving needs.
          </p>
        </motion.div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-col items-center">
                      <stat.icon className="h-12 w-12 mb-4 text-primary" />
                      <h3 className="text-3xl font-bold text-primary mb-2">{stat.stat}</h3>
                      <p className="font-semibold text-gray-700 dark:text-gray-200">{stat.label}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.subtext}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{stat.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </div>

        {/* Service Quality Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Service Quality Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceQualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">
                        {metric.label}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-primary">
                        {metric.value}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="glass p-6 rounded-xl h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
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
                    <UserCheck className="h-5 w-5 text-green-500 ml-auto" />
                  </div>
                  
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      ({testimonial.rating}/5)
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{testimonial.content}</p>

                  {testimonial.serviceRatings && (
                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(testimonial.serviceRatings).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-1">
                          <span className="capitalize text-gray-600 dark:text-gray-400">{key}:</span>
                          <div className="flex">
                            {renderStars(value)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="text-sm text-gray-500 dark:text-gray-400 border-t pt-4">
                    <p className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Verified Move: {testimonial.verifiedMove}
                    </p>
                    <p className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      {new Date(testimonial.date).toLocaleDateString()}
                    </p>
                    {testimonial.moveDetails && (
                      <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                        <span>🚛 {testimonial.moveDetails.distance}</span>
                        <span>🏠 {testimonial.moveDetails.items}</span>
                        <span>⏱️ {testimonial.moveDetails.duration}</span>
                      </div>
                    )}
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
