// app/api/news/route.ts
import { NextResponse } from "next/server";
import { s3 } from "@/lib/spaces";
import {
	PutObjectCommand,
	HeadObjectCommand,
	DeleteObjectCommand,
	ObjectCannedACL,
} from "@aws-sdk/client-s3";
import dbConnect from "@/lib/db";
import { News } from "@/models/news";
import { v4 as uuidv4 } from "uuid";

export const dynamic = "force-dynamic";

//----------------------------------
// helpers for Spaces interaction
//----------------------------------
async function objectExists(Key: string) {
	try {
		await s3.send(
			new HeadObjectCommand({ Bucket: process.env.DO_SPACES_BUCKET!, Key })
		);
		return true;
	} catch {
		return false;
	}
}

async function uploadIfNotExists(file: File, keyPrefix: string) {
	const cleanName = file.name.replace(/\s+/g, "_");
	const filename = `${keyPrefix}/${cleanName}`;
	if (!(await objectExists(filename))) {
		const buffer = Buffer.from(await file.arrayBuffer());
		await s3.send(
			new PutObjectCommand({
				Bucket: process.env.DO_SPACES_BUCKET!,
				Key: filename,
				Body: buffer,
				ACL: ObjectCannedACL.public_read,
				ContentType: file.type,
			})
		);
	}
	return `${process.env.DO_SPACES_CDN}/${filename}`;
}

async function deleteFileFromSpaces(url: string | null) {
	if (!url) return;
	const base = `${process.env.DO_SPACES_CDN!}/`;
	if (!url.startsWith(base)) return; // skip external urls
	const Key = url.slice(base.length);
	if (!Key) return;
	try {
		await s3.send(
			new DeleteObjectCommand({ Bucket: process.env.DO_SPACES_BUCKET!, Key })
		);
	} catch (err) {
		console.warn("⚠️  failed to delete", Key, err);
	}
}

//----------------------------------
//  POST  – create news with images
//----------------------------------
export async function POST(req: Request) {
	try {
		const form = await req.formData();

		// 1) handle images
		const cover = form.get("coverImage") as File | null;
		const second = form.get("secondImage") as File | null;
		const third = form.get("thirdImage") as File | null;

		const singles = [cover, second, third] as const;
		const singleKeys = ["cover", "second", "third"] as const;
		const urls: Record<(typeof singleKeys)[number], string | null> = {
			cover: "",
			second: "",
			third: "",
		};

		for (let i = 0; i < singles.length; i++) {
			const f = singles[i];
			if (f && f.size) {
				urls[singleKeys[i]] = await uploadIfNotExists(f, "news");
			}
		}

		// 2) text fields
		const id = uuidv4();
		const date = new Date((form.get("date") as string) || Date.now());
		const heading = form.get("heading") as string;
		const introduction = form.get("introduction") as string;
		const isHilight = form.get("hilight") === "true";
		const heading1 = form.get("heading1") as string;
		const description1 = form.getAll("description1") as string[];
		const quote = form.get("quote") as string;
		const hilight2 = form.get("hilight2") as string;
		const info2 = form.getAll("info2") as string[];
		const info2_2 = form.getAll("info2_2") as string[];
		const heading3 = form.get("heading3") as string;
		const info3 = form.getAll("info3") as string[];
		const hilight3 = form.get("hilight3") as string;
		const info3_2 = form.getAll("info3_2") as string[];
		const info3_3 = form.getAll("info3_3") as string[];
		// 3) save
		await dbConnect();
		const doc = await News.create({
			id,
			date,
			heading,
			introduction,
			imageURL: urls.cover,
			isHilight,
			information: {
				first: {
					info: { heading: heading1, description: description1 },
					quote: quote,
				},
				second: {
					imageURL: urls.second,
					hilight: hilight2,
					info: info2,
					info2: info2_2,
				},
				third: {
					heading: heading3,
					info: info3,
					hilight: hilight3,
					info2: info3_2,
					imageURL: urls.third,
					info3: info3_3,
				},
			},
		});

		return NextResponse.json({ message: "created", data: doc });
	} catch (err) {
		console.error(err);
		return NextResponse.json({ error: "create failed" }, { status: 500 });
	}
}

//----------------------------------
//  GET – list all news (newest first)
//----------------------------------
export async function GET(req: Request) {
	try {
		await dbConnect();
		const { searchParams } = new URL(req.url);

		const id = searchParams.get("id");
		const hilight = searchParams.get("hilight");
		const idHeadingOnly = searchParams.get("id_h_d");

		if (id) {
			const doc = await News.findOne({ id });
			return NextResponse.json(doc || null);
		}

		if (hilight === "true") {
			const docs = await News.find({ isHilight: true }).sort({ date: -1 });
			return NextResponse.json(docs);
		}

		if (idHeadingOnly) {
			const docs = await News.find({}, "heading _id date").sort({ date: -1 });
			return NextResponse.json(docs);
		}
		// default: all news

		const all = await News.find().sort({ date: -1 });
		return NextResponse.json(all);
	} catch (err) {
		return NextResponse.json({ error: "failed" }, { status: 500 });
	}
}

