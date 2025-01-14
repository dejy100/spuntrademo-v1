import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-700">Find your item</h2>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for items (e.g., black t-shirt)"
          className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}