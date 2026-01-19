'use client';

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
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function AboutHistory() {
  const events = [
    {
      year: '2009',
      text: 'Founded by Joe and JB Kellogg with a vision to help small businesses compete in the digital age.',
    },
    {
      year: '2012',
      text: 'Started designing our first comprehensive platform to integrate marketing and business tools.',
    },
    {
      year: '2014',
      text: 'Launched first platform version, quickly growing to 2,500+ customers.',
    },
    {
      year: '2018',
      text: 'Acquired Silveredge, expanding to 10,000+ customers and enhanced capabilities.',
    },
    {
      year: '2022',
      text: 'Added e-commerce and mobile app features, reaching 20,000+ customers.',
    },
    {
      year: '2024',
      text: 'Integrated AI technology to provide even smarter business solutions.',
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] font-bold text-[#2C3E50] text-center mb-20"
        >
          Our history
        </motion.h2>
        
        <div className="relative">
          {/* Vertical Line - Left on mobile, center on desktop */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 bg-[#0052CC]" 
          />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {events.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Card */}
                <motion.div 
                  variants={index % 2 === 0 ? itemVariants : itemVariantsLeft}
                  className="w-full md:w-1/2 pl-12 pr-4 md:px-12 mb-8 md:mb-0"
                >
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-[24px] md:text-[30px] font-bold text-[#2C3E50] mb-2 md:mb-4">
                      {event.year}
                    </h3>
                    <p className="text-[14px] md:text-[16px] text-[#717171] leading-relaxed">
                      {event.text}
                    </p>
                  </div>
                </motion.div>
                
                {/* Dot - Left on mobile, center on desktop */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0052CC] border-4 border-white rounded-full z-10" 
                />
                
                {/* Spacer for desktop layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
