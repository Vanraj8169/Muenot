import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { OurClients } from "@/components/sections/our-clients";
import { ServicesOverview } from "@/components/sections/services-overview";
import { AIDataServices } from "@/components/sections/ai-data-services";
import { ElearningServices } from "@/components/sections/elearning-services";
import { TechnologyServices } from "@/components/sections/technology-services";
import { LocalizationServices } from "@/components/sections/localization-services";
import { PublishingServices } from "@/components/sections/publishing-services";
import { IndustriesSection } from "@/components/sections/industries";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <OurClients />
      <IndustriesSection />
      <ServicesOverview />
      <AIDataServices />
      <ElearningServices />
      <TechnologyServices />
      <LocalizationServices />
      <PublishingServices />
      <CaseStudiesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
