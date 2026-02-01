'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20 pt-20 pb-0">
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-[896px] mx-auto"
        >
          {/* Badge */}
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-inter font-bold text-[12px] leading-[15px] tracking-[0.7px] text-center text-[#4338CA] mb-6"
          >
            #1 BUSINESS PLATFORM FOR ENTREPRENEURS
          </motion.p>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-inter font-black text-[36px] md:text-[60px] leading-[45px] md:leading-[75px] tracking-[-0.5px] text-center text-[#374151] mb-6"
          >
            Get everything you need to{' '}
            <span className="hidden md:inline"><br /></span>
            manage and grow your{' '}
            <span className="hidden md:inline"><br /></span>
            <span className="text-[#103AB9] ml-2 md:ml-0">business</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-inter font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[-0.5px] text-center text-[#4B5563] mb-10 max-w-[658px] mx-auto"
          >
            Transform your business operations with our all-in-one platform. From
            websites to marketing automation, we&apos;ve got everything covered.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <Link 
              href="/plans-and-pricing"
              className="w-[207px] h-[60px] bg-[#2563EB] rounded-lg shadow-[0px_8px_10px_rgba(37,99,235,0.3),0px_20px_25px_rgba(37,99,235,0.3)] hover:bg-blue-700 transition-all flex items-center justify-center hover:scale-105"
            >
              <span className="font-inter font-bold text-[18px] leading-[22px] tracking-[-0.5px] text-center text-white">
                Get Started Free
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="relative mt-16 max-w-[1000px] mx-auto"
        >
          {/* Main Dashboard Image */}
          <div className="relative rounded-xl overflow-hidden flex items-center justify-center group aspect-[16/10]">
            <Image
              src="/images/Group1.svg"
              alt="Dashboard Preview"
              fill
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
