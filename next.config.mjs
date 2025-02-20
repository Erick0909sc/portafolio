/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/duhzsygir/**', // Asegúrate de incluir el patrón correcto
      },
    ],
  },
};

export default nextConfig;
