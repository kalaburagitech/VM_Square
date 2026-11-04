import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF is ~20-30% smaller than WebP for these photos; WebP stays as the fallback
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    // Optimized images are cached for 31 days instead of the default 4 hours
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return [
      // The standalone clients page was removed; client names now appear only on the homepage
      { source: "/clients", destination: "/", permanent: true },
      // The industries page was removed; sector coverage is described on the services page
      { source: "/industries", destination: "/services", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Static files in /public (photos, logos) rarely change: let browsers/CDNs cache them for a week
        source: "/:all*(jpg|jpeg|png|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
