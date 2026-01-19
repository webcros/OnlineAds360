'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services are included?',
    answer: 'Our services include everything from website design and SEO to ads management and social media. We provide a full-service experience tailored to your business needs.'
  },
  {
    question: 'How much does it cost?',
    answer: 'We offer flexible pricing plans based on the size of your business and the specific services you need. Contact us for a custom quote.'
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer: 'No, we offer month-to-month plans. We believe in earning your business every single month through results and excellent service.'
  },
  {
    question: 'How quickly can we get started?',
    answer: 'Most campaigns can be launched within 2-4 weeks after our initial planning session. Our team works efficiently to get your marketing moving as fast as possible.'
  },
  {
    question: 'What makes Marketing360 different?',
    answer: 'We combine an award-winning marketing platform with a dedicated team of experts. You get the best of both worlds: powerful technology and human expertise.'
  },
  {
    question: 'Can I use the platform without services?',
    answer: 'Yes, we offer platform-only plans for businesses that want to manage their own marketing but need the powerful tools we provide.'
  }
];

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111827] mb-4">Frequently asked questions</h2>
          <p className="text-[16px] md:text-[18px] text-[#4B5563]">Everything you need to know about our services</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[18px] font-semibold text-[#111827]">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-[#6B7280] transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-[16px] text-[#4B5563] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
