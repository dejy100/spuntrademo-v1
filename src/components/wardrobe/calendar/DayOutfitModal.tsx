import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Check, Calendar, Shirt, Heart, SmilePlus, Wand2, 
  HelpCircle, Search, Sparkles, Calendar as CalendarIcon,
  Tag, ShoppingBag, BookmarkPlus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DayOutfitModalProps {
  date: string;
  onClose: () => void;
  onSave: (outfit: { planned: string; worn: string; mood: string }) => void;
  initialOutfit?: {
    planned: string;
    worn: string;
    mood: string;
  };
}

interface OutfitOption {
  name: string;
  items: string[];
  occasion?: string;
  style?: string;
}

const occasions = [
  'Wedding', 'Date Night', 'Job Interview', 'Casual Hangout',
  'Business Meeting', 'Party', 'Weekend Brunch', 'Workout'
];

const moodOptions = [
  { value: 'confident', label: 'Confident 💪' },
  { value: 'comfortable', label: 'Comfortable 😊' },
  { value: 'stylish', label: 'Stylish ✨' },
  { value: 'professional', label: 'Professional 👔' },
  { value: 'casual', label: 'Casual 🌟' },
  { value: 'other', label: 'Other' }
];

const suggestedOutfits: OutfitOption[] = [
  {
    name: 'Business Professional',
    items: ['Navy Blazer', 'White Button-up', 'Gray Slacks', 'Brown Oxfords'],
    occasion: 'Job Interview',
    style: 'Professional'
  },
  {
    name: 'Smart Casual',
    items: ['Beige Sweater', 'Dark Jeans', 'Chelsea Boots'],
    occasion: 'Casual Hangout',
    style: 'Casual'
  },
  {
    name: 'Evening Out',
    items: ['Black Dress', 'Statement Necklace', 'Heels'],
    occasion: 'Date Night',
    style: 'Dressy'
  }
];

