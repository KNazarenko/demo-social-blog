'use client';

import { getPosts } from '@/actions/post.action';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Card, CardContent } from './ui/card';
import Link from 'next/link';
import { Avatar, AvatarImage } from './ui/avatar';
import { formatDistanceToNow } from 'date-fns';

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];

function PostCard({ post, dbUserId }: { post: Post; dbUserId: string | null }) {
	const { user, error, isLoading } = useUser();
	const [newComment, setNewComment] = useState('');
	const [isCommenting, setIsCommenting] = useState(false);
	const [isLiking, setIsLiking] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [hasLiked, setHasLiked] = useState(
		post.likes.some((like) => like.userId === dbUserId)
	);
	const [optimisticLikes, setOptmisticLikes] = useState(post._count.likes);
	const [showComments, setShowComments] = useState(false);

	return (
		<Card className="overflow-hidden">
			<CardContent className="p-4 sm:p-6">
				<div className="space-y-4">
					<div className="flex space-x-3 sm:space-x-4">
						<Link href={`/profile/${post.author.username}`}>
							<Avatar className="size-8 sm:w-10 sm:h-10">
								<AvatarImage
									src={post.author.image ?? '/avatar.png'}
								/>
							</Avatar>
						</Link>
					</div>

					{/* POST IMAGE */}
					{post.image && (
						<div className="rounded-lg overflow-hidden">
							<img
								src={post.image}
								alt="Post content"
								className="w-full h-auto object-cover"
							/>
						</div>
					)}

					{/* LIKE & COMMENT BUTTONS */}

					{showComments && (
						<div className="space-y-4 pt-4 border-t">
							<div className="space-y-4">
								{/* DISPLAY COMMENTS */}
								{post.comments.map((comment) => (
									<div
										key={comment.id}
										className="flex space-x-3">
										<Avatar className="size-8 flex-shrink-0">
											<AvatarImage
												src={
													comment.author.image ??
													'/avatar.png'
												}
											/>
										</Avatar>
										<div className="flex-1 min-w-0">
											<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
												<span className="font-medium text-sm">
													{comment.author.name}
												</span>
												<span className="text-sm text-muted-foreground">
													@{comment.author.username}
												</span>
												<span className="text-sm text-muted-foreground">
													·
												</span>
												<span className="text-sm text-muted-foreground">
													{formatDistanceToNow(
														new Date(
															comment.createdAt
														)
													)}{' '}
													ago
												</span>
											</div>
											<p className="text-sm break-words">
												{comment.content}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
export default PostCard;
