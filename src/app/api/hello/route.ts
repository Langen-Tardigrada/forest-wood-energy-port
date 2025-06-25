import { MongoClient } from "mongodb";

export async function GET() {
	const uri = process.env.MONGODB_URI;
	const client = new MongoClient(uri!);

	try {
		await client.connect();
		return Response.json({ status: "✅ Connected!" });
	} catch (err) {
		return Response.json({ error: err }, { status: 500 });
	} finally {
		await client.close();
	}
}
