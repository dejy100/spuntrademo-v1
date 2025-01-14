import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './sections/HeroSection';
import HowItWorks from './sections/HowItWorks';
import PersonalityStyles from './sections/PersonalityStyles';
import GamesSection from './sections/GamesSection';
import DealsSection from './sections/DealsSection';
import CashbackSection from './sections/CashbackSection';
import Footer from './sections/Footer';

export default function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <HeroSection onGetStarted={handleGetStarted} />
      <HowItWorks />
      <PersonalityStyles />
      <GamesSection />
      <DealsSection />
      <CashbackSection />
      <Footer />
    </div>
  );
}