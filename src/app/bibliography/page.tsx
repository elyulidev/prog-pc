import Image from "next/image";
import { bibliography } from "@/lib/course-data";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getImage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function BibliographyPage() {
	return (
		<div className='space-y-8'>
			<h1 className='text-4xl font-bold tracking-tight font-headline'>
				Bibliografia
			</h1>
			<p className='text-lg text-muted-foreground'>
				Livros e recursos recomendados para o curso.
			</p>
			<div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-2xl'>
				{bibliography.map((book) => {
					const image = getImage(book.imageId);
					return (
						<Card key={book.id} className='overflow-hidden'>
							<CardHeader className='p-0'>
								{image && (
									<div className='relative aspect-[3/4] w-full'>
										<Image
											src={image.imageUrl}
											alt={image.description}
											fill
											className='object-contain'
											data-ai-hint={image.imageHint}
										/>
									</div>
								)}
							</CardHeader>
							<CardContent className='p-4'>
								<CardTitle className='text-base font-bold font-headline leading-tight'>
									{book.title}
								</CardTitle>
								<p className='text-sm text-muted-foreground mt-1'>
									{book.author}
								</p>
							</CardContent>
							<CardFooter className='p-4'>
								<Button
									className='w-full hover:shadow-sm transition-all'
									asChild
								>
									<a
										href={book.href}
										download
										target='_blank'
										rel='noopener noreferrer'
									>
										Baixar <Download className='ml-2 h-5 w-5' />
									</a>
								</Button>
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
