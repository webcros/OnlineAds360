import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServicesOverview from "@/components/ServicesOverview";
import ServiceProcess from "@/components/ServiceProcess";
import DetailedServices from "@/components/DetailedServices";
import OperationsGrowth from "@/components/OperationsGrowth";
import ServiceIndustries from "@/components/ServiceIndustries";
import ServiceResults from "@/components/ServiceResults";
import ServiceFAQ from "@/components/ServiceFAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive digital marketing services - SEO, PPC, social media marketing, web design, email marketing, and more. Grow your business with OnlineAds360.',
  openGraph: {
    title: 'Our Services | OnlineAds360',
    description: 'Explore our comprehensive digital marketing services - SEO, PPC, social media marketing, web design, email marketing, and more.',
    type: 'website',
    url: '/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | OnlineAds360',
    description: 'Explore our comprehensive digital marketing services - SEO, PPC, social media marketing, web design, email marketing, and more.',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServiceHero />
      <ServicesOverview />
      <ServiceProcess />
      <DetailedServices />
      <OperationsGrowth />
      <ServiceIndustries />
      <ServiceResults />
      <ServiceFAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
