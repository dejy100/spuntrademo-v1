import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarHeader from './CalendarHeader';
import CalendarDay from './CalendarDay';
import SpecialEvents from './SpecialEvents';
import DayOutfitModal from './DayOutfitModal';
import DateOptionsModal from './DateOptionsModal';
import WeatherDetailModal from './WeatherDetailModal';
import PlannerModal from './PlannerModal';

interface OutfitCalendarProps {
  onClose: () => void;
}

interface DayOutfit {
  date: string;
  planned: string;
  worn: string;
}

interface WeeklyPlan {
  date: string;
  outfit: string;
}

const specialDates = [
  { date: '2024-02-14', name: 'Valentine\'s Day', outfit: 'Romantic Evening' },
  { date: '2024-12-31', name: 'New Year\'s Eve', outfit: 'Party Glam' },
  { date: '2024-12-25', name: 'Christmas', outfit: 'Holiday Festive' },
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function OutfitCalendar({ onClose }: OutfitCalendarProps) {
  // Initialize with December 2024
  const [currentMonth, setCurrentMonth] = useState(() => {
    const date = new Date();
    date.setFullYear(2024);
    date.setMonth(11); // December (0-based)
    return date;
  });

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [outfits, setOutfits] = useState<DayOutfit[]>([]);
  const [showDateOptions, setShowDateOptions] = useState(false);
  const [showOutfitModal, setShowOutfitModal] = useState(false);
  const [showWeatherDetail, setShowWeatherDetail] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);

  const generateCalendarDays = () => {
    const startDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);  // Start of current month
    const firstDayOfMonth = startDate.getDay();
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

    const nextMonth = () => {
      setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
    };

    const prevMonth = () => {
      setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
    };

    const handleDateClick = (date: string) => {
      setSelectedDate(date);
      setShowDateOptions(true);
    };

    const handlePlanOutfit = () => {
      setShowDateOptions(false);
      setShowOutfitModal(true);
    };

    const handleViewWeather = () => {
      setShowDateOptions(false);
      setShowWeatherDetail(true);
    };

    const handleOutfitSave = (date: string, outfit: { planned: string; worn: string }) => {
      const updatedOutfits = outfits.filter(o => o.date !== date);
      setOutfits([...updatedOutfits, { date, ...outfit }]);
      setShowOutfitModal(false);
    };

    const handleSaveWeekPlan = (plans: WeeklyPlan[]) => {
      const newOutfits = [...outfits];
      plans.forEach(plan => {
        const existingIndex = newOutfits.findIndex(o => o.date === plan.date);
        if (existingIndex >= 0) {
          newOutfits[existingIndex].planned = plan.outfit;
        } else {
          newOutfits.push({
            date: plan.date,
            planned: plan.outfit,
            worn: ''
          });
        }
      });
      setOutfits(newOutfits);
    };

    // Weather conditions with seasonal variations
    const weatherConditions = {
      winter: [
        { icon: 'snow', temp: range(20, 35), condition: 'Snow' },
        { icon: 'cloudy', temp: range(30, 45), condition: 'Cloudy' },
        { icon: 'sunny', temp: range(35, 50), condition: 'Clear' },
      ],
      spring: [
        { icon: 'rainy', temp: range(55, 65), condition: 'Rain' },
        { icon: 'cloudy', temp: range(60, 70), condition: 'Partly Cloudy' },
        { icon: 'sunny', temp: range(65, 75), condition: 'Sunny' },
      ],
      summer: [
        { icon: 'sunny', temp: range(75, 95), condition: 'Hot' },
        { icon: 'cloudy', temp: range(70, 85), condition: 'Humid' },
        { icon: 'rainy', temp: range(70, 80), condition: 'Thunderstorm' },
      ],
      fall: [
        { icon: 'cloudy', temp: range(55, 70), condition: 'Windy' },
        { icon: 'rainy', temp: range(50, 65), condition: 'Light Rain' },
        { icon: 'sunny', temp: range(60, 75), condition: 'Mild' },
      ]
    };

    // Helper function to get random number in range
    function range(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Helper function to get season from date
    function getSeason(date: Date): 'winter' | 'spring' | 'summer' | 'fall' {
      const month = date.getMonth();
      if (month <= 1 || month === 11) return 'winter';
      if (month <= 4) return 'spring';
      if (month <= 7) return 'summer';
      return 'fall';
    }

    // Mock weather data for calendar view with more variety
    const getDayWeather = (date: string) => {
      const dateObj = new Date(date);
      const season = getSeason(dateObj);
      const conditions = weatherConditions[season];
      
      // Use date as seed for "random" but consistent weather
      const dayOfMonth = dateObj.getDate();
      const weatherIndex = dayOfMonth % conditions.length;
      const baseWeather = conditions[weatherIndex];

      // Add some randomness to temperature while keeping it consistent for same date
      const tempVariation = (dayOfMonth * 3) % 5; // -2 to +2 degrees variation
      
      return {
        icon: baseWeather.icon,
        temp: baseWeather.temp + tempVariation - 2,
        condition: baseWeather.condition
      };
    };

    // Get detailed weather for the modal
    const getDetailedWeatherData = (date: string) => {
      const baseWeather = getDayWeather(date);
      const hourlyVariations = [-2, -1, 0, 2, 1, -1]; // Temperature variations throughout day

      return {
        temperature: baseWeather.temp,
        feelsLike: baseWeather.temp + range(-2, 2),
        humidity: range(50, 80),
        windSpeed: range(5, 15),
        condition: baseWeather.condition,
        icon: baseWeather.icon,
        hourlyForecast: [
          { time: '9AM', temp: baseWeather.temp + hourlyVariations[0], condition: baseWeather.condition, icon: baseWeather.icon },
          { time: '12PM', temp: baseWeather.temp + hourlyVariations[1], condition: baseWeather.condition, icon: baseWeather.icon },
          { time: '3PM', temp: baseWeather.temp + hourlyVariations[2], condition: baseWeather.condition, icon: baseWeather.icon },
          { time: '6PM', temp: baseWeather.temp + hourlyVariations[3], condition: baseWeather.condition, icon: baseWeather.icon },
          { time: '9PM', temp: baseWeather.temp + hourlyVariations[4], condition: baseWeather.condition, icon: baseWeather.icon }
        ]
      };
    };

    const isToday = (date: string) => {
      return date === '2024-12-20';
    };

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
          className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h2>
              <p className="text-sm text-gray-600">Plan your outfits</p>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowPlanner(true)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Plan Week
              </motion.button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <CalendarHeader
            month={months[currentMonth.getMonth()]}
            year={currentMonth.getFullYear()}
            onPrevMonth={prevMonth}
            onNextMonth={nextMonth}
          />

          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {[...Array(firstDayOfMonth)].map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square" />
            ))}
            
            {[...Array(daysInMonth)].map((_, index) => {
              const day = index + 1;
              const date = `2024-12-${String(day).padStart(2, '0')}`;
              const specialDate = specialDates.find(d => d.date === date);
              const dayOutfit = outfits.find(o => o.date === date);
              
              return (
                <CalendarDay
                  key={date}
                  day={day}
                  date={date}
                  specialDate={specialDate}
                  outfitPlanned={!!dayOutfit?.planned}
                  outfitLogged={!!dayOutfit?.worn}
                  weatherIcon={getDayWeather(date).icon}
                  temperature={getDayWeather(date).temp}
                  isToday={isToday(date)}
                  onClick={() => handleDateClick(date)}
                />
              );
            })}
          </div>

          <SpecialEvents events={specialDates} />

          {/* Date Options Modal */}
          <AnimatePresence>
            {showDateOptions && selectedDate && (
              <DateOptionsModal
                date={selectedDate}
                onClose={() => setShowDateOptions(false)}
                onPlanOutfit={handlePlanOutfit}
                onViewWeather={handleViewWeather}
                weatherData={getDayWeather(selectedDate)}
              />
            )}
          </AnimatePresence>

          {/* Existing Outfit Modal */}
          <AnimatePresence>
            {showOutfitModal && selectedDate && (
              <DayOutfitModal
                date={selectedDate}
                onClose={() => setShowOutfitModal(false)}
                onSave={(outfit) => handleOutfitSave(selectedDate, outfit)}
                initialOutfit={outfits.find(o => o.date === selectedDate)}
              />
            )}
          </AnimatePresence>

          {/* Weather Detail Modal */}
          <AnimatePresence>
            {showWeatherDetail && selectedDate && (
              <WeatherDetailModal
                date={selectedDate}
                onClose={() => setShowWeatherDetail(false)}
                weatherData={getDetailedWeatherData(selectedDate)}
              />
            )}
          </AnimatePresence>

          {/* Planner Modal */}
          <AnimatePresence>
            {showPlanner && (
              <PlannerModal
                onClose={() => setShowPlanner(false)}
                onSaveWeek={handleSaveWeekPlan}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    );
  }

  return generateCalendarDays();
}