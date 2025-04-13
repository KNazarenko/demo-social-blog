'use client';

import { getNotifications } from '@/actions/notification.action';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type Notifications = Awaited<ReturnType<typeof getNotifications>>;
type Notification = Notifications[number];

function NotificationsPage() {
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchNotifications = async () => {
			setIsLoading(true);
			try {
				const data = await getNotifications();
				setNotifications(data);
			} catch (error) {
				toast.error('Failed to fetch notifications');
			} finally {
				setIsLoading(false);
			}
		};

		fetchNotifications();
	}, []);

	if (isLoading) return <div>NotificationsSkeleton</div>;

	return <div className="space-y-4">Notification Page</div>;
}
export default NotificationsPage;
