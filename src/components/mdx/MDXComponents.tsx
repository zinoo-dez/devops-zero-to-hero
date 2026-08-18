import React from "react";
import { CodeBlock } from "./CodeBlock";
import { FileTree } from "./FileTree";
import { Callout } from "./Callout";
import { Steps, Step } from "./Steps";
import { MermaidDiagram } from "@/components/diagrams/MermaidDiagram";
import { CICDPipelineDiagram } from "@/components/diagrams/CICDPipelineDiagram";
import { DockerArchitectureDiagram } from "@/components/diagrams/DockerArchitectureDiagram";
import { KubernetesComponentsDiagram } from "@/components/diagrams/KubernetesComponentsDiagram";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { GradientText } from "@/components/ui/GradientText";

import { InteractiveTerminal } from "@/components/interactive/InteractiveTerminal";
import { KnowledgeCheck } from "@/components/interactive/KnowledgeCheck";
import { CloudSandboxCallout } from "@/components/interactive/CloudSandboxCallout";

export const MDXComponents = {
  // Headings
  h1: () => null, // Hide h1 from MDX because the page template already renders the lesson title
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl sm:text-2xl font-bold text-foreground tracking-tight mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-white/[0.08]"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-bold text-blue-700 dark:text-blue-200 tracking-tight mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-base font-bold text-foreground mt-6 mb-2" {...props} />
  ),

  // Paragraphs & Text
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base text-muted-foreground leading-relaxed mb-5" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-foreground" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-indigo-700 dark:text-indigo-300" {...props} />
  ),

  // Lists
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-muted-foreground" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside pl-6 space-y-2 mb-6 text-muted-foreground" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed pl-1" {...props} />
  ),

  // Blockquotes
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 p-4 rounded-r-xl my-6 text-muted-foreground italic"
      {...props}
    />
  ),

  // Code & Code Blocks
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => {
    const { children, className, ...rest } = props;

    // Check if child is a <code> element
    if (React.isValidElement(children)) {
      const childProps = children.props as any;
      const codeClass = childProps?.className || "";
      const rawContent = childProps?.children;
      const textContent =
        typeof rawContent === "string" ? rawContent : String(rawContent || "");

      // 1. Mermaid diagrams
      if (codeClass === "language-mermaid") {
        return <MermaidDiagram chart={textContent} />;
      }

      // 2. Folder tree structure detection
      if (
        codeClass === "language-tree" ||
        codeClass === "language-filetree" ||
        textContent.includes("├──") ||
        textContent.includes("└──")
      ) {
        return <FileTree>{textContent}</FileTree>;
      }

      // 3. Standard Code Block
      const lang = codeClass.replace(/^language-/, "") || "text";
      return (
        <CodeBlock language={lang} className={className} {...rest}>
          {rawContent}
        </CodeBlock>
      );
    }

    return (
      <CodeBlock language="text" className={className} {...rest}>
        {children}
      </CodeBlock>
    );
  },

  code: (props: React.HTMLAttributes<HTMLElement>) => {
    const { className, children, ...rest } = props;

    // 1. Mermaid diagram
    if (className === "language-mermaid") {
      return <MermaidDiagram chart={String(children)} />;
    }

    // 2. Code block with explicit language tag
    if (className && className.startsWith("language-")) {
      const lang = className.replace(/^language-/, "");
      const strContent = String(children || "");

      if (
        lang === "tree" ||
        lang === "filetree" ||
        strContent.includes("├──") ||
        strContent.includes("└──")
      ) {
        return <FileTree>{strContent}</FileTree>;
      }

      return (
        <CodeBlock language={lang} className={className} {...rest}>
          {children}
        </CodeBlock>
      );
    }

    // 3. Multiline code block without language tag
    if (typeof children === "string" && children.includes("\n")) {
      if (children.includes("├──") || children.includes("└──")) {
        return <FileTree>{children}</FileTree>;
      }
      return (
        <CodeBlock language="text" {...rest}>
          {children}
        </CodeBlock>
      );
    }

    // 4. True single-line inline code chip
    return (
      <code
        className="px-1.5 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/25 text-[13px] font-mono whitespace-nowrap"
        {...rest}
      >
        {children}
      </code>
    );
  },

  // Tables
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-white/[0.08]">
      <table className="w-full text-sm text-left text-muted-foreground" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-slate-100 dark:bg-white/[0.04] text-xs uppercase font-bold text-foreground border-b border-slate-200 dark:border-white/[0.08]" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 border-b border-slate-200 dark:border-white/[0.04]" {...props} />
  ),

  // Custom Components
  FileTree,
  Callout,
  CodeBlock,
  Steps,
  Step,
  MermaidDiagram,
  CICDPipelineDiagram,
  DockerArchitectureDiagram,
  // Interactive Components
  InteractiveTerminal,
  KnowledgeCheck,
  CloudSandboxCallout,
};
