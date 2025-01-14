import React from 'react';
import { motion } from 'framer-motion';
import { Message } from '../../types';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          message.type === 'user'
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
            : 'bg-white shadow-md'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
}