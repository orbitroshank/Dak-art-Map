import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export", // if you aren’t already exporting
  images: {
    unoptimized: true, // ← disable Next’s image optimizer
  },
};
