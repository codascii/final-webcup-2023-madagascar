/** @type {import('next').NextConfig} */
const nextConfig = {
	//output: "export",
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
