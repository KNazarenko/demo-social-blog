import Link from 'next/link';
import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { getSession } from '@auth0/nextjs-auth0';
import { IUser } from '@/lib/definitions';
import { syncUser } from '@/actions/user.action';

async function Navbar() {
	const session = await getSession();
	let user = null;
	if (session) {
		user = session.user as IUser;
		console.log(user);
	}
	if (user) {
		await syncUser(user);
	}

	return (
		<nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link
							href="/"
							className="text-xl font-bold text-primary font-mono tracking-wider">
							Social blog
						</Link>
					</div>
					<DesktopNavbar user={user} />
					<MobileNavbar />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
