export type ProductDetail = {
	firstPart: {
		name: string;
		mediaSource: string;
		mediaType: "img" | "mp4";
		brightness: number;
		blurDataUrl: string;
	};
	secondPart: {
		heading: string;
		body: string;
		url: string;
		mediaType: "img" | "mp4";
		blurDataUrl: string;
	};
	thirdPart: {
		heading: string;
		body: string;
		url: string;
		blurDataUrl: string;
	};
	forthPart: {
		heading: string;
		body: string;
		url: string;
		blurDataUrl: string;
	};
	seeSights: Array<{
		original: string;
		type: string;
		grid_column: string;
		grid_row: string;
		blurDataUrl: string;
	}>;
};

export const pellet: ProductDetail = {
	firstPart: {
		name: "Wood Pellet",
		mediaSource:
			"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/pellet/part1.mp4",
		mediaType: "mp4",
		brightness: 1,
		blurDataUrl:
			"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/pellet/webp/10px/part1-snapshot.webp",
	},
	secondPart: {
		heading: "Wood Pellet",
		body: "Wood pellets are a highly efficient and sustainable biofuel, produced from compressed sawdust and other wood waste materials.",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/pellet/part2.mp4",
		blurDataUrl:
			"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/pellet/webp/10px/part2-snapshot.webp",
		mediaType: "mp4",
	},
	thirdPart: {
		heading: "Carbon-neutral energy source",
		body: "These pellets are a carbon-neutral energy source, as the trees from which the wood is derived absorb CO2 during their growth. This process balances out the CO2 released when the pellets are burned, resulting in a net zero impact on atmospheric CO2 levels. ",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/pellet/webp/part3-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRrAAAABXRUJQVlA4IKQAAACwAgCdASoKAAcAAAAAJZQCdDBAB8wBsnkVPvNZSQAA/vwP9jP/XWPl4/5r5NmGrVo8Vf/5V/8f/c3H/41q/+lh/9f+s//XJt8h81/Ex2+EaF5DC1xqZFxZZoTejSxwL+9/U5zQtyr8fkyHk9KX8VGfGfoe0ZP9u9LG0AEonKAexKkd/5/+T2D+4+EpMz10/8Qqvg/+O3TcB+6f9faFo39iM1MAAA==",
	},
	forthPart: {
		heading: "High energy density",
		body: "Wood pellets are prized for their high energy density, ease of transport, and clean combustion, making them an ideal choice for renewable energy generation and heating solutions, contributing to a more sustainable and eco-friendly energy landscape.",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/pellet/part4.jpg",
		blurDataUrl:
			"data:image/webp;base64,UklGRtQAAABXRUJQVlA4IMgAAAAQBQCdASoKAAcAAAAAJZgCdLoB+ACAL1UAwwCeAf2bwGv7l6kP9f/LThQDy3pDjX9AAP77J//Wnt0f/Ir/+25bDJlF9qV9/wP/8eP+irJP/Lk6pygNKXZr5h5v/Ru/g1RX5K7JgWlz/7QR/4N0XlUVqBDwJi373zjofyd3VmRcK2BRoH5FAoZq79Ty8YA2fNphYLBPis/8//YILWvDb/wzT9Ab/+zd7jaJD/JR/9DzyoRPLJW5b897/QXa/0Nyne7v4N/7pgAAAA==",
	},
	seeSights: [
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/webp/4.webp",
			type: "img",
			grid_column: "1 / span 3",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRhoBAABXRUJQVlA4IA4BAACQBgCdASoKAAoAAAAAJaACdLoB+ABJgH6gTQD8JZwl/FXWK/xm3QD+AfxL+sfkZ+//KQfpKfX3G0lsAMYAAP7/dh/8PPNuhy+On6LqwgCLby9YXtf/youqpxG2vdrQW//4X7/O3r9j/4/eSecW6sbx/+bf/+9kdoHG1hQMPZ5yjsnsybyXk/Gv5M+ML+fKJJgKrW6v0bel0a9rA2++vsQun2/9Ob5mP++7igtX2u9PgVw2yDz+z84lG0R//0tX/gCr2g+tV//jVsWH/JPNKjlQc/byjndBbcL/94DNzpEFfe6Fu4/4N/q/8Vx/Jv/hP//GmuLvfv0EZ9o/Wzv+b/4v/6G3/vJd/ob/+rKAAAA=",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/2.mp4",
			type: "mp4",
			grid_column: "4 / span 6",
			grid_row: "1",
			blurDataUrl:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/webp/10px/2snapshot.webp",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/webp/1.webp",
			type: "img",
			grid_column: "10 / span 3",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRrIAAABXRUJQVlA4IKYAAAAQBACdASoKAAcAAAAAJagCdLoB+AH6gTAD+AYQB/ACbAIUTLvmopbLvAD+/NNo9c4yW2j3k8bZ9YPv//akw/9iO/zmOT7h/+RhoHv804a158bNvdnElmeEXn4VsjUN5V1ktUuFsgNc9zMa6kLp3XuxleZ4mKZ/+73/pHORjP8eaL0LJ4y3/Rti3Z/9ZRf/CtUb8fwv/zaKvDXlM/s25uKzf660AAAA",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/6.jpg",
			type: "img",
			grid_column: "1 / span 6",
			grid_row: "2",
			blurDataUrl:
				"data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAACwAgCdASoKAAQAAAAAJZwCdEyACrM/Rp/Jk0KnTBgA+X+uf/ob//5S/On0uU/+9pCRmGipe0rj3Q1Ph+q0qpV/x+xOV227q3Mc9ezuF+f+K+ipFZQT85TNvh/tkOGrYpiR/hUs7271yzs33F53sMxHzGTgAA==",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/webp/7.webp",
			type: "img",
			grid_column: "7 / span 3",
			grid_row: "2",
			blurDataUrl:
				"data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAABwAwCdASoIAAoAAAAAJQBOl0A/AD8AAixr/HepkabCkVQHCQAA/v4SvMrF/Fu7vgsyDhm/64/vYr/xpvrj09mhij7CvIH/j36iuWfDr/4uQJlA/5O+ScwJUBqAiHf/on76SJbQ/SXSD5HJwWJLLvT/4jax72mNmodwJIYJjkX/qh3P+jDBef8Qn/2YSGP60UcX6p/qQAA=",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/3.mp4",
			type: "mp4",
			grid_column: "10 / span 3",
			grid_row: "2",
			blurDataUrl:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/webp/10px/3snapshot.webp",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/5.jpg",
			type: "img",
			grid_column: "1 / span 3",
			grid_row: "3",
			blurDataUrl:
				"data:image/webp;base64,UklGRgYBAABXRUJQVlA4IPoAAADwBgCdASoKAAoAAAAAJbACdLoB+AH6AS4A8zNquckA/YD/AZar+Ff6zf2aVY/ID2Cv5p/d/yR4QA8t5m4iJYAAAP7//tgHURUn6X7yA+dGNmLiPc3eGcDz5uz6gtZcyhJX/6yr/YhSlFag7KXXtS740Bf5IJk/I//faEDe3S0f/8wcle1KMBF4eHeb4+mMkrfX9dAqiUqZuBg8r/aPqJdk5dbD/3z5+hvkuKgREftnbtZG5sWG1D6QW/NtUJbG/UVb/dc5umSua1/+9Kj+ukfPa+f2+rfAHb2CBVPXfqj/yxD/8Zvq/6+L3KOTuiPa8irzwDxr7wf9piAA",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/8.mp4",
			type: "mp4",
			grid_column: "4 / span 6",
			grid_row: "3",
			blurDataUrl:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pellet/webp/10px/8snapshot.webp",
		},
	],
};

