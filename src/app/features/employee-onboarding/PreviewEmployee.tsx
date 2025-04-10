'use client';
import { Eye } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { StepHeader } from './components/StepHeader';
import { AccountDetails } from './AccountDetails';
import { EmployeeFormValue } from './schema';
import { CheckboxField } from '@/app/components/form/fields/CheckboxField';
import { BasicDetailsPreview } from './BasicDetailsPreview';
import { AddressInformationPreview } from './AddressDetailsFieldsPreview';
import { AccountDetailsPreview } from './AccountDetailsPreview';

/**
 * PreviewEmployee. A preview employee component.
 * Responsibility: Render a preview employee component.
 *
 * @returns A preview employee component.
 */

export const PreviewEmployee = () => {
	return (
		<div className="space-y-8 max-w-[1200px] mx-auto">
			{/* Header */}
			<Card className="p-6">
				<StepHeader
					icon={<Eye className="w-6 h-6 text-primary" />}
					title="Preview Employee"
					description="Review all information before final submission"
				/>


				{/* Sections */}
				<div className="space-y-6 mt-6">
					{/* Personal Information */}
					<BasicDetailsPreview />
					<AddressInformationPreview />
					<AccountDetailsPreview />
					{/* Confirmation */}
					<div className="space-y-6">
						<CheckboxField<EmployeeFormValue>
							name="confirmation.confirm"
							label="I confirm that all the information provided above is accurate and complete"
							required
						/>
					</div>
				</div>
			</Card>
		</div>
	);
};

PreviewEmployee.displayName = 'PreviewEmployee';
