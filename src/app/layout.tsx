import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevOps Zero to Hero | Free Beginner-Friendly Engineering Platform",
  description:
    "Learn DevOps from absolute zero. Master Linux CLI, Git & GitHub, GitHub Actions CI/CD, Docker, Compose, Kubernetes, K3s, and real-world production deployments.",
  keywords: [
    "DevOps",
    "Linux",
    "Git",
    "GitHub Actions",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "K3s",
    "Tutorial",
    "Beginner",
  ],
  authors: [{ name: "DevOps Zero to Hero" }],
  openGraph: {
    title: "DevOps Zero to Hero | Free Beginner-Friendly Engineering Platform",
    description:
      "Interactive, visual DevOps learning platform: Linux, Git, CI/CD, Docker, and Kubernetes.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Zero to Hero",
    description: "Learn modern DevOps from absolute zero with interactive diagrams and hands-on lessons.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-500/30 selection:text-white">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