export const woodchips: ProductDetail = {
	firstPart: {
		name: "Wood Chips",
		mediaSource:
			"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/woodchips/part1.mp4",
		mediaType: "mp4",
		brightness: 0.8,
		blurDataUrl:
			"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/woodchips/webp/10px/part1-snapshot.webp",
	},
	secondPart: {
		heading: "Wood Chips",
		body: "Wood chips are a sustainable, carbon-neutral biofuel made from the byproducts of forestry operations, such as branches, twigs, and small trees",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/woodchips/webp/part2-1920.webp",
		mediaType: "img",
		blurDataUrl:
			"data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAADwAwCdASoKAAcAAAAAJagCdLoB+AH6ABAg38Y/s35AcIAfcqSMzyCAAP7+ht+p19Ton6fIoG8+lKttbSd7+Tf9Pke4Yl9tvYp4+DnP4qnt+23Rz43W6H6SWj/Rq3/LP07Polia8gc/4v/9OE3D1//4LWq/0ljv9blC1be/rbi3Df/+T5uXSIlEgMGNG/+4Y7/l2Hl2/e7SpUsxdclX/sxT/85V5Q+PF8FQh+Mb4ot/5JwAAAA=",
	},
	thirdPart: {
		heading: "Renewable energy source",
		body: "These chips are a renewable energy source that helps reduce greenhouse gas emissions by replacing fossil fuels in power generation.",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/woodchips/webp/part3-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRvQAAABXRUJQVlA4IOgAAACQBgCdASoKAAcAAAAAJbACdLoB+ACJJekrtACxAfgB+s39mm0DUAPxA1kDZBv4n/Vfxs4wD9ADBLqe7l0AAP7SZzn+8ocdAusvxe58ewKh6uvX/v//KwO/u80iauv//FdhFhrBbJ/+oifiKbT6RSDf+Xr4n8e/uQjgWHf/Gt0K+cozWw/4C1///iY+t3hgk7sVEV+nrj6mqYwP/4vGTGU/b4cz7mJ7gjN/+eCYn/42BlfohfhjEuoNfJ9/nzC3i//NP8GXvz/a1/+2ty8/3nx19w2exmQ/iUP+bBKmhP/BA+jm/7HkAAAA",
	},
	forthPart: {
		heading: "Leading to a net zero impact",
		body: "As trees grow, they absorb CO2, which offsets the emissions produced during the combustion of wood chips, leading to a net zero impact on atmospheric CO2 levels. ",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/woodchips/webp/part4-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRrwAAABXRUJQVlA4ILAAAADQAgCdASoKAAcAAAAAJbACdLoAfQARQB6jZcFr36iQAP7//iZ//Dz/3A/uL89//mL2RuSzeJtT/6J+n/rP//HvxVUKdbB0qb/f/XWa3e6j+X2ZJHNLPmuH53075/QZp+Qr99/tHILw7X66787pvLaKa7p4eEKeK7+cfeTKlEf/WfoHsW1p0+H8bf+/Hb/oI2//P+1ff/U3/+wk/318UjKbF2b/4twVTNaeWJ/JrSAAAA==",
	},
	seeSights: [
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/woodchips/3.jpg",
			type: "img",
			grid_column: "1 / span 3",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRs4AAABXRUJQVlA4IMIAAAAQBACdASoIAAoAAAAAJZACdLoB+AH6gTAAyADEM9gn/uP5Xl4JdpmNIAD+76nP/tg9/gVCRAhfnFCpJ/8aY7/jG/Gt5j//nj+wKNmSd1msfkH0laOSY2mvu/2/nX+8b/8HzqL+d/8+NSLUfQqB28M99M/yb/n48gfh4x/0yu/3w7Lf/3Y/oancV/v/QZ+Y55N5Rd//w7HEY4/ftxqf/5y64QfeVQ75/ta//M0LZfbvhszn9dEVgWRmPznSfP/JOAAAAA==",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/woodchips/1.mp4",
			type: "mp4",
			grid_column: "4 / span 6",
			grid_row: "1",
			blurDataUrl:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/woodchips/webp/10px/snapshot.webp",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/woodchips/webp/4.webp",
			type: "img",
			grid_column: "10 / span 3",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRq4AAABXRUJQVlA4IKIAAADwAgCdASoIAAoAAAAAJYgCdLoB+AAPoy/whsccYUPaYAD+uFMvRV/6VvcAvYK3fQ/j1M6Z/830Y9kTnXh+6Z/qvuAYcP/mGxFlxbff/2bQvxUEFoi9LheX/0QQTuf/7OxD9Rf/Ka57EE6Oy3GZn8m3/8gd/3YjyMKUCJv/r5BPAH9+jfW4dh68qJ36nv/v4zGapL/4VxvFNfxpombf/MTAAAA=",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/woodchips/webp/5.webp",
			type: "img",
			grid_column: "1 / span 6",
			grid_row: "2",
			blurDataUrl:
				"data:image/webp;base64,UklGRtwAAABXRUJQVlA4INAAAAAwBACdASoKAAcAAAAAJQBOl0A/ABExx2gH4gRBB/M/yJ4UA8i8p9SNncAA/v/+Ic/8jT/qDuXuNPrrbgrGS7/J999f/r38ywP9i/JF//eibdba/NhC+4rZv/9208FxgVyLgxFB2BuLKYOYDfz/jr5F39l7f9WzvK//8rOUL6f920/+6pTr/9ter1bYJ9ytP4Xk/Vpnh9uY7/KUdiIpYTc4Uh/6c9I5/b7srjD8P9W+TFSLwb/V/YGR7+UX/e7UOJ1JvwuEuvAarVuauHzAAAAA",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/woodchips/2.mp4",
			type: "mp4",
			grid_column: "7 / span 3",
			grid_row: "2",
			blurDataUrl:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/woodchips/webp/10px/2snapshot.webp",
		},
	],
};

