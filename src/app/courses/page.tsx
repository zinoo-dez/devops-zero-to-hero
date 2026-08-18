import React from "react";
import type { Metadata } from "next";
import { getAllCourses } from "@/lib/courses";
import { CourseGrid } from "@/components/course/CourseGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "All DevOps Courses | DevOps Zero to Hero",
  description:
    "Explore all 13 free DevOps courses: Linux CLI, Git & GitHub, Docker, CI/CD, Terraform IaC, Kubernetes, Observability, DevSecOps, ArgoCD GitOps, and Real-world Capstone.",
  openGraph: {
    title: "All DevOps Courses | DevOps Zero to Hero",
    description:
      "Explore all 13 free DevOps courses: Linux CLI, Git & GitHub, Docker, CI/CD, Terraform IaC, Kubernetes, Observability, DevSecOps, ArgoCD GitOps, and Real-world Capstone.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 675,
        alt: "All DevOps Courses - DevOps Zero to Hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All DevOps Courses | DevOps Zero to Hero",
    description:
      "Explore all 13 free DevOps courses: Linux CLI, Git & GitHub, Docker, CI/CD, Terraform IaC, Kubernetes, Observability, DevSecOps, ArgoCD GitOps, and Real-world Capstone.",
    images: ["/og-image.png"],
  },
};

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curriculum Directory"
          title="All 13 DevOps"
          highlight="Zero-to-Hero Courses"
          subtitle="Explore the complete learning track from Linux fundamentals to advanced GitOps and Terraform. Packed with practical terminal sessions and real-world architectures."
        />

        <CourseGrid courses={courses} />
      </div>
    </div>
  );
}
