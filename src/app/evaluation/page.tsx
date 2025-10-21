import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function EvaluationPage() {
	return (
		<div className='space-y-8'>
			<h1 className='text-4xl font-bold tracking-tight font-headline'>
				Avaliação
			</h1>
			<Card className='max-w-lg'>
				<CardHeader>
					<CardTitle className='font-headline'>
						Critérios de Avaliação
					</CardTitle>
					<CardDescription>
						Baixe o documento PDF abaixo para ver os critérios detalhados de
						avaliação para este curso, incluindo trabalhos, provas e diretrizes
						do projeto.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button asChild>
						<a
							href='/https://cz7algaabcz8rpd1.public.blob.vercel-storage.com/Avalia%C3%A7%C3%A3o.pdf'
							download
						>
							<Download className='mr-2 h-4 w-4' />
							Baixar PDF
						</a>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
