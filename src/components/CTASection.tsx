'use client';

import Link from 'next/link';
import { Star, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[896px] mx-auto px-5 lg:px-20 text-center">
        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] font-semibold tracking-[-0.5px] text-[#1F2937] mb-12"
        >
          Get everything you need to{' '}
          <span className="text-[#2563EB]">manage and grow</span> your business.
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center w-[192.28px] h-[52px] bg-[#2563EB] text-white font-bold text-[18px] leading-[22px] tracking-[-0.5px] rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] hover:bg-blue-700 transition-all hover:scale-105 mb-6"
          >
            Plans & Pricing
          </Link>
        </motion.div>

        {/* Free Trial Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[16px] leading-[24px] font-bold tracking-[-0.5px] text-[#6B7280] mb-12"
        >
          Plus, get a free trial. No credit card required.
        </motion.p>

        {/* Rating */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2563EB] rounded flex items-center justify-center">
              <Check className="w-[7.5px] h-3 text-white" strokeWidth={3} />
            </div>
            <div className="w-6 h-6 bg-[#EF4444] rounded flex items-center justify-center">
              <svg width="11.44" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M5.99992 10.6667C8.94544 10.6667 11.3333 8.27885 11.3333 5.33333C11.3333 2.38781 8.94544 0 5.99992 0C3.0544 0 0.666588 2.38781 0.666588 5.33333C0.666588 8.27885 3.0544 10.6667 5.99992 10.6667Z" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Rating Details */}
          <div className="flex items-center gap-2">
            <span className="text-[16px] leading-[24px] font-bold tracking-[-0.5px] text-[#1F2937]">
              4.6
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-[15.75px] h-[14px] fill-[#FACC15] text-[#FACC15]" />
              ))}
            </div>
            <span className="text-[14px] leading-[20px] font-bold tracking-[-0.5px] text-[#6B7280]">
              (1,130)
            </span>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 opacity-50"
        >
          {['Capterra', 'GetApp', 'Software Advice', 'Top Rated'].map((badge, i) => (
            <span key={i} className="text-[18px] leading-[22px] font-bold tracking-[-0.5px] text-[#6B7280]">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
