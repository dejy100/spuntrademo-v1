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
    <div className="space-y-6">
      <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt="Analyzed item"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Style Match Score</h3>
          <span className="text-2xl font-bold text-purple-600">{overallScore}%</span>
        </div>

        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="flex justify-between text-sm mb-1">
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

      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={onCreateOutfit}
          className="flex-1 py-3 bg-purple-600 text-white rounded-xl flex items-center justify-center gap-2"
        >
          <PenTool className="w-4 h-4" />
          Create Outfit
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={onAddToWardrobe}
          className="flex-1 py-3 border-2 border-purple-600 text-purple-600 rounded-xl flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add to Wardrobe
        </motion.button>
      </div>
    </div>
  );
}