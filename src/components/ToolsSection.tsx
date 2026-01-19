'use client';

interface FeatureCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imagePosition?: 'left' | 'right';
}

const FeatureCard = ({ category, title, description, imageSrc, imagePosition = 'left' }: FeatureCardProps) => {
  const content = (
    <div className="flex flex-col justify-center p-6 lg:p-10">
      <span className="text-[14px] font-bold tracking-[0.2px] text-[#103AB9] mb-3">
        {category}
      </span>
      <h3 className="text-[30px] leading-[36px] font-black tracking-[-0.5px] text-[#111827] mb-4">
        {title}
      </h3>
      <p className="text-[18px] leading-[28px] font-bold tracking-[-0.5px] text-[#4B5563] mb-6">
        {description}
      </p>
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 bg-[#103AB9] text-white font-bold text-[16px] tracking-[-0.5px] rounded-lg hover:bg-[#0d2f94] transition-colors">
          Learn More
        </button>
        <button className="text-[#4338CA] font-semibold text-[16px] tracking-[-0.5px] hover:underline">
          View Plans →
        </button>
      </div>
    </div>
  );

  const image = (
    <div className="flex items-center justify-center">
      <img 
        src={imageSrc} 
        alt={category} 
        className="w-full h-auto max-h-[400px] object-contain"
      />
    </div>
  );

  return (
    <div className="py-8">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
        {imagePosition === 'left' ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </div>
  );
};

export default function ToolsSection() {
  const features = [
    {
      category: 'WEBSITES',
      title: 'Get a website or online store',
      description: 'Build stunning, professional websites in minutes with our intuitive drag-and-drop builder. No coding required.',
      imageSrc: '/images/GetWebsite.png',
      imagePosition: 'left' as const,
    },
    {
      category: 'ECOMMERCE',
      title: 'Sell your products online',
      description: 'Launch your online store with powerful e-commerce tools. Manage inventory, process payments, and grow sales effortlessly.',
      imageSrc: '/images/Sell.png',
      imagePosition: 'right' as const,
    },
    {
      category: 'PAYMENTS',
      title: 'Accept and manage payments',
      description: 'Seamlessly process credit cards, invoices, and subscriptions. Get paid faster with automated payment reminders.',
      imageSrc: '/images/Accept.png',
      imagePosition: 'left' as const,
    },
    {
      category: 'CRM',
      title: 'Stay organized your way',
      description: 'Manage contacts, track deals, and automate follow-ups. Keep your entire team aligned with powerful CRM tools.',
      imageSrc: '/images/StayOrganied.png',
      imagePosition: 'right' as const,
    },
    {
      category: 'FORMS',
      title: 'Create custom forms',
      description: 'Build beautiful forms for any purpose. Collect leads, surveys, registrations, and more with our easy form builder.',
      imageSrc: '/images/CustomForms.png',
      imagePosition: 'left' as const,
    },
    {
      category: 'EMAIL MARKETING',
      title: 'Send automated emails',
      description: 'Create stunning email campaigns and automate your marketing. Nurture leads and drive conversions on autopilot.',
      imageSrc: '/images/Emails.png',
      imagePosition: 'right' as const,
    },
    {
      category: 'LISTINGS',
      title: 'Control your business listings',
      description: 'Manage your business presence across 50+ directories. Keep your information accurate and consistent everywhere.',
      imageSrc: '/images/Control.png',
      imagePosition: 'left' as const,
    },
    {
      category: 'REPUTATION',
      title: 'Stand out with excellent reviews',
      description: 'Monitor and respond to reviews across all platforms. Build trust and credibility with powerful reputation management.',
      imageSrc: '/images/Stand.png',
      imagePosition: 'right' as const,
    },
    {
      category: 'SOCIAL',
      title: 'Manage your social media',
      description: 'Schedule posts, engage with followers, and track performance across all social platforms from one dashboard.',
      imageSrc: '/images/Manage.png',
      imagePosition: 'left' as const,
    },
    {
      category: 'CONTENT',
      title: 'Show up at the top of search',
      description: 'Optimize your content for search engines. Get found by customers when they\'re searching for your services.',
      imageSrc: '/images/Show.png',
      imagePosition: 'right' as const,
    },
    {
      category: 'ADS',
      title: 'Run ads where it counts',
      description: 'Launch targeted ad campaigns on Google, Facebook, and Instagram. Maximize ROI with smart budget management.',
      imageSrc: '/images/Run.png',
      imagePosition: 'left' as const,
    },
    {
      category: 'INTELLIGENCE',
      title: 'Business reporting',
      description: 'Get actionable insights with comprehensive analytics. Track performance, identify trends, and make data-driven decisions.',
      imageSrc: '/images/BusinessReporting.png',
      imagePosition: 'right' as const,
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="max-w-[1376px] mx-auto px-5 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-black text-[#111827] text-center mb-16">
          Plus a full suite of tools to help you scale with ease....
        </h2>

        {/* Features Grid */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
