export type News = {
	slug: string;
	headline: string;
	shrt_headline: string;
	date: string;
	introduction: string;
	medias: Array<{ url: string; type: "img" | "mp4" }>;
	part1: {
		headline: string;
		detail: Array<string>;
		hilight: string;
	};
	part2: {
		detail: Array<string>;
		hilight: string;
		detail2: Array<string>;
		image: string;
	};
	part3: {
		headline: string;
		detail: Array<string>;
		hilight: string;
		detail2: Array<string>;
		image: { url: string; height?: number; width?: number };
		detail3: Array<string>;
	};
};
