import { Schema, model, models } from "mongoose";
import { Role } from "../../types/role";

const UserSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		name: String,
		role: {
			type: String,
			enum: Object.values(Role), //  ป้องกันค่าที่ไม่อยู่ใน ENUM
			default: Role.Admin,
		},
		lastLoginAt: Date,
		lastLogoutAt: Date,
		loginHistory: [
			{
				loginAt: { type: Date },
				logoutAt: { type: Date },
				userAgent: { type: String }, // optional: บันทึก device
				ip: { type: String }, // optional: บันทึก IP
			},
		],
	},
	{
		timestamps: true,
	}
);

export const User = models.User || model("User", UserSchema);
