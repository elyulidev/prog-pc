import Image from "next/image";
import { bibliography } from "@/lib/course-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getImage } from "@/lib/utils";

export default function BibliographyPage() {
	return (
		<div className='space-y-8'>
			<h1 className='text-4xl font-bold tracking-tight font-headline'>
				Bibliografia
			</h1>
			<p className='text-lg text-muted-foreground'>
				Livros e recursos recomendados para o curso.
			</p>
			<div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
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
											className='object-cover'
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
						</Card>
					);
				})}
			</div>
		</div>
	);
}
