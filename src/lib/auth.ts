import { User } from './definitions';
import mockUser from './mockData';

export async function fetchUserData() {
	try {
		// Artificially delay a response for demo purposes.
		// Don't do this in production :)

		// console.log('Fetching revenue data...');
		const user: User = await new Promise((resolve) =>
			setTimeout(() => resolve(mockUser), 3000)
		);
		console.log(user);

		// console.log('Data fetch completed after 3 seconds.');

		return user;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch revenue data.');
	}
}
