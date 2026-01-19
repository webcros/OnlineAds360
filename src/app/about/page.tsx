'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutMission from '@/components/AboutMission';
import AboutHistory from '@/components/AboutHistory';
import AboutAccolades from '@/components/AboutAccolades';
import AboutMore from '@/components/AboutMore';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutHistory />
      <AboutAccolades />
      <AboutMore />
      <CTASection />
      <Footer />
    </main>
  );
}
