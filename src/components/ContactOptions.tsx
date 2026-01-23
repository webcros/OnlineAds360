'use client';

import { TrendingUp, Headset } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function ContactOptions() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1280px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Sales Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white border-2 border-[#E5E7EB] rounded-2xl p-8 md:p-10 h-[332px] flex flex-col relative transition-all hover:shadow-lg hover:border-blue-200 group"
        >
          <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center text-white mb-6 transition-transform duration-500 group-hover:scale-110">
            <TrendingUp size={24} />
          </div>
          <h2 className="text-[24px] font-bold text-[#1E293B] leading-[32px] tracking-[-0.5px] mb-3">
            Talk to Sales
          </h2>
          <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px] max-w-[465px] mb-8">
            Have questions about pricing, demos, or how our platform fits your business? Our sales team is ready to help you find the perfect solution.
          </p>
          <div className="mt-auto">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/plans-and-pricing"
                className="block w-full h-[48px] bg-[#2563EB] text-white font-semibold text-[16px] leading-[48px] rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                Plans & Pricing
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Support Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white border-2 border-[#E5E7EB] rounded-2xl p-8 md:p-10 h-[332px] flex flex-col relative transition-all hover:shadow-lg hover:border-green-200 group"
        >
          <div className="w-14 h-14 bg-[#DCFCE7] rounded-xl flex items-center justify-center text-[#16A34A] mb-6 transition-transform duration-500 group-hover:scale-110">
            <Headset size={24} />
          </div>
          <h2 className="text-[24px] font-bold text-[#1E293B] leading-[32px] tracking-[-0.5px] mb-3">
            Get Support
          </h2>
          <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px] max-w-[466px] mb-8">
            Existing customer? Get help with your account, technical issues, or access our comprehensive help center for quick answers.
          </p>
          <div className="mt-auto">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="block w-full h-[48px] border border-[#E5E7EB] text-black font-semibold text-[16px] leading-[48px] rounded-lg text-center hover:bg-gray-50 transition-all"
              >
                Contact Support
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
