"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Leaf, Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";

interface AuthPageProps {
  onLogin?: (email: string, password: string) => void;
}

export function AuthPage({ onLogin }: AuthPageProps) {
  const router = useRouter();
  const { login, register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    password: "",
    confirmPassword: "",
    country: "",
    agreeToTerms: false,
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login({
        email: loginForm.email,
        password: loginForm.password,
      });

      if (success) {
        toast.success("Login successful!");
        onLogin?.(loginForm.email, loginForm.password);
        router.push("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!registerForm.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    try {
      const success = await register({
        name: `${registerForm.firstName} ${registerForm.lastName}`,
        email: registerForm.email,
        whatsapp: registerForm.whatsapp,
        password: registerForm.password,
      });

      if (success) {
        toast.success("Registration successful!");
        router.push("/dashboard");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-8 sm:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-4 p-3 bg-green-600 rounded-full w-fit"
          >
            <Leaf className="h-8 w-8 text-white" />
          </motion.div>
          <h1 className="text-2xl text-gray-900 mb-2">
            Welcome to East End Agro
          </h1>
          <p className="text-gray-600">Your agricultural investment platform</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In to Your Account</CardTitle>
            <CardDescription>
              Access your agricultural investment dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-9"
                        value={loginForm.email}
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-9 pr-9"
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            password: e.target.value,
                          })
                        }
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 bg-transparent hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>
                  
                  {/* Demo Credentials */}
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">Demo Credentials</h4>
                    <div className="space-y-1 text-xs text-blue-700">
                      <div className="flex justify-between items-center">
                        <span>Email:</span>
                        <button
                          type="button"
                          onClick={() => setLoginForm({ ...loginForm, email: "john@farmer.com" })}
                          className="font-mono bg-blue-100 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                        >
                          john@farmer.com
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Password:</span>
                        <button
                          type="button"
                          onClick={() => setLoginForm({ ...loginForm, password: "password123" })}
                          className="font-mono bg-blue-100 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                        >
                          password123
                        </button>
                      </div>
                      <p className="text-blue-600 text-center mt-2 italic">Click to auto-fill</p>
                    </div>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={registerForm.firstName}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            firstName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={registerForm.lastName}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            lastName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registerEmail">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="registerEmail"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-9"
                        value={registerForm.email}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1234567890"
                        className="pl-9"
                        value={registerForm.phone}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            phone: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="+1234567890"
                        className="pl-9"
                        value={registerForm.whatsapp}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            whatsapp: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select
                      value={registerForm.country}
                      onValueChange={(value) =>
                        setRegisterForm({ ...registerForm, country: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="ng">Nigeria</SelectItem>
                        <SelectItem value="gh">Ghana</SelectItem>
                        <SelectItem value="ke">Kenya</SelectItem>
                        <SelectItem value="za">South Africa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registerPassword">Password</Label>
                    <Input
                      id="registerPassword"
                      type="password"
                      placeholder="Create a strong password"
                      value={registerForm.password}
                      onChange={(e) =>
                        setRegisterForm({
                          ...registerForm,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={registerForm.confirmPassword}
                      onChange={(e) =>
                        setRegisterForm({
                          ...registerForm,
                          confirmPassword: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={registerForm.agreeToTerms}
                      onCheckedChange={(checked) =>
                        setRegisterForm({
                          ...registerForm,
                          agreeToTerms: checked as boolean,
                        })
                      }
                      className="mt-0.5"
                    />
                    <div className="flex-1">
                      <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                        I agree to the{" "}
                        <a 
                          href="#" 
                          className="text-green-600 hover:text-green-700 hover:underline font-medium transition-colors"
                          onClick={(e) => e.preventDefault()}
                        >
                          Terms and Conditions
                        </a>
                        {" "}and{" "}
                        <a 
                          href="#" 
                          className="text-green-600 hover:text-green-700 hover:underline font-medium transition-colors"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
