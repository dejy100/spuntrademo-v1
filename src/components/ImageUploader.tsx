import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Sparkles } from 'lucide-react';
import { PersonalityTrait } from '../types';
import { motion } from 'framer-motion';

interface ImageUploaderProps {
  onAnalysisComplete: (traits: PersonalityTrait[]) => void;
}

interface AnalysisStep {
  label: string;
  duration: number;
}

const analysisSteps: AnalysisStep[] = [
  { label: "Analyzing color palette...", duration: 1500 },
  { label: "Detecting style elements...", duration: 1500 },
  { label: "Identifying patterns...", duration: 1000 },
  { label: "Matching with archetypes...", duration: 1000 },
  { label: "Finalizing results...", duration: 1000 }
];

export default function ImageUploader({ onAnalysisComplete }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      analyzeImage(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      analyzeImage(files[0]);
    }
  };

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    let totalTime = 0;

    for (let i = 0; i < analysisSteps.length; i++) {
      setCurrentStep(i);
      const step = analysisSteps[i];
      
      // Progress animation for current step
      const startProgress = (i / analysisSteps.length) * 100;
      const endProgress = ((i + 1) / analysisSteps.length) * 100;
      
      const startTime = Date.now();
      while (Date.now() - startTime < step.duration) {
        const elapsed = Date.now() - startTime;
        const stepProgress = elapsed / step.duration;
        const currentProgress = startProgress + (endProgress - startProgress) * stepProgress;
        setProgress(currentProgress);
        await new Promise(r => setTimeout(r, 50));
      }
    }

    // Mock result based on random archetype
    const archetypes = ["Emberflare", "Sylvane", "Terraforge", "Vermiluxe", "Aquarise"];
    const randomArchetype = archetypes[Math.floor(Math.random() * archetypes.length)];

    onAnalysisComplete([{
      trait: "archetype",
      value: randomArchetype
    }]);
  };

  const analyzeImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      runAnalysis();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {!image ? (
        <div
          className={`relative border-2 border-dashed rounded-xl p-8 text-center ${
            isDragging
              ? 'border-purple-500 bg-purple-50'
              : 'border-gray-300 hover:border-purple-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileSelect}
            accept="image/*"
          />
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-100 mx-auto flex items-center justify-center">
              <Upload className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <p className="text-lg font-medium">Upload your photo</p>
              <p className="text-sm text-gray-500 mt-1">
                Drag and drop or click to select
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-64 object-cover"
            />
            {isAnalyzing && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mb-4"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
                <div className="w-full max-w-md space-y-4">
                  <p className="text-center font-medium">
                    {analysisSteps[currentStep].label}
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}