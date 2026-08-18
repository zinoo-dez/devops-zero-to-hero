"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Play, RotateCcw, Copy, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandPreset {
  label: string;
  command: string;
}

interface InteractiveTerminalProps {
  initialCommand?: string;
  presets?: CommandPreset[];
  title?: string;
  welcomeMessage?: string;
}

const COMMAND_OUTPUTS: Record<string, string> = {
  help: `Available interactive commands:
  • ls -la                   - List files in current directory
  • pwd                      - Print working directory
  • uname -a                 - Display Linux kernel information
  • ps aux                   - List active processes
  • htop                     - Process monitor snapshot
  • docker ps                - List running Docker containers
  • docker images            - List local Docker images
  • kubectl get nodes        - List Kubernetes cluster nodes
  • kubectl get pods -A      - List all Pods across namespaces
  • git status               - Check Git repository status
  • git log --oneline -3     - View recent git commits
  • terraform version        - Check Terraform IaC version
  • curl ifconfig.me         - Simulate external network request
  • clear                    - Clear the terminal screen`,

  "ls": `total 32
drwxr-xr-x 6 devops devops 4096 Aug 19 02:30 .
drwxr-xr-x 3 devops devops 4096 Aug 19 02:00 ..
-rw-r--r-- 1 devops devops  284 Aug 19 02:15 Dockerfile
-rw-r--r-- 1 devops devops  640 Aug 19 02:20 docker-compose.yml
-rw-r--r-- 1 devops devops 1240 Aug 19 02:25 main.tf
drwxr-xr-x 2 devops devops 4096 Aug 19 02:10 manifests/`,

  "ls -la": `total 32
drwxr-xr-x 6 devops devops 4096 Aug 19 02:30 .
drwxr-xr-x 3 devops devops 4096 Aug 19 02:00 ..
-rw-r--r-- 1 devops devops  120 Aug 19 02:05 .env.example
drwxr-xr-x 8 devops devops 4096 Aug 19 02:28 .git/
-rw-r--r-- 1 devops devops  284 Aug 19 02:15 Dockerfile
-rw-r--r-- 1 devops devops  640 Aug 19 02:20 docker-compose.yml
-rw-r--r-- 1 devops devops 1240 Aug 19 02:25 main.tf
drwxr-xr-x 2 devops devops 4096 Aug 19 02:10 manifests/`,

  pwd: `/home/devops/production-workspace`,

  "uname -a": `Linux devops-runner-01 6.8.0-40-generic #40-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux`,

  whoami: `devops`,

  "ps aux": `USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.2 168432 11840 ?        Ss   02:00   0:01 /sbin/init
devops       412  0.0  0.4 712300 24100 ?        Ssl  02:05   0:04 /usr/bin/dockerd
devops       789  0.1  1.2 984500 68200 ?        Ssl  02:10   0:12 /usr/local/bin/k3s server
devops      1024  0.0  0.1  24500  6200 pts/0    Ss   02:30   0:00 -bash`,

  htop: `[|||||||||||||||||||||||||||||||||||| 42.1%]   Tasks: 48, 112 thr; 1 running
[||||||||||||||||||||                28.4%]   Mem: 1.82G / 7.74G
[                                     0.0%]   Swp: 0K / 2.00G
PID USER      PRI  NI  VIRT   RES   SHR S CPU% MEM%   TIME+  Command
 789 devops    20   0  984M 68.2M 34.1M S  4.2  0.9  0:12.42 k3s server
 412 devops    20   0  712M 24.1M 18.2M S  1.8  0.3  0:04.18 dockerd
 920 devops    20   0  240M 14.5M  9.1M S  0.5  0.2  0:01.05 prometheus`,

  "docker ps": `CONTAINER ID   IMAGE                 COMMAND                  CREATED         STATUS         PORTS                    NAMES
a8f91b2c4d3e   ghcr.io/app/api:v1.4  "node dist/index.js"     12 minutes ago  Up 12 minutes  0.0.0.0:8080->8080/tcp   api-service
3c7e9f0a1b2d   redis:7-alpine        "docker-entrypoint.s…"   20 minutes ago  Up 20 minutes  0.0.0.0:6379->6379/tcp   redis-cache
8b1a2c3d4e5f   postgres:16-alpine    "docker-entrypoint.s…"   25 minutes ago  Up 25 minutes  0.0.0.0:5432->5432/tcp   postgres-db`,

  "docker images": `REPOSITORY             TAG       IMAGE ID       CREATED        SIZE
ghcr.io/app/api        v1.4      a8f91b2c4d3e   15 mins ago    124MB
ghcr.io/app/frontend   v1.2      9d8e7f6a5b4c   1 hour ago     38MB
redis                  7-alpine  3c7e9f0a1b2d   2 days ago     45MB
postgres               16-alpine 8b1a2c3d4e5f   1 week ago     142MB`,

  "kubectl get nodes": `NAME              STATUS   ROLES                  AGE   VERSION
k3s-control-01    Ready    control-plane,master   14d   v1.30.2+k3s1
k3s-worker-01     Ready    worker                 14d   v1.30.2+k3s1
k3s-worker-02     Ready    worker                 14d   v1.30.2+k3s1`,

  "kubectl get pods": `NAME                              READY   STATUS    RESTARTS   AGE
api-deployment-7b8df988d4-5m7kl   1/1     Running   0          18m
api-deployment-7b8df988d4-9x2pq   1/1     Running   0          18m
api-deployment-7b8df988d4-z1c3v   1/1     Running   0          18m
redis-master-0                    1/1     Running   0          42m`,

  "kubectl get pods -A": `NAMESPACE     NAME                                      READY   STATUS    RESTARTS   AGE
kube-system   coredns-576bfc4dc7-4v6b8                  1/1     Running   0          14d
kube-system   traefik-f98b67b4c-9km2p                   1/1     Running   0          14d
monitoring    prometheus-server-7945d8b76c-x98qz        1/1     Running   0          5d
argocd        argocd-server-54d989cb56-3p2q1            1/1     Running   0          7d
default       api-deployment-7b8df988d4-5m7kl           1/1     Running   0          18m`,

  "git status": `On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   manifests/deployment.yaml
	modified:   .github/workflows/deploy.yml

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	terraform/outputs.tf`,

  "git log --oneline -3": `f8a92b1 (HEAD -> main, origin/main) feat(gitops): update ArgoCD application manifest
c4e107d fix(docker): enable multi-stage build cache for GHCR
7b3a98f feat(ci): add automated Trivy vulnerability scanning`,

  "terraform version": `Terraform v1.9.4
on linux_amd64
+ provider registry.terraform.io/hashicorp/aws v5.62.0
+ provider registry.terraform.io/kreuzwerker/docker v3.0.2`,

  "curl ifconfig.me": `203.0.113.195`,
};

