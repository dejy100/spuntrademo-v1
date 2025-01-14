import React from 'react';
import { motion } from 'framer-motion';

export default function OpponentCard() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4">
      <h3 className="font-medium mb-4">Opponent</h3>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
            alt="Opponent"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">Sarah M.</p>
          <p className="text-sm text-gray-600">Water Archetype</p>
        </div>
      </div>
    </div>
  );
}