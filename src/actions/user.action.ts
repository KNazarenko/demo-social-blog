'use server';

import { IUser } from '@/lib/definitions';
import prisma from '@/lib/prisma';
import { getSession } from '@auth0/nextjs-auth0';

export async function getAuthUser() {
	const session = await getSession();
	let authUser = null;
	if (session) authUser = session.user as IUser;
	return authUser;
}

export async function syncUser(user: IUser) {
	try {
		const userId = user.sub;

		//check if user exists in db
		const existingUser = await prisma.user.findUnique({
			where: {
				authId: userId,
			},
		});

		if (existingUser) return existingUser;

		const dbUser = await prisma.user.create({
			data: {
				authId: userId,
				name: `${user.name || ''}`,
				username: user.nickname ?? user.email.split('@')[0],
				email: user.email,
				image: user.picture,
			},
		});

		return dbUser;
	} catch (error) {
		console.log('Error in syncUser', error);
	}
}

export async function getUserByAuthId(userId: string) {
	return prisma.user.findUnique({
		where: {
			authId: userId,
		},
		include: {
			_count: {
				select: {
					followers: true,
					following: true,
					posts: true,
				},
			},
		},
	});
}

export async function getDbUserId() {
	const authUser: IUser | null = await getAuthUser();
	if (!authUser) return null;

	const user = await getUserByAuthId(authUser.sub);

	if (!user) throw new Error('User not found');

	return user.id;
}

export async function getRandomUsers() {
	try {
		const userId = await getDbUserId();

		if (!userId) return [];

		// get 3 random users exclude ourselves & users that we already follow
		const randomUsers = await prisma.user.findMany({
			where: {
				AND: [
					{ NOT: { id: userId } },
					{
						NOT: {
							followers: {
								some: {
									followerId: userId,
								},
							},
						},
					},
				],
			},
			select: {
				id: true,
				name: true,
				username: true,
				image: true,
				_count: {
					select: {
						followers: true,
					},
				},
			},
			take: 3,
		});

		return randomUsers;
	} catch (error) {
		console.log('Error fetching random users', error);
		return [];
	}
}
