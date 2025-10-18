import { cn } from "@/lib/utils";
import React from "react";

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
	icon?: React.ReactElement;
	title?: string;
	description?: string;
	variant?: "info" | "warning" | "caution" | "success";
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
	(
		{ className, icon, title, description, variant = "info", ...props },
		ref
	) => {
		const variantClasses = {
			info: {
				bg: "bg-blue-100 dark:bg-blue-900/50",
				border: "border-blue-500",
				text: "text-blue-800 dark:text-blue-200",
			},
			warning: {
				bg: "bg-yellow-100 dark:bg-yellow-900/50",
				border: "border-yellow-500",
				text: "text-yellow-800 dark:text-yellow-200",
			},
			caution: {
				bg: "bg-red-100 dark:bg-red-900/50",
				border: "border-red-500",
				text: "text-red-800 dark:text-red-200",
			},
			success: {
				bg: "bg-green-100 dark:bg-green-900/50",
				border: "border-green-500",
				text: "text-green-800 dark:text-green-200",
			},
		};

		const classes = variantClasses[variant];

		return (
			<div
				ref={ref}
				className={cn(
					"flex items-center rounded-lg border-l-4 py-2",
					classes.bg,
					classes.border,
					className
				)}
				role='alert'
				{...props}
			>
				{icon && (
					<div className={cn("flex-shrink-0 mx-3", classes.text)}>{icon}</div>
				)}
				<div>
					<h3 className='text-xl font-semibold font-headline tracking-tight'>
						{title}
					</h3>
					<p className={cn("text-base", classes.text)}>{description}</p>
				</div>
			</div>
		);
	}
);
Callout.displayName = "Callout";

export { Callout };
