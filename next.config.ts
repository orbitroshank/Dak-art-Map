// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },

  // for static export:
  output: "export",
  trailingSlash: true,

  // when deployed under /Dak-art-Map on GitHub pages:
  basePath: process.env.NODE_ENV === "production" ? "/Dak-art-Map" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Dak-art-Map/" : "",

  images: {
    unoptimized: true, // since you're doing a static export
  },
};

module.exports = nextConfig;
