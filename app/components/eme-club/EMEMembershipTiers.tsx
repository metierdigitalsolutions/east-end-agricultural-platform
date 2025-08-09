import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { CheckCircle } from 'lucide-react';
import { membershipTiers } from './emeClubData';

export function EMEMembershipTiers() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl text-center mb-12 text-gray-900">Choose Your Membership Level</h2>
      <div className="grid lg:grid-cols-3 gap-8">
        {membershipTiers.map((tier, index) => (
          <Card key={index} className={`relative hover:shadow-lg transition-shadow ${tier.color}`}>
            {tier.badge && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                {tier.badge}
              </Badge>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <div className="text-4xl text-gray-900 mt-4">
                {tier.price}
                <span className="text-lg text-gray-600">/{tier.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Select {tier.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}