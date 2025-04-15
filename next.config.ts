import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:9002',
        'zany-winner-9766pvvqj5gjfx6xx-9002.app.github.dev'
      ],
    },
  },
};

export default nextConfig;
