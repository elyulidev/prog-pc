import { cn } from "@/lib/utils";
import { Info, TriangleAlert } from "lucide-react";
import React from "react";

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
	type?: "info" | "warning";
	title?: string;
	description?: string;
}

const calloutConfig = {
	info: {
		icon: <Info className='h-5 w-5' />,
		className:
			"bg-blue-100/50 border-blue-400/80 text-blue-800 dark:bg-blue-900/50 dark:border-blue-700 dark:text-blue-200",
	},
	warning: {
		icon: <TriangleAlert className='h-5 w-5' />,
		className:
			"bg-yellow-100/50 border-yellow-400/80 text-yellow-800 dark:bg-yellow-900/50 dark:border-yellow-700 dark:text-yellow-200",
	},
};

export function Callout({
	children,
	className,
	type = "info",
	title,
	description,
	...props
}: CalloutProps) {
	const config = calloutConfig[type];

	return (
		<div
			className={cn(
				"my-4 flex items-start gap-4 rounded-lg border p-4",
				config.className,
				className
			)}
			{...props}
		>
			<div className='flex-shrink-0'>{config.icon}</div>
			<div>
				{title && <p className='font-semibold'>{title}</p>}
				<div className='prose dark:prose-invert'>
					{description && <p>{description}</p>}
					{children}
				</div>
			</div>
		</div>
	);
}
