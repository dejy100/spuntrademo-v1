import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePage() {
  const navigate = useNavigate();
  
  return (
    <div className="h-screen bg-white">
      Create Page
    </div>
  );
}
