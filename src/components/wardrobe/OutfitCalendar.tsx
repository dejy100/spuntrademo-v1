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
        className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Outfit Calendar</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-medium">
            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

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
            const date = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              index + 1
            );
            const dateString = date.toISOString().split('T')[0];
            const specialDate = specialDates.find(d => d.date === dateString);
            
            return (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`aspect-square rounded-lg p-2 text-sm relative group ${
                  specialDate 
                    ? 'bg-purple-50 text-purple-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className="relative z-10">{index + 1}</span>
                {specialDate && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-purple-600 text-white rounded-lg transition-opacity">
                    <span className="text-xs text-center">
                      {specialDate.name}
                    </span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        <div className="mt-6 space-y-2">
          <h4 className="font-medium">Upcoming Special Events</h4>
          {specialDates.map(date => (
            <div
              key={date.date}
              className="flex items-center justify-between p-3 bg-purple-50 rounded-lg"
            >
              <div>
                <p className="font-medium text-purple-600">{date.name}</p>
                <p className="text-sm text-gray-600">{date.date}</p>
              </div>
              <p className="text-sm font-medium">{date.outfit}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}