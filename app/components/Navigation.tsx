"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Menu,
  User,
  LogOut,
  Leaf,
  Users,
  Calendar,
  Phone,
  HelpCircle,
  Briefcase,
  Home,
  Shield,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { User as UserType } from "../types";
import { useAuth } from "../contexts/AuthContext";
import { ChevronDown } from "lucide-react";

type Page =
  | "home"
  | "about"
  | "services"
  | "faq"
  | "projects"
  | "auth"
  | "dashboard"
  | "admin"
  | "events"
  | "eme-club"
  | "contact";

interface NavigationProps {
  currentPage?: Page;
  user?: UserType | null;
  onLogout?: () => void;
}

// map your Page types to Next.js routes
const pageRoutes: Record<Page, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  projects: "/projects",
  faq: "/faq",
  auth: "/auth",
  dashboard: "/dashboard",
  admin: "/admin",
  events: "/events",
  "eme-club": "/eme-club",
  contact: "/contact",
};

export function Navigation({
  currentPage,
  user: propUser,
  onLogout,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user: contextUser, logout } = useAuth();
  
  // Use context user if available, otherwise use prop user
  const user = contextUser || propUser;
  
  // Auto-detect current page from pathname if not provided
  const getCurrentPage = (): Page => {
    if (currentPage) return currentPage;
    
    const pathToPageMap: Record<string, Page> = {
      '/': 'home',
      '/about': 'about',
      '/services': 'services',
      '/projects': 'projects',
      '/faq': 'faq',
      '/auth': 'auth',
      '/dashboard': 'dashboard',
      '/admin': 'admin',
      '/events': 'events',
      '/eme-club': 'eme-club',
      '/contact': 'contact',
    };
    
    return pathToPageMap[pathname] || 'home';
  };
  
  const detectedCurrentPage = getCurrentPage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      logout();
    }
    setIsMobileMenuOpen(false);
    router.push("/");
  };

  const handleNavigate = (page: Page) => {
    router.push(pageRoutes[page]); // ✅ use real Next.js routes
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { page: "home" as Page, label: "Home", icon: Home },
    { page: "about" as Page, label: "About", icon: Users },
    { page: "services" as Page, label: "Services", icon: Briefcase },
    { page: "projects" as Page, label: "Agricultural Projects", icon: Leaf },
    { page: "events" as Page, label: "Events", icon: Calendar },
    { page: "eme-club" as Page, label: "EME Club", icon: Users },
    { page: "faq" as Page, label: "FAQ", icon: HelpCircle },
    { page: "contact" as Page, label: "Contact", icon: Phone },
  ];

  // Primary nav items (always visible on desktop)
  const primaryNavItems = navItems.slice(0, 4); // Home, About, Services, Projects
  // Secondary nav items (in dropdown on tablet/small desktop)
  const secondaryNavItems = navItems.slice(4); // Events, EME Club, FAQ, Contact

  const canAccessAdmin =
    user && (user.role === "admin" || user.role === "eme_subscriber");

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center space-x-2 p-1 rounded-md hover:bg-gray-50 transition-colors"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Leaf className="h-7 w-7 sm:h-8 sm:w-8 brand-primary" />
            </motion.div>
            <span className="text-lg sm:text-xl font-semibold brand-secondary">
              East End Agro
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {/* Primary Navigation Items */}
            {primaryNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = detectedCurrentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                >
                  <motion.div
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-brand-primary text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-50 hover:shadow-sm"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: isActive
                        ? "var(--brand-primary)"
                        : "rgba(152, 202, 71, 0.1)",
                      color: isActive ? "white" : "var(--brand-secondary)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                </button>
              );
            })}
            
            {/* More Dropdown for Secondary Items */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                    secondaryNavItems.some(item => detectedCurrentPage === item.page)
                      ? "bg-brand-primary text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50 hover:shadow-sm"
                  }`}
                >
                  <span className="text-sm font-medium">More</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {secondaryNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = detectedCurrentPage === item.page;
                  return (
                    <DropdownMenuItem
                      key={item.page}
                      onClick={() => handleNavigate(item.page)}
                      className={`flex items-center space-x-2 ${
                        isActive ? "bg-brand-primary text-white" : ""
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          {/* Tablet Navigation (medium screens) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {/* Show only essential items on tablet */}
            {navItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const isActive = detectedCurrentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                >
                  <motion.div
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-brand-primary text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-50 hover:shadow-sm"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: isActive
                        ? "var(--brand-primary)"
                        : "rgba(152, 202, 71, 0.1)",
                      color: isActive ? "white" : "var(--brand-secondary)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                </button>
              );
            })}
            
            {/* More Dropdown for remaining items on tablet */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    navItems.slice(3).some(item => detectedCurrentPage === item.page)
                      ? "bg-brand-primary text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50 hover:shadow-sm"
                  }`}
                >
                  <span className="text-sm font-medium">More</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {navItems.slice(3).map((item) => {
                  const Icon = item.icon;
                  const isActive = detectedCurrentPage === item.page;
                  return (
                    <DropdownMenuItem
                      key={item.page}
                      onClick={() => handleNavigate(item.page)}
                      className={`flex items-center space-x-2 ${
                        isActive ? "bg-brand-primary text-white" : ""
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* User Menu / Auth */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 hover:bg-gray-50 p-2 h-auto"
                  >
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline text-sm font-medium">
                      {user.name}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {user.role === "user" && (
                    <DropdownMenuItem
                      onClick={() => handleNavigate("dashboard")}
                      className="flex items-center space-x-2"
                    >
                      <User className="h-4 w-4" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                  )}
                  {canAccessAdmin && (
                    <DropdownMenuItem
                      onClick={() => handleNavigate("admin")}
                      className="flex items-center space-x-2"
                    >
                      <Shield className="h-4 w-4" />
                      <span>
                        {user.role === "admin" ? "Admin Panel" : "Management"}
                      </span>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                className="h-9 px-4 sm:px-6 text-sm font-medium text-white bg-brand-primary"
                onClick={() => handleNavigate("auth")}
              >
                Join Now
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden hover:bg-gray-50 p-2 h-auto"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96 md:w-80 p-0 z-[60]">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b bg-brand-secondary">
                    <button
                      onClick={() => handleNavigate("home")}
                      className="flex items-center space-x-2"
                    >
                      <Leaf className="h-6 w-6 brand-primary" />
                      <span className="text-lg font-semibold text-white">
                        East End Agro
                      </span>
                    </button>
                    <SheetClose asChild>
                      <Button variant="ghost" size="sm" className="bg-transparent text-white hover:bg-white/20">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Nav Items */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-2">
                      {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = detectedCurrentPage === item.page;
                        return (
                          <motion.button
                            key={item.page}
                            onClick={() => handleNavigate(item.page)}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-left ${
                              isActive
                                ? "bg-brand-primary text-white"
                                : "text-gray-700"
                            }`}
                            whileHover={{
                              backgroundColor: "var(--brand-primary)",
                              color: "white",
                              scale: 1.02,
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Icon className="h-5 w-5" />
                            <span>{item.label}</span>
                          </motion.button>
                        );
                      })}
                    </div>

                    {user && (
                      <>
                        <div className="my-6 border-t"></div>
                        <div className="space-y-2">
                          {user.role === "user" && (
                            <button
                              onClick={() => handleNavigate("dashboard")}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 w-full text-left"
                            >
                              <User className="h-5 w-5" />
                              <span>Dashboard</span>
                            </button>
                          )}
                          {canAccessAdmin && (
                            <button
                              onClick={() => handleNavigate("admin")}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 w-full text-left"
                            >
                              <Shield className="h-5 w-5" />
                              <span>
                                {user.role === "admin"
                                  ? "Admin Panel"
                                  : "Management"}
                              </span>
                            </button>
                          )}
                          <button
                            onClick={handleLogout}
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 w-full text-left"
                          >
                            <LogOut className="h-5 w-5" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {!user && (
                    <div className="p-4 border-t">
                      <Button
                        className="w-full h-12 text-white font-medium bg-brand-primary"
                        onClick={() => handleNavigate("auth")}
                      >
                        Join East End Agro
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
