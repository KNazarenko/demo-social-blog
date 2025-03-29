import { User } from './definitions';
import mockUser from './mockData';

export async function fetchUserData(): Promise<User> {
	try {
		return new Promise((resolve) =>
			setTimeout(() => resolve(mockUser), 3000)
		);
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch revenue data.');
	}
}
