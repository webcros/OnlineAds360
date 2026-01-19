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

export default function AboutMore() {
  const sections = [
    {
      title: 'Partners',
      description: 'Our partners provide essential integrations and enhanced capabilities that span across different specialty industries.',
      image: '/images/About Page/partners.png',
    },
    {
      title: 'Blog',
      description: 'Free marketing, sales and business tips from experts who do this type of work every day. Tailored for small businesses.',
      image: '/images/About Page/blog.png',
    },
    {
      title: 'Careers',
      description: "We're always looking for good people. If you're interested in working at a high-energy, fast-paced, fun-filled tech company, apply online today!",
      image: '/images/About Page/careers.png',
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[20px] font-medium text-[#717171] text-center mb-16 tracking-wide"
        >
          More about Marketing 360®
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sections.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-[24px] font-bold text-[#2C3E50] mb-4">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#717171] leading-relaxed">
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
