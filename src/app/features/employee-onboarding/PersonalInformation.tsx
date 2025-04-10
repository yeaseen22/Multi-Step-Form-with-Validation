'use client'
import {
	GenericForm,
	type GenericFormRef,
} from '@/app/components/form/GenericForm';
import { Stepper } from '@/app/components/stepper';
import { useRef } from 'react';
import { AddressInfomation } from './AddressDetailsFields';
import { useTriggerForm } from './hooks/useTriggerForm';
import { BasicDetails } from './BasicDetails';
import { PreviewEmployee } from './PreviewEmployee';
import {
	confirmationPaths,
	type EmployeeFormValue,
	EmployeeSchema,
	initialValues,
	personalDetailsPaths,
} from './schema';
import { AccountDetails } from './AccountDetails';

export const EmployeeOnboarding = () => {
	const formRef = useRef<GenericFormRef<EmployeeFormValue>>(null);
	const { triggerForm } = useTriggerForm<EmployeeFormValue>();
	const submitRef = useRef<HTMLButtonElement>(null);

	formRef.current?.form.handleSubmit((values) => {
		console.log('handleSubmit', values);
	});

	const clickSubmit = () => {
		submitRef.current?.click();
	};

	return (
		<GenericForm
			schema={EmployeeSchema}
			initialValues={initialValues}
			onSubmit={(values) => {
				console.log('onSubmit', values);
				alert(JSON.stringify(values));
			}}
			ref={formRef}
		>
			<Stepper onComplete={clickSubmit}>
				{/* Personal Details */}
				<Stepper.Step
					validate={() =>
						triggerForm(formRef.current?.form, [...personalDetailsPaths])
					}
				>
					<BasicDetails />
				</Stepper.Step>

				{/* Employment Details */}
				<Stepper.Step
					validate={() =>
						triggerForm(formRef.current?.form, [...personalDetailsPaths])
					}
				>
					<AddressInfomation />
				</Stepper.Step>
				<Stepper.Step
					validate={() =>
						triggerForm(formRef.current?.form, [...personalDetailsPaths])
					}
				>
					<AccountDetails />
				</Stepper.Step>

				{/* Preview Employee */}
				<Stepper.Step
					validate={() =>
						triggerForm(formRef.current?.form, [...confirmationPaths])
					}
				>
					<PreviewEmployee />
				</Stepper.Step>
			</Stepper>

			<button ref={submitRef} type="submit" hidden>
				Submit
			</button>
		</GenericForm>
	);
};

export default EmployeeOnboarding;
