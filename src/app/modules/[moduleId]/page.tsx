import { notFound } from "next/navigation";
import Link from "next/link";
import { getModuleById } from "@/lib/course-data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

type ModuleDetailPageProps = {
	params: Promise<{
		moduleId: string;
	}>;
};

export default async function ModuleDetailPage({
	params,
}: ModuleDetailPageProps) {
	const { moduleId } = await params;

	if (!moduleId) {
		notFound();
	}

	const modulo = getModuleById(moduleId);

	if (!modulo) {
		notFound();
	}

	return (
		<div className='space-y-8'>
			<div className='flex items-center gap-2 text-sm text-muted-foreground'>
				<Link href='/modules' className='hover:text-primary'>
					Módulos
				</Link>
				<ChevronRight className='h-4 w-4' />
				<span className='font-medium text-foreground'>{modulo.title}</span>
			</div>
			<div>
				<h1 className='text-4xl font-bold tracking-tight font-headline'>
					{modulo.title}
				</h1>
				<p className='mt-2 text-lg text-muted-foreground'>
					{modulo.description}
				</p>
			</div>

			<div className='space-y-4'>
				<h2 className='text-2xl font-bold font-headline'>Palestras</h2>
				<div className='grid gap-4'>
					{modulo.lectures.map((lecture) => (
						<Link
							key={lecture.id}
							href={`/modules/${modulo.id}/lecture/${lecture.id}`}
							passHref
						>
							<Card className='hover:bg-accent hover:text-accent-foreground transition-colors'>
								<CardHeader>
									<CardTitle className='font-headline text-lg'>
										{lecture.title}
									</CardTitle>
								</CardHeader>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export async function generateMetadata({ params }: ModuleDetailPageProps) {
	const { moduleId } = await params;
	if (!moduleId) {
		return { title: "Módulo não encontrado" };
	}

	const modulo = getModuleById(moduleId);

	if (!modulo) {
		return { title: "Módulo não encontrado" };
	}

	return {
		title: `${modulo.title} | Programação de Computadores`,
	};
}
