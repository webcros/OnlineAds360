'use client';

import { ArrowRight } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-[#1F2937] py-12 -mt-28 relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Avatars and text */}
          <div className="flex items-center gap-5">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
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
                </div>
              ))}
            </div>
            {/* Trust text */}
            <p className="text-white text-sm md:text-base">
              Trusted by <span className="font-semibold">15,000+</span> businesses worldwide to manage and grow their operations
            </p>
          </div>

          {/* Right side - CTA */}
          <button className="flex items-center gap-2 text-[#103AB9] font-semibold text-base hover:gap-3 transition-all">
            Tour by industry
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
