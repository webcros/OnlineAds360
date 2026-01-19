import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactOptions from "@/components/ContactOptions";
import ContactFormSection from "@/components/ContactFormSection";
import MoreWaysToHelp from "@/components/MoreWaysToHelp";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Contact Us | OnlineAds360',
  description: 'Talk to a marketing pro today. Reach out to our sales team or get support for your account.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <ContactOptions />
      <ContactFormSection />
      <MoreWaysToHelp />
      <CTASection />
      <Footer />
    </main>
  );
}
