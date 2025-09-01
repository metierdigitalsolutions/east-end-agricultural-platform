"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  BookOpen,
  Download,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
export function EventsPage() {
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);

  const upcomingEvents = [
    {
      id: "1",
      title: "Sustainable Maize Farming Techniques",
      date: "2024-09-15",
      time: "2:00 PM - 4:00 PM",
      type: "Webinar",
      speaker: "Dr. Sarah Johnson",
      description:
        "Learn modern sustainable farming techniques for maximizing maize yield while preserving soil health.",
      capacity: 100,
      registered: 67,
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop",
    },
    {
      id: "2",
      title: "Coconut Investment Opportunities",
      date: "2024-09-22",
      time: "10:00 AM - 12:00 PM",
      type: "Workshop",
      speaker: "Mark Thompson",
      description:
        "Explore profitable coconut farming investments and value chain opportunities.",
      capacity: 50,
      registered: 32,
      image:
        "https://images.unsplash.com/photo-1520637836862-4d197d17c52a?w=400&h=250&fit=crop",
    },
    {
      id: "3",
      title: "Agricultural Market Trends 2024",
      date: "2024-10-05",
      time: "3:00 PM - 5:00 PM",
      type: "Seminar",
      speaker: "Prof. Michael Davis",
      description:
        "Comprehensive analysis of agricultural market trends and investment predictions for 2024.",
      capacity: 150,
      registered: 89,
      image:
        "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=400&h=250&fit=crop",
    },
  ];

  const recordedSeminars = [
    {
      id: "r1",
      title: "Introduction to Agricultural Investment",
      duration: "45 mins",
      speaker: "John Smith",
      date: "2024-08-15",
      views: 234,
      description:
        "Basic concepts and strategies for successful agricultural investment.",
    },
    {
      id: "r2",
      title: "Risk Management in Farm Investments",
      duration: "60 mins",
      speaker: "Dr. Emily Clark",
      date: "2024-07-20",
      views: 189,
      description:
        "Understanding and mitigating risks in agricultural investment portfolios.",
    },
    {
      id: "r3",
      title: "Seasonal Planning for Maximum Yield",
      duration: "40 mins",
      speaker: "Robert Wilson",
      date: "2024-06-30",
      views: 156,
      description:
        "Strategic planning techniques for optimizing crop yields across seasons.",
    },
  ];

  const handleEventRegistration = (eventId: string) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents((prev) => prev.filter((id) => id !== eventId));
    } else {
      setRegisteredEvents((prev) => [...prev, eventId]);
    }
  };

  const isRegistered = (eventId: string) => registeredEvents.includes(eventId);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-gray-900">Events & Seminars</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our educational events to enhance your agricultural knowledge
            and investment strategies. Learn from industry experts and connect
            with fellow investors.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl text-gray-900">Upcoming Events</h2>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {upcomingEvents.length} Events Available
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-600 text-white">
                    {event.type}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    By {event.speaker}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {event.registered}/{event.capacity} registered
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{
                          width: `${(event.registered / event.capacity) * 100}%`,
                        }}
                      ></div>
                    </div>

                    <Button
                      onClick={() => handleEventRegistration(event.id)}
                      className={`w-full ${
                        isRegistered(event.id)
                          ? "bg-gray-600 hover:bg-gray-700"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {isRegistered(event.id) ? "Registered ✓" : "Register Now"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Event Benefits */}
        <section className="mb-16">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="py-12">
              <h2 className="text-4xl text-center mb-8 text-gray-900">
                Why Attend Our Events?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl mb-2 text-gray-900">
                    Expert Knowledge
                  </h3>
                  <p className="text-gray-600">
                    Learn from industry professionals with years of agricultural
                    experience
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl mb-2 text-gray-900">Networking</h3>
                  <p className="text-gray-600">
                    Connect with fellow investors and agricultural enthusiasts
                  </p>
                </div>
                <div className="text-center">
                  <Video className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl mb-2 text-gray-900">
                    Flexible Access
                  </h3>
                  <p className="text-gray-600">
                    Join live sessions or access recorded content at your
                    convenience
                  </p>
                </div>
                <div className="text-center">
                  <Download className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl mb-2 text-gray-900">Resources</h3>
                  <p className="text-gray-600">
                    Download presentation materials and additional resources
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recorded Seminars */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl text-gray-900">Recorded Seminars</h2>
            <Badge variant="outline" className="text-lg px-4 py-2">
              Access Anytime
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordedSeminars.map((seminar) => (
              <Card
                key={seminar.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg leading-tight">
                      {seminar.title}
                    </CardTitle>
                    <Video className="h-5 w-5 text-green-600 flex-shrink-0 ml-2" />
                  </div>
                  <CardDescription>By {seminar.speaker}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 mb-4">{seminar.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {seminar.duration}
                      </span>
                      <span>{seminar.views} views</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Recorded on {seminar.date}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      <Video className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="text-green-600 border-green-600 hover:bg-green-50"
            >
              View All Recorded Seminars
            </Button>
          </div>
        </section>

        {/* Event Categories */}
        <section className="mb-16">
          <h2 className="text-4xl text-center mb-8 text-gray-900">
            Event Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Educational Webinars</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Online sessions covering agricultural techniques, market
                  analysis, and investment strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Interactive Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Hands-on sessions with practical exercises and group
                  discussions on farming investments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Field Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  On-site visits to active agricultural projects to see
                  investment opportunities firsthand.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section>
          <Card className="bg-green-600 text-white text-center">
            <CardContent className="py-12">
              <h2 className="text-4xl mb-6">Stay Updated on Events</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive notifications about
                upcoming seminars, workshops, and exclusive educational content.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
