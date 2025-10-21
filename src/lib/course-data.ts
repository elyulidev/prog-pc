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
		title: "Structure and Interpretation of Computer Programs",
		author: "Harold Abelson and Gerald Jay Sussman",
		imageId: "book-1",
	},
	{
		id: "2",
		title: "Introduction to Algorithms",
		author: "Thomas H. Cormen, et al.",
		imageId: "book-2",
	},
	{
		id: "3",
		title: "Clean Code: A Handbook of Agile Software Craftsmanship",
		author: "Robert C. Martin",
		imageId: "book-3",
	},
];

export const getModuleById = (id: string) =>
	courseModules.find((m) => m.id === id);

export const getLectureByIds = (moduleId: string, lectureId: string) => {
	const modulo = getModuleById(moduleId);
	return modulo?.lectures.find((l) => l.id === lectureId);
};
