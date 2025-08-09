import React from 'react';
import { Button } from './ui/button';
import { Leaf, User, LogOut } from 'lucide-react';

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

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  user: User | null;
  onLogout: () => void;
}

export function Navigation({ currentPage, onNavigate, user, onLogout }: NavigationProps) {
  return (
    <nav className="bg-white shadow-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <Leaf className="h-8 w-8 text-green-600 mr-2" />
            <span className="text-2xl text-green-800">East End Agro</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'home' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'about' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate('services')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'services' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'projects' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('events')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'events' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => onNavigate('eme-club')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'eme-club' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              EME Club
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'faq' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'contact' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Contact
            </button>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  onClick={() => onNavigate('dashboard')}
                  className="text-green-600 border-green-600 hover:bg-green-50"
                >
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
                <Button
                  variant="ghost"
                  onClick={onLogout}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => onNavigate('auth')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Login / Register
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}