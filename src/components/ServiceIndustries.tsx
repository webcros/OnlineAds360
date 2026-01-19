'use client';

import { Heart, Home, Briefcase, Wrench, ShoppingBag, Users } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const industries = [
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant solutions for patient engagement and practice growth.',
    icon: Heart,
  },
  {
    name: 'Real Estate',
    description: 'Lead generation and CRM solutions to close more deals in a competitive market.',
    icon: Home,
  },
  {
    name: 'Professional Services',
    description: 'Build authority and capture high-intent leads for your firm or practice.',
    icon: Briefcase,
  },
  {
    name: 'Home Services',
    description: 'Local SEO and ads management to keep your phone ringing with local leads.',
    icon: Wrench,
  },
  {
    name: 'Retail & E-comm',
    description: 'Scalable solutions to grow your online store and increase customer loyalty.',
    icon: ShoppingBag,
  },
  {
    name: 'Non-profits',
    description: 'Engagement strategies to grow your donor base and amplify your mission.',
    icon: Users,
  }
];

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

export default function ServiceIndustries() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111827] mb-4">Industries We Serve</h2>
          <p className="text-[16px] md:text-[18px] text-[#4B5563]">Tailored solutions for your specific industry needs</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="p-8 rounded-2xl border border-gray-100 bg-white hover:bg-blue-50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="text-[18px] font-bold text-[#111827] mb-3">{industry.name}</h3>
              <p className="text-[14px] text-[#4B5563] leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
