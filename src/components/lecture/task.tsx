"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

interface TaskProps {
	title: string;
	description: string;
}

export function Task({ title, description }: TaskProps) {
	const [isCompleted, setIsCompleted] = useState(false);

	if (isCompleted) {
		return (
			<Card className='lg:col-span-2 bg-green-50 dark:bg-green-900/20'>
				<CardHeader>
					<div className='flex items-center gap-x-4'>
						<CheckCircle className='text-green-500' />
						<h2 className='text-2xl font-bold text-green-500'>
							Tarefa Concluída!
						</h2>
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
	}

	return (
		<Card className='lg:col-span-2'>
			<CardHeader>
				<h2 className='text-2xl font-bold'>{title}</h2>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<Button onClick={() => setIsCompleted(true)}>Marcar como concluído</Button>
			</CardContent>
		</Card>
	);
}
