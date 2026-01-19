'use client';

import Link from 'next/link';

export default function AISection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[768px] mx-auto px-5 lg:px-20 text-center">
        {/* Team Image */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <img 
            src="/images/Group2.png" 
            alt="Marketing Team" 
            className="h-auto w-auto"
          />
        </div>

        {/* Main Headline */}
        <h2 className="text-[48px] leading-[48px] font-black tracking-[-0.5px] text-[#111827] mb-9 max-w-[724px] mx-auto">
          Turbocharge your marketing
          <br />
          with your own Marketing Team
        </h2>

        {/* Description */}
        <p className="text-[20px] leading-[28px] font-bold tracking-[-0.5px] text-[#4B5563] mb-11 max-w-[753px] mx-auto">
          Leverage cutting-edge AI tools combined with dedicated marketing experts who understand your business. Get personalized strategies, automated campaigns, and hands-on support to accelerate your growth.
        </p>

        {/* CTA Button */}
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center px-[41.59px] py-[19px] bg-[#103AB9] text-white font-bold text-[18px] leading-[22px] tracking-[-0.5px] rounded-lg shadow-[0_8px_10px_rgba(16,39,185,0.3),0_20px_25px_rgba(16,44,185,0.3)] hover:bg-[#0d2f94] transition-all"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
