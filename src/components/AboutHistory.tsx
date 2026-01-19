'use client';

export default function AboutHistory() {
  const events = [
    {
      year: '2009',
      text: 'Founded by Joe and JB Kellogg with a vision to help small businesses compete in the digital age.',
    },
    {
      year: '2012',
      text: 'Started designing our first comprehensive platform to integrate marketing and business tools.',
    },
    {
      year: '2014',
      text: 'Launched first platform version, quickly growing to 2,500+ customers.',
    },
    {
      year: '2018',
      text: 'Acquired Silveredge, expanding to 10,000+ customers and enhanced capabilities.',
    },
    {
      year: '2022',
      text: 'Added e-commerce and mobile app features, reaching 20,000+ customers.',
    },
    {
      year: '2024',
      text: 'Integrated AI technology to provide even smarter business solutions.',
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <h2 className="text-[36px] font-bold text-[#2C3E50] text-center mb-20">
          Our history
        </h2>
        
        <div className="relative">
          {/* Vertical Line - Left on mobile, center on desktop */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-[#0052CC]" />
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 pr-4 md:px-12 mb-8 md:mb-0">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-[24px] md:text-[30px] font-bold text-[#2C3E50] mb-2 md:mb-4">
                      {event.year}
                    </h3>
                    <p className="text-[14px] md:text-[16px] text-[#717171] leading-relaxed">
                      {event.text}
                    </p>
                  </div>
                </div>
                
                {/* Dot - Left on mobile, center on desktop */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0052CC] border-4 border-white rounded-full z-10" />
                
                {/* Spacer for desktop layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
