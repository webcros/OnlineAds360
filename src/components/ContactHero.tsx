'use client';

import { MessageSquare, Headset, Calendar, Mail } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function ContactHero() {
  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -20 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
        delay: 0.2 + i * 0.1
      }
    })
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#EFF6FF] via-white to-white py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[576px] text-center lg:text-left"
        >
          <h1 className="text-[36px] md:text-[48px] font-bold text-[#1E293B] leading-[48px] tracking-[-0.5px] mb-6">
            Talk to a Marketing<br className="hidden md:block" /> Pro
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#4B5563] leading-[28px] tracking-[-0.5px]">
            Whether you&apos;re exploring our platform or need support with your account, our team is here to help. Reach Sales or Client Services, or browse our help center.
          </p>
        </motion.div>

        {/* Right side graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-[280px] md:w-[350px] aspect-square bg-[#E0F2FE] rounded-[48px] flex items-center justify-center"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[MessageSquare, Headset, Calendar, Mail].map((Icon, i) => (
              <motion.div 
                key={i}
                custom={i}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] bg-white rounded-2xl shadow-[0px_4px_12px_rgba(37,99,235,0.08)] flex items-center justify-center text-[#2563EB] transition-transform hover:scale-110 hover:shadow-lg"
              >
                <Icon size={28} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
