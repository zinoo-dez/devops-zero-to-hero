import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-gfm"]],
    rehypePlugins: [
      ["rehype-slug"],
      ["rehype-autolink-headings", { behavior: "wrap" }],
    ],
  },
});

const nextConfig: NextConfig = {
  // Static export — generates out/ directory
  output: "export",

  // Support .mdx file extensions
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // Required for static export (disables Next.js image optimization)
  images: {
    unoptimized: true,
  },

  // Remove X-Powered-By header
  poweredByHeader: false,
};

export default withMDX(nextConfig);

