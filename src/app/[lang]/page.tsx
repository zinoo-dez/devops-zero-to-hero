import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { RoadmapPreview } from "@/components/sections/RoadmapPreview";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "my" }];
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsBar />
      <RoadmapPreview />
      <FeaturedCourses />
      <BenefitsSection />
      <FinalCTA />
    </div>
  );
}
