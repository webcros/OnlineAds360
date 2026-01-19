import { TrendingUp, Headset } from 'lucide-react';
import Link from 'next/link';

export default function ContactOptions() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Card */}
        <div className="bg-white border-2 border-[#E5E7EB] rounded-2xl p-8 md:p-10 h-[332px] flex flex-col relative transition-all hover:shadow-sm">
          <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center text-white mb-6">
            <TrendingUp size={24} />
          </div>
          <h2 className="text-[24px] font-bold text-[#1E293B] leading-[32px] tracking-[-0.5px] mb-3">
            Talk to Sales
          </h2>
          <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px] max-w-[465px] mb-8">
            Have questions about pricing, demos, or how our platform fits your business? Our sales team is ready to help you find the perfect solution.
          </p>
          <div className="mt-auto">
            <Link
              href="/schedule-demo"
              className="block w-full h-[48px] bg-[#2563EB] text-white font-semibold text-[16px] leading-[48px] rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Support Card */}
        <div className="bg-white border-2 border-[#E5E7EB] rounded-2xl p-8 md:p-10 h-[332px] flex flex-col relative transition-all hover:shadow-sm">
          <div className="w-14 h-14 bg-[#DCFCE7] rounded-xl flex items-center justify-center text-[#16A34A] mb-6">
            <Headset size={24} />
          </div>
          <h2 className="text-[24px] font-bold text-[#1E293B] leading-[32px] tracking-[-0.5px] mb-3">
            Get Support
          </h2>
          <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px] max-w-[466px] mb-8">
            Existing customer? Get help with your account, technical issues, or access our comprehensive help center for quick answers.
          </p>
          <div className="mt-auto">
            <Link
              href="/help-center"
              className="block w-full h-[48px] border border-[#E5E7EB] text-black font-semibold text-[16px] leading-[48px] rounded-lg text-center hover:bg-gray-50 transition-all"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
