import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Upload, Info, Shirt } from 'lucide-react';
import { Product } from '../../types';

interface VirtualTryOnProps {
  product: Product;
  onClose: () => void;
}

export default function VirtualTryOn({ product, onClose }: VirtualTryOnProps) {
  const [currentStep, setCurrentStep] = useState<'intro' | 'size' | 'fitting'>('intro');
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: '',
    size: ''
  });

  const handleContinue = () => {
    if (currentStep === 'intro') {
      setCurrentStep('size');
    } else if (currentStep === 'size') {
      setCurrentStep('fitting');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex flex-col"
    >
      <header className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shirt className="w-5 h-5 text-purple-600" />
            <h1 className="text-xl font-semibold">Virtual Fitting Room</h1>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {currentStep === 'intro' && (
          <div className="max-w-md mx-auto px-4 py-12 text-center">
            <div className="mb-8">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-32 h-48 object-cover rounded-lg mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">Try Before You Buy</h2>
              <p className="text-gray-600">
                Get accurate size recommendations and see how this item looks on your virtual model
              </p>
            </div>

            <button
              onClick={handleContinue}
              className="w-full py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Get Started
            </button>

            <button 
              onClick={onClose}
              className="mt-4 text-gray-500 hover:text-gray-700"
            >
              Skip for Now
            </button>
          </div>
        )}

        {currentStep === 'size' && (
          <div className="max-w-md mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-6">Find Your Perfect Fit</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height
                </label>
                <input
                  type="text"
                  value={measurements.height}
                  onChange={e => setMeasurements(prev => ({ ...prev, height: e.target.value }))}
                  placeholder="Enter your height"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight
                </label>
                <input
                  type="text"
                  value={measurements.weight}
                  onChange={e => setMeasurements(prev => ({ ...prev, weight: e.target.value }))}
                  placeholder="Enter your weight"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Usual Size
                </label>
                <select
                  value={measurements.size}
                  onChange={e => setMeasurements(prev => ({ ...prev, size: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select your usual size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>

              <button
                onClick={handleContinue}
                className="w-full py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
              >
                Continue to Virtual Try-On
              </button>
            </div>
          </div>
        )}

        {currentStep === 'fitting' && (
          <div className="h-full flex">
            <div className="w-64 border-r border-gray-200 p-4">
              <div className="mb-6">
                <h3 className="font-medium mb-2">Selected Item</h3>
                <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-2">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-600">{product.name}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Size Recommendation</h3>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Size {measurements.size}</span>
                    <Info className="w-4 h-4 text-purple-600" />
                  </div>
                  <p className="text-xs text-gray-600">
                    Based on your measurements, we recommend size {measurements.size} for the best fit.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center max-w-md mx-auto p-8">
                <div className="w-64 h-96 bg-white rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1545178803-4056771d60a3?auto=format&fit=crop&q=80&w=400"
                    alt="Virtual Model"
                    className="max-h-full rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Here's how {product.name} looks on your virtual model
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
                >
                  Back to Product
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </motion.div>
  );
}