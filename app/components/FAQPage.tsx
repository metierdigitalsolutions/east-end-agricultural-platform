import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { HelpCircle, Lock, User, CreditCard, Shield, Phone } from 'lucide-react';

export function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-5xl mb-6 text-gray-900">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about East End Agro services, investments, and account management.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          
          {/* Account & Sign-In Issues */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <User className="h-6 w-6 text-green-600 mr-3" />
                Account & Sign-In Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="signin-1">
                  <AccordionTrigger>How do I create an account with East End Agro?</AccordionTrigger>
                  <AccordionContent>
                    To create an account, click on &quot;Login / Register&quot; in the top navigation, then select &quot;Sign Up&quot;. 
                    You'll need to provide your full name, email address, and WhatsApp number. After registration, 
                    you'll receive a confirmation email to verify your account.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="signin-2">
                  <AccordionTrigger>I can't access my account. What should I do?</AccordionTrigger>
                  <AccordionContent>
                    If you can't access your account, first try resetting your password using the "Forgot Password" 
                    link on the login page. If that doesn't work, contact our support team via WhatsApp or email. 
                    Make sure you're using the correct email address associated with your account.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="signin-3">
                  <AccordionTrigger>Can I have multiple accounts?</AccordionTrigger>
                  <AccordionContent>
                    No, each person is allowed only one account with East End Agro. Multiple accounts are not permitted 
                    and may result in account suspension. If you need to update your account information, please contact 
                    our support team.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Password Issues */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Lock className="h-6 w-6 text-green-600 mr-3" />
                Password Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="password-1">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    On the login page, click "Forgot Password" and enter your email address. You'll receive a password 
                    reset link via email within a few minutes. Click the link and follow the instructions to create a 
                    new password. Make sure to check your spam folder if you don't see the email.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="password-2">
                  <AccordionTrigger>What are the password requirements?</AccordionTrigger>
                  <AccordionContent>
                    Your password must be at least 8 characters long and include a combination of uppercase letters, 
                    lowercase letters, numbers, and special characters. Avoid using easily guessable information like 
                    your name or birthdate.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="password-3">
                  <AccordionTrigger>How often should I change my password?</AccordionTrigger>
                  <AccordionContent>
                    For security purposes, we recommend changing your password every 3-6 months. You can update your 
                    password anytime by logging into your account and going to the account settings section.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Registration Problems */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <User className="h-6 w-6 text-green-600 mr-3" />
                Registration Problems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="registration-1">
                  <AccordionTrigger>I'm not receiving the verification email. What should I do?</AccordionTrigger>
                  <AccordionContent>
                    First, check your spam/junk folder as verification emails sometimes end up there. If you still 
                    can't find it, try requesting a new verification email from the login page. If the problem 
                    persists, contact our support team with your email address for assistance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="registration-2">
                  <AccordionTrigger>What information do I need to provide during registration?</AccordionTrigger>
                  <AccordionContent>
                    You need to provide: your full legal name, a valid email address, and an active WhatsApp number. 
                    Make sure all information is accurate as it will be used for account verification and communication. 
                    We never ask for sensitive information like BVN or SSN during registration.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="registration-3">
                  <AccordionTrigger>Can I change my information after registration?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can update most of your account information through your dashboard after logging in. 
                    However, changes to critical information like your name or primary contact details may require 
                    verification through our support team.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* EME Membership Access */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                EME Membership Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="eme-1">
                  <AccordionTrigger>What is the EME Club and how do I join?</AccordionTrigger>
                  <AccordionContent>
                    The EME Club is our exclusive membership program that provides additional benefits including 
                    priority support, exclusive investment opportunities, and referral bonuses. To join, visit the 
                    EME Club page and complete the membership application. Approval is subject to admin review.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="eme-2">
                  <AccordionTrigger>What are the benefits of EME Club membership?</AccordionTrigger>
                  <AccordionContent>
                    EME Club members enjoy: priority customer support, access to exclusive investment opportunities, 
                    enhanced referral bonus programs, advanced market insights, invitations to member-only events, 
                    and specialized agricultural guidance from our experts.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="eme-3">
                  <AccordionTrigger>Is there a fee for EME Club membership?</AccordionTrigger>
                  <AccordionContent>
                    EME Club membership details including any associated fees are provided during the application 
                    process. Contact our team for specific membership requirements and current pricing information.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Security & Data Handling */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                Security & Data Handling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="security-1">
                  <AccordionTrigger>Is my personal information secure with East End Agro?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we take data security very seriously. All personal information is encrypted and stored securely. 
                    We never share your personal data with third parties without your consent. We also never ask for 
                    sensitive information like BVN, SSN, or banking passwords.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="security-2">
                  <AccordionTrigger>What should I do if I suspect unauthorized access to my account?</AccordionTrigger>
                  <AccordionContent>
                    If you suspect unauthorized access, immediately change your password and contact our support team. 
                    Review your account activity for any suspicious transactions and report them to us. We'll investigate 
                    and take appropriate action to secure your account.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="security-3">
                  <AccordionTrigger>Do you ever ask for sensitive information via email or phone?</AccordionTrigger>
                  <AccordionContent>
                    No, East End Agro will never ask for sensitive information like passwords, BVN, SSN, or banking 
                    details via email, phone, or any other unsecured communication method. If you receive such 
                    requests, do not provide the information and report it to our security team immediately.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Investment & Withdrawal Questions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                Investment & Withdrawal Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="investment-1">
                  <AccordionTrigger>What is the minimum investment amount?</AccordionTrigger>
                  <AccordionContent>
                    The minimum investment amount is $250. This allows you to participate in our agricultural 
                    investment projects with monthly profit payouts and a 6-month capital lock period.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="investment-2">
                  <AccordionTrigger>How do withdrawals work?</AccordionTrigger>
                  <AccordionContent>
                    Withdrawals require admin approval for security purposes. Your first withdrawal must be approved 
                    by our admin team. No third-party withdrawals are allowed - all withdrawals must be to accounts 
                    in your name. Monthly profits can be withdrawn after the approval process.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="investment-3">
                  <AccordionTrigger>Can I refer others and earn bonuses?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer referral bonuses when you introduce new investors to East End Agro. The referred 
                    person must make a minimum investment for you to qualify for the bonus. Referral bonus amounts 
                    and terms are detailed in your account dashboard.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact Support Section */}
        <Card className="mt-12 bg-green-50 border-green-200">
          <CardContent className="py-8 text-center">
            <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl mb-4 text-gray-900">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our support team is here to help you with any questions not covered in this FAQ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/1234567890"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Contact via WhatsApp
              </a>
              <a
                href="mailto:support@eastendagro.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition-colors"
              >
                Email Support
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}