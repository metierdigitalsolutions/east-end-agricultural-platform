"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import {
  CheckCircle,
  DollarSign,
  Calendar,
  Users,
  TrendingUp,
  Shield,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
interface ProjectProposalPageProps {
  onNavigate?: (page: string) => void;
}

export function ProjectProposalPage({ onNavigate }: ProjectProposalPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Project inquiry submitted successfully! We will contact you soon.",
    );
    setFormData({ name: "", email: "", whatsapp: "", message: "" });
  };

  const profitStructure = [
    {
      month: "1st",
      capital: "400,000 NGN / $250 USD",
      profit15: "600,000 NGN / $375 USD",
      profit30: "800,000 NGN / $500 USD",
    },
    {
      month: "2nd",
      capital: "400,000 NGN / $250 USD",
      profit15: "600,000 NGN / $375 USD",
      profit30: "800,000 NGN / $500 USD",
    },
    {
      month: "3rd",
      capital: "400,000 NGN / $250 USD",
      profit15: "600,000 NGN / $375 USD",
      profit30: "800,000 NGN / $500 USD",
    },
    {
      month: "4th",
      capital: "400,000 NGN / $250 USD",
      profit15: "600,000 NGN / $375 USD",
      profit30: "800,000 NGN / $500 USD",
    },
    {
      month: "5th",
      capital: "400,000 NGN / $250 USD",
      profit15: "600,000 NGN / $375 USD",
      profit30: "800,000 NGN / $500 USD",
    },
    {
      month: "6th",
      capital: "400,000 NGN / $250 USD",
      profit15: "600,000 NGN / $375 USD",
      profit30: "800,000 NGN / $500 USD",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4">
            Development Projects
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            East End Development Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Successfully tackle the issues of financial struggle by creating new
            opportunities for extra income earnings, without crime and stress.
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                How It Works
              </CardTitle>
              <CardDescription className="text-center">
                A project that supports all ages with no age restraint
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Step 1</h3>
                  <p className="text-gray-600">
                    With your money, East End helps in purchasing and sales of
                    farm products on your behalf
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Step 2</h3>
                  <p className="text-gray-600">
                    The profit is paid to you within a period of 30 days
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Step 3</h3>
                  <p className="text-gray-600">
                    Your initial capital is reusable within a period of six
                    months
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg font-medium text-green-600">
                  Starting from as low as $250 USD
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Profit Structure */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Profit Structure
              </CardTitle>
              <CardDescription className="text-center">
                Monthly profit breakdown for 6-month project cycle
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Month</th>
                      <th className="text-left p-3">Capital</th>
                      <th className="text-left p-3">Profit (15 Days)</th>
                      <th className="text-left p-3">Profit (30 Days)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profitStructure.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 font-medium">{row.month}</td>
                        <td className="p-3">{row.capital}</td>
                        <td className="p-3 text-green-600">{row.profit15}</td>
                        <td className="p-3 text-green-600 font-medium">
                          {row.profit30}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Note:</strong> The initial capital is all that is
                  needed for the whole 6 months, while you keep making the above
                  stated profit for every 30 days for the 6 months. This
                  contract is considered complete after 6 months.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Transaction Modalities */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                Modalities of Transaction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      The initial capital is valid for a period of six months (6
                      months)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Every 30 days you are to withdraw your profit
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Withdrawals are placed twice within the 30 days, basically
                      middle and ending of the month
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      There are other minor bonuses, like the referral bonus,
                      for introducing a new participant
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Withdrawals are only released into the account submitted
                      during registration (no third party withdrawals)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      All first withdrawals will be approved by the admin before
                      the funds are released
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Multiple accounts by individual are prohibited and can
                      cause you your registration fund if detected by the admins
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Your initial capital cannot be topped up by you without
                      notifying the admin
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Get Started Today
              </CardTitle>
              <CardDescription className="text-center">
                Fill out the form below and we will contact you with more
                information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Phone Line</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+1234567890"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your interest in our projects..."
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Submit Project Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card className="bg-green-600 text-white">
            <CardContent className="p-8">
              <Leaf className="h-12 w-12 mx-auto mb-4 text-green-100" />
              <h3 className="text-2xl font-bold mb-4">East End Agro Success</h3>
              <p className="text-green-100 mb-6">
                East End Agro has successfully led a number of participants
                through this journey. For more information regarding this
                project, please contact the admin for all necessary and updated
                information.
              </p>
              <p className="text-green-100">
                You can refund your account to commence another project with us
                if you find our services satisfactory. This will enable you to
                benefit from our welcome back bonus of 10% of your capital.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
