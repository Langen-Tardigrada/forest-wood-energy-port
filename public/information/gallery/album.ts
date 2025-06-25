import { briquettes, efb, pellet, pks, woodchips } from "../product/product";

type Album = {
	name: string;
	media: Array<{
		url: string;
		type: "img" | "mp4";
		blurDataUrl: string;
	}>;
	album: Array<{
		original: string;
		type: string;
		grid_column: string;
		grid_row: string;
		blurDataUrl: string;
	}>;
	slug: string;
};

export const AlbumGuideList: Array<Album> = [
	{
		name: "Wood Pellet",
		media: [
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/wood_pellet/1.png",
				blurDataUrl:
					"data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAACwAgCdASoKAAcAAAAAJbACdLoB+AARABgo9OTQXAAA/v//T0B0VDcPgne4Pir/57+tCN418vAtEb/4uX+4X8RMk//S5cRPy3+4/7qOPqisrxz78vY7GX1sbJp+d2o60gA068Rmf/sEn/P+3SBmHD3L/uY1/Nv+CKvPXstKe5L/9K1fl4gVA9p702e/FN/IwAA=",
				type: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/wood_pellet/webp/2.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRs4AAABXRUJQVlA4IMIAAACwAwCdASoKAAYAAAAAJQBOhfqvoSliA/wHmBTEX9s/KoqgZK34AAD+//69//88Htcb555gzPZz/edmAd/T/7z//Og/99lnbnlmiF905wuC7p/ev//Zv/VHdm4/7otZ8vii7QmEiZM5/MJ8fFGCXn3Tv2NG3z9DEUcfwoAE9aMpLJ/HMn/7Qi0/4xf+Qv54DPetFqLl/8qP/hr/5s2uZ/8sS35Tm/+h0174vw+V/78Ij4Cjxb/9/+5v+xEY/g1159AAAA==",
				type: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/wood_pellet/webp/3.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAABwAwCdASoIAAoAAAAAJQBOl0A/AD8AAixr+5epwabCkVQHrkAA/v4Su7Xn+2jZAxhkRlpiVP4tT/xM9dUFfOnWb6peTf/Uf1Fct+On7OirCv+//qHyd5u+9x5diqT94VJxUze7UmIwrBDJHklw+2u3+MkBu54KQVkqvf/VDuf9GF8J+iP/7DR4JAax1Ti/mIAAAA==",
				type: "img",
			},
		],
		album: [...pellet.seeSights],
		slug: "wood_pellet",
	},
	{
		name: "Palm Kernel Shells",
		media: [
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/pks/webp/1.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAABwAgCdASoIAAoAAAAAJZwCdAaKB4F5XFC5rOaAAP71YWuxnHa3tf5SvV80++5zteHELMP1dt71OiP2QRCC5fj/0og2WW7RgzvaMvfp5JU5+liXcTbwN7FP/TXSZyf/6yuY2S0t0kT9fqffioJVc4FDdosk4bQUdsHspgPK39wAAA==",
				type: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/pks/webp/2.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRswAAABXRUJQVlA4IMAAAAAwBACdASoIAAoAAAAAJZACdLoAd6AbZX+M2uA2AD+Xf2j8jC8MqRXVeAAA/vTCd17pHI8bIXWE51JQfum7xA29QgYFO0zvjVIHepx0gH/7sL8lRfyK4M/9oJ/r8KmgHv/vP+ZvApXerI/15d7fP/Hbb86CJVgtHw7Goj+f3/5JoG+a5G1MQf9osjgp3Wi7C/kXhf8wEt5VoUln+Mu8v3Jf/nHFyN/5O/jIUTOfGQtr8+RJP/Q8/7jKvfob/+LmAAA=",
				type: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/pks/webp/3.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRsYAAABXRUJQVlA4ILoAAACwAwCdASoIAAoAAAAAJZQCdC0QHeAVAB6jP9o/HTjADqz34fV0AAD+/3vE0L//Tgvv+Gl1H+88XLTIMB/6+F/DVL78v+8YuMojQpBF94v/1OUKH25vJ/8MN+ihW/hfvjPtHpc//MS/qc/x294/xmxXR67i6U5iA1/ZUvT34SkwHoPtF3UJtl5c2w4+63KtyCM5IeI/9t4SDf43ZO8Rf9uf7hsW/8qHnfE/vf9/vX3D69PTvEnFnb89QAA=",
				type: "img",
			},
		],
		album: [...pks.seeSights],
		slug: "pks",
	},
	{
		name: "Briquettes",
		media: [
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/briquettes/webp/1.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRrwAAABXRUJQVlA4ILAAAAAwBACdASoKAAcAAAAAJZgCdLoB+AH6gM//FQP/2/8w+MA/TM7MHvwdZmAA/v/+GE/8oHfrtzvQESr1v8LHDbL//vhK5M3PRHibFt683Z///0KoXByAt+S1aTN//1Rnj/1H0MTkq8M/2KpniHy//7IP/l4tMxxuTNRMcZuBr/3vo/pVm53v2fPJzNgAwAVp/9SWBjPRW6f10XQBD/SVv/xLUBYgu/2RjsCB1pcG/+7wAA==",
				type: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/briquettes/webp/2.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRsIAAABXRUJQVlA4ILYAAABQAwCdASoKAAcAAAAAJQBOl0A/AD8ABwgFSAecMbMb+rN8gAD+//7THmX/7DX//ahvBA37192yaKNf//ot/5Ad/tG/ymZ/NfcQ/Lk4fF4X9f//xwxV/mgH/Brf5lAGYt55PMi1AU8752KGWLxgHuYmHLTKADP6//+KgtNa/zcL8M1nd/9r+gIv+X/55T/qANewR6p/4OTFRWKmb1/q+//ZjRxv+bS/yufO/TzomPsyMZaso/UgAA==",
				type: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/briquettes/webp/3.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRvAAAABXRUJQVlA4IOQAAACQBQCdASoKAAcAAAAAJbACdLoB+AH6gUoBtmf9A9WZEgESAfIN/HP7J+R/GAfrMe5iolLFHAD+/pNsp/3RwfRf/uUF7ZShfwiNAF+3p3/4fv/3Zzs1//7lP/+WvVTeRCYfpnv/5prH/A2P2b3oOmlHLPFnCnG57obeqqh9n5i1R/7UJ97+wT/+0EPaWZ4ZLRqQuP2RxI/lTd07DJ/pAt/USv/3V/wlfwp5//WvprpospZ9SH91/5s2v+L+A9/LA9+Z38m/iV//FXhqYR/2yoqk97b02UHwRVRKqPYy37R8v/PCAAA=",
				type: "img",
			},
		],
		album: [...briquettes.seeSights],
		slug: "briquettes",
	},
	{
		name: "Wood Chips",
		media: [
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/wood_chips/webp/1.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRr4AAABXRUJQVlA4ILIAAADQAwCdASoKAAcAAAAAJagCdLoB+AH6ABFjvoSf1r8gOFAPuT7FiewA/v6G36hDqqN5jwhJKqyLai9eMVvHwL/qMm6fhaUtewrpWclfbFR9lpohTu192BrpH/0xS6/6P0inq5/gwndMtJ4z/e//04TgGS//wX4yYG8YP+vpJriO/rsEI3f/KMQnNdjf/tyXf5dh4e+rypZi65Kv/Zin/5yryh8eL4KhD8iqfeFp/8k4AAAA",
				type: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/wood_chips/webp/2.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRugAAABXRUJQVlA4INwAAACwBACdASoKAAcAAAAAJQBOl0A/ABADRioGsAbIZ/GP61+Xf9R5AD9QDVTTIqXcAP7/7i/+9sv/noWoMPH4fEfFU03PrBH/6Uf8BanFXP/pugSB+RFP//bsfpeh//1E2ooClfr/2qfOLf/hAHP/qDe4rfCanQ434F3l0t/xYfu65IJe+EWOG/G2p+v+rKp//vITH/4m5l79lxV9S82ckf/fCj9wf5/7f/hdz2OleJfp33/8qLWNvmnOGe3f6VP/2YgvK5Xa/ml+v/W33iNet/+bNUWusr5//BvxgAAA",
				type: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/wood_chips/webp/3.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRvAAAABXRUJQVlA4IOQAAABQBgCdASoKAAcAAAAAJbACdLoB+ACJQOkztACxAfgB+mc2gagB+GesgbIN/Gf6x+OPGAfoAYJy6Fc2oAD+0kp7/uUOOwfmj4vnKOXyYUEI/7//y4FdQuNolq2T//4r8UnNVPaE/2CQ8RTai7lAlXvC09/Pv7aWC8l7//GvfmoNw/8hPhADPdMV62kXkPGO33U08ebhuDixLj/xekYXI6gUDkbUWf/NvGP/8bJCm3XDM67oK8n3+fMLeL/80/wZe/P9rX/7a+wz/eizX3GZ/zWub8/iUP+bBKnQn/hfv8eHP+x5AAA=",
				type: "img",
			},
		],
		album: [...woodchips.seeSights],
		slug: "wood_chips",
	},
	{
		name: "Empty Fruit Bunches",
		media: [
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/efb/webp/part4.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRswAAABXRUJQVlA4IMAAAAAwBACdASoKAAYAAAAAJQBOl0A/AAMgA/IC6M/YG/i/9k/KQ0h3NH1fuoAA/v11i/71QkNkSxQi/XOy++5IH/cof+L6T4ATDBcsiRlVhWq+rv9rZ8pJKGeFw/bTLZYH+cX/7spm3sH8mGnR/qXyV6fzI/+j/Eq8O97+6NVlgI5x8+8PxOEZ+Pg/8Z0VXcE6JEF/9Hn1sO1ilO+3OQz/8Yv+zjdd/y6vn47//V6VpPItLO6e/7XVOa+RnwR/JvAQAAA=",
				type: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/efb/webp/part2-1920.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRrAAAABXRUJQVlA4IKQAAABwAwCdASoKAAYAAAAAJZgCdLoB+AH4gJgA/QAdBOaNp83CfIAA/vvYU9PcPT8HcF+e+XnwKP9f/RTrB5p7/cH/7X4RwjpfPtTH5//23Xnn8W1aHS/pnC/+XGzpLX/8t+PjyULHvTtX+Wt1tiaIfbhc6+DsYkNGN4cnD2f/zBafX6bAP1zHYGhZHzwIrfFlr/F5/92dW0Zg4DCTrqhyvmUz9uwAAA==",
				type: "img",
			},
			{
				url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/gallery/efb/webp/part1.webp",
				blurDataUrl:
					"data:image/webp;base64,UklGRqQAAABXRUJQVlA4IJgAAABwAwCdASoKAAYAAAAAJagCdLoB+AH6ADhAKhA9TguDT8hP8gAA/v7MhXl7fv/4a/qfQrh3a2N/+rk/96b57ZkIdvSZXE//21L6p/+n02WzJSxLbvmbDf8Nf3+d6m9GfpGqeGdCTnXvQdU2Be/4EskK729KVs9fvk1lg5f/vxw4+80iEdrrHv+6iv/3HnMSfyto7L/3NoAAAA==",
				type: "img",
			},
		],
		album: [...efb.seeSights],
		slug: "efb",
	},
];
