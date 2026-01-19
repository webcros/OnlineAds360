import Image from 'next/image';
import Link from 'next/link';

export default function ServiceHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-8 md:py-12 lg:py-24">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Left Section: Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <h1 className="font-['Inter'] font-bold text-[28px] md:text-[54px] lg:text-[60px] leading-[1.1] tracking-[-0.5px] text-[#1E293B] mb-4 md:mb-6">
              Done-for-you marketing services for small business
            </h1>
            
            <p className="font-['Inter'] font-normal text-[16px] md:text-[20px] leading-relaxed text-[#4B5563] mb-6 md:mb-10 max-w-[540px]">
              Get a dedicated marketing team and powerful platform that work together to grow your business.
            </p>
            
            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 h-[56px] bg-[#2563EB] text-white font-semibold text-[16px] rounded-xl shadow-[0px_8px_20px_rgba(37,99,235,0.25)] hover:bg-blue-700 transition-all hover:scale-[1.02]"
              >
                Schedule a demo
              </Link>
              
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 h-[56px] border-2 border-[#E5E7EB] text-[#1E293B] font-semibold text-[16px] rounded-xl hover:bg-gray-50 transition-all"
              >
                View services
              </Link>
            </div>
          </div>

          {/* Right Section: Hero Image & Badge */}
          <div className="w-full lg:w-1/2 relative">
            {/* Floating Badge */}
            <div className="absolute -top-4 right-0 md:right-4 lg:-top-8 lg:right-8 bg-white border border-gray-100 shadow-[0px_10px_25px_rgba(0,0,0,0.1)] rounded-full py-3 px-6 z-20 flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#22C55E] rounded-full animate-pulse" />
              <span className="font-semibold text-[14px] text-[#1E293B] whitespace-nowrap">
                15,000+ businesses
              </span>
            </div>

            {/* Main Hero Image Wrapper */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:aspect-auto lg:h-[500px] drop-shadow-[0px_20px_50px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/Service Page/service_hero.png"
                alt="Marketing Team & Platform"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Trusted By Bar */}
        <div className="mt-12 md:mt-16 lg:mt-24 pt-8 md:pt-12 border-t border-gray-100">
          <p className="text-[14px] font-medium text-center text-[#6B7280] mb-8 tracking-wide uppercase">
            Trusted by 15,000+ small businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-40 grayscale">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-[80px] h-[32px] bg-gray-300 rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
