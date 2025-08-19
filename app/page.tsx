"use client"
import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { FAQPage } from './components/FAQPage';
import { ProjectProposalPage } from './components/ProjectProposalPage';
import { AuthPage } from './components/AuthPage';
import { UserDashboard } from './components/UserDashboard';
import { EventsPage } from './components/EventsPage';
import { EMEClubPage } from './components/EMEClubPage';
import { ContactPage } from './components/ContactPage';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'services' | 'faq' | 'projects' | 'auth' | 'dashboard' | 'events' | 'eme-club' | 'contact';

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

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [user, setUser] = useState<User | null>(null);

  // Mock login function
  const handleLogin = (email: string, password: string) => {
    setUser({
      id: '1',
      name: 'John Farmer',
      email: email,
      whatsapp: '+1234567890',
      isEMEMember: true,
      investmentAmount: 500,
      nextWithdrawal: '2024-09-15',
      referralBonus: 75
    });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} user={user} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'faq':
        return <FAQPage />;
      case 'projects':
        return <ProjectProposalPage onNavigate={setCurrentPage} />;
      case 'auth':
        return <AuthPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'dashboard':
        return user ? <UserDashboard user={user} onNavigate={setCurrentPage} /> : <AuthPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'events':
        return <EventsPage />;
      case 'eme-club':
        return <EMEClubPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        user={user} 
        onLogout={handleLogout}
      />
      <main>
        {renderPage()}
        <Footer />
      </main>
    </div>
  );
}

export default App;