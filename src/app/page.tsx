import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MarketingTeam from "@/components/MarketingTeam";
import ToolsSection from "@/components/ToolsSection";
import AIPlatformsSection from "@/components/AIPlatformsSection";
import IndustrySection from "@/components/IndustrySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <MarketingTeam />
      <ToolsSection />
      <AIPlatformsSection />
      <IndustrySection />
      <CTASection />
      <Footer />
    </main>
  );
}
