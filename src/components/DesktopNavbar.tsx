'use client';

import { fetchUserData } from '@/lib/auth';
import React, { useEffect, useState } from 'react';
import ModeToggle from './ModeToggle';
import { Button } from './ui/button';
import Link from 'next/link';
import { BellIcon, HomeIcon, UserIcon } from 'lucide-react';
import { User } from '@/lib/definitions';

function DesktopNavbar() {
	const [user, setUser] = useState<User | null>(null);
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		fetchUserData().then((user) => setUser(user));
	}, []);

	return (
		<div className="hidden md:flex items-center space-x-4">
			<ModeToggle />

			<Button variant="ghost" className="flex items-center gap-2" asChild>
				<Link href="/">
					<HomeIcon className="w-4 h-4" />
					<span className="hidden lg:inline">Home</span>
				</Link>
			</Button>

			{isSignedIn ? (
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
								user?.username ??
								user?.emailAddresses[0].split('@')[0]
							}`}>
							<UserIcon className="w-4 h-4" />
							<span className="hidden lg:inline">Profile</span>
						</Link>
					</Button>
					<Button
						variant="default"
						onClick={() => setIsSignedIn(!isSignedIn)}>
						Sign Out
					</Button>
				</>
			) : (
				<Button
					variant="default"
					onClick={() => setIsSignedIn(!isSignedIn)}>
					Sign In
				</Button>
			)}
		</div>
	);
}

export default DesktopNavbar;
