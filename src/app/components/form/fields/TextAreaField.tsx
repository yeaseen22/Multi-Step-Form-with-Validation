/*
 * File: TextAreaField.tsx
 * Responsibility: Component for rendering a textarea input field.
 * Author: Aditya Chakraborty
 * Created: 2024-11-07
 * Last Modified By: Null
 * Last Modified At: Null
 * Version: 0.1.0
 */
import { Button } from '@/app/components/ui/button';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/components/ui/form';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import { Textarea } from '@/app/components/ui/textarea';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';

interface Props<T extends FieldValues> {
	name: Path<T>;
	label?: string;
	required?: boolean;
	placeholder?: string;
	resizable?: boolean;
	autoResize?: boolean;
	action?: () => void;
	Icon?: React.ReactNode;
	loading?: boolean;
	className?: string;
	inputClassName?: string;
	iconClassName?: string;
}
/**
 * TextareaField component
 *
 * @param {Path<T>} name - The name of the field
 * @param {string} label - The label of the field
 * @param {boolean} required - Whether the field is required
 * @param {string} placeholder - The placeholder of the field
 * @param {boolean} resizable - Whether the field is resizable
 * @param {boolean} autoResize - Whether the field should auto-grow based on content
 * @param {Function} action - The action to be performed on the field
 * @param {ReactNode} icon - The icon to be displayed
 * @param {boolean} loading - Whether the field is loading
 * @param {string} className - The class name of the field
 * @param {string} inputClassName - The class name of the input
 * @param {string} iconClassName - The class name of the icon
 *
 * @returns {ReactElement} - The textarea field component
 *
 * @example
 * ```tsx
 * <TextareaField control={control} name="summary" label="Summary" autoGrow />
 * ```
 */
export const TextAreaField = <T extends FieldValues>({
	name,
	label,
	placeholder,
	required = false,
	resizable = false,
	autoResize = false,
	action,
	Icon,
	loading,
	className,
	inputClassName,
	iconClassName,
}: Props<T>) => {
	const { control } = useFormContext<T>();

	return (
		<FormField
			name={name}
			control={control}
			render={({ field }) => (
				<FormItem className={cn(className)}>
					{label && (
						<FormLabel>
							<span>{label}</span>
							{required && <span className="ml-1 text-red-500">*</span>}
						</FormLabel>
					)}
					<FormControl>
						<div className="relative flex items-center gap-2">
							<Textarea
								{...field}
								placeholder={placeholder ?? 'Enter a value'}
								className={cn(
									'w-full',
									action && 'pr-12',
									resizable === false && 'resize-none',
									inputClassName
								)}
								autoResize={autoResize}
							/>
							{loading && <LoadingSpinner className="absolute right-4" />}
							{action && (
								<Button
									variant={'ghost'}
									size={'sm'}
									onClick={action}
									type="button"
									className={cn(iconClassName, 'absolute right-0.5 top-0.5')}
								>
									{Icon ? Icon : <X className="h-4 w-4 text-red-500" />}
								</Button>
							)}

							{!action && Icon && (
								<div className={cn(iconClassName, 'absolute right-2 top-3')}>
									{Icon}
								</div>
							)}
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

TextAreaField.displayName = 'TextAreaField';
