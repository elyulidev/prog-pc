"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check, X, Undo } from "lucide-react";

const questions = [
	{
		question: "Em Python, `5 + 3 * 2` resulta em 16.",
		answer: false,
		explanation: "Incorreto. A multiplicação tem precedência, então `3 * 2` é calculado primeiro (6), e depois a soma `5 + 6`, resultando em 11.",
	},
	{
		question:
			"O operador `=` é usado para comparar se dois valores são iguais.",
		answer: false,
		explanation: "Incorreto. O operador `=` é para atribuição. Para comparação de igualdade, usamos `==`.",
	},
	{
		question: "A função `input()` sempre retorna uma string.",
		answer: true,
		explanation: "Correto. A função `input()` sempre captura a entrada do usuário como uma string, mesmo que sejam digitados apenas números.",
	},
	{
		question:
			"Uma `tupla` é uma coleção imutável, o que significa que seus elementos não podem ser alterados após a criação.",
		answer: true,
		explanation: "Correto. Tuplas são imutáveis, ao contrário das listas, que são mutáveis.",
	},
];

export function TrueFalseQuiz() {
	const [answers, setAnswers] = useState<{ [key: number]: boolean }>({});
	const [submitted, setSubmitted] = useState(false);

	const handleAnswer = (questionIndex: number, answer: boolean) => {
		if (submitted) return;
		setAnswers({ ...answers, [questionIndex]: answer });
	};

	const checkAnswers = () => {
		setSubmitted(true);
	};

	const resetQuiz = () => {
		setAnswers({});
		setSubmitted(false);
	};

	const calculateScore = () => {
		return questions.reduce((score, question, index) => {
			return score + (answers[index] === question.answer ? 1 : 0);
		}, 0);
	};

	return (
		<Card className='lg:col-span-2'>
			<CardHeader>
				<CardTitle>Tarefa: Verifique seu Conhecimento</CardTitle>
				<CardDescription>
					Responda verdadeiro ou falso para as seguintes afirmações.
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				{questions.map((q, index) => {
					const isCorrect = answers[index] === q.answer;
					return (
						<div key={index} className='p-4 border rounded-lg'>
							<div className='flex items-start justify-between'>
								<p className='font-medium'>{q.question}</p>
								{submitted && (
									<span>
										{isCorrect ? (
											<Check className='text-green-500' />
										) : (
											<X className='text-red-500' />
										)}
									</span>
								)}
							</div>
							<div className='flex gap-2 mt-3'>
								<Button
									variant={answers[index] === true ? "default" : "outline"}
									onClick={() => handleAnswer(index, true)}
									disabled={submitted}
									className={`w-full ${
										submitted &&
										q.answer === true &&
										"bg-green-100 border-green-500 text-green-700 dark:bg-green-900/30"
									}`}
								>
									Verdadeiro
								</Button>
								<Button
									variant={answers[index] === false ? "default" : "outline"}
									onClick={() => handleAnswer(index, false)}
									disabled={submitted}
									className={`w-full ${
										submitted &&
										q.answer === false &&
										"bg-green-100 border-green-500 text-green-700 dark:bg-green-900/30"
									}`}
								>
									Falso
								</Button>
							</div>
							{submitted && !isCorrect && (
								<p className='mt-3 text-sm text-red-600 dark:text-red-400'>
									{q.explanation}
								</p>
							)}
						</div>
					);
				})}

				{submitted ? (
					<div className='flex items-center justify-between p-4 bg-secondary rounded-lg'>
						<p className='text-lg font-semibold'>
							Sua pontuação: {calculateScore()} de {questions.length}
						</p>
						<Button onClick={resetQuiz} variant='outline'>
							<Undo className='mr-2 h-4 w-4' />
							Tentar Novamente
						</Button>
					</div>
				) : (
					<Button
						onClick={checkAnswers}
						disabled={Object.keys(answers).length !== questions.length}
						className='w-full'
					>
						Verificar Respostas
					</Button>
				)}
			</CardContent>
		</Card>
	);
}
