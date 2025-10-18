import { cn } from "@/lib/utils";
import React from "react";

const LectureSection = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<section ref={ref} className={cn("space-y-4", className)} {...props} />
));
LectureSection.displayName = "LectureSection";

const LectureSectionHeader = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h2
		ref={ref}
		className={cn("text-3xl font-bold tracking-tight font-headline", className)}
		{...props}
	/>
));
LectureSectionHeader.displayName = "LectureSectionHeader";

const LectureSectionContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"prose dark:prose-invert max-w-none",
			"prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2",
			"prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2",
			"prose-li:text-foreground/90",
			"prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80",
			"prose-table:w-full prose-table:border prose-table:border-border prose-table:rounded-md prose-table:overflow-hidden",
			"prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-foreground",
			"prose-td:p-3 prose-td:border-t prose-td:border-border prose-td:text-foreground/90",
			className
		)}
		{...props}
	/>
));
LectureSectionContent.displayName = "LectureSectionContent";

export { LectureSection, LectureSectionHeader, LectureSectionContent };
