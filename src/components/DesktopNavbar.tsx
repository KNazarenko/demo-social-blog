import { fetchUserData } from '@/lib/auth';
import React from 'react';
import ModeToggle from './ModeToggle';
import { Button } from './ui/button';
import Link from 'next/link';
import { BellIcon, HomeIcon, UserIcon } from 'lucide-react';
import { User } from '@/lib/definitions';

async function DesktopNavbar() {
	const user: User = await fetchUserData();

	return (
		<div className="hidden md:flex items-center space-x-4">
			<ModeToggle />

			<Button variant="ghost" className="flex items-center gap-2" asChild>
				<Link href="/">
					<HomeIcon className="w-4 h-4" />
					<span className="hidden lg:inline">Home</span>
				</Link>
			</Button>

			{user ? (
				<>
					<Button
						variant="ghost"
						className="flex items-center gap-2"
						asChild>
						<Link href="/notifications">
							<BellIcon className="w-4 h-4" />
							<span className="hidden lg:inline">
								Notifications
							</span>
						</Link>
					</Button>
					<Button
						variant="ghost"
						className="flex items-center gap-2"
						asChild>
						<Link
							href={`/profile/${
								user.username ??
								user.email_address[0].split('@')[0]
							}`}>
							<UserIcon className="w-4 h-4" />
							<span className="hidden lg:inline">Profile</span>
						</Link>
					</Button>
					<Button variant="default">UserButton</Button>
				</>
			) : (
				<Button variant="default">Sign In</Button>
			)}
		</div>
	);
}

export default DesktopNavbar;
