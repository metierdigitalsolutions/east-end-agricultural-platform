"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Leaf, Users, Shield, Heart, Handshake, Phone } from "lucide-react";
import { motion } from "framer-motion";
export function AboutPage() {
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
            About East End Agro
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leading Agricultural Trading Company
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            East End Agro Ltd is an agricultural company specializing in the
            purchase and sales of premium farm products, from livestock to cash
            crops.
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Leaf className="mr-3 h-6 w-6 text-green-600" />
                Our Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                East End Agro Ltd is an agricultural company based on the
                purchase and sales of agricultural products, such as maize,
                coconuts, sugar, cashewnuts, fertilizers, and more. We have
                utilized many years of experience to establish ourselves as a
                provider of premium farm products from both livestock to cash
                crops purchase and sales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                East End Agro was founded basically to encourage people to
                venture into the agricultural sector, from the smallest to the
                largest multi-acre farm cultivation and development.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="mr-3 h-5 w-5 text-green-600" />
                  Honesty and Integrity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  East End Agro was founded with the core principle of
                  encouraging people to venture into the agricultural sector
                  with honesty and integrity as our foundation. We believe in
                  transparent business practices and building trust with every
                  transaction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Heart className="mr-3 h-5 w-5 text-green-600" />
                  Premium Customer Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customer service is a crucial part of our business as we act
                  as a major mediator in both the purchase and sales of farm
                  products. From the first phone call right through to the end
                  of the transaction, we help you make the best decisions while
                  providing the best solutions to your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Products We Trade */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Agricultural Products We Trade
              </CardTitle>
              <CardDescription className="text-center">
                We specialize in the purchase and sales of premium agricultural
                products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "Maize",
                  "Coconuts",
                  "Sugar",
                  "Cashewnuts",
                  "Fertilizers",
                  "Livestock",
                  "Cash Crops",
                  "Other Farm Products",
                ].map((product, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
                      <Leaf className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-800">
                        {product}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-green-600 text-white">
            <CardContent className="p-12 text-center">
              <Users className="h-12 w-12 mx-auto mb-6 text-green-100" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-green-100 max-w-3xl mx-auto">
                To bridge the gap between agricultural producers and consumers
                by providing reliable, efficient, and profitable trading
                solutions that benefit all participants in the agricultural
                value chain.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <Handshake className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Work With Us?
              </h3>
              <p className="text-gray-600 mb-6">
                Get in touch to learn more about our agricultural trading
                services and project opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center text-green-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Contact our customer service team</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
