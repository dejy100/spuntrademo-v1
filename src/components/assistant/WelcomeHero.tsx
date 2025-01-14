import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare } from 'lucide-react';

interface WelcomeHeroProps {
  onStartChat: () => void;
}

export default function WelcomeHero({ onStartChat }: WelcomeHeroProps) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-8"
      >
        <Sparkles className="w-10 h-10 text-white" />
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Your Personal Style AI Assistant
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
      >
        Get personalized fashion advice, discover new styles, and find the perfect outfits for any occasion
      </motion.p>
      
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={onStartChat}
        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        Start Chatting
      </motion.button>
    </div>
  );
}