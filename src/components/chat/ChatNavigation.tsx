import React from 'react';
import { Home, Clock, Sparkles, User, Menu } from 'lucide-react';
import NavButton from '../shared/NavButton';

export default function ChatNavigation() {
  return (
    <div className="bg-white border-t">
      <div className="max-w-3xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <NavButton icon={<Home className="w-5 h-5" />} label="Home" />
          <NavButton icon={<Clock className="w-5 h-5" />} label="Recent" />
          <NavButton icon={<Sparkles className="w-5 h-5" />} label="Explore" />
          <NavButton icon={<User className="w-5 h-5" />} label="Me" />
          <NavButton icon={<Menu className="w-5 h-5" />} label="More" />
        </div>
      </div>
    </div>
  );
}