// ----------------------------------
// PUT – update news (multipart or JSON)
// ----------------------------------
export async function PUT(req: Request) {
	try {
		await dbConnect();
		const isMultipart = req.headers
			.get("content-type")
			?.includes("multipart/form-data");

		/* ---------- A) multipart (may include new images) ---------- */
		if (isMultipart) {
			const form = await req.formData();
			const id = form.get("id") as string;
			if (!id) {
				return NextResponse.json({ error: "id required" }, { status: 400 });
			}

			/* 1. โหลด ข่าวเดิม */
			const doc = await News.findOne({ id });
			if (!doc) {
				return NextResponse.json({ error: "not found" }, { status: 404 });
			}
			/* 2. อัปเดตรูป (ถ้ามี File ใหม่) */
			const singleImages: [
				File | null,
				string,
				() => string | null,
				(v: string) => void
			][] = [
				[
					form.get("coverImage") as File | null,
					"news",
					() => doc.imageURL,
					(v) => (doc.imageURL = v),
				],
				[
					form.get("secondImage") as File | null,
					"news",
					() => doc.information.second.imageURL,
					(v) => (doc.information.second.imageURL = v),
				],
				[
					form.get("thirdImage") as File | null,
					"news",
					() => doc.information.third.imageURL,
					(v) => (doc.information.third.imageURL = v),
				],
			];

			for (const [file, prefix, oldGetter, setter] of singleImages) {
				if (file && file.size) {
					const newUrl = await uploadIfNotExists(file, prefix);
					const oldUrl = oldGetter();
					if (oldUrl && oldUrl !== newUrl) await deleteFileFromSpaces(oldUrl);
					setter(newUrl);
				}
			}

			if (form.get("removeCoverImage") === "true") {
				doc.imageURL = "";
				await deleteFileFromSpaces(doc.imageURL);
			}

			if (form.get("removeSecondImage") === "true") {
				doc.information.second.imageURL = "";
				await deleteFileFromSpaces(doc.information.second.imageURL);
			}

			if (form.get("removeThirdImage") === "true") {
				doc.information.third.imageURL = "";
				await deleteFileFromSpaces(doc.information.third.imageURL);
			}

			/* 3. อัปเดตฟิลด์ข้อความ + hilight */
			const setIfPresent = (key: string, fn: (v: any) => void) => {
				const val = form.get(key);
				if (typeof val === "string" && val.trim() !== "") {
					fn(val);
				}
			};

			setIfPresent("heading", (v) => (doc.heading = v));
			setIfPresent("introduction", (v) => (doc.introduction = v));
			setIfPresent("date", (v) => (doc.date = new Date(v)));
			setIfPresent("hilight", (v) => (doc.hilight = v === "true"));

			/* nested: first / second / third blocks */
			setIfPresent("heading1", (v) => (doc.information.first.info.heading = v));
			doc.information.first.info.description = form.getAll(
				"description1"
			) as string[];
			setIfPresent("quote", (v) => (doc.information.first.quote = v));

			doc.information.second.info = form.getAll("info2") as string[];
			doc.information.second.info2 = form.getAll("info2_2") as string[];
			setIfPresent("hilight2", (v) => (doc.information.second.hilight = v));
			setIfPresent("heading3", (v) => (doc.information.third.heading = v));
			doc.information.third.info = form.getAll("info3") as string[];
			setIfPresent("hilight3", (v) => (doc.information.third.hilight = v));
			doc.information.third.info2 = form.getAll("info3_2") as string[];
			doc.information.third.info3 = form.getAll("info3_3") as string[];

			await doc.save();
			return NextResponse.json({ message: "updated", data: doc });
		}

		/* ---------- B) JSON body (text‑only) ---------- */
		const { id, update } = await req.json();
		if (!id || !update) {
			return NextResponse.json(
				{ error: "id & update required" },
				{ status: 400 }
			);
		}

		/*  update อัตโนมัติ (รวม hilight ได้ถ้ามีใน update) */
		const doc = await News.findOneAndUpdate({ id }, update, { new: true });
		if (!doc) {
			return NextResponse.json({ error: "not found" }, { status: 404 });
		}
		return NextResponse.json({ message: "updated", data: doc });
	} catch (err) {
		console.error("PUT error", err);
		return NextResponse.json({ error: "update failed" }, { status: 500 });
	}
}

//----------------------------------
//  DELETE – remove news & all images
//----------------------------------
export async function DELETE(req: Request) {
	try {
		await dbConnect();

		const { searchParams } = new URL(req.url);
		const id = searchParams.get("id");

		// const { id } = await req.json();
		if (!id)
			return NextResponse.json({ error: "id required" }, { status: 400 });

		const doc = await News.findOneAndDelete({ id });
		if (!doc) return NextResponse.json({ error: "not found" }, { status: 404 });

		// delete every stored URL (cover, second, third, gallery)
		await deleteFileFromSpaces(doc.imageURL);
		await deleteFileFromSpaces(doc.information.second.imageURL);
		await deleteFileFromSpaces(doc.information.third.imageURL);

		return NextResponse.json({ message: "deleted" });
	} catch (err) {
		console.error("DELETE error", err);
		return NextResponse.json({ error: "delete failed" }, { status: 500 });
	}
}
