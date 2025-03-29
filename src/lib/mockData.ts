import { User } from './definitions';

const mockUser: User = {
	external_id: '123456789',
	first_name: 'John',
	last_name: 'Doe',
	email_address: ['johndoe@example.com'],
	phone_number: ['+1234567890'],
	web3_wallet: ['0x1234567890'],
	username: 'johndoe',
	password: 'password',
	password_digest: 'password_digest',
	password_hasher: 'password_hasher',
	skip_password_checks: false,
	skip_password_requirement: false,
	totp_secret: 'totp_secret',
	backup_codes: ['backup_codes'],
	public_metadata: {},
	private_metadata: {},
	unsafe_metadata: {},
	delete_self_enabled: false,
	legal_accepted_at: 'legal_accepted_at',
	skip_legal_checks: false,
	create_organization_enabled: false,
	create_organizations_limit: 0,
	created_at: 'created_at',
};

export default mockUser;
