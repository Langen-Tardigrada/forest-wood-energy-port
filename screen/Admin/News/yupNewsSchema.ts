import * as Yup from "yup";

export const newsSchema = Yup.object({
	id: Yup.string().required("ID is required"),
	date: Yup.date().required("Date is required"),
	heading: Yup.string().required("Headline is required"),
	introduction: Yup.string().default(""),
	image: Yup.mixed()
		.nullable()
		.test(
			"is-image",
			"Please select an image file (JPG, PNG, WEBP).",
			(file) => {
				if (!file) return true;
				const f = file as File;
				return ["image/jpeg", "image/png", "image/webp"].includes(f.type);
			}
		)
		.default(null),
	isHilight: Yup.boolean().default(false),

	information: Yup.object({
		first: Yup.object({
			info: Yup.object({
				heading: Yup.string().default(""),
				description: Yup.array().of(Yup.string()).default([]),
			}),
			quote: Yup.string().default(""),
		}),

		second: Yup.object({
			info: Yup.array().of(Yup.string()).default([]),
			hilight: Yup.string().default(""),
			info2: Yup.array().of(Yup.string()).default([]),
			image: Yup.mixed()
				.nullable()
				.test(
					"is-image",
					"Please select an image file (JPG, PNG, WEBP).",
					(file) => {
						if (!file) return true;
						const f = file as File;
						return ["image/jpeg", "image/png", "image/webp"].includes(f.type);
					}
				)
				.default(null),
		}),

		third: Yup.object({
			heading: Yup.string().default(""),
			info: Yup.array().of(Yup.string()).default([]),
			hilight: Yup.string().default(""),
			info2: Yup.array().of(Yup.string()).default([]),
			image: Yup.mixed()
				.nullable()
				.test(
					"is-image",
					"Please select an image file (JPG, PNG, WEBP).",
					(file) => {
						if (!file) return true;
						const f = file as File;
						return ["image/jpeg", "image/png", "image/webp"].includes(f.type);
					}
				)
				.default(null),
			info3: Yup.array().of(Yup.string()).default([]),
		}),
	}),
});

export type NewsFormValues = Yup.InferType<typeof newsSchema>;
