import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Droplet } from 'lucide-react';
import ElementalMixer from './ElementalMixer';
import FusionPreview from './FusionPreview';

interface FusionLabProps {
  playerArchetype: string;
}

export default function FusionLab({ playerArchetype }: FusionLabProps) {
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [fusionPower, setFusionPower] = useState(0);

  const handleFusion = () => {
    // Fusion logic here
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white rounded-lg">
          <Sparkles className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Elemental Fusion Lab</h3>
          <p className="text-gray-600">Combine elements to create unique styles</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ElementalMixer
          selectedElements={selectedElements}
          onElementSelect={(element) => 
            setSelectedElements(prev => [...prev, element])
          }
        />
        <FusionPreview
          elements={selectedElements}
          power={fusionPower}
          onFuse={handleFusion}
        />
      </div>
    </div>
  );
}