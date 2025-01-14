import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Gift, Users } from 'lucide-react';

export default function CommunityEvents() {
  const events = [
    {
      id: 1,
      name: 'Summer Style Festival',
      date: '2024-06-15',
      participants: 1250,
      reward: 'Exclusive Summer Collection'
    },
    {
      id: 2,
      name: 'Elemental Fashion Week',
      date: '2024-07-01',
      participants: 3000,
      reward: 'Limited Edition Items'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="font-semibold mb-4">Upcoming Events</h3>
      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-purple-600" />
              <h4 className="font-medium">{event.name}</h4>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <Users className="w-4 h-4" />
                <span>{event.participants.toLocaleString()} joined</span>
              </div>
              <div className="flex items-center gap-1 text-purple-600">
                <Gift className="w-4 h-4" />
                <span>{event.reward}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}