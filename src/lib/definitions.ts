export interface IUser {
	nickname: string;
	name: string;
	picture: string;
	updated_at: string;
	email: string;
	email_verified: boolean;
	sub: string;
	sid: string;
}

export interface User {
	userId: string;
	firstName: string;
	lastName: string;
	emailAddresses: string[];
	imageUrl: string;
	username: string;
}

const Session = {
	user: {
		nickname: 'nko',
		name: 'nko@ukr.net',
		picture:
			'https://s.gravatar.com/avatar/ef86b68c5791e46d016a5d82076a8be5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fnk.png',
		updated_at: '2025-04-02T21:36:08.821Z',
		email: 'nko@ukr.net',
		email_verified: true,
		sub: 'auth0|67ed4511e3219466ba326beb',
		sid: '8434nCP7I-FfMYorihxcQpWCr2t75-IG',
	},
	accessToken:
		'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtMjhwajI3eXIwNjRqM2Qway5ldS5hdXRoMC5jb20vIn0..7Ru3Ty1C02sAcq1b.niFu5HCkwOQzkVnWR4B1byofpdN8QSkgSDsCgYBtH_B_XYFQ0yT20PmuqyrLPhfeWirEQPAV7QXWkwec9wtZiQuMUGXkv2FdKZ-cls-y18ojAmuEx84-lhmQp-M0RSEGwAIfL2D7eDMZMV7fxxZZ7ybvKtkVNptTNEkj-nDIoKOWUdrF3BQ3xm_D7q9olavVMXTHDEBOXULTuETciU6rFE6ZSHmSD-Ab7abDFcL71pUCMqk7l1Po5-g4i2ExqYaU8DyBTOZ_dCyU3sxVQr8kOCJHKZGBxuoLnZkEM2rkC4I6PGVfnGxrFiu-JUjr407fQPxTZrbWYEXuVhb-ieFovedR.ezN3nVZ9Q822HNZRoatEyA',
	accessTokenScope: 'openid profile email',
	accessTokenExpiresAt: 1743716382,
	idToken:
		'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxtVWY4aU1HSTJROVdTQU9HVjJ2MyJ9.eyJuaWNrbmFtZSI6Im5rbyIsIm5hbWUiOiJua29AdWtyLm5ldCIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZjg2YjY4YzU3OTFlNDZkMDE2YTVkODIwNzZhOGJlNT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm5rLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDI1LTA0LTAyVDIxOjM2OjA4LjgyMVoiLCJlbWFpbCI6Im5rb0B1a3IubmV0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vZGV2LTI4cGoyN3lyMDY0ajNkMGsuZXUuYXV0aDAuY29tLyIsImF1ZCI6IlB2d0RQRnk5bVJZRngzblBjekw3SmZHU1k5d3Q3dkZqIiwic3ViIjoiYXV0aDB8NjdlZDQ1MTFlMzIxOTQ2NmJhMzI2YmViIiwiaWF0IjoxNzQzNjI5OTgyLCJleHAiOjE3NDM2NjU5ODIsInNpZCI6Ijg0MzRuQ1A3SS1GZk1Zb3JpaHhjUXBXQ3IydDc1LUlHIiwibm9uY2UiOiJ1bS1NcWsyNTlfQ0JrcjBmdUxkdUc0ekZBSTh2YWRMSUFZZEI5UDlyUzVVIn0.AzFKuZG_UAydtRKok1-2orDx2umqWtszf2Iv79boOHrIUMLIB44jjS8l7luj_sOYAvvOEL9l6ax2ZllwcI4JVBuNqzsvEBUGyMjpEOW6TOiiekZEkv1mQKk4iTb9kbXtOdRxU5fBvzIqEpJAs8UNDdYMRbDx4VO3QibCrXjy8N5PYzdTDEVevikWh9HJ51gBhsZQWYDEzBM3TQmYYxN2bUXHmamdXuAMjWHBkIEulRcvpgaapnTouSYH1GQZ8ucnG1Y06qJAEN9mYzI1Dy66qL1JpsNbdET7q6SMJuRSPaN8T5IXGWa12mnray6dnyKosy3tCoTyLyHSZvZ4igV0Ww',
	token_type: 'Bearer',
};
