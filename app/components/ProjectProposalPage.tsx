import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { DollarSign, TrendingUp, Calendar, Users, Shield, Award, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Page = 'home' | 'about' | 'services' | 'faq' | 'projects' | 'auth' | 'dashboard' | 'events' | 'eme-club' | 'contact';

interface ProjectProposalPageProps {
  onNavigate: (page: Page) => void;
}

export function ProjectProposalPage({ onNavigate }: ProjectProposalPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-gray-900">Investment Project Proposal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our agricultural investment program and earn monthly profits from sustainable farming projects. 
            Transparent, secure, and profitable investment opportunities await you.
          </p>
        </div>

        {/* Key Investment Details */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-green-50 border-green-200">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle>$250 Minimum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Low entry barrier to start your agricultural investment journey
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-blue-50 border-blue-200">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Monthly Profits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regular monthly payouts from your agricultural investments
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-yellow-50 border-yellow-200">
              <CardHeader>
                <Calendar className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                <CardTitle>6-Month Lock</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Capital lock period ensures maximum returns on your investment
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-purple-50 border-purple-200">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle>Referral Bonus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn additional income by referring new investors to our platform
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Timeline */}
        <section className="mb-16">
          <h2 className="text-4xl text-center mb-12 text-gray-900">How Our Investment Process Works</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-200"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="ml-auto max-w-md">
                    <CardHeader>
                      <CardTitle>1. Register & Verify</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Create your account with basic information: name, email, and WhatsApp number. Complete the verification process to secure your account.</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl z-10">
                  1
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl z-10">
                  2
                </div>
                <div className="flex-1 pl-8">
                  <Card className="mr-auto max-w-md">
                    <CardHeader>
                      <CardTitle>2. Make Investment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Invest a minimum of $250 in our agricultural projects. Choose from various crop investments including maize, coconuts, and other cash crops.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="ml-auto max-w-md">
                    <CardHeader>
                      <CardTitle>3. Project Allocation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Your investment is allocated to active agricultural projects. Track your investment progress through your dashboard.</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl z-10">
                  3
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl z-10">
                  4
                </div>
                <div className="flex-1 pl-8">
                  <Card className="mr-auto max-w-md">
                    <CardHeader>
                      <CardTitle>4. Monthly Profits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Receive monthly profit payments from your agricultural investments. All payments require admin approval for security.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="ml-auto max-w-md">
                    <CardHeader>
                      <CardTitle>5. Capital Return</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>After the 6-month lock period, your initial capital plus final profits are returned to you with admin approval.</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl z-10">
                  5
                </div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Instructions */}
        <section className="mb-16">
          <h2 className="text-4xl text-center mb-12 text-gray-900">Important Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <Shield className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-800">Security Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">•</span>
                    No third-party withdrawals - all withdrawals must be to your own accounts
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">•</span>
                    Only one account per person - multiple accounts are prohibited
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">•</span>
                    Admin approval required for first withdrawal and all subsequent transactions
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">•</span>
                    We never ask for BVN, SSN, or sensitive banking information
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <Award className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-800">Referral Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    Earn referral bonuses for each new investor you bring
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    Referred investors must meet minimum investment requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    Bonuses are paid after the referred investor&apos;s successful verification
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    Track your referral earnings in your dashboard
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investment Showcase */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Sustainable Agricultural Investments</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our investment projects focus on sustainable agricultural practices that benefit both 
                investors and local farming communities. We specialize in high-yield crops with 
                proven market demand.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">Maize cultivation and processing</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">Coconut farming and value addition</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">Diversified cash crop portfolios</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">Expert agricultural management</span>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop"
                alt="Sustainable farming"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-green-600 text-white text-center">
            <CardContent className="py-16">
              <h2 className="text-4xl mb-6">Ready to Start Your Investment Journey?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join hundreds of successful investors who are already earning monthly profits 
                from our agricultural investment program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => onNavigate('auth')}
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
                >
                  Join the Project Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => onNavigate('contact')}
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
                >
                  Contact for More Info
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}