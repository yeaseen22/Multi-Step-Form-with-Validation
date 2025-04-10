'use client';
import { DateField } from '@/app/components/form/fields/DateField';
import { RadioGroupField } from '@/app/components/form/fields/RadioGroupField';
import { SelectField } from '@/app/components/form/fields/SelectField';
import { TextField } from '@/app/components/form/fields/TextField';
import { Card } from '@/app/components/ui/card';
import { Briefcase } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { StepHeader } from './components/StepHeader';
import { personalDetailsPaths } from './schema';
import { EmployeeFormValue } from './schema';

/**
 * The employment details fields.
 * @returns The employment details fields.
 */

export const AddressInfomation = () => {
	const { watch } = useFormContext<EmployeeFormValue>();
	// const jobType = watch('employmentDetails.jobType');

	return (
		<Card className="p-6 space-y-6">
			{/* Header */}
			<StepHeader
				icon={<Briefcase className="w-6 h-6 text-primary mt-0.5" />}
				title="Employment Information"
				description="Please provide your employment information below."
			/>

			<div className="space-y-6">
				{/* Basic Employment Info */}
				<div className="space-y-4">
					<h2 className="text-lg font-medium">Basic Information</h2>
					<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
						<TextField<EmployeeFormValue>
							name="personalInformation.homeAddress"
							label="Address"
							placeholder="Enter Adress"
							required
						/>
						<TextField<EmployeeFormValue>
							name="personalInformation.city"
							label="Enter City"
							placeholder="Enter City"
							type='text'
							required
						/>
						<TextField<EmployeeFormValue>
							name="personalInformation.zip"
							label="Zip Code"
							type='number'
							placeholder="Enter Zip Code"
							required
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};

AddressInfomation.displayName = 'AddressInfomation';
