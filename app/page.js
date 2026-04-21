"use client";

import HeroSection from "@/components/layout/HeroSection";
import ServicesSection from "@/components/sections/ServiceSections";
import WorkflowSection from "@/components/sections/WorkflowSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import CTA from "@/components/ui/CTA";
import ContactUs from "@/page/ContactUs";

export default function Home() {
  return (
      <>
        <HeroSection />
        <ServicesSection />
        <WorkflowSection />
        <PortfolioSection />
        <CTA />
        <ContactUs />
      </>
  );
}