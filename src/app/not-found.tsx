import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div>
			<div className="flex justify-center flex-col p-4 border rounded-lg bg-muted/50 ">
				<p className="text-8xl font-bold text-primary font-mono">404</p>
				<p className="my-4">Could not find requested resource</p>
				<Button variant="outline" asChild>
					<Link href="/">
						<ArrowLeftIcon className="mr-2 size-4" />
						Home
					</Link>
				</Button>
			</div>
		</div>
	);
}
