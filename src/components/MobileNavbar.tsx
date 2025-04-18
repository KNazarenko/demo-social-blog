'use client';

import {
	BellIcon,
	HomeIcon,
	LogOutIcon,
	MenuIcon,
	UserIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import Link from 'next/link';
import ModeToggle from './ModeToggle';
import { useUser } from '@auth0/nextjs-auth0/client';

function MobileNavbar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const { user, error, isLoading } = useUser();

	return (
		<div className="flex md:hidden items-center space-x-2">
			<ModeToggle variant="ghost" />

			<Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon">
						<MenuIcon className="h-5 w-5" />
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="w-[300px]">
					<SheetHeader>
						<SheetTitle>Menu</SheetTitle>
					</SheetHeader>
					<nav className="flex flex-col space-y-4 mt-6">
						<Button
							variant="ghost"
							className="flex items-center gap-3 justify-start"
							asChild>
							<Link href="/">
								<HomeIcon className="w-4 h-4" />
								Home
							</Link>
						</Button>

						{user ? (
							<>
								<Button
									variant="ghost"
									className="flex items-center gap-3 justify-start"
									asChild>
									<Link href="/notifications">
										<BellIcon className="w-4 h-4" />
										Notifications
									</Link>
								</Button>
								<Button
									variant="ghost"
									className="flex items-center gap-3 justify-start"
									asChild>
									<Link href="/profile">
										<UserIcon className="w-4 h-4" />
										Profile
									</Link>
								</Button>
								<Button
									variant="ghost"
									className="flex items-center gap-3 justify-start w-full">
									<LogOutIcon className="w-4 h-4" />
									<a href="/api/auth/logout">Logout</a>
								</Button>
							</>
						) : (
							<Button variant="default" className="w-full">
								<a href="/api/auth/login">Sign In</a>
							</Button>
						)}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
}

export default MobileNavbar;
