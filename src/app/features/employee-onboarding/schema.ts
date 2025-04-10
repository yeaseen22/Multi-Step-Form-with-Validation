import { z } from 'zod';

// Add phone validation regex pattern
const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

// Create phone schema
const phoneSchema = z.string().min(1).regex(phoneRegex, {
	message: 'must be at least 10 digits)',
});

// Mock username check function
export const checkUsernameUnique = async (username: string) => {
	const takenUsernames = ['admin', 'root', 'test'];
	return !takenUsernames.includes(username.toLowerCase());
};

// Mock email check function
export const checkEmailUnique = async (email: string) => {
	const takenEmails = [
		'admin@example.com',
		'root@example.com',
		'test@example.com',
	];
	return !takenEmails.includes(email.toLowerCase());
};

const passwordRequirements = {
	minLength: 6,
	hasUpperCase: /[A-Z]/,
	hasLowerCase: /[a-z]/,
	hasNumber: /[0-9]/,
	hasSpecialChar: /[^A-Za-z0-9]/,
};


export const EmployeeSchema = z.object({
	personalInformation: z.object({
		fullName: z.string().min(1, 'fullName name is required'),
		
		contactNumber: phoneSchema,
		email: z
			.string()
			.email('Invalid email format')
			.refine(
				async (email) => await checkEmailUnique(email),
				'Email is already taken'
			),
		homeAddress: z.string().min(1, 'Home address is required'),
		city: z.string().min(1, 'City is required'),
		zip: z
			.string()
			.min(4, 'only numbers')
			.max(10, 'Zip Code must be at most 10 digits'),
	}),
	accountSetup: z.object({
		username: z.string().min(4, 'Username must be at least 4 characters'),
		password: z
			.string()
			.min(
				passwordRequirements.minLength,
				`Password must be at least ${passwordRequirements.minLength} characters`
			)
			.regex(
				passwordRequirements.hasUpperCase,
				'Password must contain at least one uppercase letter'
			)
			.regex(
				passwordRequirements.hasLowerCase,
				'Password must contain at least one lowercase letter'
			)
			.regex(
				passwordRequirements.hasNumber,
				'Password must contain at least one number'
			)
			.regex(
				passwordRequirements.hasSpecialChar,
				'Password must contain at least one special character'
			),
		confirmPassword: z.string(),
	  }).refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	  }),
	  confirmation: z.object({
		confirm: z.boolean().refine((val) => val === true, {
			message: 'Please confirm the details',
		}),
	}),
});


export type EmployeeFormValue = z.infer<typeof EmployeeSchema>;

export const initialValues: EmployeeFormValue = {
	accountSetup: {
		username: 'adityaUser',
		password: 'Pass@1234',
		confirmPassword: 'Pass@1234',
	  },
	personalInformation: {
		fullName: 'Aditya Chakraborty',
		contactNumber: '01712345678',
		email: 'aditya@email.com',
		homeAddress: '123 Main St',
		city: 'New York',
		zip: '10001',
	},
	confirmation: {
		confirm: false,
	},
};

export const accountSetupPaths = [
	'accountSetup.username',
	'accountSetup.password',
	'accountSetup.confirmPassword',
  ] as const;
  

export const personalDetailsPaths = [
	'personalInformation.fullName',
	'personalInformation.contactNumber',
	'personalInformation.email',
] as const;

export const addressDetailsPaths = [
	'personalInformation.homeAddress',
	'personalInformation.city',
	'personalInformation.zipCode',
] as const;

export const confirmationPaths = ['confirmation.confirm'] as const;


