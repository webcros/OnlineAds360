'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AIPlatformsSection() {
  const aiPlatforms = ['ChatGPT', 'Gemini', 'Perplexity', 'Claude', 'Copilot'];
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPlatform = aiPlatforms[currentPlatformIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentPlatform) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && displayedText === '') {
        // Move to next platform
        setIsDeleting(false);
        setCurrentPlatformIndex((prev) => (prev + 1) % aiPlatforms.length);
      } else if (isDeleting) {
        // Delete character
        setDisplayedText(currentPlatform.substring(0, displayedText.length - 1));
      } else {
        // Type character
        setDisplayedText(currentPlatform.substring(0, displayedText.length + 1));
      }
    }, isDeleting ? typingSpeed : displayedText === '' ? pauseBeforeType : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPlatformIndex, aiPlatforms]);

  return (
    <section className="bg-gradient-to-b from-[#EFF6FF] to-white py-24">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[32px] md:text-[60px] leading-[40px] md:leading-[75px] font-bold tracking-[-0.5px] text-[#111827] text-center mb-16 max-w-[1111px] mx-auto"
        >
          Get discovered on the top AI platforms like{' '}
          <span className="text-[#2563EB] underline decoration-[#2563EB] underline-offset-4 inline-block w-full md:w-[280px] text-center md:text-left">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h2>

        {/* Three Cards Demo */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 mb-20 min-h-auto lg:min-h-[400px]">
          {/* Curved dotted line - Hidden on mobile */}
          <motion.svg 
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1, pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
            className="hidden lg:block absolute left-[288px] top-1/2 w-[160px] h-[100px] -translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}
          >
            <path
              d="M 0 50 Q 80 10, 160 50"
              stroke="#93C5FD"
              strokeWidth="2"
              strokeDasharray="8,8"
              fill="none"
            />
          </motion.svg>

          {/* Curved dotted line - Hidden on mobile */}
          <motion.svg 
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1, pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="hidden lg:block absolute right-[320px] top-1/2 w-[160px] h-[100px] -translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}
          >
            <path
              d="M 0 50 Q 80 10, 160 50"
              stroke="#93C5FD"
              strokeWidth="2"
              strokeDasharray="8,8"
              fill="none"
            />
          </motion.svg>

          {/* Left Card - AI Text Generator */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:absolute lg:left-0 lg:top-8 w-full max-w-[288px] bg-white border border-[#F3F4F6] shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-10">
              <div className="w-6 h-6 bg-[#F3E8FF] rounded-full flex items-center justify-center">
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                  <path d="M0 0H15V12H0V0Z" fill="#9333EA"/>
                </svg>
              </div>
              <span className="text-[16px] leading-[24px] font-semibold tracking-[-0.5px] text-[#111827]">
                AI Text Generator
              </span>
            </div>
            
            <div className="mb-6">
              <label className="block mb-1">
                <span className="text-[14px] leading-[17px] font-bold tracking-[-0.5px] text-[#4B5563]">
                  Describe what this title will be
                </span>
              </label>
              <label className="block mb-3">
                <span className="text-[14px] leading-[17px] font-bold tracking-[-0.5px] text-[#4B5563]">
                  about:
                </span>
              </label>
              <textarea 
                className="w-full h-20 bg-white border border-[#E5E7EB] rounded-lg p-3 text-[14px] leading-[20px] font-bold tracking-[-0.5px] text-[#ADAEBC] resize-none"
                value="Professional landscaping services for residential properties..."
                readOnly
              />
            </div>
            
            <button className="w-full h-9 bg-[#2563EB] rounded-lg text-white text-[14px] leading-[17px] font-bold tracking-[-0.5px] hover:scale-105 transition-transform">
              Generate
            </button>
          </motion.div>

          {/* Center Card - Website Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 w-full max-w-[384px] bg-white border border-[#E5E7EB] shadow-[0px_8px_10px_rgba(0,0,0,0.1),0px_20px_25px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden"
          >
            {/* Browser Header */}
            <div className="bg-[#F9FAFB] border-b border-[#E5E7EB] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-[#F87171] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#FACC15] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#4ADE80] rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 ml-2">
                  <span className="text-[12px] leading-[15px] font-bold tracking-[-0.5px] text-[#6B7280]">
                    greenvalleylandscaping.com
                  </span>
                </div>
              </div>
            </div>

            {/* Website Content */}
            <div className="p-6">
              <img 
                src="/images/Green.png" 
                alt="Landscaping" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              
              <h3 className="text-[20px] leading-[28px] font-bold tracking-[-0.5px] text-[#111827] mb-4">
                Professional Landscaping Services
              </h3>
              
              <p className="text-[14px] leading-[20px] font-bold tracking-[-0.5px] text-[#4B5563] mb-6">
                Transform your outdoor space with our expert landscaping and garden design services.
              </p>
              
              <button className="px-6 h-9 bg-[#16A34A] rounded-lg text-white text-[14px] leading-[17px] font-bold tracking-[-0.5px] hover:scale-105 transition-transform">
                Get Free Quote
              </button>
            </div>
          </motion.div>

          {/* Right Card - AI Search Result */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative lg:absolute lg:right-0 lg:top-8 w-full max-w-[320px] bg-white border border-[#F3F4F6] shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-10">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M0 0H20V16H0V0Z" fill="#2563EB"/>
              </svg>
              <span className="text-[14px] leading-[20px] font-bold tracking-[-0.5px] text-[#374151]">
                AI Search Result
              </span>
            </div>
            
            <div className="flex gap-3">
              <img 
                src="/images/Green.png" 
                alt="Green Valley Logo" 
                className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
              />
              
              <div>
                <h4 className="text-[14px] leading-[20px] font-semibold tracking-[-0.5px] text-[#111827] mb-1">
                  Green Valley Landscaping
                </h4>
                
                <a href="#" className="text-[12px] leading-[16px] font-bold tracking-[-0.5px] text-[#2563EB] mb-2 block">
                  greenvalleylandscaping.com
                </a>
                
                <p className="text-[14px] leading-[23px] font-bold tracking-[-0.5px] text-[#4B5563] mb-4">
                  Professional landscaping company specializing in garden design, lawn maintenance, and outdoor transformation services for residential properties.
                </p>
                
                <span className="text-[12px] leading-[16px] font-bold tracking-[-0.5px] text-[#9CA3AF]">
                  1 week ago
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16 max-w-[897px] mx-auto"
        >
          <p className="text-[20px] leading-[33px] font-bold tracking-[-0.5px] text-[#64748B]">
            Optimize for the future of AI-driven search. <span className="text-[#111827]">OnlineAds360</span> automatically helps your business get found in AI-generated responses by:
          </p>
        </motion.div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#F3F4F6] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-xl p-8 min-h-[182px] flex items-center justify-center hover:shadow-lg transition-shadow"
          >
            <p className="text-[16px] leading-[19px] font-bold tracking-[-0.5px] text-[#374151] text-center">
              Keeping your business information consistent and up to date across the web
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-[#F3F4F6] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-xl p-8 min-h-[182px] flex items-center justify-center hover:shadow-lg transition-shadow"
          >
            <p className="text-[16px] leading-[19px] font-bold tracking-[-0.5px] text-[#374151] text-center">
              Adding schema markup to your website for better search and AI visibility
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-[#F3F4F6] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-xl p-8 min-h-[182px] flex items-center justify-center hover:shadow-lg transition-shadow"
          >
            <p className="text-[16px] leading-[19px] font-bold tracking-[-0.5px] text-[#374151] text-center">
              Claiming and optimizing your business listings across top directories
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-[51.8px] h-[60px] bg-[#2563EB] rounded-xl text-white text-[18px] leading-[22px] font-semibold tracking-[-0.5px] hover:bg-[#1d4ed8] transition-colors"
          >
            Plans & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
