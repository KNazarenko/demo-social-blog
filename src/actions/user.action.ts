'use server';

import { IUser } from '@/lib/definitions';
import prisma from '@/lib/prisma';

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
