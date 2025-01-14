import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Brain, ChevronRight } from 'lucide-react';
import PageContainer from '../shared/PageContainer';
import PageHeader from '../shared/PageHeader';
import ContinueButton from '../shared/ContinueButton';
import { useNavigate } from 'react-router-dom';

export default function QuizIntro() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <PageHeader
        title="Ready to Find Your Element?"
        description="Take our personality quiz to discover your fashion archetype"
      />

      <div className="space-y-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Quick & Fun</h3>
              <p className="text-sm text-gray-600">Takes only 3-5 minutes</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Personality-Based</h3>
              <p className="text-sm text-gray-600">No fashion knowledge needed</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Your Style Journey Begins</h3>
          <p className="text-gray-600">
            Answer fun questions about your personality and discover your unique fashion element
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-4 right-4 flex justify-center">
        <ContinueButton onClick={() => navigate('/quiz')}>Start Quiz</ContinueButton>
      </div>
    </PageContainer>
  );
}