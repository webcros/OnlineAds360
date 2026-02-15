'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutMission() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[30px] md:text-[45px] leading-[1.26] font-bold text-[#24282F] mb-8">
            We want to make a difference
          </h2>
          <p className="text-[16px] md:text-[19px] leading-[1.82] text-[#24282F] max-w-[1000px] mx-auto">
            Our mission is to help small businesses grow and their local communities glow.
            We are energized every day by knowing that doing that one thing well makes a
            massively positive impact on this world. Local businesses create jobs, support
            families, fund charities, help their communities thrive and so much more.
            This inspires us. And we believe the best way to achieve our mission is to
            empower small businesses with all the technology and talent they need to both
            manage and grow their business from a singular platform. That&apos;s why we
            created Marketing 360®, a truly transformational business commerce platform.
            No more wasting time and money bouncing around multiple tools to manage and
            grow your business. OnlineAds 360® gives you everything you need from one
            login, one team and one low monthly price.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full h-[250px] md:h-[423px] rounded-xl overflow-hidden shadow-lg group"
        >
          <Image
            src="/images/About Page/mission1.png"
            alt="Our Mission"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
