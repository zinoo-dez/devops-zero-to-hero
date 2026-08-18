"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, X } from "lucide-react";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [svgContent, setSvgContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function renderChart() {
      try {
        setError(null);

        // Ensure chart is a string and handle potential MDX object passing
        let chartStr =
          typeof chart === "string"
            ? chart
            : (chart as any)?.props?.children || String(chart || "");
        chartStr = chartStr.trim();

        if (!chartStr) {
          setError("Empty diagram data.");
          return;
        }

        const mermaid = (await import("mermaid")).default;
        const isDark = resolvedTheme === "dark";

        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? "dark" : "base",
          flowchart: {
            useMaxWidth: false,
            htmlLabels: true,
            curve: "basis",
            nodeSpacing: 45,
            rankSpacing: 45,
            padding: 16,
          },
          sequence: {
            useMaxWidth: false,
            diagramMarginX: 30,
            diagramMarginY: 20,
            actorMargin: 50,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
          },
          themeVariables: isDark
            ? {
                // ── Dark palette (indigo/slate) ───────────────────────
                primaryColor: "#2e2a72",
                primaryTextColor: "#f8fafc",
                primaryBorderColor: "#818cf8",
                lineColor: "#a5b4fc",
                secondaryColor: "#1e1b4b",
                tertiaryColor: "#0f172a",
                background: "#090912",
                mainBkg: "#1e1b4b",
                nodeBorder: "#818cf8",
                clusterBkg: "#13122b",
                clusterBorder: "#6366f1",
                titleColor: "#f8fafc",
                edgeLabelBackground: "#1e1b4b",
                // Sequence diagrams
                actorBkg: "#2e2a72",
                actorBorder: "#818cf8",
                actorTextColor: "#f8fafc",
                actorLineColor: "#a5b4fc",
                signalColor: "#c7d2fe",
                signalTextColor: "#f8fafc",
                labelBoxBkgColor: "#2e2a72",
                labelBoxBorderColor: "#818cf8",
                labelTextColor: "#f8fafc",
                loopTextColor: "#f8fafc",
                noteBkgColor: "#312e81",
                noteTextColor: "#e0e7ff",
                noteBorderColor: "#818cf8",
                activationBkgColor: "#3730a3",
                activationBorderColor: "#a5b4fc",
                fontSize: "16px",
              }
            : {
                // ── Light palette (crisp white/indigo) ────────────────
                primaryColor: "#e0e7ff",          // indigo-100 — node fill
                primaryTextColor: "#0f172a",      // slate-900 — node text
                primaryBorderColor: "#4f46e5",    // indigo-600 — node border
                lineColor: "#4f46e5",             // indigo-600 — arrows
                secondaryColor: "#f0f9ff",        // sky-50
                tertiaryColor: "#f5f3ff",         // violet-50
                background: "#ffffff",
                mainBkg: "#e0e7ff",               // default node background
                nodeBorder: "#4f46e5",
                clusterBkg: "#f8faff",
                clusterBorder: "#818cf8",         // indigo-400
                titleColor: "#0f172a",
                edgeLabelBackground: "#f8fafc",
                labelColor: "#0f172a",
                // Sequence diagrams
                actorBkg: "#e0e7ff",
                actorBorder: "#4f46e5",
                actorTextColor: "#0f172a",
                actorLineColor: "#4f46e5",
                signalColor: "#4338ca",
                signalTextColor: "#0f172a",
                labelBoxBkgColor: "#e0e7ff",
                labelBoxBorderColor: "#4f46e5",
                labelTextColor: "#0f172a",
                loopTextColor: "#0f172a",
                noteBkgColor: "#fef9c3",          // yellow-100
                noteTextColor: "#713f12",
                noteBorderColor: "#f59e0b",
                activationBkgColor: "#c7d2fe",    // indigo-200
                activationBorderColor: "#4f46e5",
                fontSize: "16px",
              },
          securityLevel: "loose",
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        });

        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg } = await mermaid.render(id, chartStr);

        if (isMounted) {
          setSvgContent(svg);
        }
      } catch (err: unknown) {
        console.error("Mermaid render error:", err);
        if (isMounted) {
          setError("Failed to render architecture diagram.");
        }
      }
    }

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart, resolvedTheme]);

  const handleZoomIn = () => setZoom((z) => Math.min(2.5, +(z + 0.2).toFixed(1)));
  const handleZoomOut = () => setZoom((z) => Math.max(0.6, +(z - 0.2).toFixed(1)));
  const handleResetZoom = () => setZoom(1);

  if (error) {
    return (
      <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-950/20 text-xs text-indigo-300">
        {error}
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <div
        ref={containerRef}
        className={[
          "group relative my-8 rounded-2xl border shadow-xl transition-all duration-200 overflow-hidden",
          isDark
            ? "border-white/10 bg-[#0c0c16]/90 backdrop-blur-xl"
            : "border-slate-200 bg-white/95 shadow-slate-200/50",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Floating Interactive Toolbar */}
        <div
          className={[
            "absolute top-3 right-3 z-10 flex items-center gap-1 p-1 rounded-xl border shadow-md backdrop-blur-md transition-opacity duration-200 opacity-80 group-hover:opacity-100",
            isDark
              ? "bg-slate-900/85 border-white/10 text-slate-200"
              : "bg-white/90 border-slate-200 text-slate-700 shadow-sm",
          ].join(" ")}
        >
          <button
            onClick={handleZoomIn}
            title="Zoom In"
            className="p-1.5 rounded-lg hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono font-medium px-1 select-none min-w-9 text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            className="p-1.5 rounded-lg hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetZoom}
            title="Reset Zoom"
            className="p-1.5 rounded-lg hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-0.5" />
          <button
            onClick={() => setIsFullscreen(true)}
            title="Full Screen View"
            className="p-1.5 rounded-lg hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Diagram Canvas Area */}
        <div className="p-6 md:p-8 overflow-x-auto min-h-48 flex items-center justify-center">
          {svgContent ? (
            <div
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center center",
                transition: "transform 0.15s ease-out",
              }}
              className="w-full flex justify-center py-2 [&_svg]:max-w-none [&_svg]:w-auto [&_svg]:h-auto [&_svg_text]:font-medium [&_svg_text]:text-[15px] md:[&_svg_text]:text-[16px]"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          ) : (
            <div className="flex items-center gap-2 text-xs text-muted-foreground animate-pulse py-8">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
              Rendering interactive visual diagram...
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Interactive Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/85 backdrop-blur-2xl p-4 md:p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-white font-medium text-sm">
              <Maximize2 className="w-4 h-4 text-indigo-400" />
              Architecture Diagram View
            </div>

            {/* Modal Controls */}
            <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-white/15 text-white">
              <button
                onClick={handleZoomIn}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-medium px-2">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomOut}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-colors ml-2"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Pan/Zoom Viewport */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-6">
            <div
              style={{
                transform: `scale(${zoom * 1.25})`,
                transformOrigin: "center center",
                transition: "transform 0.15s ease-out",
              }}
              className="flex justify-center [&_svg]:max-w-none [&_svg]:w-auto [&_svg]:h-auto [&_svg_text]:text-[16px]"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          </div>
        </div>
      )}
    </>
  );
}
