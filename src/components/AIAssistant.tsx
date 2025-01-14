import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import ChatMessage from './chat/ChatMessage';
import { Message } from '../types';

const suggestedQuestions = [
  {
    id: '1',
    text: 'I need luggage accessories for holiday travel.'
  },
  {
    id: '2',
    text: "I'm looking for stylish gifts that fit my budget."
  },
  {
    id: '3',
    text: "What's a good, quality watch to invest in?"
  },
  {
    id: '4',
    text: 'What should I wear to a holiday party?'
  }
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const response = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: "I'd be happy to help you with that! Based on your question, I can provide personalized recommendations. Would you like to see some specific options?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-50 to-pink-50">
      {messages.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Style Assistant</h1>
            
            <div className="relative mt-8 mb-12">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything"
                className="w-full px-4 py-3 pr-12 bg-white rounded-full border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all"
              />
              <button
                onClick={() => handleSend()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {suggestedQuestions.map((question) => (
                <motion.button
                  key={question.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSend(question.text)}
                  className="p-4 bg-white rounded-2xl text-sm text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  {question.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="max-w-lg mx-auto space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="max-w-lg mx-auto relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-4 py-3 pr-12 bg-white rounded-full border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all"
              />
              <button
                onClick={() => handleSend()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 text-center text-xs text-gray-500">
        By submitting a search via the virtual style assistant, you agree to the information being processed according to our{' '}
        <a href="#" className="text-purple-600 hover:text-purple-700">Terms & Conditions</a>
        {' '}and{' '}
        <a href="#" className="text-purple-600 hover:text-purple-700">Privacy Notice</a>.
      </div>
    </div>
  );
}