/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "flowbite.s3.amazonaws.com",
      "images.unsplash.com",
      "i.ibb.co", // 👈 Add this line
    ],
  },
};

export default nextConfig;
