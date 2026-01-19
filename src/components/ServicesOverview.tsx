import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-0 max-w-[1344px]">
        {/* Mobile Layout (Stack) / Desktop Layout (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Full Service - Spans 2 columns and 2 rows */}
          <div className="lg:col-span-2 lg:row-span-2 relative bg-gradient-to-br from-[#EFF6FF] to-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden flex flex-col min-h-[584px]">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/Service Page/full_service.png"
                alt="Full Service"
                fill
                className="object-contain p-4"
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                <span className="text-[12px] font-semibold text-[#2563EB] uppercase tracking-wider">Full Service</span>
              </div>
            </div>
            <div className="p-8 mt-auto bg-white border-t border-gray-100">
              <h3 className="text-[24px] font-bold text-[#1E293B] mb-2">Your marketing team + platform</h3>
              <p className="text-[16px] text-[#4B5563] mb-6">Strategy, execution, reporting — in one place.</p>
              <Link 
                href="/services/full-service" 
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2563EB] hover:gap-3 transition-all"
              >
                How it works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 2. Digital Ads & PPC - Spans 2 columns on the right */}
          <div className="lg:col-span-2 relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[280px]">
            <div className="flex-1 relative bg-gradient-to-br from-[#FAF5FF] to-[#EFF6FF] overflow-hidden">
              <Image
                src="/images/Service Page/ads_service.png"
                alt="Digital Ads"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                <span className="text-[11px] font-semibold text-[#2563EB] uppercase">Service</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-[18px] lg:text-[20px] font-bold text-[#1E293B] mb-1">Digital Ads & PPC</h3>
              <p className="text-[14px] text-[#4B5563]">Run multi-channel campaigns that actually convert.</p>
            </div>
          </div>

          {/* 3. SEO & Content */}
          <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[280px]">
            <div className="flex-1 relative bg-gradient-to-br from-[#F0FDF4] to-[#ECFDF5] overflow-hidden">
              <Image
                src="/images/Service Page/seo_service.png"
                alt="SEO & Content"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                <span className="text-[11px] font-semibold text-[#2563EB] uppercase">Service</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-[18px] font-bold text-[#1E293B] mb-1">SEO & Content</h3>
              <p className="text-[12px] text-[#4B5563]">Climb rankings and grow organic traffic.</p>
            </div>
          </div>

          {/* 4. Social Media */}
          <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[280px]">
            <div className="flex-1 relative bg-gradient-to-br from-[#FDF2F8] to-[#FFF1F2] overflow-hidden">
              <Image
                src="/images/Service Page/social_service.png"
                alt="Social Media"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                <span className="text-[11px] font-semibold text-[#2563EB] uppercase">Service</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-[18px] font-bold text-[#1E293B] mb-1">Social Media</h3>
              <p className="text-[12px] text-[#4B5563]">Always-on content and engagement.</p>
            </div>
          </div>

          {/* 5. Websites & Funnels - Spans 2 columns on the left */}
          <div className="lg:col-span-2 relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[280px]">
            <div className="flex-1 relative bg-gradient-to-br from-[#EFF6FF] to-[#EEF2FF] overflow-hidden">
              <Image
                src="/images/Service Page/website_service.png"
                alt="Websites & Funnels"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                <span className="text-[11px] font-semibold text-[#2563EB] uppercase">Service</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-[20px] font-bold text-[#1E293B] mb-1">Websites & Funnels</h3>
              <p className="text-[14px] text-[#4B5563]">High-converting sites built for leads and sales.</p>
            </div>
          </div>

          {/* 6. Branding & Creative */}
          <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[280px]">
            <div className="flex-1 relative overflow-hidden bg-gray-50">
              <Image
                src="/images/Service Page/branding_service.png"
                alt="Branding & Creative"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                <span className="text-[11px] font-semibold text-[#2563EB] uppercase">Service</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-[18px] font-bold text-[#1E293B] mb-1">Branding & Creative</h3>
              <p className="text-[12px] text-[#4B5563]">Logos, video, and assets that stand out.</p>
            </div>
          </div>

          {/* 7. Email & Automation */}
          <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[280px]">
            <div className="flex-1 relative bg-gradient-to-br from-[#ECFEFF] to-[#EFF6FF] overflow-hidden">
              <Image
                src="/images/Service Page/email_service.png"
                alt="Email & Automation"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                <span className="text-[11px] font-semibold text-[#2563EB] uppercase">Service</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-[18px] font-bold text-[#1E293B] mb-1">Email & Automation</h3>
              <p className="text-[12px] text-[#4B5563]">Automated journeys that nurture customers.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
