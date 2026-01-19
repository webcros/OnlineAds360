'use client';

import Link from 'next/link';
import { Scissors, Store, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IndustrySection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 40%, #F8FAFC 70%, #F1F5F9 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] font-semibold tracking-[-0.5px] text-[#1E293B] text-center mb-16 md:mb-32"
        >
          See how Marketing 360® works for your business.
        </motion.h2>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mb-24">
          {/* Left Card - Salon */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center md:block md:mt-[-48px] md:ml-[50px] lg:ml-[107px]"
          >
            {/* Icon Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              className="absolute -left-4 md:-left-5 -top-4 md:-top-2 w-[70px] md:w-[86px] h-[70px] md:h-[86px] bg-white rounded-[18px] md:rounded-[21.5px] shadow-[0px_7.16667px_10.75px_rgba(0,0,0,0.1),0px_17.9167px_26.875px_rgba(0,0,0,0.1)] flex items-center justify-center z-10"
            >
              <Scissors className="w-6 md:w-8 h-6 md:h-8 text-[#3B82F6]" strokeWidth={2.5} />
            </motion.div>
            
            <div className="w-full max-w-[320px] h-[224px] bg-white rounded-[24px] shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] overflow-hidden group">
              <img 
                src="/images/1.png" 
                alt="Salon" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Center Card - Retail */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center md:block"
          >
            {/* Icon Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: 45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
              className="absolute right-0 md:right-0 -bottom-6 md:-bottom-8 w-[50px] md:w-[58px] h-[50px] md:h-[58px] bg-white rounded-[12px] md:rounded-[14.5px] shadow-[0px_4.83333px_7.25px_rgba(0,0,0,0.1),0px_12.0833px_18.125px_rgba(0,0,0,0.1)] flex items-center justify-center z-10"
            >
              <Store className="w-5 md:w-6 h-5 md:h-6 text-[#3B82F6]" strokeWidth={2.5} />
            </motion.div>
            
            <div className="w-full max-w-[320px] h-[224px] bg-white rounded-[24px] shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] overflow-hidden group">
              <img 
                src="/images/2..png" 
                alt="Retail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Right Card - Construction */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative flex justify-center md:block md:mt-[-38px] md:mr-[50px] lg:mr-[107px]"
          >
            {/* Icon Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: 45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
              className="absolute -right-4 md:-right-5 -top-6 md:-top-8 w-[60px] md:w-[68px] h-[60px] md:h-[68px] bg-white rounded-[15px] md:rounded-[17px] shadow-[0px_5.66667px_8.5px_rgba(0,0,0,0.1),0px_14.1667px_21.25px_rgba(0,0,0,0.1)] flex items-center justify-center z-10"
            >
              <Wrench className="w-6 md:w-7 h-6 md:h-7 text-[#3B82F6]" strokeWidth={2.5} />
            </motion.div>
            
            <div className="w-full max-w-[320px] h-[224px] bg-white rounded-[24px] shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] overflow-hidden group">
              <img 
                src="/images/3.png" 
                alt="Construction" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>

        {/* Find Industry Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center"
        >
          <Link 
            href="/services"
            className="inline-flex items-center justify-center w-[206.77px] h-[52px] bg-white border-2 border-[#3B82F6] rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:bg-blue-50 transition-all hover:scale-105"
          >
            <span className="text-[16px] leading-[19px] font-bold tracking-[-0.5px] text-[#3B82F6]">
              Find your industry
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
