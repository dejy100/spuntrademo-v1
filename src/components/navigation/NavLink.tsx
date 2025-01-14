import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  active?: boolean;
}

export default function NavLink({ icon, text, onClick, active }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1 transition-colors ${
        active 
          ? 'text-purple-600' 
          : 'text-gray-700 hover:text-purple-600'
      }`}
    >
      {icon}
      <span className={`${active ? 'font-medium' : ''}`}>{text}</span>
    </button>
  );
}