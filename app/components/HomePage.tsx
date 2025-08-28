import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Sprout, DollarSign, Users, TrendingUp, Shield, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface User {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  isEMEMember: boolean;
  investmentAmount: number;
  nextWithdrawal: string;
  referralBonus: number;
}

type Page = 'home' | 'about' | 'services' | 'faq' | 'projects' | 'auth' | 'dashboard' | 'events' | 'eme-club' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  user: User | null;
}

export function HomePage({ onNavigate, user }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl mb-6">
              Premium Agricultural Investment Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join East End Agro and turn your investment into sustainable agricultural profits. 
              From small to large scale farming ventures, we make agriculture profitable for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate('eme-club')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg"
              >
                Join EME Club
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('projects')}
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg"
              >
                Start Earning with East End Agro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Why Choose East End Agro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive agricultural investment solutions with transparency, integrity, and premium customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Profitable Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn monthly profits from agricultural investments with a minimum $250 entry and transparent payout system.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Secure & Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All investments are managed with complete transparency, admin approval, and secure withdrawal processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>EME Club Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join our exclusive EME Club for additional benefits, referral bonuses, and premium agricultural services.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Start Your Agricultural Investment Journey</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg">Minimum $250 investment with monthly profits</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg">6-month capital lock for maximum returns</span>
                </div>
                <div className="flex items-center">
                  <Sprout className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg">Support for maize, coconuts, and other crops</span>
                </div>
              </div>
              <Button 
                size="lg" 
                onClick={() => onNavigate('projects')}
                className="bg-green-600 hover:bg-green-700"
              >
                Learn More About Our Projects
              </Button>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop"
                alt="Agricultural investment"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12 text-gray-900">Explore Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('about')}>
              <CardHeader className="text-center">
                <CardTitle>About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Learn about our mission, values, and agricultural expertise.</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('events')}>
              <CardHeader className="text-center">
                <CardTitle>Seminars</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Join our educational seminars and agricultural workshops.</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('services')}>
              <CardHeader className="text-center">
                <CardTitle>Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Discover our agricultural mediation and support services.</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('contact')}>
              <CardHeader className="text-center">
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get in touch with our team for support and inquiries.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of investors who are already profiting from sustainable agriculture with East End Agro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Button
                size="lg"
                onClick={() => onNavigate('dashboard')}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                View Your Dashboard
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={() => onNavigate('auth')}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Register Now
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}