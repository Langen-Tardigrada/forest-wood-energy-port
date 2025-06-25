import { IMAGE } from "../../../types/image";

export type Member = {
	department: string;
	member: Array<{
		position: string;
		name: string;
		image: IMAGE;
		width: string;
	}>;
};

export const teammember: Array<Member> = [
	{
		department: "Operation",
		member: [
			{
				position: "Managing Director",
				name: "Opas Cheewatammanon",
				image: {
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/opas2.webp",
					blurDataUrl:
						"data:image/webp;base64,UklGRt4AAABXRUJQVlA4INIAAABQBACdASoJAAoAAAAAJYgCdEyAWJX+mfsAOEAxEDzwpi3/AHWkt6s7LIHAAP70x/5QH/rP9O3b/lD82YZ18D/+P/Q8//90EMf6O1kiilr/G88xn+Xw//cuP/9OwP/2q4//kmceo0u/Y2xC66S3/Kzu1osm7/60/2u5nn/PdgLfssf/If/2p5Tm20PzwjN+whRPNS+/4qq7RgPup+pcaNPuBclV//U+/9d699/xe8v5vi3//74Ufxzd1V8P7q9dHmA+//0/4bHQjnP/WNR1rPTQAAA=",
				},
				width: "1 / span 3",
			},
			{
				position: "Finance Manager",
				name: "Michelle Lim",
				image: {
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/Michelle2.webp",
					blurDataUrl:
						"data:image/webp;base64,UklGRvgAAABXRUJQVlA4IOwAAAAwBQCdASoJAAoAAAAAJQBOhrgH6AbyraIFaAfjNPEv4q1JnsCn8//GXhAD0XEI4pSclAD+/p8Rf/1GnS8VJ/8zeGUYEA9Usj9/854H9BR//nv/0W/WnD6/NBTFv4jeliX/sG7lPFr35xX/mIF//cGKaYuMh/TmU73/mJfLdRqr7egRFA5t9MeBv4mH/q4f3p9ihB5H3lMl15XzZxF39b2sPYjb/NF+HuH6OhDP/xrv+3pUHtMcP/r5D/df/u2Gb6NnnJ+/mTl//1b59HmYv3PYvlxUB9P+ssfkcwlv/bUzXmdh20D1vwygPAAAAA==",
				},
				width: "4 / span 3",
			},
			{
				position: "Head of Sustainability and Compliance",
				name: "Eugene Lim",
				image: {
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/eugene2.webp",
					blurDataUrl:
						"data:image/webp;base64,UklGRtgAAABXRUJQVlA4IMwAAADwAwCdASoJAAoAAAAAJZgCdDXADkSc5A1gD7Ztwf/qH5Zm7HgjuJh0AP79mX/tt//d3cXVrdg+4WYyQRfs4fp/+K/59FceVzHybvFB+qxEf/J35PH/+j/46cEgf/OYzLmudIRhNSEb2Ok1bvtWL/1p/T1i8h0Rcc6EJ1t7/9/ivvdd/+aPfs75pRFSLcI7v9qS/8uR7Vo3wvXkbopGUGv/zbw/v2v7m4X/Pq5K//9Aav/0KJr/cO/l+fS8VaP/akJf+H1d6cPcLOrDAAA=",
				},
				width: "7 / span 3",
			},
			{
				position: "Business Development ",
				name: "Bobby Teoh",
				image: {
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/bobby2.webp",
					blurDataUrl:
						"data:image/webp;base64,UklGRuwAAABXRUJQVlA4IOAAAABwBACdASoJAAoAAAAAJQBOluAIkA9AD0ZneAyQB5s2wcf1D8gDRidHwwdOYAD+/Mv2j78xSshgua7b/u88T7//OL/Fy/lIf+dn79I1migQUQ5ypR/2hT/ifkF7Bf/yB7/Rb/rrPV4e4Dwf/mXVf/o5myDt/Yfq/f/E4hWb+H2PWGcH5RP87mkUP/P//nXT5mKKHzYfwnSUWSeURR39fyETgUroMv/1p//Ln+bj/iaMJ6FduyP/6e2/+jz/mzPj4U/7jLff/6m9BOOL/cB+Tv7XJfvxZvOJ40R7E6dCdAAAAA==",
				},
				width: "10 / span 3",
			},
		],
	},
	{
		department: "Sales",
		member: [
			{
				position: "Business Development",
				name: "David Loo",
				image: {
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/David.webp",
					blurDataUrl:
						"data:image/webp;base64,UklGRhIBAABXRUJQVlA4IAYBAAAwBgCdASoKAAoAAAAAJYgCdDXAP0A3kC0QLFL+AGYAfqBjgGok6ar+IG4Gfxr+4fmNwgB9fShD6I3wAP7+3W//1en9DdNJgu5AA/VsuKvvgALc//bX9VP/0Gn+f/3pLN5Y/NV6XdA//lxidupZRv8DCkb18ryj+F3srO5ErgZMo/+yHt+lgWTf+4xb29qWpqhgbLXqv9H/8mBvsT4aI31yyqf//b62pMzcbLpgqkDdxXGHpO9/p/4ZN3/zpZ0JftTHgfw2oZIgkfvOdx6ZWjNe//9fh6/tB/j/x/7H/kZjaALf/+rfOqx0w7fu6x4atk/5kOk1fkv/S1Q+cZNlGa0b94n4AAAA",
				},
				width: "1 / span 3",
			},
			{
				position: "Business Development",
				name: "Jersey Lim",
				image: {
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/Jersey.webp",
					blurDataUrl:
						"data:image/webp;base64,UklGRvYAAABXRUJQVlA4IOoAAAAwBQCdASoJAAoAAAAAJQBOiXAL4A6TP0SXQAeYBTkv5AToByg/9q/GDhADx4kj2qbjAAD5f93fry5r//86oP6yyScIm8/0P/869/8E+NbnKh4Z3nSP4Y//J4Nefl0p/+ik/8B/wfmNR6FRz89+nM0Yz/8MCv71MqPff+i69Z0sg0PAoyFcx/5eDa38HS3bJkwz/++0v/1bctr/l9z6ojyI3xNfea+efuAV2FdiiTBWv/rTB/5ET9f7+K2/lHmA38j//17d+Vaa3/Rv1PvYv3/qSvxi+/rP39Gpa/DKtIBz4NUzWFUPxNKtAAA=",
				},
				width: "4 / span 3",
			},
			{
				position: "Business Development",
				name: "Pacheewasin Cheewatammanon",
				image: {
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/pallet.webp",
					blurDataUrl:
						"data:image/webp;base64,UklGRvoAAABXRUJQVlA4IO4AAAAQBQCdASoKAAoAAAAAJQBOhfmfo1rkAxUCpZvNx/gOUZ/tH5JcYB+laIDornj2K4wAAP4L/+UB3T2uP/5w7P1lJv3hP/0V1pf6X6t7ncP2OeDKH/8K97D1p9iHz0YfzQ7Dwb8Iv/6djv9wO5xkkk40lT2XCNI/d6//055M70f/WlMzk4Em7bWqGL/+F+/77Zf/VHhR9s2Bh4KJt6tkG8u+lur2aVIAdkwAd82xhJY/JPJ8kHNh+c/Mqe2/ju6U//m1N/dfizKqiLmjRs//+e3f1YpFs25uVsiNfrv+P1/k7/C85l/Vr9475lt0yAAA",
				},
				width: "7 / span 3",
			},
		],
	},
	{
		department: "Research & Development",
		member: [
			{
				position: "Head of Research & Development",
				name: "Lek Cheewatammanon",
				image: {
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/Lek.webp",
					blurDataUrl:
						"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/10px/Lek.webp",
				},
				width: "1 / span 3",
			},
			{
				position: "Product Development",
				name: "Azizee Fekri ",
				image: {
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/Azizee.webp",
					blurDataUrl:
						"data:image/webp;base64,UklGRvYAAABXRUJQVlA4IOoAAACwBACdASoJAAoAAAAAJYwCdBoAGOA/AD8gPMAp0maZuUr/r/5Gfys0LXZo0uuAAP72dTe7X/XFEdd7ucL9myJm69/8twfwxRp/TnMezkUiXhfxO+ml/tBJ/dtJt4uX/rOoVX4L/+TSeFOvFQ+KYShsbxTw//qmaY6/923/9DYVHt+Jw2f/mo2X2APZyvmfy0NCVdv98b//Z33FdZ7FTMf8Gki8Pso+amOYCi+vmXIsvrf//GL/6j+M/28Z+cA/9YD+7+T7+Z7+6//H1l+Gv/NlUv3f/5O38//6W9TP8J3+TZsPuKvP5dIAAAA=",
				},
				width: "4 / span 3",
			},
		],
	},
];
