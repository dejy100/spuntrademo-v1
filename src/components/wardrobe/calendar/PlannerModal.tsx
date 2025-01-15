import React, { useState, useEffect } from 'react';
import { X, ChevronDown, Wand2, Check } from 'lucide-react';
import PlannerWeatherDay from './PlannerWeatherDay';
import QuickMenu from './QuickMenu';
import DayOutfitModal from './DayOutfitModal';

interface PlannerModalProps {
  onClose: () => void;
  onSaveWeek: (weekOutfits: any) => void;
}

interface WeekOutfits {
  [key: string]: {
    outfit: OutfitItem | null;
    date: string;
  };
}

interface OutfitItem {
  text: string;
  image: string;
  category: 'work' | 'casual' | 'formal';
}

const mockOutfits = [
  {
    text: "Professional Power Blazer",
    image: "/images/products/terraforge/power-blazer.jpg",
    category: 'work' as const
  },
  {
    text: "Casual Hemp Jumpsuit",
    image: "/images/products/sylvane/hemp-jumpsuit.jpg",
    category: 'casual' as const
  },
  {
    text: "Elegant Evening Gown",
    image: "/images/products/vermiluxe/evening-gown.jpg",
    category: 'formal' as const
  },
];

const weekDays = [
  { day: 'Fri', temp: 45, weather: 'partly-cloudy', date: '2024-12-20' },
  { day: 'Sat', temp: 38, weather: 'snow', date: '2024-12-21' },
  { day: 'Sun', temp: 42, weather: 'sunny', date: '2024-12-22' },
  { day: 'Mon', temp: 35, weather: 'cloudy', date: '2024-12-23' },
  { day: 'Tue', temp: 41, weather: 'snow', date: '2024-12-24' },
  { day: 'Wed', temp: 43, weather: 'partly-cloudy', date: '2024-12-25' },
  { day: 'Thu', temp: 39, weather: 'rain', date: '2024-12-26' }
];

export default function PlannerModal({ onClose, onSaveWeek }: PlannerModalProps) {
  const [selectedDay, setSelectedDay] = useState(0);
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const [weekOutfits, setWeekOutfits] = useState<WeekOutfits>(() => {
    const saved = localStorage.getItem('plannedOutfits');
    return saved ? JSON.parse(saved) : {};
  });
  const [showDayOutfitModal, setShowDayOutfitModal] = useState(false);

  // Load saved outfits when component mounts
  useEffect(() => {
    const saved = localStorage.getItem('plannedOutfits');
    if (saved) {
      setWeekOutfits(JSON.parse(saved));
    }
  }, []);

  // Save outfits whenever they change
  useEffect(() => {
    localStorage.setItem('plannedOutfits', JSON.stringify(weekOutfits));
  }, [weekOutfits]);

  const handleSaveOutfit = (outfit: { planned: string; worn: string; mood: string }) => {
    const currentDate = weekDays[selectedDay].date;
    const outfitItem = mockOutfits.find(o => o.text === outfit.planned) || {
      text: outfit.planned,
      image: mockOutfits[0].image,
      category: 'casual' as const
    };

    setWeekOutfits(prev => ({
      ...prev,
      [currentDate]: {
        outfit: outfitItem,
        date: currentDate
      }
    }));
    setShowDayOutfitModal(false);
  };

  const handleSaveWeek = () => {
    const weeklyPlans = Object.entries(weekOutfits).map(([date, data]) => ({
      date,
      outfit: data.outfit?.text || ''
    }));
    localStorage.setItem('plannedOutfits', JSON.stringify(weekOutfits));
    onSaveWeek(weeklyPlans);
    onClose();
  };

  const currentOutfit = weekOutfits[weekDays[selectedDay].date]?.outfit;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg md:rounded-2xl w-full max-w-xl mx-3 md:mx-4">
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold">Planner</h2>
            <button
              onClick={onClose}
              className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="flex w-full gap-0 mb-4 md:mb-6">
            {weekDays.map((day, index) => (
              <PlannerWeatherDay
                key={index}
                {...day}
                isSelected={selectedDay === index}
                onClick={() => setSelectedDay(index)}
                hasOutfit={!!weekOutfits[day.date]}
              />
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-3 md:p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs md:text-sm font-medium">
                {weekDays[selectedDay].day}, {weekDays[selectedDay].date}
              </span>
              <div className="flex gap-1.5 md:gap-2">
                <div className="relative">
                  <button
                    onClick={() => setShowQuickMenu(!showQuickMenu)}
                    className="flex items-center gap-0.5 md:gap-1 text-gray-600 hover:text-gray-700"
                  >
                    <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Quick</span>
                  </button>
                  {showQuickMenu && (
                    <QuickMenu
                      outfits={mockOutfits}
                      onSelectOutfit={(outfit) => {
                        const currentDate = weekDays[selectedDay].date;
                        setWeekOutfits(prev => ({
                          ...prev,
                          [currentDate]: {
                            outfit,
                            date: currentDate
                          }
                        }));
                        setShowQuickMenu(false);
                      }}
                      onClose={() => setShowQuickMenu(false)}
                    />
                  )}
                </div>
                <button
                  onClick={() => setShowDayOutfitModal(true)}
                  className="flex items-center gap-0.5 md:gap-1 text-gray-600 hover:text-gray-700"
                >
                  <Wand2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">AI</span>
                </button>
              </div>
            </div>

            {currentOutfit ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden">
                    <img
                      src={currentOutfit.image}
                      alt={currentOutfit.text}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-medium">{currentOutfit.text}</h3>
                    <p className="text-xs md:text-sm text-gray-600 capitalize">{currentOutfit.category}</p>
                  </div>
                </div>
                <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-sm md:text-base text-gray-600">No outfit selected for this day</p>
              </div>
            )}
          </div>

          <div className="flex justify-end mt-4 md:mt-6">
            <button
              onClick={handleSaveWeek}
              className="px-4 py-2 bg-purple-600 text-white text-xs md:text-sm rounded-lg hover:bg-purple-700 transition-colors"
            >
              Save Week
            </button>
          </div>
        </div>
      </div>

      {showDayOutfitModal && (
        <DayOutfitModal
          date={weekDays[selectedDay].date}
          onClose={() => setShowDayOutfitModal(false)}
          onSave={handleSaveOutfit}
          initialOutfit={weekOutfits[weekDays[selectedDay].date]?.outfit?.text}
        />
      )}
    </div>
  );
}
