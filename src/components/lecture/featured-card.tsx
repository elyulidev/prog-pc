export const FeatureCard = ({
	icon,
	title,
	children,
	className,
}: {
	icon: React.ReactNode;
	title: string;
	children: React.ReactNode;
	className?: string;
}) => (
	<div
		className={`rounded-lg border bg-card/50 p-6 backdrop-blur-sm ${className}`}
	>
		<div className=''>
			<div className='rounded-lg bg-primary/10 p-2 text-primary'>{icon}</div>
			<div>
				<h3 className='text-xl font-bold font-headline'>{title}</h3>
				<div className='prose prose-lg max-w-none text-muted-foreground p-3 '>
					{children}
				</div>
			</div>
		</div>
	</div>
);
