import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
	return (
		<div className='space-y-12'>
			{/* Hero Section */}
			<section className='text-center py-20'>
				<div className='container mx-auto'>
					<Image
						src='/conf1/python-logo.png'
						alt='Python Logo'
						width={150}
						height={150}
						className='rounded-lg shadow-lg mx-auto mb-8'
					/>
					<h1 className='text-5xl font-bold tracking-tight lg:text-6xl font-headline'>
						Aprenda a Programar com Python
					</h1>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto mt-4'>
						Um curso interativo e completo para iniciantes que desejam dominar a
						programação de computadores e a linguagem Python.
					</p>
					<div className='mt-8'>
						<Button asChild size='lg'>
							<Link href='/modules'>
								Comece a Aprender <ArrowRight className='ml-2 h-5 w-5' />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-12 bg-secondary/50'>
				<div className='container mx-auto'>
					<h2 className='text-3xl font-bold text-center font-headline mb-8'>
						O Que Você Vai Aprender
					</h2>
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						<Card className='text-center'>
							<CardHeader>
								<div className='mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4'>
									<Code className='h-8 w-8 text-primary' />
								</div>
								<CardTitle className='font-headline'>
									Fundamentos de Programação
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									Domine os conceitos essenciais da programação, como variáveis,
									tipos de dados, operadores, e estruturas de controle.
								</p>
							</CardContent>
						</Card>
						<Card className='text-center'>
							<CardHeader>
								<div className='mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4'>
									<BookOpen className='h-8 w-8 text-primary' />
								</div>
								<CardTitle className='font-headline'>
									Estruturas de Dados
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									Aprenda a organizar e manipular dados de forma eficiente com
									listas, tuplas, dicionários e muito mais.
								</p>
							</CardContent>
						</Card>
						<Card className='text-center'>
							<CardHeader>
								<div className='mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4'>
									<Users className='h-8 w-8 text-primary' />
								</div>
								<CardTitle className='font-headline'>E Mais!</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									Explore tópicos como programação orientada a objetos,
									manipulação de arquivos e bibliotecas populares do Python.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className='text-center py-20'>
				<div className='container mx-auto'>
					<h2 className='text-3xl font-bold font-headline'>
						Pronto para começar?
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto mt-4'>
						Junte-se a nós nesta jornada de aprendizado e dê o primeiro passo
						para se tornar um programador de sucesso.
					</p>
					<div className='mt-8'>
						<Button asChild size='lg'>
							<Link href='/modules'>
								Ver Módulos do Curso <ArrowRight className='ml-2 h-5 w-5' />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
