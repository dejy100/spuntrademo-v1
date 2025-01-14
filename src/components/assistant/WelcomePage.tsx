import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Shirt, Palette } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <Shirt className="w-6 h-6" />,
    title: "Personal Style Guide",
    description: "Get personalized fashion advice tailored to your unique style",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Perfect Gift Finder",
    description: "Discover ideal gifts for your loved ones based on their personality",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Trend Analysis",
    description: "Stay updated with the latest fashion trends and style tips",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600"
  }
];

interface WelcomePageProps {
  onStartChat: () => void;
}

export default function WelcomePage({ onStartChat }: WelcomePageProps) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Personal Fashion AI Assistant
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized style advice, find perfect gifts, and discover the latest trends - all powered by AI
          </p>
          
          <button
            onClick={onStartChat}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-medium hover:shadow-lg transition-all"
          >
            Start Chatting
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}