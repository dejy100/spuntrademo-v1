import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface OutfitCalendarProps {
  onClose: () => void;
}

export default function OutfitCalendar({ onClose }: OutfitCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const specialDates = [
    { date: '2024-02-14', name: 'Valentine\'s Day', outfit: 'Romantic Evening' },
    { date: '2024-12-31', name: 'New Year\'s Eve', outfit: 'Party Glam' },
    { date: '2024-12-25', name: 'Christmas', outfit: 'Holiday Festive' },
  ];

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
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
        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 max-w-2xl w-full mx-3 md:mx-4 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold">Outfit Calendar</h2>
          <button
            onClick={onClose}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="flex items-center justify-between mb-4 md:mb-6">
          <button
            onClick={prevMonth}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <h3 className="text-base md:text-lg font-medium">
            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button
            onClick={nextMonth}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 md:gap-2 mb-3 md:mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs md:text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="aspect-square" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const date = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const specialDate = specialDates.find(d => d.date === date);

            return (
              <motion.div
                key={day}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  aspect-square p-1 md:p-2 rounded-lg cursor-pointer relative
                  ${specialDate ? 'bg-purple-50 hover:bg-purple-100' : 'hover:bg-gray-50'}
                `}
              >
                <span className="text-xs md:text-sm font-medium">{day}</span>
                {specialDate && (
                  <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-purple-500"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
          <h4 className="text-sm md:text-base font-medium">Upcoming Events</h4>
          {specialDates.map((date, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 md:p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="text-xs md:text-sm font-medium">{date.name}</p>
                <p className="text-xs text-gray-500">{date.date}</p>
              </div>
              <div className="text-xs md:text-sm text-purple-600">{date.outfit}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}