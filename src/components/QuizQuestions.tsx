import React, { useState } from 'react';
import { PersonalityTrait } from '../types';
import { calculateArchetype, archetypeDetails } from '../services/personalityMapping';

const questions = [
  {
    id: 1,
    question: "What's your go-to style for a party?",
    trait: "element",
    options: [
      { text: "Bold and experimental with statement pieces", score: 5, element: "Fire" },
      { text: "Flowy and natural with organic textures", score: 4, element: "Wood" },
      { text: "Classic and timeless with perfect fit", score: 3, element: "Earth" },
      { text: "Sleek and structured with clean lines", score: 2, element: "Metal" },
      { text: "Elegant and adaptable with fluid silhouettes", score: 1, element: "Water" }
    ]
  },
  {
    id: 2,
    question: "Which color palette speaks to you most?",
    trait: "element",
    options: [
      { text: "Warm and vibrant: Reds, Oranges, Yellows", score: 5, element: "Fire" },
      { text: "Natural and fresh: Greens, Browns, Sage", score: 4, element: "Wood" },
      { text: "Grounding and warm: Terracotta, Sand, Cream", score: 3, element: "Earth" },
      { text: "Modern and cool: Silver, White, Gray", score: 2, element: "Metal" },
      { text: "Deep and mysterious: Blues, Purples, Black", score: 1, element: "Water" }
    ]
  },
  {
    id: 3,
    question: "How do you approach getting dressed in the morning?",
    trait: "element",
    options: [
      { text: "I love creating exciting, unexpected combinations", score: 5, element: "Fire" },
      { text: "I choose what feels natural and comfortable", score: 4, element: "Wood" },
      { text: "I follow my tried-and-true outfit formulas", score: 3, element: "Earth" },
      { text: "I plan minimal, efficient looks", score: 2, element: "Metal" },
      { text: "I adapt my style to my mood and plans", score: 1, element: "Water" }
    ]
  },
  {
    id: 4,
    question: "What's your ideal shopping experience?",
    trait: "element",
    options: [
      { text: "Discovering unique pieces that stand out", score: 5, element: "Fire" },
      { text: "Finding sustainable, eco-friendly options", score: 4, element: "Wood" },
      { text: "Investing in quality, timeless pieces", score: 3, element: "Earth" },
      { text: "Choosing precise, well-crafted items", score: 2, element: "Metal" },
      { text: "Exploring versatile, transformable pieces", score: 1, element: "Water" }
    ]
  },
  {
    id: 5,
    question: "What's your style priority?",
    trait: "element",
    options: [
      { text: "Making a bold, memorable impression", score: 5, element: "Fire" },
      { text: "Expressing authenticity and creativity", score: 4, element: "Wood" },
      { text: "Maintaining timeless elegance", score: 3, element: "Earth" },
      { text: "Achieving perfect polish and precision", score: 2, element: "Metal" },
      { text: "Being ready for any occasion", score: 1, element: "Water" }
    ]
  }
];

interface QuizQuestionsProps {
  onQuizComplete: (traits: PersonalityTrait[]) => void;
}

export default function QuizQuestions({ onQuizComplete }: QuizQuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [elementScores, setElementScores] = useState<Record<string, number>>({
    Fire: 0,
    Wood: 0,
    Earth: 0,
    Metal: 0,
    Water: 0
  });

  const handleAnswer = (score: number, element: string) => {
    // Update element scores
    setElementScores(prev => ({
      ...prev,
      [element]: prev[element] + score
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(curr => curr + 1);
    } else {
      // Calculate final archetype using the mapping service
      const result = calculateArchetype({
        elementScores: elementScores,
        // Mock some additional personality data for richer results
        bigFive: {
          openness: elementScores.Fire / 25, // Normalize to 0-1 range
          conscientiousness: elementScores.Metal / 25,
          extraversion: elementScores.Fire / 25,
          agreeableness: elementScores.Water / 25,
          neuroticism: elementScores.Earth / 25
        },
        mbti: determineMBTI(elementScores)
      });

      // Get detailed archetype information
      const archetypeInfo = archetypeDetails[result.archetype as keyof typeof archetypeDetails];

      onQuizComplete([{
        trait: "archetype",
        value: result.archetype,
        description: archetypeInfo.description,
        element: result.element,
        details: archetypeInfo
      }]);
    }
  };

  // Helper function to determine MBTI based on element scores
  const determineMBTI = (scores: Record<string, number>): string => {
    return [
      scores.Fire > scores.Wood ? 'E' : 'I',
      scores.Water > scores.Earth ? 'N' : 'S',
      scores.Metal > scores.Wood ? 'T' : 'F',
      scores.Metal > scores.Water ? 'J' : 'P'
    ].join('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-purple-600">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-600 rounded-full h-2 transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-6">
        {questions[currentQuestion].question}
      </h2>

      <div className="space-y-3">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.score, option.element)}
            className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}