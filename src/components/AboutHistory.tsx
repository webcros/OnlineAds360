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
      title: 'The Inception',
      text: 'Founded by Santosh, Rajesh and Ehsan with a vision to help small businesses compete in the digital age through innovative marketing strategies.',
    },
    {
      year: '2012',
      title: 'Platform Development',
      text: 'Started designing our first comprehensive platform to integrate marketing and business tools into a single, user-friendly interface.',
    },
    {
      year: '2014',
      title: 'Major Launch',
      text: 'Launched the first version of our all-in-one platform, quickly growing our community to over 2,500 active customers.',
    },
    {
      year: '2018',
      title: 'Expansion Phase',
      text: 'Acquired Silveredge, which allowed us to expand our reach to 10,000+ customers and introduce enhanced analytical capabilities.',
    },
    {
      year: '2022',
      title: 'Next-Gen Features',
      text: 'Added integrated e-commerce and mobile app management features, empowering 2,000+ businesses to scale globally.',
    },
    {
      year: '2024',
      title: 'AI Integration',
      text: 'Revolutionized our platform with advanced AI technology, providing predictive insights and automated marketing optimization.',
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-32 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-[#0052CC] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-[#0052CC] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 lg:px-20 relative">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0052CC] font-bold text-sm uppercase tracking-[2px] mb-4"
          >
            Our Journey
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[40px] md:text-[52px] font-black text-[#1E293B] leading-tight"
          >
            Our history
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#64748B] text-lg mt-6"
          >
            Over a decade of innovation, growth, and commitment to small business success.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Vertical Line - Left on mobile, center on desktop */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gradient-to-b from-[#0052CC] via-[#0052CC]/50 to-transparent" 
          />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-24"
          >
            {events.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Card */}
                <motion.div 
                  variants={index % 2 === 0 ? itemVariants : itemVariantsLeft}
                  className="w-full md:w-1/2 pl-12 pr-4 md:px-16"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0052CC] to-[#2563EB] rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500" />
                    <div className="relative bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 group-hover:border-[#0052CC]/20 transition-all duration-500">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[32px] font-black text-[#0052CC] opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                          {event.year}
                        </span>
                        <div className="h-px flex-1 bg-gray-100 mx-4" />
                      </div>
                      <h3 className="text-[22px] font-bold text-[#1E293B] mb-3 group-hover:text-[#0052CC] transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-[16px] text-[#64748B] leading-relaxed font-medium">
                        {event.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Dot - Left on mobile, center on desktop */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
                    className="w-10 h-10 bg-white shadow-xl border-[3px] border-[#0052CC] rounded-full z-10 flex items-center justify-center"
                  >
                    <div className="w-3 h-3 bg-[#0052CC] rounded-full" />
                  </motion.div>
                </div>
                
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
