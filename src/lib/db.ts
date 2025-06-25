import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environment variable");
}

type MongooseCache = {
	conn: mongoose.Connection | null;
	promise: Promise<mongoose.Connection> | null;
};

let cached: MongooseCache = (global as any).mongoose || {
	conn: null,
	promise: null,
};

async function dbConnect(): Promise<mongoose.Connection> {
	try {
		if (cached.conn) return cached.conn;

		if (!cached.promise) {
			cached.promise = mongoose
				.connect(MONGODB_URI, { bufferCommands: false })
				.then((m) => m.connection);
		}

		cached.conn = await cached.promise;
		(global as any).mongoose = cached;

		return cached.conn;
	} catch (error) {
		console.error("X MongoDB connection error:", error);
		throw error;
	}
}

export default dbConnect;