export function InteractiveTerminal({
  initialCommand = "docker ps",
  presets = [
    { label: "Check Docker Containers", command: "docker ps" },
    { label: "List K8s Pods", command: "kubectl get pods -A" },
    { label: "Git Status", command: "git status" },
    { label: "List Files", command: "ls -la" },
    { label: "Cluster Nodes", command: "kubectl get nodes" },
  ],
  title = "Interactive DevOps Terminal Sandbox",
  welcomeMessage = "Interactive Sandbox environment. Type commands below or click preset buttons to execute live terminal simulations.",
}: InteractiveTerminalProps) {
  const [history, setHistory] = useState<
    Array<{ type: "input" | "output" | "system"; text: string }>
  >([
    { type: "system", text: welcomeMessage },
    { type: "system", text: "Tip: Type 'help' to see all available commands." },
  ]);
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialCommand) {
      handleRunCommand(initialCommand);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRunCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const matchedKey = Object.keys(COMMAND_OUTPUTS).find(
      (k) => k.toLowerCase() === trimmed.toLowerCase()
    );

    let output = "";
    if (matchedKey) {
      output = COMMAND_OUTPUTS[matchedKey];
    } else if (trimmed.startsWith("echo ")) {
      output = trimmed.substring(5);
    } else {
      output = `bash: ${trimmed}: command simulated. Try 'help', 'docker ps', 'kubectl get pods', or 'git status'.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", text: trimmed },
      { type: "output", text: output },
    ]);
    setInput("");

    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRunCommand(input);
  };

  const handleReset = () => {
    setHistory([
      { type: "system", text: welcomeMessage },
      { type: "system", text: "Tip: Type 'help' to see all available commands." },
    ]);
    setInput("");
  };

  const handleCopyOutput = () => {
    const raw = history
      .map((h) => (h.type === "input" ? `$ ${h.text}` : h.text))
      .join("\n");
    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-700/60 bg-[#090a10] shadow-2xl overflow-hidden text-left">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d0e17] border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-slate-200">{title}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyOutput}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1"
            title="Copy terminal session"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline text-[11px]">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1"
            title="Reset terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Reset</span>
          </button>
        </div>
      </div>

      {/* Preset Command Chips */}
      {presets && presets.length > 0 && (
        <div className="px-4 py-2.5 bg-[#0b0c14] border-b border-slate-800/80 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-blue-400" /> Quick Run:
          </span>
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleRunCommand(p.command)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-2.5 h-2.5 fill-blue-400" />
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Terminal Screen Body */}
      <div
        className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-slate-300 max-h-[360px] overflow-y-auto space-y-3"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, idx) => (
          <div key={idx} className="leading-relaxed">
            {entry.type === "system" && (
              <div className="text-slate-400 italic mb-1">{entry.text}</div>
            )}
            {entry.type === "input" && (
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="text-blue-400 select-none">devops@cloud:~$</span>
                <span>{entry.text}</span>
              </div>
            )}
            {entry.type === "output" && (
              <pre className="text-slate-300 whitespace-pre-wrap pl-2 border-l-2 border-slate-700/50 my-1 font-mono text-xs leading-5">
                {entry.text}
              </pre>
            )}
          </div>
        ))}
        <div ref={bottomRef} />

        {/* Input prompt line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
          <span className="text-blue-400 font-semibold select-none">
            devops@cloud:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. docker ps, kubectl get nodes, ls, help)..."
            className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs sm:text-sm"
          />
        </form>
      </div>
    </div>
  );
}
