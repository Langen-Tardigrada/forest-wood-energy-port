// app/auth/error/page.tsx
import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
	const searchParams = useSearchParams();
	const error = searchParams.get("error");

	return (
		<div style={{ padding: "2rem", textAlign: "center" }}>
			<h1>Authentication Error</h1>
			<p style={{ color: "red" }}>
				{error === "AccessDenied"
					? "You are not authorized to access this system."
					: "Something went wrong. Please try again."}
			</p>
		</div>
	);
}
