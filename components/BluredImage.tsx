"use client";

import Image, { ImageProps } from "next/image";
import { preloadBlur } from "../utilis/blurImage";
import { useEffect, useState } from "react";

interface BlurImageProps
	extends Omit<ImageProps, "placeholder" | "blurDataURL"> {
	src: string;
}
export default function BlurImage({ src, ...props }: BlurImageProps) {
	const [blur, setBlur] = useState<string>("empty");

	// useEffect(() => {
	// 	preloadBlur(src).then((blurDataURL) => {
	// 		setBlur(blurDataURL);
	// 	});
	// }, [src]);

	return (
		<Image
			src={src}
			placeholder={blur ? "blur" : "empty"}
			blurDataURL={blur}
			{...props}
		/>
	);
}
