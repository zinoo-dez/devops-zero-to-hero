import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { RoadmapPreview } from "@/components/sections/RoadmapPreview";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsBar />
      <RoadmapPreview />
      <FeaturedCourses />
      <BenefitsSection />
      <CommunitySection />
      <FinalCTA />
    </div>
  );
}
