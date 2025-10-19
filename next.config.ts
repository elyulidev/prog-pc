import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
				pathname: "/seed/**",
				search: "",
			},
			{
				protocol: "https",
				hostname: "cz7algaabcz8rpd1.public.blob.vercel-storage.com",
				port: "",
				pathname: "",
				search: "",
			},
		],
	},
};

export default nextConfig;
