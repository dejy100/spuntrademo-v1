import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Sun, Cloud, AlertCircle, Pencil, 
  Copy, Clock, Sparkles, ChevronDown,
  Briefcase, Coffee, Crown, Eye
} from 'lucide-react';
import DayOutfitModal from './DayOutfitModal';
import OutfitPreview from './OutfitPreview';

interface WeekPlannerModalProps {
  startDate: string;
  onClose: () => void;
  onSaveWeek: (weekPlans: WeeklyPlan[]) => void;
  getWeatherForDate: (date: string) => any;
}

interface WeeklyPlan {
  date: string;
  outfit: OutfitPlan;
  weather: any;
}

interface OutfitPlan {
  text: string;
  image: string;
  category: 'work' | 'casual' | 'formal';
}

// Mock data - in real app, these would come from user's wardrobe
const recentOutfits = [
  {
    text: "Black suit with white shirt",
    image: `${window.location.origin}/images/outfits/work-suit.jpg`,
    category: 'work' as const
  },
  {
    text: "Casual jeans and sweater",
    image: `${window.location.origin}/images/outfits/casual-jeans.jpg`,
    category: 'casual' as const
  },
  {
    text: "Evening dress",
    image: `${window.location.origin}/images/outfits/formal-dress.jpg`,
    category: 'formal' as const
  },
];

const CategoryIcons = {
  work: Briefcase,
  casual: Coffee,
  formal: Crown,
};

