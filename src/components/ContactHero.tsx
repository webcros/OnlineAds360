import { MessageSquare, Headset, Calendar, Mail } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#EFF6FF] via-white to-white py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-[576px] text-center lg:text-left">
          <h1 className="text-[36px] md:text-[48px] font-bold text-[#1E293B] leading-[48px] tracking-[-0.5px] mb-6">
            Talk to a Marketing<br className="hidden md:block" /> Pro
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#4B5563] leading-[28px] tracking-[-0.5px]">
            Whether you&apos;re exploring our platform or need support with your account, our team is here to help. Reach Sales or Client Services, or browse our help center.
          </p>
        </div>

        {/* Right side graphic */}
        <div className="relative w-[280px] md:w-[350px] aspect-square bg-[#E0F2FE] rounded-[48px] flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] bg-white rounded-2xl shadow-[0px_4px_12px_rgba(37,99,235,0.08)] flex items-center justify-center text-[#2563EB] transition-transform hover:scale-105">
              <MessageSquare size={28} />
            </div>
            <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] bg-white rounded-2xl shadow-[0px_4px_12px_rgba(37,99,235,0.08)] flex items-center justify-center text-[#2563EB] transition-transform hover:scale-105">
              <Headset size={28} />
            </div>
            <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] bg-white rounded-2xl shadow-[0px_4px_12px_rgba(37,99,235,0.08)] flex items-center justify-center text-[#2563EB] transition-transform hover:scale-105">
              <Calendar size={28} />
            </div>
            <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] bg-white rounded-2xl shadow-[0px_4px_12px_rgba(37,99,235,0.08)] flex items-center justify-center text-[#2563EB] transition-transform hover:scale-105">
              <Mail size={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
