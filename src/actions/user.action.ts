'use server';

import { fetchUserData } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function syncUser() {
	try {
		const user = await fetchUserData();
		const userId = user?.userId;

		if (!user) return;
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
				name: `${user.firstName || ''} ${user.lastName || ''}`,
				username: user.username ?? user.emailAddresses[0].split('@')[0],
				email: user.emailAddresses[0],
				image: user.imageUrl,
			},
		});

		return dbUser;
	} catch (error) {
		console.log('Error in syncUser', error);
	}
}