export const pks: ProductDetail = {
	firstPart: {
		name: "Palm Kernel Shells",
		mediaSource:
			"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/pks/webp/part2-1920.webp",
		mediaType: "img",
		brightness: 0.5,
		blurDataUrl:
			"data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACQAgCdASoIAAoAAAAAJZwCdG1/D+gGZcchQflajgD+8o1vQfUHLjP7M/4804+ttqXVUhPZ+rtvepzRgEOZN7R9+oHhxI+p7woTVr+0Ze/SjGaL3wunZYni9L5vBT5K7Qo/9aREHMmx/8Zf4x6PlWQn98ZpWOX06YBwGKsAAAA=",
	},
	secondPart: {
		heading: "Palm Kernel Shells",
		body: "Palm kernel Shells (PKS), a carbon-neutral fuel, is derived from the fruit kernel of palm trees, which absorb CO2 when they grow.",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/pks/webp/part1-1920.webp",
		mediaType: "img",
		blurDataUrl:
			"data:image/webp;base64,UklGRswAAABXRUJQVlA4IMAAAAAwBACdASoIAAoAAAAAJZACdLoAd6A6AB4gGuA2Ab+Y/1r8jDc2LctwL4AA/vio4rupyVzRAuBPkztQ7YOeGKLIlr+vc30qP/rTbPz9WL1reHx/5FcGfe7/n3T76Vn/vhPqPzShGfo/+2L6AAqA/+YXmzg9o4bXSok3Mu/0R/+WXqk3RkpQWf/aEJ+xMJrn/3A2fmqTeKrQpLP+sb7i/Fj/89cej//J38ZCiZz4yFtfnyJJ/6WH/cWz/g3/8XMAAAA=",
	},
	thirdPart: {
		heading: "Resulting in a net zero impact",
		body: "This offsets the CO2 emitted during combustion, resulting in a net zero impact on atmospheric CO2 levels.",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/pks/webp/part3-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAABwAgCdASoKAAQAAAAAJYwCdAXAB/WjDmdFCzgAAP7tL/9bf/uB//9ORv9/5hkWve6cfpYGj/68+YVlxf0pEfc84JYM4xBB3jMtSfVNRAzsBY/Z3QWQstT/wal84O+ty/Lj/jWf/+A/3u6PAAA=",
	},
	forthPart: {
		heading: "",
		body: "",
		url: "",
		blurDataUrl: "",
	},
	seeSights: [
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/1.jpg",
			type: "img",
			grid_column: "1 / span 3",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRtwAAABXRUJQVlA4INAAAAAQBACdASoIAAoAAAAAJbACdLoA1ACxAOkoIwY/n35L8IAfVdW7mKYQAAD+//487/77S/7BX//cIn/iY//dWax5q+CuMN7lYFP/BArcaNofeMdRrQ94I4Prpz/1H/2/H//asSLvc1fCbQ6OY/dTr86Y/9DmvsvmtsfJbg6i3lR+XU4uBxHwflu+FJNOn9rpAr9tLP8f2v01xCdUTWuGOLyM3/tnf/6HnlRa98FT5K3Sv/zce9f4a+dpOfdqD+Z/+tCqP/x1H/9Uzs5M4C68dlgA",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/webp/2.webp",
			type: "img",
			grid_column: "4 / span 6",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRuYAAABXRUJQVlA4INoAAAAwBgCdASoIAAoAAAAAJZACdLoBJAH4AYoB/ALIA/QDrclyAZAB+M1SZ7IN/Ef67+KX7/m/sWixMgoAAP5P81+usAuWKWdOX0j/2j/KvVv78+6SX3q/v+8k473nvxTfpf/8E7g1/GZb/oefmLvx6zwf2V/8zvXLX5iFG1137OVvF1c9v5f4C+f/73d/7/vk/Vnz/1nfsyKJVffopH+ql5CRr+IG7BtQlf/UMPxbt/nNcJ/0tXhv/paGfwK+9p9rP/zuU/z+X53/jTCLE/3vTn/5m0rieO5klAAAAA==",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/webp/4.webp",
			type: "img",
			grid_column: "10 / span 3",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAABwAwCdASoIAAoAAAAAJZQCdC0JXeAT4X/F/7J+QpoUkZzWcAAA/v+HSJQ//03uL/hpY/Y+aievbsf/6+F/D0CPeH7ZkTFf1m9z2//mWn5wHW/9ljx+9WpIRz/n/zyu/82/+kT/Bmv7wxcfOkf5iSP4kCdO/gc3OCe2l2C88er+qdZe0f3tcxnjSMv1L/7tlx1/408BltP/tP+LYW/8qHz8HHJ/On/yP1z7/wwcSprwnxNWoAA=",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/11.mp4",
			type: "mp4",
			grid_column: "1 / span 6",
			grid_row: "2",
			blurDataUrl:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/webp/10px/11snapshot.webp",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/webp/5.webp",
			type: "img",
			grid_column: "7 / span 3",
			grid_row: "2",
			blurDataUrl:
				"data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACQAgCdASoIAAoAAAAAJZwCdG1/D+gGZcchQflajgD+8o1vQfUHLjP7M/4804+ttqXVUhPZ+rtvepzRgEOZN7R9+oHhxI+p7woTVr+0Ze/SjGaL3wunZYni9L5vBT5K7Qo/9aREHMmx/8Zf4x6PlWQn98ZpWOX06YBwGKsAAAA=",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/9.mp4",
			type: "mp4",
			grid_column: "10 / span 3",
			grid_row: "2",
			blurDataUrl:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/webp/10px/9snapshot.webp",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/webp/8.webp",
			type: "img",
			grid_column: "1 / span 3",
			grid_row: "3",
			blurDataUrl:
				"data:image/webp;base64,UklGRtoAAABXRUJQVlA4IM4AAABwBQCdASoKAAcAAAAAJYgCdDKVfYA/W5XAPwA/YDKAPxm1AC3bvUp/xH478YAdefdRdLoAAP7//l4P8+TuXbS+lh/2+4y3v0Lv3t+Yz82mc1kddrKmSr0WGN0uJRuBj9hoNakV6cwv/bse3VePs+OgnuZQNXBp/8f7cbz0s2Qm/eR7PYURca/+EIsRpFmwXvsRlzYDh/9K/v/HbWZR2E5koXL///fR1/9tv/yoteLV/v/yryT+RXXYlHvE8rYf//7qQ//b3/8YEHfwR8AAAA==",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/webp/3.webp",
			type: "img",
			grid_column: "4 / span 6",
			grid_row: "3",
			blurDataUrl:
				"data:image/webp;base64,UklGRuIAAABXRUJQVlA4INYAAAAQBQCdASoKAAYAAAAAJZACdLoB+ADXAP4BOIyJAPwAqQDzAv2blE/6r+QBrOQRqmDAAP7/9Uv/1HPhLDWh1KNbCf+pv/r/rvxJf/9Fhyf8dvyMu4nwNv6QR/4mP/z0iIWktlmChnDJ/94/X/+s/8kg0tVxtgJDn+Iifp//8HTa//WVe/9iX8Z5KhaeVnmwj+8x31apxkxcaXwFNvOIV/5cf3+lNrK7e/s5ezGT30tH/9l9kJTPL4+0md/VGf/Npb0dff+Ii5fei8G//qjQehZNknQkkAAA",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/10.mp4",
			type: "mp4",
			grid_column: "10 / span 3",
			grid_row: "3",
			blurDataUrl:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/webp/10px/10snapshot.webp",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/webp/7.webp",
			type: "img",
			grid_column: "1 / span 3",
			grid_row: "4",
			blurDataUrl:
				"data:image/webp;base64,UklGRswAAABXRUJQVlA4IMAAAAAwBACdASoIAAoAAAAAJZACdLoAd6A6AB4gGuA2Ab+Y/1r8jDc2LctwL4AA/vio4rupyVzRAuBPkztQ7YOeGKLIlr+vc30qP/rTbPz9WL1reHx/5FcGfe7/n3T76Vn/vhPqPzShGfo/+2L6AAqA/+YXmzg9o4bXSok3Mu/0R/+WXqk3RkpQWf/aEJ+xMJrn/3A2fmqTeKrQpLP+sb7i/Fj/89cej//J38ZCiZz4yFtfnyJJ/6WH/cWz/g3/8XMAAAA=",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/pks/6.jpg",
			type: "img",
			grid_column: "4 / span 3",
			grid_row: "4",
			blurDataUrl:
				"data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAABwAwCdASoKAAUAAAAAJQBOjXAfwD8AMUA/gHt/ioGjNhTV+4AA/vbMP/92eg9ePH98brYCZRRD2e81x6KX2t+P/31zK3P/60q8bmslw2en9+mjWqp7XCPaP8jfAWP/nF2YDrPv+7i//Bd6Buv2Nz5I3/zYv/s440/7ogfV//Sh9ox/Ju/KAAAA",
		},
		// เพิ่มรูปภาพตามต้องการ
	],
};

