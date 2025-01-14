import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ContinueButtonProps {
  to?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function ContinueButton({ to, onClick, children = 'Continue' }: ContinueButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="w-full max-w-md mx-auto py-3.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg"
    >
      {children}
      <ChevronRight className="w-4 h-4" />
    </motion.button>
  );
}