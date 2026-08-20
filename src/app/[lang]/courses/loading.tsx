import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CourseSkeleton } from "@/components/ui/CourseSkeleton";

export default function CoursesLoading() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curriculum Directory"
          title="All 13 DevOps"
          highlight="Zero-to-Hero Courses"
          subtitle="Explore the complete learning track from Linux fundamentals to advanced GitOps and Terraform. Packed with practical terminal sessions and real-world architectures."
        />

        <div className="mt-12 md:mt-16">
          {/* Skeleton for search and filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="w-full md:w-64 h-10 bg-slate-100 dark:bg-white/[0.04] rounded-xl animate-pulse" />
            <div className="w-full md:w-[400px] h-10 bg-slate-100 dark:bg-white/[0.04] rounded-xl animate-pulse" />
          </div>

          {/* Skeleton for course grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <CourseSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
