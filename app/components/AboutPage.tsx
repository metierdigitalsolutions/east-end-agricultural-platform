import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Heart, Target, Star, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-gray-900">About East End Agro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in agricultural investment and sustainable farming solutions, 
            connecting investors with profitable agricultural opportunities.
          </p>
        </div>

        {/* Company Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                East End Agro was founded with a vision to revolutionize agricultural investment 
                and make farming profitable for everyone. We specialize in the buying and selling 
                of agricultural products including maize, coconuts, and other cash crops.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive approach includes product mediation, financial support through 
                project proposals, and educational seminars to help both small-scale and large-scale 
                farmers succeed in their agricultural ventures.
              </p>
              <p className="text-lg text-gray-700">
                Through our EME Club membership program, we provide additional support and benefits 
                to our community of agricultural investors and farmers.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop"
                alt="Agricultural field"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Target className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl mb-6 text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              &quot;Encouraging entry into agriculture, from small to large scale farming, 
              while providing sustainable investment opportunities that benefit both 
              investors and the agricultural community.&quot;
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-4xl text-center mb-12 text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Honesty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We maintain complete transparency in all our dealings, providing clear 
                  information about investments, returns, and processes to build lasting trust.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our commitment to ethical practices and moral principles guides every decision 
                  we make, ensuring fair treatment for all stakeholders.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Premium Customer Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We provide exceptional support and personalized service to ensure every 
                  client receives the attention and assistance they deserve.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-4xl text-center mb-12 text-gray-900">What We Do</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Agricultural Product Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We facilitate the buying and selling of various agricultural products, 
                  including maize, coconuts, and other cash crops, connecting farmers 
                  with markets and ensuring fair prices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Investment Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our project proposal program allows investors to participate in 
                  agricultural ventures with transparent profit-sharing and secure 
                  investment management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Educational Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We conduct seminars and workshops to educate farmers and investors 
                  about best practices, market trends, and sustainable agricultural methods.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Support Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our comprehensive support includes customer service, technical assistance, 
                  and ongoing guidance for all aspects of agricultural investment and farming.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-4xl mb-6 text-gray-900">Join Our Growing Community</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Become part of a thriving community of agricultural investors and farmers 
              who are building sustainable wealth through smart agricultural investments.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl text-green-600 mb-2">500+</div>
                <div className="text-lg text-gray-700">Active Investors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl text-green-600 mb-2">$2M+</div>
                <div className="text-lg text-gray-700">Total Investments</div>
              </div>
              <div className="text-center">
                <div className="text-4xl text-green-600 mb-2">95%</div>
                <div className="text-lg text-gray-700">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}