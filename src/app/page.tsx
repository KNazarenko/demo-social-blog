import { getPosts } from '@/actions/post.action';
import { getAuthUser, getDbUserId } from '@/actions/user.action';
import CreatePost from '@/components/CreatePost';
import PostCard from '@/components/PostCard';
import WhoToFollow from '@/components/WhoToFollow';
import { IUser } from '@/lib/definitions';

export default async function Home() {
	const authUser: IUser | null = await getAuthUser();

	const posts = await getPosts();
	const dbUserId = await getDbUserId();

	console.log(posts);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
			<div className="lg:col-span-6">
				{authUser ? <CreatePost /> : null}
			</div>

			<div className="hidden lg:block lg:col-span-4 sticky top-20">
				<WhoToFollow />
			</div>
		</div>
	);
}
