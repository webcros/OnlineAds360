'use client';

import { Globe, ShoppingCart, BarChart3, Share2, Mail, Search, Check } from 'lucide-react';

const detailedServices = [
  {
    title: 'Websites',
    subtitle: 'Build Your Digital Foundation',
    description: 'Custom, conversion-optimized websites with mobile-first design, speed optimization, and UX focus. We build digital experiences that turn visitors into customers.',
    icon: Globe,
    points: [
      'Mobile-first responsive design',
      'Performance & speed optimization',
      'Conversion-focused UX/UI',
      'CMS integration & training'
    ],
    className: 'col-span-2'
  },
  {
    title: 'E-commerce',
    subtitle: 'Turn Browsers into Buyers',
    description: 'Scalable online stores with secure checkout, product optimization, and sales funnel integration. We create shopping experiences that maximize revenue and customer lifetime value.',
    icon: ShoppingCart,
    points: [
      'Secure payment gateways',
      'Inventory management',
      'Product catalog optimization',
      'Cart abandonment recovery',
      'Multi-channel selling',
      'Analytics & reporting'
    ],
    className: 'col-span-3'
  },
  {
    title: 'Ads Management',
    subtitle: 'Stop Guessing. Start Scaling.',
    description: 'Data-driven ad campaigns across Google, Meta, LinkedIn, TikTok with ROAS optimization. We turn ad spend into predictable revenue with continuous testing and optimization.',
    icon: BarChart3,
    points: [
      'Multi-platform campaigns',
      'Audience targeting & retargeting',
      'Creative testing & optimization',
      'ROAS tracking & reporting',
      'Budget optimization',
      'Landing page alignment'
    ],
    className: 'col-span-3'
  },
  {
    title: 'Social Media',
    subtitle: 'Spark Conversations that Convert',
    description: 'Content creation, community management, influencer outreach, and brand awareness. Build an engaged audience that drives business results.',
    icon: Share2,
    points: [
      'Content strategy & creation',
      'Community engagement',
      'Influencer partnerships',
      'Performance analytics'
    ],
    className: 'col-span-2'
  },
  {
    title: 'Email Marketing',
    subtitle: 'The Highest ROI in Your Toolkit',
    description: 'Automated email flows, newsletters, segmentation, and A/B testing. Turn your email list into a revenue-generating machine.',
    icon: Mail,
    points: [
      'Automated drip campaigns',
      'List segmentation & personalization',
      'A/B testing & optimization'
    ],
    className: 'col-span-2'
  },
  {
    title: 'SEO & Content',
    subtitle: 'Be Found When It Matters Most',
    description: 'Technical SEO, keyword strategy, blogs, landing pages, and local SEO. Dominate search results and attract high-intent traffic.',
    icon: Search,
    points: [
      'Technical SEO audits',
      'Keyword research & strategy',
      'Content creation & optimization'
    ],
    className: 'col-span-2'
  }
];

export default function DetailedServices() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111827] mb-4 leading-tight">Digital Services</h2>
          <p className="text-[16px] md:text-[18px] text-[#4B5563]">Build a powerful online presence that converts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {detailedServices.map((service, index) => (
            <div 
              key={index} 
              className={`col-span-1 lg:${service.className} bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col`}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-8 border border-gray-100">
                <service.icon className="w-7 h-7 text-[#2563EB]" strokeWidth={1.5} />
              </div>

              <h3 className="text-[24px] font-bold text-[#111827] mb-2">{service.title}</h3>
              <p className="text-[#2563EB] font-semibold text-[16px] mb-4">{service.subtitle}</p>
              <p className="text-[16px] text-[#4B5563] mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                {service.points.map((point, pIndex) => (
                  <div key={pIndex} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span className="text-[14px] text-[#374151]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
