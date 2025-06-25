import { getPlaiceholder } from "plaiceholder";
import { NextResponse } from "next/server";

export const revalidate = 1800; //re in 30 minutes
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const src = searchParams.get("src");
	if (!src) {
		return NextResponse.json({ error: "Missing src" }, { status: 400 });
	}
	try {
		const imageRes = await fetch(src);
		if (!imageRes.ok) {
			return NextResponse.json(
				{ error: "Failed to fetch source" },
				{ status: imageRes.status }
			);
		}
		const buffer = await imageRes.arrayBuffer();
		const { base64 } = await getPlaiceholder(Buffer.from(buffer));
		return NextResponse.json({ blurDataURL: base64 });
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: "Failed to generate blur" },
			{ status: 500 }
		);
	}
}
