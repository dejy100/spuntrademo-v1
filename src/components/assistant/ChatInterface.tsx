import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message } from '../../types';
import ChatHeader from '../chat/ChatHeader';
import ChatMessage from '../chat/ChatMessage';
import ChatInput from '../chat/ChatInput';
import SuggestedProducts from '../chat/SuggestedProducts';

interface ChatInterfaceProps {
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
  isLoading: boolean;
  onBack: () => void;
}

export default function ChatInterface({
  messages,
  input,
  setInput,
  handleSend,
  isLoading,
  onBack
}: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      <ChatHeader onBack={onBack} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <AnimatePresence>
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white shadow-md rounded-2xl px-4 py-3 flex gap-2">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce delay-100">●</span>
                  <span className="animate-bounce delay-200">●</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        <SuggestedProducts />
      </div>

      <ChatInput
        input={input}
        setInput={setInput}
        handleSend={handleSend}
      />
    </motion.div>
  );
}