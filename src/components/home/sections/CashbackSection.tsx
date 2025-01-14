import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight } from 'lucide-react';

export default function CashbackSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl overflow-hidden">
          <div className="px-8 py-16 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Earn with Spuntra Cash Back
                  </h2>
                  <p className="text-white/80">
                    Get rewarded for your style. Earn cash back on every purchase.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Cash Back Earned</span>
                  <span className="text-white font-bold">$0.00</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="w-0 h-full bg-white rounded-full" />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-medium flex items-center gap-2 hover:shadow-lg transition-shadow"
              >
                Start Earning
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}