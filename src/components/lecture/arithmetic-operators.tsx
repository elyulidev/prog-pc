"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";

const operators = [
	{
		id: "addition",
		label: "Adição",
		symbol: "+",
		description: "Soma dois valores.",
		example: `print("2 + 3 =", 2 + 3)  # Saída: 5`,
	},
	{
		id: "subtraction",
		label: "Subtração",
		symbol: "-",
		description: "Subtrai o segundo valor do primeiro.",
		example: `print("4 - 5 =", 4 - 5)  # Saída: -1`,
	},
	{
		id: "multiplication",
		label: "Multiplicação",
		symbol: "*",
		description: "Multiplica dois valores.",
		example: `print("5 * 4 =", 5 * 4)  # Saída: 20`,
	},
	{
		id: "division",
		label: "Divisão",
		symbol: "/",
		description: "Divide o primeiro valor pelo segundo.",
		example: `print("10 / 6.5 =", 10 / 6.5)  # Saída: 1.538...`,
	},
	{
		id: "integer-division",
		label: "Divisão Inteira",
		symbol: "//",
		description: "Divide e retorna o resultado inteiro.",
		example: `print("10 // 6.5 =", 10 // 6.5)  # Saída: 1.0`,
	},
	{
		id: "modulus",
		label: "Módulo",
		symbol: "%",
		description: "Retorna o resto da divisão.",
		example: `print("10 % 6 =", 10 % 6)  # Saída: 4`,
	},
	{
		id: "exponentiation",
		label: "Potenciação",
		symbol: "**",
		description: "Eleva o primeiro valor à potência do segundo.",
		example: `print("10 ** 6 =", 10 ** 6)  # Saída: 1000000`,
	},
];

export function ArithmeticOperators() {
	const [activeTab, setActiveTab] = useState(operators[0].id);

	const activeOperator = operators.find((op) => op.id === activeTab);

	return (
		<Card className='lg:col-span-2'>
			<CardHeader>
				<h2 className='text-2xl font-bold'>Operadores Aritméticos</h2>
				<CardDescription>
					Python pode ser usado como uma calculadora.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='flex flex-wrap gap-2 mb-4'>
					{operators.map((op) => (
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
