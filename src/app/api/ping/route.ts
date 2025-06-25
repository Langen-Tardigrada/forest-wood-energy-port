// src/app/api/ping/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { User } from "@/models/user";

export async function GET() {
	try {
		await dbConnect();
		const userCount = await User.countDocuments();
		return NextResponse.json({ ok: true, count: userCount });
	} catch (err) {
		return NextResponse.json({ ok: false, error: err }, { status: 500 });
	}
}
