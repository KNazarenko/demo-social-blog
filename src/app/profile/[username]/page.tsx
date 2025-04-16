import { getProfileByUsername, getUserPosts } from '@/actions/profile.action';

export async function generateMetadata({
	params,
}: {
	params: { username: string };
}) {
	const user = await getProfileByUsername(params.username);
	if (!user) return;

	return {
		title: `${user.name ?? user.username}`,
		description: user.bio || `Check out ${user.username}'s profile.`,
	};
}

async function ProfilePage({ params }: { params: { username: string } }) {
	console.log('ProfilePage', params);

	const user = await getProfileByUsername(params.username);

	console.log('ProfilePage', user);
	if (!user) return;

	const posts = await getUserPosts(user.id);
	console.log('ProfilePage posts', posts);

	return <div>{user.name ?? user.username} </div>;
}

export default ProfilePage;
