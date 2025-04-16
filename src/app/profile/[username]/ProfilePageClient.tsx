'use client';

import {
	getProfileByUsername,
	getUserPosts,
	updateProfile,
} from '@/actions/profile.action';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';

type User = Awaited<ReturnType<typeof getProfileByUsername>>;
type Posts = Awaited<ReturnType<typeof getUserPosts>>;

interface ProfilePageClientProps {
	user: NonNullable<User>;
	posts: Posts;
	likedPosts: Posts;
	isFollowing: boolean;
}

function ProfilePageClient({
	isFollowing: initialIsFollowing,
	likedPosts,
	posts,
	user,
}: ProfilePageClientProps) {
	const { user: currentUser, error, isLoading } = useUser();
	const [showEditDialog, setShowEditDialog] = useState(false);
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
	const [isUpdatingFollow, setIsUpdatingFollow] = useState(false);

	const [editForm, setEditForm] = useState({
		name: user.name || '',
		bio: user.bio || '',
		location: user.location || '',
		website: user.website || '',
	});

	return <div>ProfilePageClient</div>;
}
export default ProfilePageClient;
