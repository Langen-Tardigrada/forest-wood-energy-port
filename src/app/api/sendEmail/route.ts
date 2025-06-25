import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactRequest = {
	name: string;
	phone: string;
	userEmail: string;
	subject: string;
	message: string;
};

export async function POST(request: Request) {
	try {
		//คำขอรับข้อมูล
		const { name, phone, userEmail, subject, message }: ContactRequest =
			await request.json();

		//ตั้งค่าวิธีการส่งบน nodemailer
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL_USER as string, // อีเมลของระบบ
				pass: process.env.EMAIL_PASS as string, // รหัสผ่านของอีเมลระบบ
			},
			logger: true,
			debug: true,
		});

		// ข้อมูลอีเมลที่เราจะส่งไป
		const mailOptions = {
			from: process.env.EMAIL_USER, // ใช้อีเมลระบบเป็นตัวส่ง
			to: "mailbox@4est-energy.com", // อีเมลผู้รับที่กำหนดไว้
			subject: subject,
			text: `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\nMessage: ${message}`,
		};

		// ส่งอีเมล
		try {
			const info = await transporter.sendMail(mailOptions);
			console.log("Email sent:", info.response);
			if (info.accepted.length > 0) {
				console.log("Email sent successfully:", info.response);
			} else {
				console.error("Email not accepted:", info);
			}
		} catch (error) {
			console.error("Error sending email:", error);
		}

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error: any) {
		return NextResponse.json(
			{ error: "Failed to send email", details: error.message },
			{ status: 500 }
		);
	}
}