export const efb: ProductDetail = {
	firstPart: {
		name: "Empty Fruits Bunches",
		mediaSource:
			"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/efb/part1.mp4",
		mediaType: "mp4",
		brightness: 0.8,
		blurDataUrl:
			"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/efb/webp/10px/part1-snapshot.webp",
	},
	secondPart: {
		heading: "Empty Fruits Bunches",
		body: "Empty Fruit Bunch (EFB) is an eco-friendly biomass fuel made from the fibrous residues of palm oil production. ",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/efb/webp/part2-1920.webp",
		mediaType: "img",
		blurDataUrl:
			"data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAABQBQCdASoKAAgAAAAAJZgCdLoB+AH4gJgA/UDrAD2AKZm2Qb+U/5j8meMAPmqpuZmVGgAA/v1Q/pYj++tfJDSfNHyfy7fw+kGeo0Q/81bytGZHf/TvTV9oTli3df7cPiknnz96dr7n7bs5VGe3q/9YFIw33fArusdQr++6f2Usbnd/+sfu8NJ1/lf6n0u//lS0L627lY+NaUoIv9m/6LGZfbRS/tvf/dnV9urZMikQ+gzP6N89QL1v/fhYAA==",
	},
	thirdPart: {
		heading: "Reducing waste and carbon emissions",
		body: "It serves as a renewable energy source for power plants and industrial applications, reducing waste and carbon emissions",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/efb/webp/part3-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRuQAAABXRUJQVlA4INgAAACwBQCdASoKAAcAAAAAJbACdLoB+AH6AfwBsgFik/2bqgF4A/CvIK6ZA2CP/Mfk6a9sj10GsMAA/v8qX/2O0Rv//05/3P/Tdk/pE7j/zMh/+i3348V/8dv5Vn7Z7jIur/r//Nv9HEX/sONmvIVy/V//xe/rjY8uLeLI/cdZbtfnjKO37zmNqeeHaMntgl/ip++w5w4+aNzgeT/+e6BjuA+P/5h1vUVczr2WZ+cpAsmhXlo9/4yT//cyV43o6H3//7PNaGF51BoAk/zH2VIpYExP5N//pDgAAAA=",
	},
	forthPart: {
		heading: "Offering a green alternative to fossil fuels",
		body: "EFB supports sustainable agriculture by transforming agricultural byproducts into valuable fuel, offering a green alternative to fossil fuels.",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/efb/webp/part4-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRuYAAABXRUJQVlA4INoAAABwBACdASoKAAcAAAAAJQBOl0A/ABEmbRAMkAaAX/Ef6r+SXCAH193O37beAAD+9+BY8ULf/Vp/ZBPa2jzcz/39Pffn2nCfxMbAUc3wCxaOzq1SPeL/+vqObLf58uqP8vGK6tXbvN/2bl/+1//+9JlUXDilFZX4sJRPUj//5MyldCP/+CC/FP8L97t6Gf83tmhJCcjpxQJfS//VM6x9u/8W4+Z3P+/v/xx/lR/8Yv/GBbyofw3LZ+f/8m+vP/0PMjbuL3/xgP6e824/yT/ByZs3+De7Pj7SkkAAAA==",
	},
	seeSights: [
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/efb/1.jpg",
			type: "img",
			grid_column: "1 / span 3",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRuQAAABXRUJQVlA4INgAAACwBACdASoIAAoAAAAAJagCdLoA1AAnQD8ZtQr0zPZBv4t/V/x84UA1UNDfSsAAAP64Xgf/0NvvSurS5OFfjQIb6///KA/+kH/63CMBkA+J3//x8X4Q9YJW2+r/W9tsE/vJd/yWGL+lMg0QjX/1H/g89s+hM8VKji10If/+xojA23//spxMTwC/fXE34pQC9vPKHbZyvbb/EtSNo/s6sqg8kz/xF/wa+Jya6Jmwc/p7zp6/+Jjo3/+rGa2/7AE/j+/uv8h8+pzoL/NqVv/v7OST/4maf+LmAAA=",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/efb/webp/2.webp",
			type: "img",
			grid_column: "4 / span 6",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRuYAAABXRUJQVlA4INoAAABwBACdASoKAAcAAAAAJQBOl0A/ABEmbRAMkAaAX/Ef6r+SXCAH193O37beAAD+9+BY8ULf/Vp/ZBPa2jzcz/39Pffn2nCfxMbAUc3wCxaOzq1SPeL/+vqObLf58uqP8vGK6tXbvN/2bl/+1//+9JlUXDilFZX4sJRPUj//5MyldCP/+CC/FP8L97t6Gf83tmhJCcjpxQJfS//VM6x9u/8W4+Z3P+/v/xx/lR/8Yv/GBbyofw3LZ+f/8m+vP/0PMjbuL3/xgP6e824/yT/ByZs3+De7Pj7SkkAAAA==",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/efb/webp/3.webp",
			type: "img",
			grid_column: "10 / span 3",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAABQBQCdASoKAAgAAAAAJZgCdLoB+AH4gJgA/UDrAD2AKZm2Qb+U/5j8meMAPmqpuZmVGgAA/v1Q/pYj++tfJDSfNHyfy7fw+kGeo0Q/81bytGZHf/TvTV9oTli3df7cPiknnz96dr7n7bs5VGe3q/9YFIw33fArusdQr++6f2Usbnd/+sfu8NJ1/lf6n0u//lS0L627lY+NaUoIv9m/6LGZfbRS/tvf/dnV9urZMikQ+gzP6N89QL1v/fhYAA==",
		},
	],
};

