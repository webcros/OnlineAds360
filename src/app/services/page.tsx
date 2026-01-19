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
