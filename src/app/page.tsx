import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div className="m-4">
			<h1>Hello home page</h1>
			<Button>Sign in</Button>
			<Button variant={'secondary'}>Click me</Button>
		</div>
	);
}
