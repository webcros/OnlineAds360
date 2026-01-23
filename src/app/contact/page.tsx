import { Metadata } from 'next';
import ContactHero from "@/components/ContactHero";
import ContactOptions from "@/components/ContactOptions";
import ContactFormSection from "@/components/ContactFormSection";
import MoreWaysToHelp from "@/components/MoreWaysToHelp";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Talk to a marketing pro today. Reach out to our sales team or get support for your account at OnlineAds360.',
  openGraph: {
    title: 'Contact Us | OnlineAds360',
    description: 'Talk to a marketing pro today. Reach out to our sales team or get support for your account.',
    type: 'website',
    url: '/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | OnlineAds360',
    description: 'Talk to a marketing pro today. Reach out to our sales team or get support.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactOptions />
      <ContactFormSection />
      <MoreWaysToHelp />
      <CTASection />
    </main>
  );
}
