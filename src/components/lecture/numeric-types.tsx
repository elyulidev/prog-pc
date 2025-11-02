"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	IntegerIcon,
	BooleanIcon,
	FloatIcon,
	ComplexIcon,
} from "@/components/icons/data-types";

const numericTypes = [
	{
		id: "integer",
		label: "Inteiro",
		title: "3.1.1. Inteiros (int)",
		icon: <IntegerIcon />,
		description: "Números sem parte fracionária",
		longDescription:
			"São os números zero, positivos e negativos sem a parte fracionária. Eles representam números em um intervalo ilimitado, sujeito apenas à memória (virtual) disponível.",
		example: "1, 5, -3, 4, 0, -15, ...",
	},
	{
		id: "boolean",
		label: "Booleano",
		title: "3.1.2. Booleano (bool)",
		icon: <BooleanIcon />,
		description: "Valores de verdadeiro ou falso",
		longDescription:
			"Dado lógico que pode assumir apenas dois valores, falso ou verdadeiro (False ou True em Python) e na lógica computacional, podem ser considerados como 0 ou 1.",
		example: "True, False",
	},
	{
		id: "float",
		label: "Float",
		title: "3.1.3. Ponto flutuante (float)",
		icon: <FloatIcon />,
		description: "Números com parte fracionária",
		longDescription:
			"São números reais positivos e negativos, com a parte fracionária denotada pelo símbolo decimal . ou em notação científica E ou e.",
		example: "1.2, 10.0, -3.55555, -79.0, 1.23e+08, ...",
	},
	{
		id: "complex",
		label: "Complexo",
		title: "3.1.4. Complexo (complex)",
		icon: <ComplexIcon />,
		description: "Números com parte real e imaginária",
		longDescription:
			"São representados por a + bj, onde a e b são números reais. É obrigatório o uso da variável j para indicar que um número é complexo em Python.",
		example: "3 + 2j, 5 - j, 4j, 1.0 + 2.5j, ...",
	},
];

export function NumericTypes() {
	const [activeTab, setActiveTab] = useState(numericTypes[0].id);

	const activeType = numericTypes.find((type) => type.id === activeTab);

	return (
		<Card className='lg:col-span-2'>
			<CardHeader>
				<div className='flex items-center gap-x-4'>
					<h2 className='text-2xl font-bold'># Tipos Numéricos</h2>
				</div>
				<CardDescription>
					Matematicamente falando, o Python possui três tipos numéricos:
					inteiros (int e bool), ponto flutuante (float) e complexo (complex).
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='flex flex-wrap space-x-2 mb-4'>
					{numericTypes.map((type) => (
						<button
							key={type.id}
							onClick={() => setActiveTab(type.id)}
							className={`px-4 py-2 rounded-full text-sm font-medium ${
								activeTab === type.id
									? "bg-primary text-primary-foreground"
									: "bg-muted text-muted-foreground"
							}`}
						>
							{type.label}
						</button>
					))}
				</div>
				{activeType && (
					<Card className='p-4'>
						<div className='flex justify-between items-start'>
							<div>
								<div className='flex items-center gap-x-2 mb-2'>
									{activeType.icon}
									<h3 className='text-lg font-semibold'>{activeType.title}</h3>
								</div>
								<p className='text-muted-foreground mb-4'>
									{activeType.description}
								</p>
								<p>{activeType.longDescription}</p>
							</div>
							<Badge>Numérico</Badge>
						</div>
						<div className='mt-4 p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20'>
							<p className='font-semibold mb-2'>
								<span className='mr-2'>💡</span>Exemplo 3.1
							</p>
							<div className='flex flex-wrap gap-2'>
								{activeType.example.split(", ").map((item, index) => (
									<Badge
										key={index}
										variant='outline'
										className='bg-blue-100 dark:bg-blue-800/30'
									>
										{item}
									</Badge>
								))}
							</div>
						</div>
					</Card>
				)}
			</CardContent>
		</Card>
	);
}
