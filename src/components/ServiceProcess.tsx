import Image from 'next/image';

const steps = [
  {
    step: 'Step 01',
    title: 'Plan',
    description: 'Data-driven strategy built around your business goals, audience insights, and competitive analysis.',
    note: 'Strategic roadmap included',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    icon: '/images/Service Page/process_step1.svg'
  },
  {
    step: 'Step 02',
    title: 'Launch',
    description: 'Seamless execution across channels with precise targeting and performance-ready setup.',
    note: 'Multi-channel deployment',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    icon: '/images/Service Page/process_step2.svg'
  },
  {
    step: 'Step 03',
    title: 'Optimize',
    description: 'Continuous testing, refinement, and AI-assisted optimization to maximize ROI.',
    note: 'Real-time adjustments',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    icon: '/images/Service Page/process_step3.svg'
  },
  {
    step: 'Step 04',
    title: 'Report',
    description: 'Transparent analytics, actionable insights, and real-time performance tracking.',
    note: 'Custom dashboards',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    icon: '/images/Service Page/process_step4.svg'
  }
];

const stats = [
  { label: 'Industry Experience', value: '15+ Years', icon: '/images/Service Page/stat_exp.svg' },
  { label: 'Businesses Supported', value: '15,000+', icon: '/images/Service Page/stat_biz.svg' },
  { label: 'Platform', value: 'Award-Winning', icon: '/images/Service Page/stat_award.svg' },
  { label: 'Security', value: 'Enterprise-Grade', icon: '/images/Service Page/stat_sec.svg' },
  { label: 'Expert Support', value: 'Dedicated', icon: '/images/Service Page/stat_support.svg' }
];

export default function ServiceProcess() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[14px] font-semibold mb-6">
            Our Process
          </span>
          <h2 className="text-[28px] md:text-[48px] font-bold text-[#111827] leading-tight mb-6">
            Built for Performance, Designed for Growth
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#4B5563] leading-relaxed">
            A proven methodology that transforms data into actionable strategies and delivers measurable results across every channel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-14 h-14 mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className={`inline-block px-3 py-1 ${item.bgColor} ${item.color} rounded-lg text-[12px] font-bold mb-4 uppercase tracking-wider`}>
                {item.step}
              </div>
              <h3 className="text-[24px] font-bold text-[#111827] mb-4">{item.title}</h3>
              <p className="text-[16px] text-[#4B5563] mb-8 leading-relaxed min-h-[80px]">
                {item.description}
              </p>
              <div className="pt-6 border-t border-gray-50 flex items-center gap-2">
                <span className={`text-[14px] font-medium ${item.color}`}>{item.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="relative w-10 h-10 mb-4">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-[18px] font-bold text-[#111827] mb-1">{stat.value}</div>
              <div className="text-[12px] text-[#6B7280]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
