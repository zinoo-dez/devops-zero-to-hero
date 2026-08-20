import React from "react";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { Terminal, Home, ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 text-center">
          <div className="max-w-md space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto shadow-xl shadow-indigo-500/10">
              <Terminal className="w-8 h-8" />
            </div>

            <div className="text-7xl font-black tracking-tight">
              <GradientText gradient="from-indigo-400 via-violet-400 to-purple-400">
                404
              </GradientText>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Command Not Found (404)
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The route or lesson you are looking for has been moved or doesn&apos;t exist in our DevOps cluster.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 transition-all"
              >
                <Home className="w-3.5 h-3.5" />
                Return Home
              </Link>

              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-foreground border border-white/10 transition-all"
              >
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
