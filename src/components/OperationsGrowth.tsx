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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const growthServices = [
  {
    title: 'CRM',
    subtitle: 'Centralize Your Customer Data',
    description: 'Pipeline management, lead scoring, automation workflows, and integrations.',
    points: ['Sales pipeline tracking', 'Lead scoring & nurturing', 'Workflow automation'],
    icon: '/images/Service Page/crm_icon.svg'
  },
  {
    title: 'Analytics',
    subtitle: 'Data-Driven Decisions, Not Hunches',
    description: 'Custom dashboards, conversion tracking, reporting, and behavior analysis.',
    points: ['Custom dashboards', 'Conversion tracking', 'Behavior insights'],
    icon: '/images/Service Page/analytics_icon.svg'
  },
  {
    title: 'Reputation Management',
    subtitle: 'Protect and Polish Your Brand Image',
    description: 'Review generation, monitoring, crisis handling, and feedback loops.',
    points: ['Review generation', 'Brand monitoring', 'Crisis management'],
    icon: '/images/Service Page/reputation_icon.svg'
  },
  {
    title: 'Forms',
    subtitle: 'Capture Leads Effortlessly',
    description: 'High-converting forms with logic jumps, CRM integration, and spam protection.',
    points: ['Conditional logic', 'CRM auto-sync', 'Spam filtering'],
    icon: '/images/Service Page/forms_icon.svg'
  },
  {
    title: 'Listings',
    subtitle: 'Accurate Info, Everywhere',
    description: 'Directory syncing, NAP consistency, and local SEO optimization.',
    points: ['Multi-directory sync', 'NAP consistency', 'Local SEO boost'],
    icon: '/images/Service Page/listings_icon.svg'
  },
  {
    title: 'Payments',
    subtitle: 'Get Paid Faster',
    description: 'Invoicing, recurring billing, payment gateway integration, and mobile payments.',
    points: ['Automated invoicing', 'Recurring billing', 'Multi-gateway support'],
    icon: '/images/Service Page/payments_icon.svg'
  }
];

export default function OperationsGrowth() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[36px] font-bold text-[#111827] mb-4">Operations & Growth</h2>
          <p className="text-[18px] text-[#4B5563]">Streamline operations and scale with confidence</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {growthServices.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative w-12 h-12 mb-6 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[20px] font-bold text-[#111827] mb-2">{service.title}</h3>
              <p className="text-[#2563EB] font-semibold text-[14px] mb-4 uppercase tracking-wide">
                {service.subtitle}
              </p>
              <p className="text-[14px] text-[#4B5563] mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-center gap-3 text-[12px] text-[#374151]">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
