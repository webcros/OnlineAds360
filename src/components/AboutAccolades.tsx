'use client';

import Image from 'next/image';

export default function AboutAccolades() {
  const accolades = [
    {
      title: 'Fastest Growing Company',
      description: 'Eight years straight! A feat fewer than 1 in 2,000,000 companies achieve.',
      image: '/images/About Page/accolade1.png',
    },
    {
      title: "Glassdoor's Best Places to Work",
      description: 'Ranked in the top 50 list for creating an exceptional workplace culture and employee experience.',
      image: '/images/About Page/accolade2.png',
    },
    {
      title: 'Google Partner',
      description: 'As a Google partner we strive to deliver exceptional results through certified expertise.',
      link: 'What does it mean to be a partner?',
      image: '/images/About Page/accolade3.png',
    },
    {
      title: 'Meta Business Partner',
      description: 'As a Meta business partner we strive to build campaigns that drive results.',
      link: 'Watch a 57-second video about what this means.',
      image: '/images/About Page/accolade4.png',
    },
    {
      title: 'Top Family Owned Colorado Company',
      description: 'More than seven years in a row, recognized for our commitment to local community and family values.',
      image: '/images/About Page/accolade5.png',
    },
    {
      title: 'Bing Advertising Partner',
      description: 'Marketing 360® was a part of the original 13 companies selected for this exclusive partnership program.',
      image: '/images/About Page/accolade6.png',
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <h2 className="text-[36px] font-bold text-[#2C3E50] text-center mb-16">
          Our accolades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {accolades.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#2C3E50] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#717171] leading-relaxed mb-2">
                  {item.description}
                </p>
                {item.link && (
                  <button className="text-[#0052CC] font-medium text-sm hover:underline">
                    {item.link}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