export const briquettes: ProductDetail = {
	firstPart: {
		name: "Briquettes",
		mediaSource:
			"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/briquette/webp/part1-1920.webp",
		mediaType: "img",
		brightness: 0.8,
		blurDataUrl:
			"data:image/webp;base64,UklGRrwAAABXRUJQVlA4ILAAAAAQBACdASoKAAcAAAAAJZgCdLoB+AH6gM//FQT/2L8w+MA/TM1RmN3WwAD+//4hz/ygd82nfwbnncEw8BIv/qDu4d1sNfLVp2NE98v4m17//0Kkt9kFbR/2ruEX/6Yrv/6H5AjiyosP5WLos/9j/P/99ViUwn/w0aLQX//e/+4b+v3I/gFUjteW18HWhm//UlgnH3k2Zpl4pGTX/pK3/4lyyIbaV+yMdgQOtLg3/3eAAA==",
	},
	secondPart: {
		heading: "Briquettes",
		body: "Wood Briquettes are a compact and efficient biomass fuel made from compressed wood waste.",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/briquette/webp/part2-1920.webp",
		mediaType: "img",
		blurDataUrl:
			"data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAABwAwCdASoKAAcAAAAAJQBOl0A/AD8AGf/izHfN6OotczbWwAAA/v/+0x/of/1w//+1DzbHB9f92yJ4D6///Sj/+WRP6sf564/mvuIflyVNuTj1///F86K/4y7/8Gt/mZBpJFt8PKIkx/AbQqlfLUlTYoyZd5pc3Z39f//DY125Bz5UZls1VdSZf/tf0BF/zO4lHhyD/UAZ7GKJf/CSqir7ru+6n/9mNHG/47LldAr/Drhi3mYIXqxvzEAAAA==",
	},
	thirdPart: {
		heading: "A high-energy output",
		body: "They offer a high-energy output, making them ideal for heating and industrial energy needs.",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/briquette/webp/part3-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRvYAAABXRUJQVlA4IOoAAABQBQCdASoKAAcAAAAAJbACdLoB+AH6gf0ClANsz/oHqzIkAgwb+Rf1r8lOFANVrBddFwAA/v6TbKf90cH07/9ygv/tdDV4o4VyMz7/1L//D9/+7Odmv//b3//lse+R2xrQ//Erf/OJa34JJq10J0XIBBBtJhpeuJ3g6N9rEwDh4grf/s8L6N/YJ//a/enAx10MwIz0/AAexRd+f/FGx/bHB8gFkI+upb/7yv8JX/Xm9z/+tfTXTRZSu3/3X/mza/4v4Zf5YHvzO/k394P/8MGAmoR/2yoqk97b01JFATFRIvexlv2j5f+ScAA=",
	},
	forthPart: {
		heading: "Eco-friendly energy source",
		body: "Their dense form ensures long-lasting, clean combustion, making them a reliable and eco-friendly energy source.",
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/present/briquette/webp/part4-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRtYAAABXRUJQVlA4IMoAAADwBACdASoKAAcAAAAAJbACdLoB+AH4gItu9AD0ACXL/8d6l/9f/KXjADyof5H5Z3AA/v/+l0/E///c/vj/i6XyJr5d0Edr/8GvEf//qiP/Cb/8OP9y6vxtZFKKXC/7Xs9r734vBA/L8C6STor1cWn6t3+GO6y4lfdxT9Rs8SSxIVga92Qz0wvBE6ynMssOYb+D/ugn+IPm2QkuZ88fjXv/xOBw96cP+JnlJ+r/53K/91hl/D/m5DPlO8OJNV/mxn/5gSt6NzFWAAAA",
	},
	seeSights: [
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/briquette/webp/1.webp",
			type: "img",
			grid_column: "1 / span 3",
			grid_row: "1",
			blurDataUrl:
				"data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAADwAgCdASoIAAoAAAAAJQBOl0A/ABrgH6AChZjMdeBEAAD+//5d5gFm9sFXq823wwL+Z3/63H/80XNv/7QjyZ6QacjzDjx6x236V6tftFOTzKeH02usyjDtlu35/ntY2a8cgtEqOzHlPwb/7/43PgqQwWij3Qt21CvPXrD+W7/6V0z5t0nybWv3vp9/jsAA",
		},
		{
			original:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/briquette/2.mp4",
			type: "mp4",
			grid_column: "4 / span 6",
			grid_row: "1",
			blurDataUrl:
				"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/gallery/briquette/webp/10px/snapshot.webp",
		},
	],
};
