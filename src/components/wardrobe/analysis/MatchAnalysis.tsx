import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Plus } from 'lucide-react';

interface MatchAnalysisProps {
  imageUrl: string;
  onCreateOutfit: () => void;
  onAddToWardrobe: () => void;
}

interface MatchCategory {
  name: string;
  score: number;
  color: string;
}

const categories: MatchCategory[] = [
  { name: 'Personality', score: 85, color: 'bg-purple-500' },
  { name: 'Color', score: 92, color: 'bg-pink-500' },
  { name: 'Body Shape', score: 78, color: 'bg-blue-500' },
  { name: 'Print & Pattern', score: 88, color: 'bg-green-500' },
];

export default function MatchAnalysis({ imageUrl, onCreateOutfit, onAddToWardrobe }: MatchAnalysisProps) {
  const overallScore = Math.round(
    categories.reduce((acc, cat) => acc + cat.score, 0) / categories.length
  );

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="aspect-video rounded-lg md:rounded-xl overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt="Analyzed item"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg md:rounded-xl p-3 md:p-4">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h3 className="text-sm md:text-base font-medium">Style Match Score</h3>
          <span className="text-xl md:text-2xl font-bold text-purple-600">{overallScore}%</span>
        </div>

        <div className="space-y-3 md:space-y-4">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="flex justify-between text-xs md:text-sm mb-1">
                <span>{category.name}</span>
                <span className="font-medium">{category.score}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${category.score}%` }}
                  className={`h-full ${category.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 md:gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCreateOutfit}
          className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 md:py-2.5 px-3 md:px-4 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-colors"
        >
          <PenTool className="w-3.5 h-3.5 md:w-4 md:h-4" />
          Create Outfit
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAddToWardrobe}
          className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 bg-white hover:bg-gray-50 border border-gray-200 py-2 md:py-2.5 px-3 md:px-4 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-colors"
        >
          <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />
          Add to Wardrobe
        </motion.button>
      </div>
    </div>
  );
}