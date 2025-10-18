import { notFound } from "next/navigation";
import { getLectureByIds, getModuleById } from "@/lib/course-data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import React from "react";

type LecturePageProps = {
	params: Promise<{
		moduleId: string;
		lectureId: string;
	}>;
};

export default async function LecturePage({ params }: LecturePageProps) {
	const { moduleId, lectureId } = await params;

	if (!moduleId || !lectureId) {
		notFound();
	}
	const modulo = getModuleById(moduleId);
	const lecture = getLectureByIds(moduleId, lectureId);

	if (!modulo || !lecture) {
		notFound();
	}

	const LectureContent = React.lazy(
		() => import(`@/lib/content/pt/module-${moduleId}/conf-${lectureId}`)
	);

	return (
		<div className='space-y-6 max-w-xs xs:max-w-5xl mx-auto'>
			<div className='flex items-center gap-2 text-sm text-muted-foreground '>
				<Link href='/modules' className='hover:text-primary transition-colors'>
					Módulos
				</Link>
				<ChevronRight className='h-4 w-4' />
				<Link
					href={`/modules/${modulo.id}`}
					className='hover:text-primary transition-colors'
				>
					{modulo.title}
				</Link>
				<ChevronRight className='h-4 w-4' />
				<span className='font-medium text-foreground'>{lecture.title}</span>
			</div>
			<div className='space-y-2'>
				<h1 className='text-4xl font-extrabold tracking-tight font-headline'>
					{lecture.title}
				</h1>
				<p className='text-muted-foreground text-lg'>
					Uma exploração aprofundada dos conceitos e técnicas fundamentais.
				</p>
			</div>
			<React.Suspense fallback={<div>Carregando...</div>}>
				<LectureContent />
			</React.Suspense>
		</div>
	);
}

export async function generateMetadata({ params }: LecturePageProps) {
	const { moduleId, lectureId } = await params;

	if (!moduleId || !lectureId) {
		return { title: "Palestra não encontrada" };
	}

	const lecture = getLectureByIds(moduleId, lectureId);
	if (!lecture) {
		return { title: "Palestra não encontrada" };
	}

	return {
		title: `${lecture.title} | Programação de Computadores`,
	};
}
