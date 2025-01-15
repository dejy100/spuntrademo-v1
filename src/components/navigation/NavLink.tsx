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
      className={`
        flex flex-col md:flex-row items-center md:space-x-2 
        min-h-[44px] min-w-[44px] px-2 py-1 md:py-2
        transition-colors
        ${active ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}
      `}
    >
      {icon}
      <span className={`text-xs md:text-sm ${active ? 'font-medium' : ''}`}>
        {text}
      </span>
    </button>
  );
}