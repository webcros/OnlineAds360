'use client';

import React from 'react';
import { BookOpen, UserCheck, Video, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

const resources = [
  {
    title: 'Online Help Center',
    description: 'Browse our comprehensive support documentation, tutorials, and best practices to get the most out of MarketPro.',
    linkText: 'Contact Support',
    href: '#',
    icon: BookOpen,
    iconBg: 'bg-[#DBEAFE]',
    iconColor: 'text-[#2563EB]',
    linkColor: 'text-[#2563EB]',
  },
  {
    title: 'Your Dedicated Rep',
    description: 'Log in to view your dedicated account representative and their direct contact information for personalized support.',
    linkText: 'Log In to Portal',
    href: '/login',
    icon: UserCheck,
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#16A34A]',
    linkColor: 'text-[#16A34A]',
  },
  {
    title: 'Free Educational Videos',
    description: 'Watch our library of tips, webinars, and how-to content to master marketing strategies and platform features.',
    linkText: 'Watch Videos',
    href: '#',
    icon: Video,
    iconBg: 'bg-[#F3E8FF]',
    iconColor: 'text-[#9333EA]',
    linkColor: 'text-[#9333EA]',
  },
];

export default function MoreWaysToHelp() {
  return (
    <section className="py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[888px] mx-auto mb-16"
        >
          <h2 className="text-[36px] font-bold text-[#1E293B] leading-[40px] tracking-[-0.5px]">
            More Ways to Get Help
          </h2>
          <p className="mt-4 text-[20px] text-[#4B5563] leading-[28px] tracking-[-0.5px]">
            Explore our resources to find answers, learn best practices, and connect with your dedicated team.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resources.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${item.iconBg} rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-[20px] font-bold text-[#1E293B] leading-[28px] tracking-[-0.5px] mb-3 group-hover:text-[#2563EB] transition-colors">
                {item.title}
              </h3>
              <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px] mb-8 flex-grow">
                {item.description}
              </p>

              {/* Link */}
              <Link
                href={item.href}
                className={`inline-flex items-center gap-2 text-[16px] font-semibold ${item.linkColor} hover:opacity-80 transition-opacity group/link`}
              >
                {item.linkText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
