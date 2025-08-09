import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Phone, Mail, MapPin, MessageSquare, Clock, Headphones } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Message sent successfully! Our team will respond within 24 hours.');
      setIsSubmitting(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'WhatsApp Support',
      description: 'Get instant support via WhatsApp',
      contact: '+1 (555) 123-4567',
      action: 'Chat Now',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email for detailed inquiries',
      contact: 'support@eastendagro.com',
      action: 'Send Email',
      color: 'text-blue-600'
    },
    {
      icon: Headphones,
      title: 'Admin Contact',
      description: 'For EME registration and project proposals',
      contact: 'admin@eastendagro.com',
      action: 'Contact Admin',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-gray-900">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our agricultural investment services? Need support with your account? 
            Our team is here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-6 w-6 text-green-600 mr-2" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="John Farmer"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input
                    id="contact-subject"
                    type="text"
                    placeholder="How can we help you?"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Please describe your inquiry in detail..."
                    className="min-h-32"
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Choose the best way to reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <method.icon className={`h-6 w-6 ${method.color} mt-1 mr-4 flex-shrink-0`} />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{method.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                      <p className="text-sm font-medium text-gray-900 mb-2">{method.contact}</p>
                      <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                        {method.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>24/7 WhatsApp Support:</strong> For urgent matters, our WhatsApp support is available around the clock.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-2" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">East End Agro Headquarters</p>
                  <p className="text-gray-600">
                    123 Agricultural District<br />
                    Green Valley, State 12345<br />
                    United States
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Quick Access */}
        <section className="mt-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl mb-4 text-gray-900">Need Quick Answers?</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Check our comprehensive FAQ section for instant answers to common questions about 
                investments, accounts, and our services.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Visit FAQ Page
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}