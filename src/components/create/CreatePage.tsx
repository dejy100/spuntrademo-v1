import React from 'react';
import { X, Shirt } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CreatePage() {
  const navigate = useNavigate();
  
  return (
    <div className="h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-5">
        <button 
          onClick={() => navigate(-1)}
          className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <button 
          className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <Shirt className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
