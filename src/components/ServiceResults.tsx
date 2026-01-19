'use client';

import Image from 'next/image';
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechFlow Solutions',
    text: '"Marketing360 helped us triple our leads in just 6 months with their expert team and platform."',
    stat: '+247%',
    statLabel: 'Lead growth',
    image: '/images/Service Page/sarah.png'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, LocalEats',
    text: '"Best marketing investment we\'ve made. ROI is incredible."',
    stat: '+180% ROI',
    statLabel: 'ROI achieved',
    image: '/images/Service Page/michael.png'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Owner, Wellness Studio',
    text: '"They handle everything while I focus on my business. Game changer!"',
    stat: '5-star',
    statLabel: 'Service rating',
    image: '/images/Service Page/emily.png'
  }
];

export default function ServiceResults() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111827] mb-4">Real results from real businesses</h2>
          <p className="text-[16px] md:text-[18px] text-[#4B5563]">See how we&apos;ve helped small businesses grow</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col bg-[#F9FAFB] rounded-2xl p-8 border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#111827]">{item.name}</h4>
                  <p className="text-[12px] text-[#6B7280]">{item.role}</p>
                </div>
              </div>
              
              <blockquote className="text-[18px] text-[#374151] font-medium leading-relaxed mb-8 flex-1">
                {item.text}
              </blockquote>
              
              <div className="pt-8 border-t border-gray-200">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="text-[32px] font-bold text-[#2563EB] mb-1"
                >
                  {item.stat}
                </motion.div>
                <div className="text-[12px] text-[#6B7280] font-medium uppercase tracking-wider">{item.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