export default function DayOutfitModal({ date, onClose, onSave, initialOutfit }: DayOutfitModalProps) {
  const navigate = useNavigate();
  const [plannedOutfit, setPlannedOutfit] = useState(initialOutfit?.planned || '');
  const [wornOutfit, setWornOutfit] = useState(initialOutfit?.worn || '');
  const [mood, setMood] = useState(initialOutfit?.mood || '');
  const [selectedPiece, setSelectedPiece] = useState<string>('');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('');
  const [view, setView] = useState<'main' | 'needHelp' | 'pairItem' | 'occasion' | 'explore'>('main');

  const handleSave = () => {
    onSave({ planned: plannedOutfit, worn: wornOutfit, mood });
    onClose();
  };

  const handleCreateOutfit = () => {
    onClose();
    navigate('/create');
  };

  const renderNeedHelpView = () => (
    <div className="space-y-4">
      <h3 className="font-medium text-lg mb-4">Let's Find Your Perfect Outfit</h3>
      <motion.button
        whileHover={{ scale: 1.02 }}
        onClick={() => setView('occasion')}
        className="w-full p-4 bg-purple-50 rounded-lg flex items-center gap-3 hover:bg-purple-100 transition-colors"
      >
        <Tag className="w-5 h-5 text-purple-600" />
        <div className="text-left">
          <p className="font-medium">Plan for an Occasion</p>
          <p className="text-sm text-gray-600">Get outfit suggestions for specific events</p>
        </div>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        onClick={() => setView('pairItem')}
        className="w-full p-4 bg-purple-50 rounded-lg flex items-center gap-3 hover:bg-purple-100 transition-colors"
      >
        <Shirt className="w-5 h-5 text-purple-600" />
        <div className="text-left">
          <p className="font-medium">Pair an Item</p>
          <p className="text-sm text-gray-600">Find perfect matches for a specific piece</p>
        </div>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        onClick={() => setView('explore')}
        className="w-full p-4 bg-purple-50 rounded-lg flex items-center gap-3 hover:bg-purple-100 transition-colors"
      >
        <Sparkles className="w-5 h-5 text-purple-600" />
        <div className="text-left">
          <p className="font-medium">Explore New Styles</p>
          <p className="text-sm text-gray-600">Discover fresh outfit combinations</p>
        </div>
      </motion.button>
    </div>
  );

  const renderPairItemView = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-medium text-lg">Pair Your Item</h3>
        <button onClick={() => setView('main')} className="text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          value={selectedPiece}
          onChange={(e) => setSelectedPiece(e.target.value)}
          placeholder="Enter the item you want to pair"
          className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {selectedPiece && (
        <div className="space-y-4 mt-6">
          <h4 className="font-medium">Suggested Pairings</h4>
          <div className="grid grid-cols-1 gap-4">
            {suggestedOutfits.map((outfit, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setPlannedOutfit(outfit.items.join(', '))}
                className="p-4 bg-purple-50 rounded-lg text-left hover:bg-purple-100 transition-colors"
              >
                <h5 className="font-medium mb-2">{outfit.name}</h5>
                <ul className="text-sm text-gray-600">
                  {outfit.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderOccasionView = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-medium text-lg">Choose an Occasion</h3>
        <button onClick={() => setView('main')} className="text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {occasions.map((occasion, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedOccasion(occasion)}
            className={`p-4 rounded-lg text-left transition-colors ${
              selectedOccasion === occasion
                ? 'bg-purple-100 text-purple-700'
                : 'bg-purple-50 hover:bg-purple-100'
            }`}
          >
            {occasion}
          </motion.button>
        ))}
      </div>

      {selectedOccasion && (
        <div className="mt-6">
          <h4 className="font-medium mb-4">Suggested Outfits for {selectedOccasion}</h4>
          <div className="space-y-4">
            {suggestedOutfits
              .filter(outfit => outfit.occasion === selectedOccasion)
              .map((outfit, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setPlannedOutfit(outfit.items.join(', '))}
                  className="w-full p-4 bg-white border border-gray-200 rounded-lg text-left hover:border-purple-300 transition-colors"
                >
                  <h5 className="font-medium mb-2">{outfit.name}</h5>
                  <ul className="text-sm text-gray-600">
                    {outfit.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.button>
              ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-xl p-6 max-w-xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-purple-600" />
            <div>
              <h3 className="font-semibold">Plan Your Outfit</h3>
              <p className="text-sm text-gray-600">{new Date(date).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {view === 'main' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setView('needHelp')}
                className="p-2 text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
              >
                <HelpCircle className="w-5 h-5" />
              </motion.button>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {view === 'main' ? (
              <div className="space-y-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={handleCreateOutfit}
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 rounded-lg flex items-center justify-center gap-2 hover:from-purple-100 hover:to-pink-100 transition-colors"
                >
                  <Wand2 className="w-4 h-4" />
                  Create New Outfit in Style Creator
                </motion.button>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Planned Outfit
                    </label>
                    <textarea
                      value={plannedOutfit}
                      onChange={(e) => setPlannedOutfit(e.target.value)}
                      placeholder="What do you plan to wear?"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What You Wore
                    </label>
                    <textarea
                      value={wornOutfit}
                      onChange={(e) => setWornOutfit(e.target.value)}
                      placeholder="What did you actually wear?"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <SmilePlus className="w-4 h-4" />
                      How did you feel in this outfit?
                    </label>
                    <select
                      value={mood}
                      onChange={(e) => setMood(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a mood</option>
                      {moodOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <CalendarIcon className="w-4 h-4" />
                    Save for Later
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Shop Complements
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <BookmarkPlus className="w-4 h-4" />
                    Add to Favorites
                  </motion.button>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Save Outfit
                  </button>
                </div>
              </div>
            ) : view === 'needHelp' ? (
              renderNeedHelpView()
            ) : view === 'pairItem' ? (
              renderPairItemView()
            ) : view === 'occasion' ? (
              renderOccasionView()
            ) : null}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}