'use client';
import { DateField } from '@/app/components/form/fields/DateField';
import { ImageUploadField } from '@/app/components/form/fields/ImageUploadField';
import { PasswordField } from '@/app/components/form/fields/PasswordField';
import { RadioGroupField } from '@/app/components/form/fields/RadioGroupField';
import { TextAreaField } from '@/app/components/form/fields/TextAreaField';
import { TextField } from '@/app/components/form/fields/TextField';
import { UniqueTextField } from '@/app/components/form/fields/UniqueTextField';
import { Card } from '@/app/components/ui/card';
import { FormLabel } from '@/app/components/ui/form';
import { getAge } from '@/lib/utils/getAge';
import { User2 } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { StepHeader } from './components/StepHeader';
import {
	checkEmailUnique,
	checkUsernameUnique,
	EmployeeFormValue,
} from './schema';

const genderOptions = [
	{ value: 'male', text: 'Male' },
	{ value: 'female', text: 'Female' },
	{ value: 'other', text: 'Other' },
];

/**
 * The personal details fields.
 * @returns The personal details fields.
 */

export const BasicDetails = () => {
	const { watch } = useFormContext<EmployeeFormValue>();
	// const dob = watch('personalInformation.dob');

	return (
		<Card className="p-6 space-y-6">
			{/* Header Section */}
			<StepHeader
				icon={<User2 className="w-6 h-6 text-primary" />}
				title="Personal Information"
				description="Please provide your personal information below."
			/>

			{/* Main Form Section */}
			<div className="space-y-6">
				{/* Basic Information */}
				<div className="space-y-4">
					<h2 className="text-lg font-medium">Basic Details</h2>
					<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
						{/* <ImageUploadField<EmployeeFormValue>
							name="personalInformation.profileImage"
							label="Profile Image"
						/> */}
						{/* <div></div> */}
						<TextField<EmployeeFormValue>
							name="personalInformation.fullName"
							label="Full Name"
							placeholder="Enter Full name"
							required
						/>
						<UniqueTextField<EmployeeFormValue>
							name="personalInformation.email"
							label="Email"
							placeholder="Enter Email"
							checkFunction={checkUsernameUnique}
							required
						/>
						<TextField<EmployeeFormValue>
							name="personalInformation.contactNumber"
							label="Number"
							type='number'
							placeholder="Enter Phone Number"
							required
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};

BasicDetails.displayName = 'BasicDetails';
