"use client";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  TrendingUp,
  Shield,
  Users,
  Clock,
  DollarSign,
  Leaf,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  MapPin,
  Calendar,
  Handshake,
  Target,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  const router = useRouter();

  const heroSlides = [
    {
      id: 1,
      badge: "🌱 Agricultural Trading Platform",
      title: "Grow Your Wealth with Agricultural Trading",
      subtitle:
        "Start with just $250 minimum participation. Enjoy monthly profit payouts from our farm product trading operations with 6-month project cycles.",
      primaryCTA: {
        text: "Join Our Projects",
        action: () => router.push("projects"),
      },
      secondaryCTA: {
        text: "Learn More",
        action: () => router.push("about"),
      },
      backgroundImage:
        "https://images.unsplash.com/photo-1733248841677-177b80e56f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwYWdyaWN1bHR1cmUlMjBmaWVsZHxlbnwxfHx8fDE3NTU4Mzk2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stat: "2,500+ Active Participants",
      features: ["$250 Minimum Start", "Monthly Profits", "6-Month Cycles"],
    },
    {
      id: 2,
      badge: "💰 Proven Returns",
      title: "Consistent Monthly Profits from Farm Trading",
      subtitle:
        "Our expert team manages strategic procurement and sales of premium farm products including maize, coconuts, cashewnuts, sugar, and fertilizers.",
      primaryCTA: {
        text: "View Projects",
        action: () => router.push("projects"),
      },
      secondaryCTA: {
        text: "Success Stories",
        action: () => router.push("about"),
      },
      backgroundImage:
        "https://images.unsplash.com/photo-1641128259256-1c1ea3d84d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBmaWVsZHN8ZW58MXx8fHwxNzU1ODMzOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stat: "$1.2M+ Total Capital",
      features: [
        "Expert Management",
        "Transparent Process",
        "100% Success Rate",
      ],
    },
    {
      id: 3,
      badge: "🏆 EME Club Benefits",
      title: "Exclusive EME Membership Rewards",
      subtitle:
        "Join our EME Club for enhanced benefits, referral bonuses, priority access to new projects, and exclusive member-only events.",
      primaryCTA: {
        text: "Join EME Club",
        action: () => router.push("eme-club"),
      },
      secondaryCTA: {
        text: "Member Benefits",
        action: () => router.push("eme-club"),
      },
      backgroundImage:
        "https://images.unsplash.com/photo-1585830302178-c2ee88ae096e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwd29ya2VycyUyMHRlYW18ZW58MXx8fHwxNzU1ODM5NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stat: "45+ Completed Projects",
      features: ["Referral Bonuses", "Priority Access", "Exclusive Events"],
    },
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Low Minimum Capital",
      description:
        "Start with just $250 and participate in our agricultural trading projects",
      image:
        "https://images.unsplash.com/photo-1594179131702-112ff2a880e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0cmFkZXIlMjBmYXJtZXJ8ZW58MXx8fHwxNzU1ODMzOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Clock,
      title: "Monthly Profits",
      description:
        "Receive monthly profit distributions from farm product trading",
      image:
        "https://images.unsplash.com/photo-1666987571351-737b29874697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBzdWNjZXNzJTIwZ3Jvd3RofGVufDF8fHx8MTc1NTgzOTY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Shield,
      title: "6-Month Project Cycle",
      description:
        "Secure participation with our carefully planned 6-month trading cycles",
      image:
        "https://images.unsplash.com/photo-1748769594002-3c12522803e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc1NTgzNzc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Users,
      title: "Expert Trading",
      description:
        "Professional agricultural experts handling farm product purchases and sales",
      image:
        "https://images.unsplash.com/photo-1585830302178-c2ee88ae096e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwd29ya2VycyUyMHRlYW18ZW58MXx8fHwxNzU1ODM5NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description:
        "Eco-friendly farming methods supporting environmental sustainability",
      image:
        "https://images.unsplash.com/photo-1683248892987-7b6181dfd718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTU4Mzk2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Award,
      title: "Certified Operations",
      description:
        "Licensed and regulated agricultural trading with full compliance",
      image:
        "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc1NTc2NTcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Participant",
      location: "California, USA",
      content:
        "East End Agro has been amazing! I've been getting consistent monthly profits from the agricultural trading projects. The transparency and professionalism is outstanding.",
      rating: 5,
      participationMonths: 8,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b352771c?w=150&h=150&fit=crop&crop=face",
      profit: "$1,250",
    },
    {
      name: "Michael Chen",
      role: "EME Club Member",
      location: "Texas, USA",
      content:
        "The EME Club benefits and referral bonuses have really enhanced my participation experience. The team is very responsive and the results speak for themselves.",
      rating: 5,
      participationMonths: 12,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      profit: "$2,850",
    },
    {
      name: "Lisa Rodriguez",
      role: "Long-term Participant",
      location: "Florida, USA",
      content:
        "Professional management and transparent processes. Highly recommend for agricultural trading participation. I've earned over $3,000 in profits so far.",
      rating: 5,
      participationMonths: 18,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      profit: "$3,200",
    },
    {
      name: "David Kumar",
      role: "Agricultural Enthusiast",
      location: "New York, USA",
      content:
        "Started with the minimum $250 and have seen consistent growth. The monthly reports are detailed and the customer service is excellent.",
      rating: 5,
      participationMonths: 6,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      profit: "$780",
    },
    {
      name: "Maria Santos",
      role: "EME Gold Member",
      location: "Arizona, USA",
      content:
        "The agricultural trading approach is sustainable and profitable. I love being part of something that supports farming communities while generating returns.",
      rating: 5,
      participationMonths: 15,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      profit: "$2,640",
    },
    {
      name: "James Wilson",
      role: "Portfolio Diversifier",
      location: "Oregon, USA",
      content:
        "This has been a great addition to my portfolio. The agricultural focus aligns with my values and the returns have been consistent every month.",
      rating: 5,
      participationMonths: 10,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      profit: "$1,980",
    },
  ];

  const farmProducts = [
    {
      name: "Maize Trading",
      image:
        "https://images.unsplash.com/photo-1651667343378-4c5131206c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwbWFpemUlMjBoYXJ2ZXN0fGVufDF8fHx8MTc1NTgzMzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Premium corn and maize procurement and distribution",
      volume: "2,500 tons/month",
      profit: "8-12% monthly",
    },
    {
      name: "Coconut Products",
      image:
        "https://images.unsplash.com/photo-1695989581238-5ec2ac0c6c9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcGFsbSUyMHRyZWVzfGVufDF8fHx8MTc1NTgzMzk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Coconut oil, copra, and fresh coconut trading",
      volume: "1,800 tons/month",
      profit: "6-10% monthly",
    },
    {
      name: "Cashew Nuts",
      image:
        "https://images.unsplash.com/photo-1594900689460-fdad3599342c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzJTIwaGFydmVzdHxlbnwxfHx8fDE3NTU4MzM5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Raw and processed cashew nut sourcing and sales",
      volume: "1,200 tons/month",
      profit: "10-15% monthly",
    },
    {
      name: "Sugar Products",
      image:
        "https://images.unsplash.com/photo-1704138031287-9152fb730dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhciUyMHBsYW50YXRpb24lMjBmYXJtfGVufDF8fHx8MTc1NTgzMzk4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Sugar cane processing and refined sugar trading",
      volume: "3,200 tons/month",
      profit: "7-11% monthly",
    },
    {
      name: "Fertilizers",
      image:
        "https://images.unsplash.com/photo-1696371269777-88d1ce71642c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzU1ODM5NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "High-quality fertilizers and soil enhancement products",
      volume: "5,000 tons/month",
      profit: "5-9% monthly",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Partner Selection",
      description:
        "We identify and partner with reliable farmers and agricultural cooperatives worldwide",
      icon: Handshake,
      image:
        "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc1NTc2NTcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      step: 2,
      title: "Quality Procurement",
      description:
        "We source premium farm products directly from verified suppliers at optimal prices",
      icon: Target,
      image:
        "https://images.unsplash.com/photo-1749938505996-93a421dd09c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0cmFkaW5nJTIwbWFya2V0fGVufDF8fHx8MTc1NTgzOTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      step: 3,
      title: "Strategic Trading",
      description:
        "Our experts execute optimal trading strategies to maximize returns for all participants",
      icon: BarChart3,
      image:
        "https://images.unsplash.com/photo-1748769594002-3c12522803e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc1NTgzNzc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      step: 4,
      title: "Profit Distribution",
      description:
        "Monthly profits are transparently calculated and distributed to all project participants",
      icon: DollarSign,
      image:
        "https://images.unsplash.com/photo-1666987571351-737b29874697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBzdWNjZXNzJTIwZ3Jvd3RofGVufDF8fHx8MTc1NTgzOTY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  // React Slick settings for hero
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    fade: true,
    cssEase: "linear",
  };

  // React Slick settings
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const processSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Full Content Slider */}
      <section className="relative py-0 overflow-hidden min-h-screen">
        <div className="hero-slider-container">
          <style jsx>{`
            .hero-slider-container {
              height: 100vh;
            }
            .hero-slider-container .slick-list,
            .hero-slider-container .slick-track {
              height: 100%;
            }
            .hero-slider-container .slick-slide > div {
              height: 100vh;
            }
            .hero-slider-container .slick-dots {
              bottom: 20px;
              z-index: 20;
            }
            .hero-slider-container .slick-dots li button:before {
              color: #ffffff;
              font-size: 12px;
              opacity: 0.6;
            }
            .hero-slider-container .slick-dots li.slick-active button:before {
              color: #ffffff;
              opacity: 1;
            }
            .hero-slider-container .slick-prev,
            .hero-slider-container .slick-next {
              z-index: 20;
              background: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              width: 44px;
              height: 44px;
              transition: all 0.3s ease;
            }
            .hero-slider-container .slick-prev:hover,
            .hero-slider-container .slick-next:hover {
              background: rgba(255, 255, 255, 0.25);
              transform: scale(1.1);
            }
            .hero-slider-container .slick-prev:before,
            .hero-slider-container .slick-next:before {
              color: #ffffff;
              font-size: 18px;
            }
            .hero-slider-container .slick-prev {
              left: 20px;
            }
            .hero-slider-container .slick-next {
              right: 20px;
            }
            @media (min-width: 1024px) {
              .hero-slider-container .slick-prev,
              .hero-slider-container .slick-next {
                width: 56px;
                height: 56px;
              }
              .hero-slider-container .slick-prev:before,
              .hero-slider-container .slick-next:before {
                font-size: 22px;
              }
              .hero-slider-container .slick-prev {
                left: 40px;
              }
              .hero-slider-container .slick-next {
                right: 40px;
              }
              .hero-slider-container .slick-dots {
                bottom: 40px;
              }
              .hero-slider-container .slick-dots li button:before {
                font-size: 14px;
              }
            }
            @media (max-width: 768px) {
              .hero-slider-container {
                height: 100vh;
              }
              .hero-slider-container .slick-slide > div {
                height: 100vh;
              }
              .hero-slider-container .slick-prev {
                left: 10px;
                width: 36px;
                height: 36px;
              }
              .hero-slider-container .slick-next {
                right: 10px;
                width: 36px;
                height: 36px;
              }
              .hero-slider-container .slick-prev:before,
              .hero-slider-container .slick-next:before {
                font-size: 14px;
              }
              .hero-slider-container .slick-dots {
                bottom: 15px;
              }
              .hero-slider-container .slick-dots li button:before {
                font-size: 10px;
              }
            }
          `}</style>
          <Slider {...heroSettings}>
            {heroSlides.map((slide, index) => (
              <div key={slide.id} className="relative">
                <div className="relative h-screen flex items-center">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <ImageWithFallback
                      src={slide.backgroundImage}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
                  </div>

                  {/* Content */}
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 lg:py-16">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white text-center lg:text-left"
                      >
                        <Badge className="mb-4 sm:mb-6 bg-green-600 hover:bg-green-700 text-white border-green-500 text-xs sm:text-sm">
                          {slide.badge}
                        </Badge>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight font-bold">
                          {slide.title}
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed text-gray-200 max-w-2xl mx-auto lg:mx-0">
                          {slide.subtitle}
                        </p>

                        {/* Features List - Enhanced for desktop/tablet */}
                        <div className="hidden sm:flex flex-wrap gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10 justify-center lg:justify-start">
                          {slide.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                              className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105"
                            >
                              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-green-400" />
                              <span className="text-xs sm:text-sm lg:text-base text-white font-medium">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                          <Button
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                            onClick={slide.primaryCTA.action}
                          >
                            {slide.primaryCTA.text}
                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-white text-white hover:bg-white hover:text-green-600 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                            onClick={slide.secondaryCTA.action}
                          >
                            {slide.secondaryCTA.text}
                          </Button>
                        </div>
                      </motion.div>

                      {/* Stats Card - Simplified for mobile */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center lg:justify-end mt-8 lg:mt-0"
                      >
                        <Card className="bg-white/15 backdrop-blur-sm border-white/20 text-white max-w-sm w-full mx-4 lg:mx-0">
                          <CardHeader className="text-center pb-3 sm:pb-4">
                            <CardTitle className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white">
                              {slide.stat}
                            </CardTitle>
                            <CardDescription className="text-gray-200 text-xs sm:text-sm">
                              And growing every day
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="space-y-2 sm:space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-xs sm:text-sm text-gray-200">
                                  Success Rate
                                </span>
                                <span className="text-white font-semibold text-xs sm:text-sm">
                                  100%
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs sm:text-sm text-gray-200">
                                  Monthly Profit
                                </span>
                                <span className="text-white font-semibold text-xs sm:text-sm">
                                  8-15%
                                </span>
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                                <div className="bg-green-400 h-1.5 sm:h-2 rounded-full w-4/5"></div>
                              </div>
                              <p className="text-xs text-gray-300 text-center">
                                Join now - limited spots!
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Farm Products Carousel */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-4 text-gray-900">
              Our Agricultural Trading Focus
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in trading premium farm products, connecting farmers
              with markets while generating consistent profits for our
              participants.
            </p>
          </motion.div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {farmProducts.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                      <div className="relative h-48 lg:h-56 overflow-hidden">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                          {product.profit}
                        </Badge>
                      </div>
                      <div className="flex flex-col flex-1">
                        <CardHeader className="pb-2 flex-1">
                          <CardTitle className="text-lg lg:text-xl">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-sm lg:text-base">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto pt-0">
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>Volume: {product.volume}</span>
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </section>

      {/* Process Steps Slider */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-4 text-gray-900">
              How Our Agricultural Trading Works
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures sustainable profits through
              strategic agricultural product trading
            </p>
          </motion.div>

          <div className="slick-slider-container">
            <style jsx>{`
              .slick-slider-container .slick-dots {
                bottom: -50px;
              }
              .slick-slider-container .slick-dots li button:before {
                color: #16a34a;
                font-size: 12px;
              }
              .slick-slider-container
                .slick-dots
                li.slick-active
                button:before {
                color: #15803d;
              }
            `}</style>
            <Slider {...processSettings}>
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="px-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="text-center h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mx-2 flex flex-col">
                        <div className="relative h-32 overflow-hidden">
                          <ImageWithFallback
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-green-600/80 flex items-center justify-center">
                            <div className="bg-white rounded-full p-3">
                              <Icon className="h-8 w-8 text-green-600" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col flex-1">
                          <CardHeader className="flex-1">
                            <div className="mx-auto mb-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                              {step.step}
                            </div>
                            <CardTitle className="text-lg lg:text-xl">
                              {step.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="mt-auto">
                            <CardDescription className="text-sm lg:text-base">
                              {step.description}
                            </CardDescription>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-4 text-gray-900">
              Why Choose East End Agro?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We combine agricultural expertise with trading opportunities to
              deliver consistent profits for our participants through farm
              product purchases and sales.
            </p>
          </motion.div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="text-center h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative h-40 lg:h-48">
                          <ImageWithFallback
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                        <CardHeader className="relative">
                          <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit -mt-8 relative z-10 shadow-lg">
                            <Icon className="h-8 w-8 text-green-600" />
                          </div>
                          <CardTitle className="text-lg lg:text-xl">
                            {feature.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm lg:text-base">
                            {feature.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1683248892987-7b6181dfd718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTU4Mzk2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern farming technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center text-white">
            {[
              { label: "Active Participants", value: "2,500+", icon: Users },
              { label: "Total Capital", value: "$1.2M+", icon: DollarSign },
              { label: "Projects Completed", value: "45+", icon: Award },
              { label: "Success Rate", value: "100%", icon: TrendingUp },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 p-3 bg-white/10 rounded-full w-fit">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-green-100 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-4 text-gray-900">
              What Our Participants Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from our community of agricultural trading
              participants
            </p>
          </motion.div>

          <div className="slick-slider-container">
            <style jsx>{`
              .slick-slider-container .slick-dots {
                bottom: -60px;
              }
              .slick-slider-container .slick-dots li button:before {
                color: #16a34a;
                font-size: 12px;
              }
              .slick-slider-container
                .slick-dots
                li.slick-active
                button:before {
                color: #15803d;
              }
            `}</style>
            <Slider {...testimonialSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mx-2 bg-white/90 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <Badge className="bg-green-100 text-green-800">
                            {testimonial.profit} earned
                          </Badge>
                        </div>
                        <CardDescription className="text-sm lg:text-base italic leading-relaxed">
                          &ldquo;{testimonial.content}&rdquo;
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-3">
                          <ImageWithFallback
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <CardTitle className="text-base lg:text-lg">
                              {testimonial.name}
                            </CardTitle>
                            <p className="text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                            <div className="flex items-center text-xs text-gray-400 mt-1">
                              <MapPin className="h-3 w-3 mr-1" />
                              {testimonial.location}
                              <span className="mx-2">•</span>
                              <Calendar className="h-3 w-3 mr-1" />
                              {testimonial.participationMonths} months
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1733248841677-177b80e56f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwYWdyaWN1bHR1cmUlMjBmaWVsZHxlbnwxfHx8fDE3NTU4Mzk2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sunrise agricultural field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600/90"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 leading-tight font-bold">
              Ready to Start Your Agricultural Trading Journey?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 lg:mb-12 text-green-100 leading-relaxed max-w-3xl mx-auto">
              Join thousands of participants who are already earning monthly
              profits from sustainable agricultural trading projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                variant="secondary"
                className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={() => router.push("auth")}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-green-600 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={() => router.push("projects")}
              >
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
