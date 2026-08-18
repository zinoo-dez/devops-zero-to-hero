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
  metadataBase: new URL("https://devops-zero-to-hero.dev"),
  title: {
    default: "DevOps Zero to Hero | Free Beginner-Friendly Engineering Platform",
    template: "%s | DevOps Zero to Hero",
  },
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
    "Zin Oo",
  ],
  authors: [{ name: "Zin Oo", url: "https://www.facebook.com/lu.gyi.416515" }],
  creator: "Zin Oo",
  publisher: "DevOps Zero to Hero",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "DevOps Zero to Hero | Free Beginner-Friendly Engineering Platform",
    description:
      "Interactive, visual DevOps learning platform: Linux, Git, CI/CD, Docker, and Kubernetes.",
    url: "https://devops-zero-to-hero.dev",
    siteName: "DevOps Zero to Hero",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 675,
        alt: "DevOps Zero to Hero - Free Beginner-Friendly Engineering Platform",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Zero to Hero | Free Beginner-Friendly Engineering Platform",
    description: "Learn modern DevOps from absolute zero with interactive diagrams and hands-on lessons.",
    creator: "Zin Oo",
    images: ["/og-image.png"],
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
