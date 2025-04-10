"use client"

import { Card } from '@/app/components/ui/card';
import { format } from 'date-fns';
import {
	Briefcase,
	Building2,
	Calendar,
	Clock,
	DollarSign,
	User,
} from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { checkUsernameUnique, EmployeeFormValue } from './schema';
import { TextField } from '@/app/components/form/fields/TextField';
import { StepHeader } from './components/StepHeader';
import { PasswordField } from '@/app/components/form/fields/PasswordField';
import { UniqueTextField } from '@/app/components/form/fields/UniqueTextField';


/**
 * EmploymentDetailsPreview. An employment details preview component.
 * Responsibility: Render an employment details preview component.
 *
 * @returns An employment details preview component.
 */

export const AccountDetails = () => {
	const formContext = useFormContext<EmployeeFormValue>();
	const { watch } = useFormContext<EmployeeFormValue>();

	const formValues = formContext.getValues();

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
						<UniqueTextField<EmployeeFormValue>
							name="accountSetup.username"
							checkFunction={checkUsernameUnique}
							label="Username"
							placeholder="Enter username"

							required				/>
						<div></div>
						<PasswordField<EmployeeFormValue>
							name="accountSetup.password"
							label="Password"
							required
						/>
						<TextField<EmployeeFormValue>
							name="accountSetup.confirmPassword"
							label="Confirm Password"
							placeholder="Confirm password"
							required
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};

AccountDetails.displayName = 'AccountDetails';
