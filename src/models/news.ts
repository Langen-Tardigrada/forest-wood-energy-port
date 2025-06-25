import { Schema, model, models } from "mongoose";

const NewsSchema = new Schema(
	{
		id: {
			type: String,
			required: true,
			unique: true,
		},
		date: {
			type: Date,
			default: Date.now,
			required: true,
		},
		heading: {
			type: String,
			required: true,
		},
		introduction: {
			type: String,
			default: "",
		},
		imageURL: {
			type: String,
			default: "",
		},
		isHilight: {
			type: Boolean,
			default: false,
		},
		information: {
			first: {
				info: {
					heading: {
						type: String,
						default: "",
					},
					description: {
						type: [String],
						default: [],
					},
				},
				quote: {
					type: String,
					default: "",
				},
			},
			second: {
				imageURL: {
					type: String,
					default: "",
				},
				hilight: {
					type: String,
					default: "",
				},
				info: {
					type: [String],
					default: [],
				},
				info2: {
					type: [String],
					default: [],
				},
			},
			third: {
				heading: { type: String, default: "" },
				info: { type: [String], default: [] },
				hilight: { type: String, default: "" },
				info2: { type: [String], default: [] },
				imageURL: { type: String, default: "" },
				info3: { type: [String], default: [] },
			},
		},
	},
	{
		timestamps: true, // createdAt / updatedAt
	}
);

export const News = models.News || model("News", NewsSchema);
