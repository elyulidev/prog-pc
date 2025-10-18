import Image from "next/image";
import Link from "next/link";
import { courseModules } from "@/lib/course-data";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getImage } from "@/lib/utils";

export default function ModulesPage() {
	return (
		<div className='space-y-8'>
			<h1 className='text-4xl font-bold tracking-tight font-headline'>
				Módulos do Curso
			</h1>
			<div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
				{courseModules.map((module) => {
					const image = getImage(module.imageId);
					const link = `/modules/${module.id}`;

					return (
						<Card
							key={module.id}
							className='flex flex-col transition-transform transform hover:-translate-y-1'
						>
							<CardHeader>
								{image && (
									<div className='relative aspect-[3/2] w-full mb-4 overflow-hidden rounded-md'>
										<Image
											src={image.imageUrl}
											alt={image.description}
											fill
											className='object-cover'
											data-ai-hint={image.imageHint}
										/>
									</div>
								)}
								<CardTitle className='font-headline'>{module.title}</CardTitle>
								<CardDescription>{module.description}</CardDescription>
							</CardHeader>
							<CardContent className='flex-grow' />
							<CardFooter>
								<Button asChild className='w-full'>
									<Link href={link}>
										Ver Módulo <ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</Button>
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
