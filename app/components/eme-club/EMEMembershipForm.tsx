import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Alert, AlertDescription } from '../ui/alert';
import { Crown, Mail, User, Phone, Briefcase, MessageSquare } from 'lucide-react';
import { membershipFormFields } from './emeClubData';

export function EMEMembershipForm() {
  const [formData, setFormData] = useState(membershipFormFields);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      alert('EME Club membership application submitted! Our team will review your application and contact you within 48 hours.');
      setIsSubmitting(false);
      setFormData(membershipFormFields);
    }, 2000);
  };

  const updateFormField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="mb-16">
      <Card className="max-w-2xl mx-auto border-green-200 bg-green-50">
        <CardHeader className="text-center">
          <Crown className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <CardTitle className="text-3xl">Apply for EME Club Membership</CardTitle>
          <CardDescription className="text-lg">
            Join our exclusive community of agricultural investors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6 border-blue-200 bg-blue-50">
            <AlertDescription className="text-blue-800">
              <strong>Application Process:</strong> All applications are reviewed by our team. 
              You&apos;ll receive a response within 48 hours of submission.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="eme-name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="eme-name"
                    type="text"
                    placeholder="John Farmer"
                    className="pl-10"
                    value={formData.name}
                    onChange={(e) => updateFormField('name', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eme-email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="eme-email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => updateFormField('email', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eme-whatsapp">WhatsApp Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="eme-whatsapp"
                  type="tel"
                  placeholder="+1234567890"
                  className="pl-10"
                  value={formData.whatsapp}
                  onChange={(e) => updateFormField('whatsapp', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eme-experience">Agricultural Investment Experience</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="eme-experience"
                  type="text"
                  placeholder="e.g., 2 years, Beginner, Advanced"
                  className="pl-10"
                  value={formData.experience}
                  onChange={(e) => updateFormField('experience', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eme-motivation">Why do you want to join EME Club?</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Textarea
                  id="eme-motivation"
                  placeholder="Tell us about your investment goals and why you're interested in EME Club membership..."
                  className="pl-10 min-h-24"
                  value={formData.motivation}
                  onChange={(e) => updateFormField('motivation', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p>• Applications are reviewed within 48 hours</p>
              <p>• Membership approval is subject to eligibility criteria</p>
              <p>• You&apos;ll be contacted via WhatsApp or email with the decision</p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 py-3 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}