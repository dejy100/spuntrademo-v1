import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';

interface FilterSectionProps {
  selectedMood: string;
  setSelectedMood: (mood: string) => void;
  selectedOccasion: string;
  setSelectedOccasion: (occasion: string) => void;
}

const moods = ['Casual', 'Elegant', 'Playful', 'Professional', 'Romantic'];
const occasions = ['Everyday', 'Work', 'Party', 'Date Night', 'Weekend'];
const categories = ['Clothes', 'Bags', 'Shoes', 'Accessories', 'Essentials'];
const brands = ['SAINT LAURENT', 'JACQUEMUS', 'THE ROW', 'GUCCI', 'PRADA'];

export default function FilterSection({
  selectedMood,
  setSelectedMood,
  selectedOccasion,
  setSelectedOccasion
}: FilterSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-64 flex-shrink-0"
    >
      <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-purple-600" />
          <h2 className="font-semibold">Filters</h2>
        </div>

        <div className="space-y-6">
          <FilterGroup
            title="BY MOOD"
            items={moods}
            selected={selectedMood}
            onSelect={setSelectedMood}
          />

          <FilterGroup
            title="BY OCCASION"
            items={occasions}
            selected={selectedOccasion}
            onSelect={setSelectedOccasion}
          />

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">CATEGORIES</h3>
            {categories.map(category => (
              <button
                key={category}
                className="text-sm text-gray-600 hover:text-purple-600 block"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">BRANDS</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search brands"
                className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded-lg text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            {brands.map(brand => (
              <button
                key={brand}
                className="text-sm text-gray-600 hover:text-purple-600 block"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FilterGroup({
  title,
  items,
  selected,
  onSelect
}: {
  title: string;
  items: string[];
  selected: string;
  onSelect: (item: string) => void;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <button
            key={item}
            onClick={() => onSelect(item === selected ? '' : item)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              item === selected
                ? 'bg-purple-600 text-white'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}