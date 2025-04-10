'use client';
import { Card } from '@/app/components/ui/card';
import { Briefcase, Home, MapPin } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { InfoItem } from './components/InfoItem';
import { PreviewHeader } from './components/PreviewHeader';
import { EmployeeFormValue } from './schema';

/**
 * AddressInformationPreview. An address information preview component.
 * Responsibility: Render address information preview component.
 *
 * @returns An address information preview component.
 */

export const AddressInformationPreview = () => {
	const formContext = useFormContext<EmployeeFormValue>();
	const formValues = formContext.getValues();

	return (
		<Card className="p-6">
			<PreviewHeader
				icon={<Briefcase className="w-5 h-5 text-primary" />}
				title="Address Information"
			/>

			<div className="grid md:grid-cols-2 gap-6">
				<InfoItem
					icon={<Home size={16} />}
					label="Address"
					value={formValues.personalInformation.homeAddress}
				/>
				<InfoItem
					icon={<MapPin size={16} />}
					label="City"
					value={formValues.personalInformation.city}
				/>
				<InfoItem
					icon={<MapPin size={16} />}
					label="Zip Code"
					value={formValues.personalInformation.zip}
				/>
			</div>
		</Card>
	);
};

AddressInformationPreview.displayName = 'AddressInformationPreview';
