import { products as preview } from "../home/home";

type Media = {
	url: string;
	mediaType: "img" | "mp4";
};

export type Product = {
	name: string;
	subtext: string;
	properties: Array<{ element: string; value: string }>;
	medias: {
		s900x370: Array<Media>; // home
		s780x430: Array<Media>;
		s1200x1200: Array<Media>; //all product
		s940x940: Array<Media>;
		s640x1240: Array<Media>;
		s840x840: Array<Media>;
		s400x400: Array<Media>;
	};
	blurDataUrl: Array<Media>;
	link: string;
};

export const products: Array<Product> = [
	{
		name: "Wood Pellets",
		subtext:
			"High-density, eco-friendly biomass fuel made from compressed wood waste for efficient energy production.",
		properties: [
			{ element: "Calorific value", value: "High" },
			{ element: "Ash content", value: "Low" },
			{
				element: "Material Source",
				value: "Compressed sawdust and wood waste",
			},
			{ element: "Moisture Content", value: "Low" },
		],
		blurDataUrl: preview[0].blurDataUrl,
		medias: preview[0].media,
		link: "/product/wood_pellet",
	},
	{
		name: "Briquettes",
		subtext:
			"Durable, compact biomass fuel blocks made from wood waste, offering long-lasting and clean energy.",
		properties: [
			{ element: "Calorific value", value: "High" },
			{ element: "Ash content", value: "Low" },
			{ element: "Material Source", value: "Compressed wood waste" },
			{ element: "Moisture Content", value: "Low" },
		],
		blurDataUrl: preview[2].blurDataUrl,
		medias: preview[2].media,
		link: "/product/briquettes",
	},
	{
		name: "Wood Chips",
		subtext:
			"Versatile, natural wood fragments used as biomass fuel, ideal for heating and industrial energy.",
		properties: [
			{ element: "Calorific value", value: "Moderate" },
			{ element: "Ash content", value: "Moderate to high" },
			{
				element: "Material Source",
				value: "Natural wood fragments from forestry operations",
			},
			{ element: "Moisture Content", value: "Higher" },
		],
		blurDataUrl: preview[3].blurDataUrl,
		medias: preview[3].media,
		link: "/product/wood_chips",
	},
	{
		name: "Palm Kernel Shell",
		subtext:
			"Sustainable biomass fuel sourced from palm oil production, offering high calorific value for energy generation.",
		properties: [
			{ element: "Calorific value", value: "High" },
			{ element: "Ash content", value: "Moderate" },
			{ element: "Material Source", value: "Byproduct of palm oil production" },
			{ element: "Moisture Content", value: "Low" },
		],
		blurDataUrl: preview[1].blurDataUrl,
		medias: preview[1].media,
		link: "/product/PKS",
	},
	{
		name: "Empty Fruit Bunches",
		subtext:
			"Renewable biomass fuel derived from palm oil processing, providing an eco-friendly energy solution.",
		properties: [
			{ element: "Calorific value", value: "Moderate" },
			{ element: "Ash content", value: "High" },
			{ element: "Material Source", value: "Byproduct of palm oil production" },
			{ element: "Moisture Content", value: "High" },
		],
		blurDataUrl: preview[4].blurDataUrl,
		medias: preview[4].media,
		link: "/product/EFB",
	},
];
