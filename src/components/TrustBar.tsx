'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustBar() {
  return (
    <section className="bg-[#1F2937] py-6 -mt-16 relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left side - Avatars and text */}
          <div className="flex items-center gap-5">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, x: -10 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="w-12 h-12 rounded-full border-2 border-[#1F2937] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][i - 1]} 0%, 
                      ${['#FFA07A', '#2ECC71', '#3498DB', '#27AE60'][i - 1]} 100%)`,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                    {['JD', 'AS', 'MK', 'RL'][i - 1]}
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Trust text */}
            <motion.p 
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white text-sm md:text-base"
            >
              Trusted by <span className="font-semibold">15,000+</span> businesses worldwide to manage and grow their operations
            </motion.p>
          </div>

          {/* Right side - CTA */}
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-2 text-[#103AB9] font-semibold text-base hover:gap-3 transition-all"
          >
            Tour by industry
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
