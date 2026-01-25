'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MarketingTeam() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[768px] mx-auto px-5 text-center"
      >
        {/* Team Image - 64px height */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <img 
            src="/images/Group2.png" 
            alt="Marketing Team" 
            className="h-16 w-auto"
          />
        </motion.div>

        {/* Headline - Responsive font size */}
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[32px] md:text-[48px] leading-[40px] md:leading-[48px] font-black tracking-[-0.5px] text-[#111827] mb-8 max-w-[724px] mx-auto"
        >
          Turbocharge your marketing{' '}
          <span className="hidden md:inline"><br /></span>
          with your own Marketing Team
        </motion.h2>

        {/* Description - Responsive font size */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-bold tracking-[-0.5px] text-[#4B5563] mb-10 max-w-[753px] mx-auto"
        >
          Leverage cutting-edge AI tools combined with dedicated marketing experts who understand your business. Get personalized strategies, automated campaigns, and hands-on support to accelerate your growth.
        </motion.p>

        {/* Button - 180px width, 60px height, 18px text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link 
            href="/plans-and-pricing"
            className="w-[180px] h-[60px] bg-[#2563EB] text-white font-bold text-[18px] leading-[22px] tracking-[-0.5px] rounded-lg shadow-[0_8px_10px_rgba(37,99,235,0.3),0_20px_25px_rgba(37,99,235,0.3)] hover:bg-blue-700 transition-all flex items-center justify-center mx-auto hover:scale-105"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
