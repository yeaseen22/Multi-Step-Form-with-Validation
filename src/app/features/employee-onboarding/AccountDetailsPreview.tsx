"use client"

import { Card } from '@/app/components/ui/card'
import { Briefcase, Lock, User } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { InfoItem } from './components/InfoItem'
import { PreviewHeader } from './components/PreviewHeader'
import { EmployeeFormValue } from './schema'

/**
 * AccountDetailsPreview. A preview component for account details.
 * Responsibility: Display read-only account details.
 *
 * @returns Account details preview component.
 */

export const AccountDetailsPreview = () => {
	const formContext = useFormContext<EmployeeFormValue>()
	const formValues = formContext.getValues()

	return (
		<Card className="p-6">
			<PreviewHeader
				title="Account Details"
				icon={<Briefcase className="w-5 h-5 text-primary" />}
			/>

			<div className="grid md:grid-cols-2 gap-6">
				<InfoItem
					icon={<User size={16} />}
					label="Username"
					value={formValues.accountSetup.username}
				/>
				<InfoItem
					icon={<Lock size={16} />}
					label="Password"
					value="********"
				/>
			</div>
		</Card>
	)
}

AccountDetailsPreview.displayName = 'AccountDetailsPreview'
