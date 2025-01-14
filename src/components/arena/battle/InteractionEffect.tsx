```typescript
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface InteractionEffectProps {
  effect: string | null;
  duration: number;
}

export default function InteractionEffect({ effect, duration }: InteractionEffectProps) {
  if (!effect) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed inset-0 pointer-events-none flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-medium">{effect} Activated!</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
```