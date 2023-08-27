import "./env/client.mjs";
import "./env/server.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
