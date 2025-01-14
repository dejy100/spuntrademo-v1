import React from 'react';
import { Bell } from 'lucide-react';

export default function TrendAlert() {
  return (
    <div className="relative group">
      <div className="flex items-center cursor-pointer">
        <div className="relative px-1">
          <Bell size={20} className="text-gray-600 group-hover:text-purple-600 transition-colors" />
          {/* Trend line overlay */}
          <div className="absolute -right-0.5 bottom-1 w-2 h-2">
            <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute right-0 mt-2 w-48 opacity-0 transform translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
        <div className="bg-gray-800 text-white text-xs rounded-md py-1.5 px-3 text-center shadow-lg">
          Trend Monitoring & Alerts
        </div>
      </div>
    </div>
  );
}
