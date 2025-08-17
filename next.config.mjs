/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  basePath: "/elevator-notice-composer",
  assetPrefix: "/elevator-notice-composer/",
  images: {
    unoptimized: true, // disable Image Optimization (not supported on GitHub Pages)
  },
};

export default nextConfig;
