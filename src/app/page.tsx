import { Button } from '@/components/ui/button';
import ModeToggle from '@/components/ui/ModeToggle';

export default function Home() {
	return (
		<div className="m-4">
			<h1>Hello home page</h1>
			<Button>Sign in</Button>
			<Button variant={'secondary'}>Click me</Button>
			<ModeToggle />
		</div>
	);
}
