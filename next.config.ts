import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	compiler: {
		emotion: {
			sourceMap: true,
			autoLabel: "dev-only",
			labelFormat: "[local]",
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fwe-medias.sgp1.cdn.digitaloceanspaces.com",
				pathname: "/**",
			},
		],
		qualities: [80, 90, 100],
		minimumCacheTTL: 86400, // cache 1 day
	},
	webpack(config, { isServer }) {
		if (!isServer) {
			// รัน modern bundle: ไม่ transpile syntax รุ่นใหม่ๆ ให้ legacy
			config.output.environment = {
				arrowFunction: true,
				const: true, // อนุญาตให้ใช้ var แทน const
				destructuring: true, //object/array destructuring
				dynamicImport: true, //import(...) เพื่อโหลดโมดูลแบบไดนามิกโดยไม่ต้องแปลงเป็น callback-based loader
				forOf: true, //for (const item of iterable) {} แทนการคอมไพล์เป็น .forEach หรือ loop ธรรมดา
				templateLiteral: true, //อนุญาตให้ใช้ template strings
				optionalChaining: true, //อนุญาตให้ใช้ ?. operator
				bigIntLiteral: true, //อนุญาตให้ใช้ BigInt literals (123n) โดยไม่ต้องคอมไพล์เป็นไลบรารีเสริม
			};
		}
		return config;
	},
};

export default nextConfig;
