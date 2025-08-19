"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Users, 
  // Download, 
  // Eye, 
  // Settings,
  Bell,
  Wallet,
  Award
} from 'lucide-react';

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

interface UserDashboardProps {
  user: User;
  onNavigate: (page: Page) => void;
}

export function UserDashboard({ user, onNavigate }: UserDashboardProps) {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  
  // Mock data for dashboard
  const mockData = {
    totalProfit: 125,
    monthlyReturn: 8.5,
    projectProgress: 65,
    referralCount: 3,
    pendingWithdrawal: 0,
    investmentHistory: [
      { date: '2024-07-15', amount: 250, type: 'Initial Investment', status: 'Active' },
      { date: '2024-08-15', amount: 250, type: 'Additional Investment', status: 'Active' }
    ],
    profitHistory: [
      { date: '2024-08-01', amount: 42.5, project: 'Maize Project A' },
      { date: '2024-09-01', amount: 45.0, project: 'Coconut Farm B' },
      { date: '2024-10-01', amount: 37.5, project: 'Mixed Crops C' }
    ]
  };

  const handleWithdrawalRequest = () => {
    if (!withdrawalAmount || parseFloat(withdrawalAmount) <= 0) {
      alert('Please enter a valid withdrawal amount');
      return;
    }
    alert('Withdrawal request submitted for admin approval. You will be notified within 24 hours.');
    setWithdrawalAmount('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl text-gray-900">Welcome, {user.name}</h1>
              <p className="text-xl text-gray-600 mt-2">Track your agricultural investments and earnings</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
              {user.isEMEMember && (
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  EME Member
                </span>
              )}
              <Button variant="outline" onClick={() => onNavigate('contact')}>
                <Bell className="h-4 w-4 mr-2" />
                Support
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total Investment</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">${user.investmentAmount}</div>
              <p className="text-xs text-muted-foreground">Active in 2 projects</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-green-600">${mockData.totalProfit}</div>
              <p className="text-xs text-muted-foreground">+{mockData.monthlyReturn}% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Next Withdrawal</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">{user.nextWithdrawal}</div>
              <p className="text-xs text-muted-foreground">Admin approval required</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Referral Bonus</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-purple-600">${user.referralBonus}</div>
              <p className="text-xs text-muted-foreground">{mockData.referralCount} successful referrals</p>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
            <TabsTrigger value="referrals">Referrals</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Project Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Investment Progress</CardTitle>
                  <CardDescription>Your current agricultural project status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Project Completion</span>
                        <span className="text-sm">{mockData.projectProgress}%</span>
                      </div>
                      <Progress value={mockData.projectProgress} className="h-2" />
                    </div>
                    <div className="text-sm text-gray-600">
                      Your investments are currently allocated across maize and coconut farming projects. 
                      Expected harvest completion in 2 months.
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest transactions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockData.profitHistory.slice(0, 3).map((profit, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="text-sm">{profit.project}</p>
                          <p className="text-xs text-gray-500">{profit.date}</p>
                        </div>
                        <span className="text-green-600">+${profit.amount}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Important Notices */}
            <Alert className="border-blue-200 bg-blue-50">
              <Bell className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <strong>Upcoming Withdrawal:</strong> Your next profit withdrawal of $45 will be available on {user.nextWithdrawal}. 
                Admin approval is required for all withdrawals.
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Investments Tab */}
          <TabsContent value="investments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Investment History</CardTitle>
                <CardDescription>All your agricultural investments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.investmentHistory.map((investment, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{investment.type}</p>
                        <p className="text-sm text-gray-600">{investment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${investment.amount}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          investment.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {investment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profit History</CardTitle>
                <CardDescription>Monthly profit distributions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockData.profitHistory.map((profit, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">{profit.project}</p>
                        <p className="text-sm text-gray-600">{profit.date}</p>
                      </div>
                      <span className="text-green-600 font-medium">+${profit.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Withdrawals Tab */}
          <TabsContent value="withdrawals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Request Withdrawal</CardTitle>
                <CardDescription>Request a withdrawal of your available profits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert className="border-yellow-200 bg-yellow-50">
                    <Wallet className="h-4 w-4 text-yellow-600" />
                    <AlertDescription className="text-yellow-800">
                      Available for withdrawal: $42.50 (Latest profit payment)
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Withdrawal Amount ($)</label>
                      <input
                        type="number"
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        max="42.50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Payment Method</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
                        <option>Bank Transfer</option>
                        <option>Mobile Money</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button onClick={handleWithdrawalRequest} className="bg-green-600 hover:bg-green-700">
                    Request Withdrawal
                  </Button>
                  
                  <div className="text-sm text-gray-600">
                    <p>• First withdrawal requires admin approval</p>
                    <p>• No third-party withdrawals allowed</p>
                    <p>• Processing time: 1-3 business days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Referrals Tab */}
          <TabsContent value="referrals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Referral Program</CardTitle>
                <CardDescription>Earn bonuses by referring new investors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-800 mb-2">Your Referral Link</h3>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value="https://eastendagro.com/ref/john-farmer"
                        readOnly
                        className="flex-1 px-3 py-2 bg-white border border-green-300 rounded-md text-sm"
                      />
                      <Button variant="outline" size="sm">
                        Copy
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-3xl text-green-600 mb-2">{mockData.referralCount}</div>
                      <div className="text-sm text-gray-600">Successful Referrals</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-3xl text-purple-600 mb-2">${user.referralBonus}</div>
                      <div className="text-sm text-gray-600">Total Bonus Earned</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Referral Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Earn 5% of referred investor&apos;s first investment</li>
                      <li>• Bonus paid after successful verification</li>
                      <li>• No limit on number of referrals</li>
                      <li>• Track earnings in real-time</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Manage your account details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        value={user.name}
                        readOnly
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        value={user.email}
                        readOnly
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
                      <input
                        type="tel"
                        value={user.whatsapp}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Member Since</label>
                      <input
                        type="text"
                        value="July 2024"
                        readOnly
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button className="bg-green-600 hover:bg-green-700 mr-4">
                      Update Profile
                    </Button>
                    <Button variant="outline">
                      Change Password
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {user.isEMEMember && (
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-600 mr-2" />
                    EME Club Membership
                  </CardTitle>
                  <CardDescription>You are a valued EME Club member</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">Membership Status: <span className="font-medium text-yellow-800">Active</span></p>
                    <p className="text-sm">Member ID: #EME-{user.id}</p>
                    <p className="text-sm">Benefits: Priority support, exclusive opportunities, enhanced referral bonuses</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}