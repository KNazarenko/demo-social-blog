import { getProfileByUsername } from '@/actions/profile.action';

async function ProfilePage({ params }: { params: { username: string } }) {
	console.log('ProfilePage', params);

	const user = await getProfileByUsername(params.username);

	console.log('ProfilePage', user);
	if (!user) return;

	return <div>{user.name ?? user.username} </div>;
}

export default ProfilePage;
