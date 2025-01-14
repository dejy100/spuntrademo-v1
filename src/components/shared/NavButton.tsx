import React from 'react';

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export default function NavButton({ icon, label, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-2 text-gray-600 hover:text-purple-600"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
}