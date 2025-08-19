"use client"
// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Crown } from 'lucide-react';
import { EMEBenefitsSection } from './eme-club/EMEBenefitsSection';
import { EMEMembershipTiers } from './eme-club/EMEMembershipTiers';
import { EMESuccessStories } from './eme-club/EMESuccessStories';
import { EMEMembershipForm } from './eme-club/EMEMembershipForm';
import { EMEFooterCTA } from './eme-club/EMEFooterCTA';

type Page = 'home' | 'about' | 'services' | 'faq' | 'projects' | 'auth' | 'dashboard' | 'events' | 'eme-club' | 'contact';

interface EMEClubPageProps {
  onNavigate: (page: Page) => void;
}

export function EMEClubPage({ onNavigate }: EMEClubPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
            <Crown className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">
            Join the <span className="text-gradient bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">EME Club</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Become part of an exclusive community of agricultural investors and unlock premium benefits, 
            priority access, and enhanced earning opportunities with East End Agro.
          </p>
          <Badge className="text-lg px-6 py-2 bg-green-600 text-white">
            Limited Membership Available
          </Badge>
        </section>

        <EMEBenefitsSection />
        <EMEMembershipTiers />
        <EMESuccessStories />
        <EMEMembershipForm />
        <EMEFooterCTA onNavigate={onNavigate} />
      </div>
    </div>
  );
}