export default function WeekPlannerModal({
  startDate,
  onClose,
  onSaveWeek,
  getWeatherForDate
}: WeekPlannerModalProps) {
  const [weekPlans, setWeekPlans] = useState<WeeklyPlan[]>(
    Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      const weather = getWeatherForDate(dateStr);
      return {
        date: dateStr,
        outfit: {
          text: '',
          image: '',
          category: 'casual'
        },
        weather
      };
    })
  );

  const [activeDay, setActiveDay] = useState(0);
  const [showOutfitModal, setShowOutfitModal] = useState(false);
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const [previewOutfit, setPreviewOutfit] = useState<OutfitPlan | null>(null);
  const quickMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (quickMenuRef.current && !quickMenuRef.current.contains(event.target as Node)) {
        setShowQuickMenu(false);
        setPreviewOutfit(null);
      }
    }

    if (showQuickMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showQuickMenu]);

  const handleSave = () => {
    onSaveWeek(weekPlans);
    onClose();
  };

  const handleOutfitSave = (outfit: { planned: string }) => {
    const updatedPlans = [...weekPlans];
    updatedPlans[activeDay].outfit = {
      ...updatedPlans[activeDay].outfit,
      text: outfit.planned
    };
    setWeekPlans(updatedPlans);
    setShowOutfitModal(false);
  };

  const copyOutfitToDay = (targetDay: number) => {
    const updatedPlans = [...weekPlans];
    updatedPlans[targetDay].outfit = weekPlans[activeDay].outfit;
    setWeekPlans(updatedPlans);
    setShowQuickMenu(false);
    setPreviewOutfit(null);
  };

  const useRecentOutfit = (outfit: OutfitPlan) => {
    const updatedPlans = [...weekPlans];
    updatedPlans[activeDay].outfit = outfit;
    setWeekPlans(updatedPlans);
    setShowQuickMenu(false);
    setPreviewOutfit(null);
  };

  const planSimilarOutfit = () => {
    setShowOutfitModal(true);
    setShowQuickMenu(false);
    setPreviewOutfit(null);
  };

  const isWeatherCompatible = (sourceTemp: number, targetTemp: number) => {
    return Math.abs(sourceTemp - targetTemp) <= 10;
  };

  const getTemperatureColor = (temp: number) => {
    if (temp >= 85) return 'text-red-500';
    if (temp >= 65) return 'text-orange-500';
    return 'text-blue-500';
  };

  const getWeatherIcon = (condition: string) => {
    return condition.toLowerCase().includes('sun') ? 
      <Sun className="w-5 h-5" /> : 
      <Cloud className="w-5 h-5" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-xl shadow-xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-semibold">Planner</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Week Overview */}
        <div className="grid grid-cols-7 gap-4 mb-8">
          {weekPlans.map((day, index) => (
            <motion.button
              key={day.date}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveDay(index)}
              className={`
                p-3 rounded-xl transition-all relative overflow-hidden
                ${index === activeDay 
                  ? 'bg-purple-50 ring-2 ring-purple-400' 
                  : 'hover:bg-gray-50 border border-gray-100'
                }
              `}
            >
              {day.outfit.image && (
                <div 
                  className="absolute inset-0 opacity-10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${day.outfit.image})` }}
                />
              )}
              <div className="relative">
                <div className="text-center space-y-1">
                  <p className="text-sm font-medium truncate">
                    {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                  </p>
                  <p className={`text-lg font-medium ${getTemperatureColor(day.weather.temp)}`}>
                    {day.weather.temp}°
                  </p>
                  <div className="text-gray-400">
                    {getWeatherIcon(day.weather.condition)}
                  </div>
                </div>
                {day.outfit.text && (
                  <div className="absolute bottom-0 right-0 flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    {day.outfit.category && (
                      <div className="w-4 h-4 text-gray-400">
                        {CategoryIcons[day.outfit.category]({ size: 16 })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Day */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium truncate">
              {new Date(weekPlans[activeDay].date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </h4>
            <div className="flex items-center gap-3">
              {weekPlans[activeDay].weather.temp >= 85 && (
                <div className="flex items-center gap-1 text-orange-500 text-sm whitespace-nowrap">
                  <AlertCircle className="w-4 h-4" />
                  <span>High temp</span>
                </div>
              )}
              
              {/* Quick Actions */}
              <div className="relative" ref={quickMenuRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowQuickMenu(!showQuickMenu);
                    setPreviewOutfit(null);
                  }}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-700"
                >
                  <ChevronDown className="w-4 h-4" />
                  <span className="text-sm">Quick</span>
                </button>

                {showQuickMenu && (
                  <div 
                    className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 max-h-[80vh] overflow-y-auto"
                  >
                    {weekPlans[activeDay].outfit.text && (
                      <>
                        <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase">Copy to</div>
                        {weekPlans.map((day, index) => (
                          index !== activeDay && (
                            <div
                              key={index}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                copyOutfitToDay(index);
                                setShowQuickMenu(false);
                              }}
                            >
                              <Copy className="w-4 h-4 flex-shrink-0" />
                              <span className="flex-1 truncate">
                                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                              </span>
                              {!isWeatherCompatible(weekPlans[activeDay].weather.temp, day.weather.temp) && (
                                <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                              )}
                            </div>
                          )
                        ))}
                        <div className="border-t border-gray-100 my-1" />
                      </>
                    )}
                    
                    <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase">Recent Outfits</div>
                    {Object.entries(CategoryIcons).map(([category, Icon]) => {
                      const outfits = recentOutfits.filter(o => o.category === category);
                      if (outfits.length === 0) return null;
                      
                      return (
                        <div key={category}>
                          <div className="flex items-center gap-2 px-4 py-1 text-xs text-gray-400">
                            <Icon className="w-3 h-3 flex-shrink-0" />
                            <span className="capitalize">{category}</span>
                          </div>
                          {outfits.map((outfit, index) => (
                            <div key={index} className="group px-4 py-2 hover:bg-purple-50">
                              <div className="flex items-center gap-2">
                                <OutfitPreview
                                  image={outfit.image}
                                  alt={outfit.text}
                                  onClick={() => {
                                    useRecentOutfit(outfit);
                                    setShowQuickMenu(false);
                                  }}
                                />
                                <button
                                  type="button"
                                  className="flex-1 text-left bg-transparent border-0 p-0"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    useRecentOutfit(outfit);
                                    setShowQuickMenu(false);
                                  }}
                                >
                                  <span className="truncate text-sm text-gray-700">
                                    {outfit.text}
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  className={`p-1 rounded hover:bg-purple-100 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                                    previewOutfit === outfit ? 'bg-purple-100 opacity-100' : ''
                                  }`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setPreviewOutfit(previewOutfit === outfit ? null : outfit);
                                  }}
                                >
                                  <Eye className="w-4 h-4 text-gray-500" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                    
                    {weekPlans[activeDay].outfit.text && (
                      <>
                        <div className="border-t border-gray-100 my-1" />
                        <div
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            planSimilarOutfit();
                            setShowQuickMenu(false);
                          }}
                        >
                          <Sparkles className="w-4 h-4 flex-shrink-0" />
                          <span>Plan Similar</span>
                        </div>
                      </>
                    )}

                    {/* Preview */}
                    {previewOutfit && (
                      <div className="absolute left-full top-0 ml-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 p-2">
                        <div 
                          className="w-full h-48 rounded-md bg-cover bg-center"
                          style={{ backgroundImage: `url(${previewOutfit.image})` }}
                        />
                        <div className="text-sm text-gray-700 mt-2 truncate">{previewOutfit.text}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => setShowOutfitModal(true)}
                className="flex items-center gap-1 text-purple-600 hover:text-purple-700"
              >
                <Pencil className="w-4 h-4" />
                <span className="text-sm">Plan</span>
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            {weekPlans[activeDay].outfit.image && (
              <div 
                className="w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${weekPlans[activeDay].outfit.image})` }}
              />
            )}
            <div className="flex-1 p-3 rounded-xl bg-gray-50 min-h-[60px] text-sm text-gray-600">
              {weekPlans[activeDay].outfit.text || 'No outfit planned yet'}
            </div>
          </div>

          {/* Preview Tooltip */}
          <AnimatePresence>
            {previewOutfit && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-4 bg-white rounded-lg shadow-lg border border-gray-100 p-3 w-64"
              >
                <div className="flex gap-3">
                  <div 
                    className="w-16 h-16 rounded-md bg-cover bg-center"
                    style={{ backgroundImage: `url(${previewOutfit.image})` }}
                  />
                  <div>
                    <p className="text-sm font-medium">{previewOutfit.text}</p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                      {CategoryIcons[previewOutfit.category]({ size: 12 })}
                      <span className="capitalize">{previewOutfit.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Save
          </button>
        </div>

        {/* Outfit Planning Modal */}
        {showOutfitModal && (
          <DayOutfitModal
            date={weekPlans[activeDay].date}
            onClose={() => setShowOutfitModal(false)}
            onSave={handleOutfitSave}
            initialOutfit={{ 
              planned: weekPlans[activeDay].outfit.text,
              worn: '',
              mood: ''
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
