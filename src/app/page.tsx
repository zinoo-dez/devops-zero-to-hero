"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Basic detection for saved language, defaulting to 'en'
    const saved = localStorage.getItem("app-language") || "en";
    if (saved === "my") {
      router.replace("/my");
    } else {
      router.replace("/en");
    }
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background text-foreground">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
        <p className="text-sm text-muted-foreground font-medium tracking-wide">Loading...</p>
      </div>
    </div>
  );
}
