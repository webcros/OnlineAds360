'use client';

import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[600px] overflow-hidden">
      <Image
        src="/images/About Page/about_hero.svg"
        alt="About Marketing 360"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
