import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { PersonalityTrait } from '../types';
import ImageUploader from './ImageUploader';
import QuizQuestions from './QuizQuestions';
import { useNavigate } from 'react-router-dom';

export default function PersonalityQuiz() {
  const [uploadMode, setUploadMode] = useState(false);
  const navigate = useNavigate();

  const handleQuizComplete = (traits: PersonalityTrait[]) => {
    // Navigate to results page with the archetype data
    const archetypeResult = traits.find(trait => trait.trait === 'archetype');
    navigate('/archetype-result', { 
      state: { 
        archetypeResult: {
          name: archetypeResult?.value,
          element: archetypeResult?.element,
          description: archetypeResult?.description,
          traits: archetypeResult?.details?.traits || [],
          scores: archetypeResult?.details?.scores || {
            creativity: 85,
            confidence: 92,
            versatility: 78,
            uniqueness: 88,
          },
          symbolImage: `https://via.placeholder.com/300x300?text=${archetypeResult?.value}`,
        }
      } 
    });
  };

  const handleImageAnalysis = (traits: PersonalityTrait[]) => {
    // Navigate to results page with the archetype data
    const archetypeResult = traits.find(trait => trait.trait === 'archetype');
    navigate('/archetype-result', { 
      state: { 
        archetypeResult: {
          name: archetypeResult?.value,
          element: archetypeResult?.element,
          description: archetypeResult?.description,
          traits: archetypeResult?.details?.traits || [],
          scores: archetypeResult?.details?.scores || {
            creativity: 85,
            confidence: 92,
            versatility: 78,
            uniqueness: 88,
          },
          symbolImage: `https://via.placeholder.com/300x300?text=${archetypeResult?.value}`,
        }
      } 
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
          <Sparkles className="w-8 h-8 text-purple-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Discover Your Style Personality</h1>
        <p className="text-gray-600 mb-6">
          Let's find out what makes your style unique
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setUploadMode(false)}
            className={`px-6 py-3 rounded-full transition-all ${
              !uploadMode
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Take Quiz
          </button>
          <button
            onClick={() => setUploadMode(true)}
            className={`px-6 py-3 rounded-full transition-all ${
              uploadMode
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Upload Photo
          </button>
        </div>
      </div>

      {uploadMode ? (
        <ImageUploader onAnalysisComplete={handleImageAnalysis} />
      ) : (
        <QuizQuestions onQuizComplete={handleQuizComplete} />
      )}
    </div>
  );
}