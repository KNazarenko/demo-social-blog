import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { IUser } from '@/lib/definitions';
import { getAuthUser } from '@/actions/user.action';

const f = createUploadthing();

export const ourFileRouter = {
	// define routes for different upload types
	postImage: f({
		image: {
			maxFileSize: '4MB',
			maxFileCount: 1,
		},
	})
		.middleware(async () => {
			// this code runs on your server before upload
			const authUser: IUser | null = await getAuthUser();
			if (!authUser) throw new Error('Unauthorized');

			// whatever is returned here is accessible in onUploadComplete as `metadata`
			return { userId: authUser.sub };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			try {
				return { fileUrl: file.ufsUrl };
			} catch (error) {
				console.error('Error in onUploadComplete:', error);
				throw error;
			}
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
