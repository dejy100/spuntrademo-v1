import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Crown,
  Palette,
  Shapes,
  MessageSquare,
  Star,
  Mail,
  Gem,
  Shield,
  FileText,
  Gift,
  HelpCircle,
  LogOut,
  Trash2,
  Settings,
  Heart,
  Zap,
  TrendingUp,
  Camera,
  ArrowRight,
  MoreVertical,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('style');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  const styleStats = [
    { label: 'Style Points', value: 2850, icon: Sparkles },
    { label: 'Items Won', value: 12, icon: Crown },
    { label: 'Matches', value: 48, icon: Heart },
  ];

  const menuItems = [
    { 
      icon: Settings, 
      label: 'Account Settings', 
      description: 'Manage your profile and preferences',
      link: '/profile/settings' 
    },
    { 
      icon: MessageSquare, 
      label: 'Style Community', 
      description: 'Connect with fashion enthusiasts',
      link: '/profile/community' 
    },
    { 
      icon: Star, 
      label: 'Achievement Gallery', 
      description: 'View your style milestones',
      link: '/profile/achievements' 
    },
    { 
      icon: Gift, 
      label: 'Rewards Hub', 
      description: 'Redeem your style points',
      link: '/profile/rewards' 
    },
    { 
      icon: Shield, 
      label: 'Privacy & Security', 
      description: 'Manage your account security',
      link: '/profile/privacy' 
    },
    { 
      icon: HelpCircle, 
      label: 'Style Support', 
      description: 'Get help with your fashion journey',
      link: '/profile/help' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      {/* Profile Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="relative px-4 pt-8 pb-6">
          {/* Menu Icon */}
          <div className="absolute top-8 right-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center"
            >
              <MoreVertical className="w-5 h-5 text-gray-700" />
            </motion.button>
          </div>

          <div className="flex flex-col items-center">
            <motion.div 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={triggerImageUpload}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <Camera className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
              <motion.div 
                className="absolute -right-2 -bottom-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Camera className="w-4 h-4 text-purple-500" />
              </motion.div>
            </motion.div>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            
            <h2 className="text-2xl font-bold mt-4 mb-2">Style Virtuoso</h2>
            <div className="flex items-center gap-2 text-purple-600 mb-4">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Level 24</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-sm py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Go Premium</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Style Stats */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-3 gap-4">
          {styleStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className="flex flex-col items-center text-center">
                <stat.icon className="w-6 h-6 text-purple-500 mb-2" />
                <span className="text-lg font-bold text-gray-900">{stat.value}</span>
                <span className="text-xs text-gray-500">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Style Identity */}
      <div className="px-4 py-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Your Style Identity</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">COLOR ESSENCE</p>
                <p className="font-semibold">Radiant Winter</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">STYLE ENERGY</p>
                <p className="font-semibold">Dynamic Elegance</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Shapes className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">SILHOUETTE HARMONY</p>
                <p className="font-semibold">Structured Flow</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-2 py-3 text-purple-600 font-medium flex items-center justify-center gap-2 hover:text-purple-700"
              onClick={() => navigate('/style-formula')}
            >
              <span>View Full Formula</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 space-y-3">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => navigate(item.link)}
            className="w-full flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50"
            whileHover={{ x: 4 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-medium text-gray-900">{item.label}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </motion.button>
        ))}

        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 text-red-500 font-medium"
            onClick={() => navigate('/logout')}
          >
            Sign Out
          </motion.button>
        </div>
      </div>
    </div>
  );
}
