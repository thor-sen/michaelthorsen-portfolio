import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* Pin tracing to this app when a parent folder has another lockfile (avoids broken serverless bundles). */
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
