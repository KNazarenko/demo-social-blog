import CreatePost from '@/components/CreatePost';
import WhoToFollow from '@/components/WhoToFollow';

export default function Home() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
			<div className="lg:col-span-6">
				<CreatePost />
			</div>

			<div className="hidden lg:block lg:col-span-4 sticky top-20">
				<WhoToFollow />
			</div>
		</div>
	);
}
