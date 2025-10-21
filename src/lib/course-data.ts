export type LectureSlide = {
	type: "text" | "list" | "code" | "image" | "quote" | "callout" | "table";
	content:
		| string
		| string[]
		| { headers: string[]; rows: (string | number)[][] };
	language?: "python";
	imageId?: string;
	title?: string;
	variant?: "info" | "warning" | "definition";
};

export type Lecture = {
	id: string;
	title: string;
	content?: LectureSlide[];
};

export type Module = {
	id: string;
	title: string;
	description: string;
	lectures: Lecture[];
	imageId: string;
};

export const courseModules: Module[] = [
	{
		id: "1",
		title: "Módulo I: Fundamentos de Python e Lógica Algorítmica",
		description:
			"Aprenda os blocos de construção básicos da programação e do pensamento computacional.",
		imageId: "module-1",
		lectures: [
			{
				id: "1",
				title: "Introdução, Configuração e A Linguagem Python",
			},
			{
				id: "2",
				title:
					"Os Blocos de Construção do Código: Dados, Variáveis e Operadores",
			},
			{
				id: "3",
				title: "Aula 3 (Em breve)",
				content: [
					{
						type: "text",
						content: "O conteúdo desta aula estará disponível em breve.",
					},
				],
			},
			{
				id: "4",
				title: "Aula 4 (Em breve)",
				content: [
					{
						type: "text",
						content: "O conteúdo desta aula estará disponível em breve.",
					},
				],
			},
		],
	},
	{
		id: "2",
		title:
			"Módulo II: NumPy, uma biblioteca especializada em computação numérica e análise de dados",
		description:
			"O NumPy oferece funções matemáticas abrangentes, geradores de números aleatórios, rotinas de álgebra linear, transformadas de Fourier e muito mais.",
		imageId: "module-2",
		lectures: [],
	},
	{
		id: "3",
		title: "Módulo III: Visualização de Dados com Matplotlib",
		description:
			"Matplotlib é uma biblioteca abrangente para criar visualizações estáticas, animadas e interativas em Python. A Matplotlib torna as coisas fáceis fáceis e as coisas difíceis possíveis.",
		imageId: "module-3",
		lectures: [],
	},
];

export const bibliography = [
	{
		id: "1",
		title: "Curso Intensivo de Python",
		author: "Eric Matthes",
		imageId: "book-1",
		href: "https://cz7algaabcz8rpd1.public.blob.vercel-storage.com/Curso%20Intensivo%20de%20Python.pdf",
	},
	{
		id: "2",
		title: "Python: Escreva seus primeiros programas",
		author: "Felipe Cruz",
		imageId: "book-2",
		href: "https://cz7algaabcz8rpd1.public.blob.vercel-storage.com/Python%20Escreva%20seus%20primeiros%20programas.pdf",
	},
	{
		id: "3",
		title: "Python para Matemáticos",
		author: "Andréa Lins e Lins Souza",
		imageId: "book-3",
		href: "https://cz7algaabcz8rpd1.public.blob.vercel-storage.com/python%20para%20matem%C3%A1ticos.pdf",
	},
	/* {
		id: "4",
		title: "cheatsheets-1",
		author: "Matplotlib",
		imageId: "cheatsheets-1",
	},
	{
		id: "5",
		title: "cheatsheets-2",
		author: "Matplotlib",
		imageId: "cheatsheets-2",
	},
	{
		id: "6",
		title: "handout-beginner",
		author: "Matplotlib",
		imageId: "handout-beginner",
	},
	{
		id: "7",
		title: "handout-intermediate",
		author: "Matplotlib",
		imageId: "handout-intermediate",
	},
	{
		id: "8",
		title: "handout-tips",
		author: "Matplotlib",
		imageId: "handout-tips",
	}, */
];

export const getModuleById = (id: string) =>
	courseModules.find((m) => m.id === id);

export const getLectureByIds = (moduleId: string, lectureId: string) => {
	const modulo = getModuleById(moduleId);
	return modulo?.lectures.find((l) => l.id === lectureId);
};
