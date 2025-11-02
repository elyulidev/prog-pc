"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TaskProps {
	title: string;
	children: React.ReactNode;
}

export function Task({ title, children }: TaskProps) {
	//const [isCompleted, setIsCompleted] = useState(false);

	/* if (isCompleted) {
		return (
			<Card className='lg:col-span-2 bg-green-50 dark:bg-green-900/20'>
				<CardHeader>
					<div className='flex items-center gap-x-4'>
						<CheckCircle className='text-green-500' />
						<CardTitle className='text-2xl font-bold text-green-500'>
							Tarefa Concluída!
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<p>
						Parabéns por concluir a tarefa! Você está um passo mais perto de
						dominar Python.
					</p>
				</CardContent>
			</Card>
		);
	} */

	return (
		<Card className='lg:col-span-2'>
			<CardHeader>
				<CardTitle className='text-2xl font-bold'>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='prose dark:prose-invert max-w-none text-muted-foreground'>
					{children}
				</div>
				{/* <Button onClick={() => setIsCompleted(true)} className='mt-6 not-prose'>
					Marcar como concluído
				</Button> */}
			</CardContent>
		</Card>
	);
}
