import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ShoppingCart, Users, Calendar, DollarSign, Headphones, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-gray-900">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive agricultural solutions designed to help you succeed in farming 
            and agricultural investment from start to finish.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Agricultural Product Mediation */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <ShoppingCart className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-2xl">Agricultural Product Mediation</CardTitle>
              <CardDescription className="text-lg">
                Connecting farmers with buyers for optimal market access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  We facilitate the buying and selling of various agricultural products, 
                  ensuring fair prices and reliable transactions for both farmers and buyers.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Maize trading and distribution</li>
                  <li>Coconut product marketing</li>
                  <li>Cash crop mediation</li>
                  <li>Market price analysis</li>
                  <li>Quality assurance services</li>
                </ul>
                <div className="mt-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop"
                    alt="Agricultural products"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Support Services */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Headphones className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-2xl">Customer Support Services</CardTitle>
              <CardDescription className="text-lg">
                Premium support for all your agricultural needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Our dedicated support team provides comprehensive assistance to ensure 
                  your success in agricultural investments and farming ventures.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>24/7 customer support</li>
                  <li>Technical assistance</li>
                  <li>Investment guidance</li>
                  <li>Account management</li>
                  <li>WhatsApp support channel</li>
                </ul>
                <div className="mt-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=250&fit=crop"
                    alt="Customer support"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Events & Seminars */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calendar className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-2xl">Events & Seminars</CardTitle>
              <CardDescription className="text-lg">
                Educational programs to enhance your agricultural knowledge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Join our regular educational events designed to share knowledge, 
                  best practices, and the latest trends in agricultural investment.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Monthly agricultural seminars</li>
                  <li>Investment strategy workshops</li>
                  <li>Seasonal farming guidance</li>
                  <li>Market trend analysis sessions</li>
                  <li>Recorded seminar access</li>
                </ul>
                <div className="mt-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=400&h=250&fit=crop"
                    alt="Seminar presentation"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EME Club Membership */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-2xl">EME Club Membership</CardTitle>
              <CardDescription className="text-lg">
                Exclusive benefits for our premium members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Join our exclusive EME Club for additional benefits, priority support, 
                  and enhanced investment opportunities.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Priority customer support</li>
                  <li>Exclusive investment opportunities</li>
                  <li>Referral bonus programs</li>
                  <li>Advanced market insights</li>
                  <li>Member-only events</li>
                </ul>
                <div className="mt-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop"
                    alt="Team meeting"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Proposal Investment Section */}
        <section className="mb-16">
          <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <DollarSign className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-3xl">Project Proposal Investment</CardTitle>
              <CardDescription className="text-xl">
                Your gateway to profitable agricultural investments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl mb-4 text-gray-900">Investment Features</h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Minimum $250 investment entry
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Monthly profit payouts
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      6-month capital lock period
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Referral bonus opportunities
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Admin-approved withdrawals
                    </li>
                  </ul>
                  <Button className="mt-6 bg-green-600 hover:bg-green-700" size="lg">
                    Learn More About Investments
                  </Button>
                </div>
                <div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=350&fit=crop"
                    alt="Investment growth"
                    className="rounded-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Service Process */}
        <section className="mb-16">
          <h2 className="text-4xl text-center mb-12 text-gray-900">How Our Services Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">1</span>
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Consultation</h3>
              <p className="text-gray-600">Initial consultation to understand your agricultural goals and investment capacity</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">2</span>
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Registration</h3>
              <p className="text-gray-600">Complete registration process and choose your preferred services or investment plan</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">3</span>
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Implementation</h3>
              <p className="text-gray-600">Begin your agricultural journey with our support and guidance</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">4</span>
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Success</h3>
              <p className="text-gray-600">Enjoy profitable returns and ongoing support for continued success</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-green-600 text-white text-center">
            <CardContent className="py-12">
              <h2 className="text-4xl mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Choose the service that best fits your agricultural goals and start your journey 
                with East End Agro today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                  Contact Our Team
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
                  View Investment Options
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}