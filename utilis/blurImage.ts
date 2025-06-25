const blurCache = new Map<string, string>();

export async function preloadBlur(url: string): Promise<string> {
	if (blurCache.has(url)) return blurCache.get(url)!;

	const res = await fetch(`/api/blur?src=${encodeURIComponent(url)}`);

	if (!res.ok) {
		console.warn("❌ Failed to fetch blurDataURL for:", url);
		return "";
	}

	const data = await res.json();

	if (!data.blurDataURL) {
		console.warn("❌ Missing blurDataURL in response for:", url);
		return "";
	}

	blurCache.set(url, data.blurDataURL);
	return data.blurDataURL;
}

export function getCachedBlur(url: string): string | undefined {
	return blurCache.get(url);
}
