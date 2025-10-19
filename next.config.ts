import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				pathname: "/seed/**",
			},
			{
				protocol: "https",
				hostname: "cz7algaabcz8rpd1.public.blob.vercel-storage.com",
			},
		],
	},
};

export default nextConfig;
