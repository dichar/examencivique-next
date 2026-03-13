/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "examencivique.info" }],
        destination: "https://www.examencivique.info/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
