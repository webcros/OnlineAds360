'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[600px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-full relative"
      >
        <Image
          src="/images/About Page/about_hero.svg"
          alt="About Marketing 360"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/10" />
    </section>
  );
}
