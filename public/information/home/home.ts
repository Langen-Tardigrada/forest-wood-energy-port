type Media = {
	url: string;
	mediaType: "img" | "mp4";
};

export type PreviewProduct = {
	name: string;
	blurDataUrl: Array<Media>;
	media: {
		s900x370: Array<Media>; // home
		s780x430: Array<Media>;
		s1200x1200: Array<Media>; //all product
		s940x940: Array<Media>;
		s640x1240: Array<Media>;
		s840x840: Array<Media>;
		s400x400: Array<Media>;
	};
	link: string;
};

export const products: Array<PreviewProduct> = [
	{
		name: "Wood Pellets",
		blurDataUrl: [
			{
				url: "data:image/webp;base64,UklGRswAAABXRUJQVlA4IMAAAADQAwCdASoKAAgAAAAAJZQCdC/APRrRIB+AEKYfzr8ljQtev72yvUAA/v//vXr8O+v9Xk8m/ZN/+rCE95YgDmP/Vk//rBP+fj6XA/mUv//0ZkqYTxEZ/b//5ptj//IK/AkUj/qNP/y2r6m//r00lg/f/4v9Nz8UXfS/wJhYdMdqb85/ApYm0/8NNnVH+YF/u//GLn9msvhP7cfg/sRmv0syH+hh1/K39n/c2/drj8w9dO1wjUItqj+9pt7+5XAAAAA=",
				mediaType: "img",
			},
			{
				url: "data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAADwAwCdASoIAAoAAAAAJQBOl0A/AD8AAmXPeAfwD1Kt8APJxAyZQBAAAP79mXxA7l+LD9SGA2Iv7jF/4H5rNvfkQSYfgTH/lkaf/nv/0Lr4UsvUfiXee//yVnEGbdrg8M499z4H/2nm92oj+/eVyJXn/+I2Ou6R2/Ke0CNG9Kf/1nyV3Yiu9/rJf/ZggKbmji/VP9SAAAA=",
				mediaType: "img",
			},
			{
				url: "data:image/webp;base64,UklGRhoBAABXRUJQVlA4IA4BAACQBgCdASoKAAoAAAAAJaACdLoB+ABJgH6gTQD8JZwl/FXWK/xm3QD+AfxL+sfkZ+//KQfpKfX3G0lsAMYAAP7/dh/8PPNuhy+On6LqwgCLby9YXtf/youqpxG2vdrQW//4X7/O3r9j/4/eSecW6sbx/+bf/+9kdoHG1hQMPZ5yjsnsybyXk/Gv5M+ML+fKJJgKrW6v0bel0a9rA2++vsQun2/9Ob5mP++7igtX2u9PgVw2yDz+z84lG0R//0tX/gCr2g+tV//jVsWH/JPNKjlQc/byjndBbcL/94DNzpEFfe6Fu4/4N/q/8Vx/Jv/hP//GmuLvfv0EZ9o/Wzv+b/4v/6G3/vJd/ob/+rKAAAA=",
				mediaType: "img",
			},
		],
		media: {
			s900x370: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/s900x370/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_3.jpg",
					mediaType: "img",
				},
			],
			s780x430: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/s780x430/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_3.jpg",
					mediaType: "img",
				},
			],
			s1200x1200: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/s1200x1200/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_3.jpg",
					mediaType: "img",
				},
			],
			s940x940: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/s940x940/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_3.jpg",
					mediaType: "img",
				},
			],
			s640x1240: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/s640x1240/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_3.jpg",
					mediaType: "img",
				},
			],
			s840x840: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/s840x840/3.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_3.jpg",
					mediaType: "img",
				},
			],
			s400x400: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/s400x400/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodpellet/pre_3.jpg",
					mediaType: "img",
				},
			],
		},
		link: "/product/wood_pellet",
	},
	{
		name: "Palm Kernel Shells",
		blurDataUrl: [
			{
				url: "data:image/webp;base64,UklGRqwAAABXRUJQVlA4IKAAAABQAwCdASoKAAgAAAAAJZwCw90SVuAM4P/nH5Cm6eR3EeN5gAD+//+7Q4SOfZXM/+Jw/+i385P5an/8TH6JOUGnIWoJ5N/NUaW//6Ottu2HOMnrNmiYD+J3/i5f/HP8mv//vGOX/NF3O7ysdqKl/0V3q2HjP4l/IzlRf++vZjeldaoxq9+ip/VGahy5RPgXzqd/+6wjr+mrqS/MQAdJTAAA",
				mediaType: "img",
			},
			{
				url: "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAABQAgCdASoIAAoAAAAAJZwCdG1/AyxLhP/19ZwA/vCv7yB0AR9Gv8pX6xfpdWzrHJLkXt/yVX8r2V20/6vPz1v5sR5+Yf2ohhP/LmL9Zj+IOWyssjkXeGJwSIfrFw8v/1oWKn8zBD2E7sVLpcXzz4RdB1Ha+rhjfleAAA==",
				mediaType: "img",
			},
			{
				url: "data:image/webp;base64,UklGRsIAAABXRUJQVlA4ILYAAACwAwCdASoIAAoAAAAAJZACdAigD8M9cBsA38i/uH5Lm5sIHNipgAD++Kje52rA9FJVCFEm55Bdtx5DwnALWz72H6VH/1oNx5AOTeFfSK/5FcGf+5Q/591Ry0v/fC9xxkwpVALn9ar/5iADFy4/Qiv0KLSj/6p//MK5m1L0aCl/8sqi4Nl/RVlfwv0bC035b5cx8vb/0LD0p/5O/j/t9hGe6+0/yBO4rdm//5en/Ytn/Bv/5JwAAA==",
				mediaType: "img",
			},
		],
		media: {
			s900x370: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/s900x370/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre3.jpg",
					mediaType: "img",
				},
			],
			s780x430: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/s780x430/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre3.jpg",
					mediaType: "img",
				},
			],
			s1200x1200: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/s1200x1200/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre3.jpg",
					mediaType: "img",
				},
			],
			s940x940: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/s940x940/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre3.jpg",
					mediaType: "img",
				},
			],
			s640x1240: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/s640x1240/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre3.jpg",
					mediaType: "img",
				},
			],
			s840x840: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/s840x840/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre3.jpg",
					mediaType: "img",
				},
			],
			s400x400: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/s400x400/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/pks/pre3.jpg",
					mediaType: "img",
				},
			],
		},
		link: "/product/PKS",
	},
	{
		name: "Briquettes",
		blurDataUrl: [
			{
				url: "data:image/webp;base64,UklGRgIBAABXRUJQVlA4WAoAAAAQAAAACQAABQAAQUxQSDEAAAABYBNJspW+u6fgRXjBA4UsFECGCLwRfSM8RESSLQQEOqRxOa5daubvO1eJ2KZB+CUAAFZQOCCqAAAAEAQAnQEqCgAGAAAAACWwAnS6AfgB+gCCFB9gH8G/pP5Z8IAebioTWDgA/v+dD1z/qfdHe/akMdJ75Wy/cP6dxf//G5tf/3cfWTVLIl1DsiblJMmvVPcXfTb9T9s/2AvSn/38HVl1tZDt+I79/7PVMD/39XA12Lwew8187SL/+kzgj8/8f/Lsyhfs8yQ+LQIOmP+wBP/xIib/H/PuNeslX7OO4E11H/JOAAA=",
				mediaType: "img",
			},
			{
				url: "data:image/webp;base64,UklGRjwBAABXRUJQVlA4WAoAAAAQAAAABgAACQAAQUxQSEMAAAABYFvbtoxjnqXzVIUGNKIVSypWhlyqCGItEFu3jYgIDAsMDAh8DPrj+SYYJM2Qvb82MC5pAW5pxWTXOWKQVmBigGUCAFZQOCDSAAAAkAQAnQEqBwAKAAAAACWYAnS6AfgB+oCCO/JmJZu9Sr+p/jdwgB5sZNTgzUmAAP7/sH/9Xjn/91A2/pWeXzX9IOhkf63uf89aqKi/8TBENKVsdZgv2+mvZ8Cv/VEf45/9Qbx/6ml8RJk2PAY+cZmpO/83/vf+F/+uvx0VHVjU3X8W4/ZUIK34H8fwPYye4kF2nd1nU3KIGs0pGN//O+z/sUpKeo5Yp38HFkQWZY/k3/9AI/++rJonzT/85Oqhx5O/a1+8P8EVv+DZv5KiUAf+oQAA",
				mediaType: "img",
			},
		],
		media: {
			s900x370: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s900x370/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s900x370/2.png",
					mediaType: "img",
				},
			],
			s780x430: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s780x430/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s780x430/2.png",
					mediaType: "img",
				},
			],
			s1200x1200: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s1200x1200/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s1200x1200/2.png",
					mediaType: "img",
				},
			],
			s940x940: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s940x940/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s940x940/1.png",
					mediaType: "img",
				},
			],
			s640x1240: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s640x1240/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s640x1240/2.png",
					mediaType: "img",
				},
			],
			s840x840: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s840x840/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s840x840/2.png",
					mediaType: "img",
				},
			],
			s400x400: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s400x400/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/briquette/s400x400/2.png",
					mediaType: "img",
				},
			],
		},
		link: "/product/briquettes",
	},
	{
		name: "Wood Chips",
		blurDataUrl: [
			{
				url: "data:image/webp;base64,UklGRnwBAABXRUJQVlA4WAoAAAAQAAAACQAACQAAQUxQSFcAAAABcFPbthOdHxYlTtBBlWOPkSggqUAGHQKmnWpE5EAUEREJoCRnBVoAwiC2EAohyJdrCxLV/JdlmSzIlu/391gGmJdlWZ7LCN77cvssdxtwMIuiRqE5aQAAVlA4IP4AAAAwBgCdASoKAAoAAAAAJZgCdLoB+AB5KqJJfxV/ECsZvwA5QD2Ev4f/QfyA/m3IAfqSi1Zu3MdsG5A4AP75Cfpv/bZbxQFk2shc1dmleruDruxQfD+7hkmLDW69K1xyr6QP/9goLF8lQhO+vXj8EvfmLzG/8doG8C4dLBVqfP/+rJyh//0HRf8xRj9rbC763ZoJf/rPijCS05/bMV7JtdJPypdnyn17rG9op/45DM8Uf/9U7//H+pP//xxFCyfMf+HIO/c0mgTpJWm//5WD76Ub/5vnwV/5lfHvCj664q89eVRvyY/s9f/k+uKP4U2vL8C88LwEH/EtWgf98wAAAA==",
				mediaType: "img",
			},
			{
				url: "data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAACwAwCdASoIAAoAAAAAJZgCdLoB+AH6gBSGewK/3X8rzc2Lo1pdoAD+8b99h9Ir6onlJ4V7GTKzUOmjtv+At3x+TP/m2f2fvX695NfkoPPhikf7fzr/7xv/wfO5P87/58LPYgDMKsnlhvln/7IPmL8ZeW+mTn/QCa9//dj/6Gp3Af3/0Gfl6SHxVa3/w80E3sDuMQ6nvsat95VDvn+1r/8zSIGyf4bM37eaM54Mophq3/JOAAA=",
				mediaType: "img",
			},
			{
				url: "data:image/webp;base64,UklGRq4AAABXRUJQVlA4IKIAAADwAgCdASoIAAoAAAAAJYgCdLoB+AAPoy/whsccYUPaYAD+uFMvRV/6VvcAvYK3fQ/j1M6Z/830Y9kTnXh+6Z/qvuAYcP/mGxFlxbff/2bQvxUEFoi9LheX/0QQTuf/7OxD9Rf/Ka57EE6Oy3GZn8m3/8gd/3YjyMKUCJv/r5BPAH9+jfW4dh68qJ36nv/v4zGapL/4VxvFNfxpombf/MTAAAA=",
				mediaType: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/10px/snapshot.webp",
				mediaType: "mp4",
			},
		],
		media: {
			s900x370: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/s900x370/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre3.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre4.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre1.mp4",
					mediaType: "mp4",
				},
			],
			s780x430: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/s780x430/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre3.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre4.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre1.mp4",
					mediaType: "mp4",
				},
			],
			s1200x1200: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/s1200x1200/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre3.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre4.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre1.mp4",
					mediaType: "mp4",
				},
			],
			s940x940: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/s940x940/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre3.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre4.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre1.mp4",
					mediaType: "mp4",
				},
			],
			s640x1240: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/s640x1240/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre3.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre4.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre1.mp4",
					mediaType: "mp4",
				},
			],
			s840x840: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/s840x840/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre3.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre4.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre1.mp4",
					mediaType: "mp4",
				},
			],
			s400x400: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/s400x400/1.png",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre3.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre4.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/woodchips/pre1.mp4",
					mediaType: "mp4",
				},
			],
		},
		link: "/product/wood_chips",
	},
	{
		name: "Empty Fruit Bunches",
		blurDataUrl: [
			{
				url: "data:image/webp;base64,UklGRsQAAABXRUJQVlA4ILgAAABQBACdASoKAAgAAAAAJZgCdLoB+AH4gJgA/QDrAG6ATw7/cOAAPlnNk42gAP79UPE0K6zv+MKwtwod8u39ltn/xNpv/UteeDCwBdT/umelJhqlt/pQCte+AVf+057zREv/vRe9xCOwnmbf8R8DP57d/BqI1/iOyz3f++Z5duhHxO5qW3097HlHqPb/+VLQvnn9yVWLs68qf2b/osZl9sIP+iP/7s6l6wx3c6MZNT+jfc9v+ZTPrQAA",
				mediaType: "img",
			},
			{
				url: "data:image/webp;base64,UklGRuQAAABXRUJQVlA4INgAAACwBACdASoIAAoAAAAAJagCdLoA1AAnQD8ZtQr0zPZBv4t/V/x84UA1UNDfSsAAAP64Xgf/0NvvSurS5OFfjQIb6///KA/+kH/63CMBkA+J3//x8X4Q9YJW2+r/W9tsE/vJd/yWGL+lMg0QjX/1H/g89s+hM8VKji10If/+xojA23//spxMTwC/fXE34pQC9vPKHbZyvbb/EtSNo/s6sqg8kz/xF/wa+Jya6Jmwc/p7zp6/+Jjo3/+rGa2/7AE/j+/uv8h8+pzoL/NqVv/v7OST/4maf+LmAAA=",
				mediaType: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/10px/snapshot.webp",
				mediaType: "mp4",
			},
		],
		media: {
			s900x370: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre1.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre3.mp4",
					mediaType: "mp4",
				},
			],
			s780x430: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre1.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre3.mp4",
					mediaType: "mp4",
				},
			],
			s1200x1200: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre1.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre3.mp4",
					mediaType: "mp4",
				},
			],
			s940x940: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre1.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre3.mp4",
					mediaType: "mp4",
				},
			],
			s640x1240: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre1.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre3.mp4",
					mediaType: "mp4",
				},
			],
			s840x840: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre1.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre3.mp4",
					mediaType: "mp4",
				},
			],
			s400x400: [
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre1.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre2.jpg",
					mediaType: "img",
				},
				{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/product/preview/efb/pre3.mp4",
					mediaType: "mp4",
				},
			],
		},
		link: "/product/EFB",
	},
];
