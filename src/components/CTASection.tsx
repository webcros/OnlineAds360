"use client";

import Link from "next/link";
import { Star, Check } from "lucide-react";
import { motion } from "framer-motion";

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
          Get everything you need to{" "}
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
            href="/plans-and-pricing"
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
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {/* Google Icon */}
            <div className="w-8 h-8 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
            </div>
            
            {/* Facebook Icon */}
            <div className="w-8 h-8 flex items-center justify-center">
                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437h-3.047v-3.49h3.047v-2.641c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
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
                <Star
                  key={i}
                  className="w-[15.75px] h-[14px] fill-[#FACC15] text-[#FACC15]"
                />
              ))}
            </div>
            <span className="text-[14px] leading-[20px] font-bold tracking-[-0.5px] text-[#6B7280]">
              (1,130)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
