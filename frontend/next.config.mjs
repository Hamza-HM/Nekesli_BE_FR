// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Assuming HTTPS for all sources, adjust if needed
        hostname: "www.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
