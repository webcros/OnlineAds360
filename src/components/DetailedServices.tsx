'use client';

import { Globe, ShoppingCart, BarChart3, Share2, Mail, Search, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
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

const cardVariants: Variants = {
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

const detailedServices = [
  {
    title: 'Websites',
    subtitle: 'Build Your Digital Foundation',
    description: 'Custom, conversion-optimized websites with mobile-first design, speed optimization, and UX focus. We build digital experiences that turn visitors into customers.',
    icon: Globe,
    color: 'blue',
    points: [
      'Mobile-first responsive design',
      'Performance & speed optimization',
      'Conversion-focused UX/UI',
      'CMS integration & training'
    ]
  },
  {
    title: 'E-commerce',
    subtitle: 'Turn Browsers into Buyers',
    description: 'Scalable online stores with secure checkout, product optimization, and sales funnel integration. We maximize revenue and customer lifetime value.',
    icon: ShoppingCart,
    color: 'emerald',
    points: [
      'Secure payment gateways',
      'Inventory management',
      'Product catalog optimization',
      'Cart abandonment recovery'
    ]
  },
  {
    title: 'Ads Management',
    subtitle: 'Stop Guessing. Start Scaling.',
    description: 'Data-driven ad campaigns across Google, Meta, LinkedIn, TikTok with ROAS optimization. We turn ad spend into predictable revenue.',
    icon: BarChart3,
    color: 'purple',
    points: [
      'Multi-platform campaigns',
      'Audience targeting & retargeting',
      'Creative testing & optimization',
      'Budget optimization'
    ]
  },
  {
    title: 'Social Media',
    subtitle: 'Spark Conversations that Convert',
    description: 'Content creation, community management, influencer outreach, and brand awareness. Build an engaged audience that drives business results.',
    icon: Share2,
    color: 'pink',
    points: [
      'Content strategy & creation',
      'Community engagement',
      'Influencer partnerships',
      'Performance analytics'
    ]
  },
  {
    title: 'Email Marketing',
    subtitle: 'The Highest ROI in Your Toolkit',
    description: 'Automated email flows, newsletters, segmentation, and A/B testing. Turn your email list into a revenue-generating machine.',
    icon: Mail,
    color: 'orange',
    points: [
      'Automated drip campaigns',
      'List segmentation & personalization',
      'A/B testing & optimization',
      'Revenue attribution'
    ]
  },
  {
    title: 'SEO & Content',
    subtitle: 'Be Found When It Matters Most',
    description: 'Technical SEO, keyword strategy, blogs, landing pages, and local SEO. Dominate search results and attract high-intent traffic.',
    icon: Search,
    color: 'indigo',
    points: [
      'Technical SEO audits',
      'Keyword research & strategy',
      'Content creation & optimization',
      'Local SEO ranking'
    ]
  }
];

const colorVariants: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
  purple: 'bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-600 group-hover:text-white',
  pink: 'bg-pink-50 text-pink-600 border-pink-100 group-hover:bg-pink-600 group-hover:text-white',
  orange: 'bg-orange-50 text-orange-600 border-orange-100 group-hover:bg-orange-600 group-hover:text-white',
  indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
};

export default function DetailedServices() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-black text-[#1E293B] mb-6 leading-tight tracking-tight">
            Comprehensive Digital Services
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#64748B] font-medium leading-relaxed">
            Everything you need to build a dominant online presence and accelerate your business growth.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {detailedServices.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group bg-white p-8 md:p-10 rounded-[32px] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-blue-200 transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              {/* Abstract Background Decoration */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gray-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
              
              <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-8 transition-all duration-500 relative z-10 ${colorVariants[service.color]}`}>
                <service.icon className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-[24px] font-bold text-[#1E293B] mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-blue-600 font-bold text-[14px] uppercase tracking-widest mb-4">
                  {service.subtitle}
                </p>
                <p className="text-[16px] text-[#64748B] mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="space-y-3 mb-10">
                  {service.points.map((point, pIndex) => (
                    <div key={pIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-[15px] text-[#475569] font-semibold">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto relative z-10 pt-6 border-t border-gray-100">
                <Link 
                  href="/plans-and-pricing"
                  className="inline-flex items-center gap-2 text-[16px] font-bold text-[#2563EB] hover:text-blue-700 transition-all group/link"
                >
                  Get Started 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
