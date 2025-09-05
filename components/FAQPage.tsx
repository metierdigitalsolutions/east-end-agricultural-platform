"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  HelpCircle,
  Lock,
  Mail,
  UserPlus,
  Calendar,
  FileText,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
export function FAQPage() {
  const faqSections = [
    {
      title: "Sign In Issues",
      icon: Lock,
      questions: [
        {
          question: "Why am I being asked to sign in?",
          answer:
            "You will need to sign in to be able to access some features and events on the East End website.",
        },
        {
          question:
            "Why do I keep having to sign in at a very short period of time?",
          answer:
            "This basically occurs when you are accessing some sensitive sections in your app, for security purposes.",
        },
      ],
    },
    {
      title: "Password Issues",
      icon: Mail,
      questions: [
        {
          question: "What do I do if I've forgotten my password?",
          answer:
            "Follow the link below to reset your password. You can access the password reset feature from the sign-in page.",
        },
        {
          question:
            "What do I do if I don't receive the forgotten password email?",
          answer:
            "Please wait for a short period of 10 minutes before resending your request. Check your spam folder as well.",
        },
        {
          question:
            "I've received my forgotten password email but still can't access my link",
          answer:
            "Please contact the customer service for further verification and assistance.",
        },
      ],
    },
    {
      title: "Registration Issues",
      icon: UserPlus,
      questions: [
        {
          question: "Says I'm already registered when I tried to register",
          answer:
            "Please try to use another registration email as the previous one might already be in use.",
        },
        {
          question: "Can't seem to register, logging me out",
          answer:
            "Please check your network service provider and try again. Ensure you have a stable internet connection.",
        },
      ],
    },
    {
      title: "EME Club Access",
      icon: Calendar,
      questions: [
        {
          question: "Can't access East End Monthly Events (EME) online",
          answer: "This can only be accessed by registered EME members.",
        },
        {
          question:
            "How do I know I already have registration to view and access EME?",
          answer:
            "By becoming EME Club registered member, the link will be sent to you to make use of.",
        },
        {
          question: "How do I become EME Club member?",
          answer:
            "Click on the EME Club link in the navigation menu for more information and registration details.",
        },
      ],
    },
    {
      title: "Project Proposals",
      icon: FileText,
      questions: [
        {
          question: "Who can I contact about project proposal registration?",
          answer:
            "Please click on the Projects link in the navigation menu for quick registration and more information.",
        },
      ],
    },
    {
      title: "Data Privacy",
      icon: Shield,
      questions: [
        {
          question: "What are you doing with the information I give you?",
          answer:
            "We will be using your details to: make sure we provide necessary security for your project and to provide relevant information regarding the EME membership programmes. NOTE: East End will never ask for sensitive information from you, such as your SSN, BVN login details, etc.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4">
            Help Center
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about East End Agro services,
            registration, and platform usage.
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <section.icon className="mr-3 h-5 w-5 text-green-600" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {section.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${sectionIndex}-${index}`}
                      >
                        <AccordionTrigger className="text-left hover:text-green-600">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-green-600 text-white">
            <CardContent className="p-8">
              <HelpCircle className="h-12 w-12 mx-auto mb-4 text-green-100" />
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-green-100 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our customer
                service team is here to help.
              </p>
              <p className="text-green-100">
                Please contact our customer service for further verification and
                assistance with any issues not covered above.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
