import React from 'react';
import { Home, Search, Sparkles, Shirt, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100"
    >
      <div className="max-w-lg mx-auto flex justify-between px-6 py-2">
        {[
          { icon: Home, label: 'DNA', path: '/' },
          { icon: Search, label: 'Shop', path: '/matches' },
          { icon: Sparkles, label: 'AI-Stylist', path: '/assistant' },
          { icon: Shirt, label: 'Wardrobe', path: '/wardrobe' },
          { icon: User, label: 'Profile', path: '/profile' }
        ].map(({ icon: Icon, label, path }) => {
          const active = isActive(path);
          return (
            <button
              key={label}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-1 relative px-3"
            >
              <Icon className={`w-6 h-6 ${active ? 'text-pink-600' : 'text-gray-400'}`} />
              <span className={`text-xs ${active ? 'text-pink-600' : 'text-gray-400'}`}>
                {label}
              </span>
              {active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-pink-600"
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}