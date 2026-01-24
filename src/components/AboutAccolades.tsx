'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function AboutAccolades() {
  const accolades = [
    {
      title: 'Fastest Growing Company',
      description: 'Recognized for eight consecutive years of rapid growth and excellence.',
      image: '/images/About Page/accolade1.png',
    },
    {
      title: "Glassdoor's Best Places to Work",
      description: 'Ranked in the top 50 list for creating an exceptional workplace culture and employee experience.',
      image: '/images/About Page/accolade2.png',
    },
    {
      title: 'Google Partner',
      description: 'As a Google partner we strive to deliver exceptional results through certified expertise.',
      image: '/images/About Page/accolade3.png',
    },
    {
      title: 'Meta Business Partner',
      description: 'As a Meta business partner we strive to build campaigns that drive results.',
      image: '/images/About Page/accolade4.png',
    },
    {
      title: 'Bing Advertising Partner',
      description: 'Marketing 360® was a part of the original 13 companies selected for this exclusive partnership program.',
      image: '/images/About Page/accolade6.png',
    },
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] font-bold text-[#2C3E50] text-center mb-16"
        >
          Our accolades
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {accolades.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left group"
            >
              <div className="relative w-24 h-24 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#2C3E50] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#717171] leading-relaxed mb-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
