import Link from 'next/link';

export default function NotFound() {
	return (
		<div>
			<div className="flex justify-center p-4 border rounded-lg bg-muted/50">
				<Link href="/">Return Home</Link>
			</div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
		</div>
	);
}
