import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutMission from '@/components/AboutMission';
import AboutHistory from '@/components/AboutHistory';
import AboutAccolades from '@/components/AboutAccolades';
import AboutMore from '@/components/AboutMore';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about OnlineAds360 - our mission, history, and the team behind the #1 business platform for entrepreneurs. Discover how we help businesses grow.',
  openGraph: {
    title: 'About Us | OnlineAds360',
    description: 'Learn about OnlineAds360 - our mission, history, and the team behind the #1 business platform for entrepreneurs.',
    type: 'website',
    url: '/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | OnlineAds360',
    description: 'Learn about OnlineAds360 - our mission, history, and the team behind the #1 business platform for entrepreneurs.',
  },
  alternates: {
    canonical: '/about',
  },
};

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

