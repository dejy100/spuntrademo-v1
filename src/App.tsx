import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PersonalityQuiz from './components/PersonalityQuiz';
import ProductDetail from './components/ProductDetail';
import WardrobePage from './components/wardrobe/WardrobePage';
import CreatePage from './components/create/CreatePage';
import AddItemPage from './components/wardrobe/AddItemPage';
import ShopPage from './components/shop/ShopPage';
import FloatingAssistant from './components/ai/FloatingAssistant';
import StyleArenaButton from './components/arena/StyleArenaButton';
import MobileNavigation from './components/navigation/MobileNavigation';
import { ChakraProvider } from '@chakra-ui/react';
import { ArchetypeResult } from './pages/ArchetypeResult';
import Matches from './components/Matches';
import LandingPage from './components/mobile/landing/LandingPage';
import ValueProposition from './components/mobile/onboarding/ValueProposition';
import HowItWorks from './components/mobile/onboarding/HowItWorks';
import Registration from './components/mobile/onboarding/Registration';
import QuizIntro from './components/mobile/onboarding/QuizIntro';
import InStoreShoppingPage from './components/store/InStoreShoppingPage';
import GamesPage from './components/games/GamesPage';
import ProfilePage from './components/profile/ProfilePage';
import './styles/mobile.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="mobile-container">
          <div className="mobile-content">
            <Routes>
              <Route path="/" element={<Layout><LandingPage /></Layout>} />
              <Route path="/value-proposition" element={<Layout><ValueProposition /></Layout>} />
              <Route path="/how-it-works" element={<Layout><HowItWorks /></Layout>} />
              <Route path="/register" element={<Layout><Registration /></Layout>} />
              <Route path="/quiz-intro" element={<Layout><QuizIntro /></Layout>} />
              <Route path="/quiz" element={<Layout><PersonalityQuiz /></Layout>} />
              <Route path="/archetype-result" element={<Layout><ArchetypeResult /></Layout>} />
              <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
              <Route path="/wardrobe" element={<Layout><WardrobePage /></Layout>} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/add-item" element={<AddItemPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/in-store-shopping" element={<InStoreShoppingPage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/matches" element={<Layout><Matches /></Layout>} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <MobileNavigation />
          <FloatingAssistant />
          <StyleArenaButton />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
