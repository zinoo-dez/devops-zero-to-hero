import React from "react";
import { Terminal, ExternalLink, Sparkles, Box, Server } from "lucide-react";

export function CloudSandboxCallout() {
  const sandboxes = [
    {
      name: "Killercoda Interactive Playground",
      desc: "Free real Ubuntu & Kubernetes Linux instances in browser without signup.",
      url: "https://killercoda.com",
      badge: "Linux & K8s",
      icon: Terminal,
    },
    {
      name: "Play with Docker (PWD)",
      desc: "Free 4-hour Docker lab instances with full root daemon access.",
      url: "https://labs.play-with-docker.com",
      badge: "Docker CLI",
      icon: Box,
    },
    {
      name: "GitHub Codespaces",
      desc: "60 hours/month free cloud VS Code and Linux container environment.",
      url: "https://github.com/codespaces",
      badge: "Full Dev Stack",
      icon: Server,
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-500/10 via-slate-50 dark:via-[#0a0b14] to-slate-100 dark:to-[#08080d] p-6 sm:p-7 backdrop-blur-xl shadow-xl">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
          <Terminal className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Zero Local Setup Required
          </span>
          <h4 className="text-base font-bold text-foreground">
            Practice in 1-Click Free Cloud Sandboxes
          </h4>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
        Don&apos;t have Linux or Docker installed locally? You can run every exercise in this curriculum using these free, instant browser-based sandboxes:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {sandboxes.map((s, idx) => {
          const Icon = s.icon;
          return (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20">
                    {s.badge}
                  </span>
                </div>
                <h5 className="text-xs font-bold text-foreground group-hover:text-blue-500 transition-colors flex items-center gap-1">
                  {s.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h5>
                <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
                  {s.desc}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
