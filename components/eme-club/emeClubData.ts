import { TrendingUp, Users, Gift, Calendar, Zap, Shield } from "lucide-react";
export const emeClubBenefits = [
  {
    icon: TrendingUp,
    title: "Priority Investment Access",
    description:
      "Get first access to high-yield agricultural investment opportunities before they become available to regular members.",
    color: "text-green-600",
  },
  {
    icon: Users,
    title: "Dedicated Support Team",
    description:
      "Receive priority customer support with dedicated account managers and faster response times.",
    color: "text-blue-600",
  },
  {
    icon: Gift,
    title: "Enhanced Referral Bonuses",
    description:
      "Earn up to 25% higher referral bonuses compared to regular members when you introduce new investors.",
    color: "text-purple-600",
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description:
      "Access to member-only seminars, farm visits, and networking events with industry experts.",
    color: "text-orange-600",
  },
  {
    icon: Zap,
    title: "Advanced Market Insights",
    description:
      "Receive detailed market analysis, crop forecasts, and investment recommendations before general release.",
    color: "text-red-600",
  },
  {
    icon: Shield,
    title: "Additional Security Features",
    description:
      "Enhanced account security options and expedited verification processes for smoother transactions.",
    color: "text-gray-600",
  },
];

export const membershipTiers = [
  {
    name: "Silver EME",
    badge: "Most Popular",
    price: "$50",
    period: "Annual",
    features: [
      "Priority customer support",
      "Access to exclusive events",
      "15% referral bonus increase",
      "Monthly market reports",
      "Basic investment guidance",
    ],
    color: "border-gray-300 bg-gray-50",
  },
  {
    name: "Gold EME",
    badge: "Best Value",
    price: "$120",
    period: "Annual",
    features: [
      "All Silver EME benefits",
      "Dedicated account manager",
      "20% referral bonus increase",
      "Weekly market insights",
      "Advanced investment opportunities",
      "Quarterly farm visits",
    ],
    color: "border-yellow-400 bg-yellow-50",
  },
  {
    name: "Platinum EME",
    badge: "Premium",
    price: "$250",
    period: "Annual",
    features: [
      "All Gold EME benefits",
      "VIP customer support",
      "25% referral bonus increase",
      "Daily market updates",
      "First access to all investments",
      "Monthly one-on-one consultations",
      "Exclusive investment partnerships",
    ],
    color: "border-purple-400 bg-purple-50",
  },
];

export const successStories = [
  {
    name: "Michael Rodriguez",
    title: "Gold EME Member since 2023",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    testimonial:
      "Being an EME Club member has transformed my agricultural investment experience. The priority access to high-yield projects and dedicated support have helped me increase my returns by 40% in just one year.",
    rating: 5,
    bgColor: "bg-green-50 border-green-200",
  },
  {
    name: "Sarah Chen",
    title: "Platinum EME Member since 2022",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b932?w=100&h=100&fit=crop&crop=face",
    testimonial:
      "The exclusive investment opportunities and personalized consultation sessions have been invaluable. My portfolio has diversified significantly, and the monthly insights help me make informed decisions.",
    rating: 5,
    bgColor: "bg-blue-50 border-blue-200",
  },
];

export const membershipFormFields = {
  name: "",
  email: "",
  whatsapp: "",
  experience: "",
  motivation: "",
};
