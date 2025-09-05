"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  Users,
  Leaf,
  ArrowUpRight,
  ArrowDownRight,
  Gift,
  Clock,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { User } from "../types";

interface UserDashboardProps {
  user?: User;
}

const defaultUser: User = {
  id: "1",
  name: "Demo User",
  email: "demo@example.com",
  participationAmount: 25000,
  nextWithdrawal: "2024-03-15",
  referralBonus: 500,
  isEMEMember: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export function UserDashboard({ user = defaultUser }: UserDashboardProps) {
  const participations = [
    {
      id: 1,
      project: "Maize Trading Project",
      amount: 500,
      startDate: "2024-03-15",
      duration: "6 months",
      expectedProfit: "Monthly profits",
      status: "active",
      progress: 65,
    },
    {
      id: 2,
      project: "Coconut Sales Project",
      amount: 750,
      startDate: "2024-04-01",
      duration: "6 months",
      expectedProfit: "Monthly profits",
      status: "active",
      progress: 45,
    },
  ];

  const transactions = [
    {
      id: 1,
      type: "participation",
      amount: 500,
      date: "2024-03-15",
      description: "Maize Trading Project Capital",
    },
    {
      id: 2,
      type: "withdrawal",
      amount: 45,
      date: "2024-04-15",
      description: "Monthly Profit - March",
    },
    {
      id: 3,
      type: "participation",
      amount: 750,
      date: "2024-04-01",
      description: "Coconut Sales Project Capital",
    },
    {
      id: 4,
      type: "bonus",
      amount: 25,
      date: "2024-04-10",
      description: "Referral Bonus",
    },
    {
      id: 5,
      type: "withdrawal",
      amount: 87,
      date: "2024-05-15",
      description: "Monthly Profit - April",
    },
  ];

  const referrals = [
    {
      id: 1,
      name: "Sarah Johnson",
      joinDate: "2024-04-15",
      status: "active",
      bonus: 50,
    },
    {
      id: 2,
      name: "Mike Chen",
      joinDate: "2024-04-20",
      status: "active",
      bonus: 50,
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      joinDate: "2024-05-01",
      status: "pending",
      bonus: 50,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl text-gray-900 mb-2">
                Welcome back, {user.name}!
              </h1>
              <p className="text-gray-600">
                Here&apos;s your agricultural trading project overview
              </p>
            </div>
            {user.isEMEMember && (
              <Badge className="bg-green-600 hover:bg-green-700 w-fit">
                <Users className="h-4 w-4 mr-1" />
                EME Club Member
              </Badge>
            )}
          </div>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Total Participation",
              value: `$${user.participationAmount.toLocaleString()}`,
              icon: DollarSign,
              color: "text-green-600",
              bg: "bg-green-100",
            },
            {
              title: "Monthly Profits",
              value: "$132",
              icon: TrendingUp,
              color: "text-blue-600",
              bg: "bg-blue-100",
            },
            {
              title: "Next Withdrawal",
              value: new Date(user.nextWithdrawal).toLocaleDateString(),
              icon: Calendar,
              color: "text-purple-600",
              bg: "bg-purple-100",
            },
            {
              title: "Referral Bonus",
              value: `$${user.referralBonus}`,
              icon: Gift,
              color: "text-orange-600",
              bg: "bg-orange-100",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-semibold">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-full ${stat.bg}`}>
                        <Icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Participations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2 text-green-600" />
                    Active Project Participations
                  </CardTitle>
                  <CardDescription>
                    Track your ongoing agricultural trading projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {participations.map((participation) => (
                      <div
                        key={participation.id}
                        className="border rounded-lg p-4"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">
                              {participation.project}
                            </h4>
                            <p className="text-sm text-gray-600">
                              ${participation.amount} • {participation.duration}{" "}
                              • {participation.expectedProfit}
                            </p>
                          </div>
                          <Badge
                            variant={
                              participation.status === "active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {participation.status}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{participation.progress}%</span>
                          </div>
                          <Progress
                            value={participation.progress}
                            className="h-2"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Explore New Projects
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Transactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>
                    Your latest trading project activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.slice(0, 5).map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-full ${
                              transaction.type === "participation"
                                ? "bg-blue-100"
                                : transaction.type === "withdrawal"
                                  ? "bg-green-100"
                                  : "bg-orange-100"
                            }`}
                          >
                            {transaction.type === "participation" ? (
                              <ArrowDownRight className="h-4 w-4 text-blue-600" />
                            ) : transaction.type === "withdrawal" ? (
                              <ArrowUpRight className="h-4 w-4 text-green-600" />
                            ) : (
                              <Gift className="h-4 w-4 text-orange-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">
                              {transaction.description}
                            </p>
                            <p className="text-sm text-gray-600">
                              {transaction.date}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`font-semibold ${
                            transaction.type === "participation"
                              ? "text-blue-600"
                              : transaction.type === "withdrawal"
                                ? "text-green-600"
                                : "text-orange-600"
                          }`}
                        >
                          {transaction.type === "participation" ? "-" : "+"}$
                          {transaction.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Leaf className="h-4 w-4 mr-2" />
                    New Project Participation
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <ArrowUpRight className="h-4 w-4 mr-2" />
                    Request Withdrawal
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Refer Friends
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Referrals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-green-600" />
                    Your Referrals
                  </CardTitle>
                  <CardDescription>
                    Earn referral bonuses for each successful referral
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {referrals.map((referral) => (
                      <div
                        key={referral.id}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium">{referral.name}</p>
                          <p className="text-sm text-gray-600">
                            {referral.joinDate}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              referral.status === "active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {referral.status}
                          </Badge>
                          <p className="text-sm text-green-600 mt-1">
                            +${referral.bonus}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Earned:</span>
                      <span className="text-green-600 font-semibold">
                        ${user.referralBonus}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Performance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Project Performance</CardTitle>
                  <CardDescription>Last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Profits</span>
                      <span className="text-green-600 font-semibold">
                        +$264
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Success Rate</span>
                      <span className="text-green-600 font-semibold">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Projects</span>
                      <span className="font-semibold">2</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
