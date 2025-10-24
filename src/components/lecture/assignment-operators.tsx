"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";

const assignmentOperators = [
	{
		id: "assign",
		label: "Atribuição",
		symbol: "=",
		equivalent: "n = 1",
		description: "Atribui o valor da direita para a variável da esquerda.",
		example: `n = 13\nprint(n)  # Saída: 13`,
	},
	{
		id: "add-assign",
		label: "Adição e Atribuição",
		symbol: "+=",
		equivalent: "n = n + 1",
		description:
			"Soma o valor da direita com a variável e atribui o resultado.",
		example: `n = 10\nn += 5  # n agora é 15\nprint(n) # Saída: 15`,
	},
	{
		id: "subtract-assign",
		label: "Subtração e Atribuição",
		symbol: "-=",
		equivalent: "n = n - 1",
		description:
			"Subtrai o valor da direita da variável e atribui o resultado.",
		example: `n = 10\nn -= 5  # n agora é 5\nprint(n) # Saída: 5`,
	},
	{
		id: "multiply-assign",
		label: "Multiplicação e Atribuição",
		symbol: "*=",
		equivalent: "n = n * 1",
		description:
			"Multiplica a variável pelo valor da direita e atribui o resultado.",
		example: `n = 10\nn *= 5  # n agora é 50\nprint(n) # Saída: 50`,
	},
	{
		id: "divide-assign",
		label: "Divisão e Atribuição",
		symbol: "/=",
		equivalent: "n = n / 1",
		description:
			"Divide a variável pelo valor da direita e atribui o resultado.",
		example: `n = 10\nn /= 5  # n agora é 2.0\nprint(n) # Saída: 2.0`,
	},
	{
		id: "modulus-assign",
		label: "Módulo e Atribuição",
		symbol: "%=",
		equivalent: "n = n % 1",
		description: "Calcula o módulo e atribui o resultado à variável.",
		example: `n = 10\nn %= 3  # n agora é 1\nprint(n) # Saída: 1`,
	},
];

export function AssignmentOperators() {
	const [activeTab, setActiveTab] = useState(assignmentOperators[0].id);

	const activeOperator = assignmentOperators.find((op) => op.id === activeTab);

	return (
		<Card className='lg:col-span-2'>
			<CardHeader>
				<h2 className='text-2xl font-bold'>Operadores de Atribuição</h2>
				<CardDescription>
					Utilizados para atribuir valores a variáveis de forma concisa.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='flex flex-wrap gap-2 mb-4'>
					{assignmentOperators.map((op) => (
						<button
							key={op.id}
							onClick={() => setActiveTab(op.id)}
							className={`px-3 py-1 rounded-full text-sm font-medium ${
								activeTab === op.id
									? "bg-primary text-primary-foreground"
									: "bg-muted text-muted-foreground"
							}`}
						>
							{op.label}
						</button>
					))}
				</div>
				{activeOperator && (
					<Card className='p-4'>
						<div className='flex items-center gap-x-4 mb-2'>
							<h3 className='text-lg font-semibold'>
								{activeOperator.label} ({activeOperator.symbol})
							</h3>
						</div>
						<p className='text-muted-foreground'>
							Equivalente a: <code>{activeOperator.equivalent}</code>
						</p>
						<p className='text-muted-foreground mb-4'>
							{activeOperator.description}
						</p>
						<CodeBlock language='python' code={activeOperator.example} />
					</Card>
				)}
			</CardContent>
		</Card>
	);
}
