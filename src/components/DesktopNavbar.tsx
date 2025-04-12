// 'use client';

import React from 'react';
import ModeToggle from './ModeToggle';
import { Button } from './ui/button';
import Link from 'next/link';
import { BellIcon, HomeIcon, UserIcon } from 'lucide-react';
import { IUser } from '@/lib/definitions';

async function DesktopNavbar({ user }: { user: IUser | null }) {
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
					<Button variant="default">
						<a href="/api/auth/logout">Logout</a>
					</Button>
				</>
			) : (
				<Button variant="default">
					<a href="/api/auth/login">Login</a>
				</Button>
			)}
		</div>
	);
}

export default DesktopNavbar;
