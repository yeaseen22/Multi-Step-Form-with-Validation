'use client';
import { Card } from '@/app/components/ui/card';
import { Phone, Mail, User } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { InfoItem } from './components/InfoItem';
import { PreviewHeader } from './components/PreviewHeader';
import { EmployeeFormValue } from './schema';

/**
 * BasicDetailsPreview. A personal details preview component.
 * Responsibility: Render a basic details preview component.
 *
 * @returns A basic details preview component.
 */

export const BasicDetailsPreview = () => {
	const formContext = useFormContext<EmployeeFormValue>();
	const formValues = formContext.getValues();

	return (
		<Card className="p-6">
			<PreviewHeader
				icon={<User className="w-5 h-5 text-primary" />}
				title="Basic Details"
			/>

			<div className="grid md:grid-cols-2 gap-6">
				<InfoItem
					icon={<User size={16} />}
					label="Full Name"
					value={formValues.personalInformation.fullName}
				/>
				<InfoItem
					icon={<Mail size={16} />}
					label="Email"
					value={formValues.personalInformation.email}
				/>
				<InfoItem
					icon={<Phone size={16} />}
					label="Contact Number"
					value={formValues.personalInformation.contactNumber}
				/>
			</div>
		</Card>
	);
};

BasicDetailsPreview.displayName = 'BasicDetailsPreview';
