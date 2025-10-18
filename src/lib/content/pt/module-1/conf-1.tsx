import { Callout } from "@/components/lecture/callout";
import { CodeBlock } from "@/components/code-block";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	StarIcon,
	Sparkles,
	Code,
	Puzzle,
	Laptop,
	FlaskConical,
	Rocket,
	Terminal,
} from "lucide-react";
import Image from "next/image";

export default function LecturePage() {
	return (
		<div className='space-y-12'>
			{/* Conference Header */}
			<header className='rounded-lg bg-primary/5 p-8'>
				<p className='text-lg font-semibold text-primary'>
					Módulo I: Fundamentos de Python e Lógica Algorítmica
				</p>
				<h1 className='text-4xl font-bold tracking-tight lg:text-5xl font-headline'>
					Conferência 1: Introdução, Configuração e A Linguagem Python
				</h1>
				<p className='mt-4 text-lg text-muted-foreground max-w-3xl'>
					Da Lógica Matemática à Primeira Linha de Código: A sua jornada para
					automatizar, criar e inovar começa aqui.
				</p>
			</header>

			{/* Segment 1: The Initial Spark */}
			<div className='grid gap-8 lg:grid-cols-2'>
				<Card className='hover:border-primary/50 transition-all'>
					<CardHeader className='flex-row items-center gap-4'>
						<div className='p-3 rounded-full bg-primary/10'>
							<Sparkles className='h-6 w-6 text-primary' />
						</div>
						<CardTitle className='font-headline text-2xl'>
							A Faísca Inicial
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4 text-muted-foreground'>
						<p>
							Pense por um momento num problema matemático complexo: graficar
							uma função com milhares de pontos, simular um sistema caótico ou
							simplesmente resolver cem equações diferentes. À mão, seria uma
							loucura, certo?
						</p>
						<p>
							A nossa missão neste minicurso é dar-lhe uma ferramenta que
							transforma essas tarefas tediosas em processos automáticos e
							criativos. Vamos descobrir como o Python pode ser o melhor aliado
							para qualquer pessoa que trabalhe com matemática.
						</p>
					</CardContent>
				</Card>
				<Card className='hover:border-primary/50 transition-all'>
					<CardHeader className='flex-row items-center gap-4'>
						<div className='p-3 rounded-full bg-primary/10'>
							<Code className='h-6 w-6 text-primary' />
						</div>
						<CardTitle className='font-headline text-2xl'>
							Porquê Python? O Canivete Suíço do Código
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4 text-muted-foreground'>
						<p>
							A resposta é simples: <strong>acessibilidade e poder</strong>. A
							sua sintaxe é tão limpa que muitas vezes parece que estamos a ler
							instruções em inglês.
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Interpretado:</strong> Executa os seus comandos
								instantaneamente, ideal para experimentar.
							</li>
							<li>
								<strong>Multiplataforma:</strong> O código funciona em Mac,
								Windows ou Linux.
							</li>
							<li>
								<strong>Open Source:</strong> Gratuito e apoiado por uma
								comunidade global gigante.
							</li>
							<li>
								<strong>Versátil:</strong> Perfeito para matemática (NumPy),
								ciência de dados (Pandas), IA (TensorFlow) e muito mais.
							</li>
						</ul>
						<div className='relative aspect-[16/9] w-full mt-4 overflow-hidden rounded-md border'>
							<Image
								src='/conf1/tiobe-python.webp'
								alt='Gráfico do índice TIOBE mostrando a popularidade do Python'
								fill
								className='object-contain'
							/>
						</div>
						<p className='text-xs text-center text-muted-foreground/80'>
							Não é por acaso que o Python domina os rankings de popularidade
							como o TIOBE.
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Segment 2: The Common Language of Logic */}
			<Card className='hover:border-primary/50 transition-all'>
				<CardHeader className='flex-row items-center gap-4'>
					<div className='p-3 rounded-full bg-primary/10'>
						<Puzzle className='h-6 w-6 text-primary' />
					</div>
					<div>
						<CardTitle className='font-headline text-2xl'>
							A Linguagem Comum da Lógica
						</CardTitle>
						<CardDescription>
							Matemática e Código: Duas Faces da Mesma Moeda
						</CardDescription>
					</div>
				</CardHeader>
				<CardContent className='space-y-4 text-muted-foreground'>
					<p>
						As matemática e a programação são disciplinas irmãs, baseadas na{" "}
						<strong>lógica precisa</strong>. Uma receita de cozinha é um{" "}
						<strong>algoritmo</strong>: uma sequência de passos finitos e
						ordenados para alcançar um resultado. &quot;Adicionar 200g de
						farinha&quot; é uma instrução precisa, tal como <code>x = 200</code>
						.
					</p>
					<div className='overflow-x-auto'>
						<table className='w-full text-sm'>
							<thead>
								<tr className='border-b'>
									<th className='px-4 py-2 text-left font-semibold'>
										Característica
									</th>
									<th className='px-4 py-2 text-left font-semibold'>
										Na Matemática
									</th>
									<th className='px-4 py-2 text-left font-semibold'>
										Na Programação
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className='border-b'>
									<td className='border-r px-4 py-2'>
										<strong>Algoritmo</strong>
									</td>
									<td className='border-r px-4 py-2'>
										O método para resolver uma equação quadrática.
									</td>
									<td className='px-4 py-2'>
										Uma função que calcula as raízes dessa equação.
									</td>
								</tr>
								<tr className='border-b'>
									<td className='border-r px-4 py-2'>
										<strong>Abstração</strong>
									</td>
									<td className='border-r px-4 py-2'>
										Usar &apos;x&apos; para representar um número.
									</td>
									<td className='px-4 py-2'>
										Criar uma função <code>calcular_area()</code> sem pensar nos
										detalhes internos.
									</td>
								</tr>
								<tr>
									<td className='border-r px-4 py-2'>
										<strong>Precisão</strong>
									</td>
									<td className='border-r px-4 py-2'>
										Um teorema deve ser exato e irrefutável.
									</td>
									<td className='px-4 py-2'>
										Uma linha de código deve ser sintaticamente perfeita.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p>
						Python permite-nos pegar nessas ideias matemáticas e convertê-las em
						instruções que um computador entende, abrindo um mundo de
						possibilidades.
					</p>
				</CardContent>
			</Card>

			{/* Segment 3 & 4: Setup and First Spell */}
			<div className='grid gap-8 lg:grid-cols-2'>
				<div className='space-y-8'>
					<Card className='hover:border-primary/50 transition-all'>
						<CardHeader className='flex-row items-center gap-4'>
							<div className='p-3 rounded-full bg-primary/10'>
								<Laptop className='h-6 w-6 text-primary' />
							</div>
							<CardTitle className='font-headline text-2xl'>
								A Preparar o Laboratório Digital
							</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4 text-muted-foreground'>
							<p>
								O ideal é ter o Python instalado localmente. Abra o seu terminal
								e verifique se já o tem:
							</p>
							<CodeBlock
								language='bash'
								code={`# No Windows, pode precisar de usar 'py -3' ou 'python'
python3 --version`}
							/>
							<p>
								Se vir uma versão 3.x, excelente! Se não, vá a{" "}
								<strong>python.org</strong>, descarregue o instalador e, durante
								a instalação no Windows, marque a caixa{" "}
								<strong>&quot;Add Python to PATH&quot;</strong>.
							</p>
						</CardContent>
					</Card>

					<Card className='hover:border-primary/50 transition-all'>
						<CardHeader className='flex-row items-center gap-4'>
							<div className='p-3 rounded-full bg-primary/10'>
								<FlaskConical className='h-6 w-6 text-primary' />
							</div>
							<CardTitle className='font-headline text-2xl'>
								O Nosso Primeiro &quot;Feitiço&quot;
							</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4 text-muted-foreground'>
							<p>
								O primeiro passo em programação é sempre saudar o mundo. Em
								Python, é elegantemente simple:
							</p>
							<CodeBlock
								language='python'
								code={`print("Olá, Universo Matemático!")`}
							/>
							<p>
								Compare isto com a complexidade de outros linguagens para ver a
								beleza da simplicidade do Python:
							</p>
							<h4 className='font-semibold text-foreground'>Java</h4>
							<CodeBlock
								language='java'
								code={`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Olá, Universo Matemático!");
    }
}`}
							/>
							<h4 className='font-semibold text-foreground'>C++</h4>
							<CodeBlock
								language='cpp'
								code={`#include <iostream>

int main() {
    std::cout << "Olá, Universo Matemático!" << std::endl;
    return 0;
}`}
							/>
						</CardContent>
					</Card>
				</div>

				<div className='space-y-8'>
					<Card className='hover:border-primary/50 transition-all'>
						<CardHeader className='flex-row items-center gap-4'>
							<div className='p-3 rounded-full bg-primary/10'>
								<Terminal className='h-6 w-6 text-primary' />
							</div>
							<CardTitle className='font-headline text-2xl'>
								O Ambiente de Trabalho: VS Code
							</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4 text-muted-foreground'>
							<p>
								O Visual Studio Code é um editor de código leve e poderoso. Para
								o preparar para Python, vai precisar da extensão oficial:
							</p>
							<ol className='list-decimal space-y-2 pl-5'>
								<li>Vá ao separador de Extensões (Ctrl+Shift+X).</li>
								<li>
									Procure por <strong>&quot;Python&quot;</strong> da Microsoft e
									instale-a.
								</li>
								<li>
									Esta extensão inclui o <strong>Pylance</strong> para
									autocompletar e análise de código de alta qualidade.
								</li>
							</ol>
							<p>
								Para manter o seu código limpo e consistente, recomendo o
								formatador <strong>Black Formatter</strong>. Pode instalá-lo
								procurando nas extensões de VSCode:
							</p>
							<p>
								Depois, configure o VS Code para o usar. Vai ãs configurações e
								coloque o seguinte:
							</p>
							<CodeBlock
								language='json'
								code={`{
    "[python]": {
		"editor.defaultFormatter": "ms-python.black-formatter",
		"editor.formatOnSave": true,
		"editor.codeActionsOnSave": {
			"source.organizeImports.ruff": "explicit"
		}
}`}
							/>
						</CardContent>
					</Card>

					<Card className='hover:border-primary/50 transition-all'>
						<CardHeader>
							<CardTitle className='font-headline text-2xl'>
								Os Blocos de Construção
							</CardTitle>
							<CardDescription>Tipos de Dados e Operadores</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4 text-muted-foreground'>
							<p>O Python entende diferentes tipos de informação:</p>
							<ul className='list-disc space-y-2 pl-5'>
								<li>
									<strong>Números:</strong> Inteiros (<code>int</code>, ex: 5) e
									decimais (<code>float</code>, ex: 3.1416).
								</li>
								<li>
									<strong>Texto:</strong> Cadeias de caracteres (
									<code>str</code>, ex: &quot;Olá&quot;).
								</li>
								<li>
									<strong>Booleanos:</strong> Os pilares da lógica (
									<code>True</code> e <code>False</code>).
								</li>
							</ul>
							<p>E, claro, podemos operar com eles:</p>
							<CodeBlock
								language='python'
								code={`# Operadores Aritméticos
suma = 10 + 5       # 15
potencia = 2 ** 3   # 8 (2 elevado a 3)

# Operadores de Comparação (devolvem True ou False)
es_igual = (5 == 5)   # True
es_mayor = (10 > 20)  # False

# Operadores Lógicos
verdadero_y_falso = (True and False) # False
verdadero_o_falso = (True or False)  # True`}
							/>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Segment 5: Summary and Challenge */}
			<Card className='hover:border-primary/50 transition-all border-2 border-primary/20'>
				<CardHeader className='flex-row items-center gap-4'>
					<div className='p-3 rounded-full bg-primary/10'>
						<Rocket className='h-6 w-6 text-primary' />
					</div>
					<CardTitle className='font-headline text-2xl'>
						Resumo e o Teu Primeiro Desafio
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					<p className='font-semibold text-foreground'>
						Felicidades! Em apenas 90 minutos, conseguimos muito:
					</p>
					<ul className='list-disc space-y-2 pl-5 text-muted-foreground'>
						<li>
							✅ Entendemos por que o{" "}
							<strong>Python é a ferramenta ideal</strong> para a matemática.
						</li>
						<li>
							✅ Descobrimos a <strong>profunda ligação lógica</strong> entre
							programar e resolver problemas matemáticos.
						</li>
						<li>
							✅ Preparámos o nosso ambiente de trabalho com o{" "}
							<strong>VS Code</strong>.
						</li>
						<li>
							✅ Escrevemos o nosso <strong>primeiro código</strong> e
							explorámos os tipos de dados e operadores básicos.
						</li>
					</ul>
					<p className='font-semibold text-foreground pt-4'>
						A sua primeira missão: A Área de um Círculo
					</p>
					<ol className='list-decimal space-y-2 pl-5 text-muted-foreground'>
						<li>Instale o Python 3 e o VS Code no seu computador.</li>
						<li>
							Crie um novo ficheiro chamado <code>calculo_area.py</code>.
						</li>
						<li>
							Escreva um programa que defina uma variável <code>radio</code>{" "}
							(ex: 5), calcule a área do círculo (A = πr²) e imprima o resultado
							de forma clara.
						</li>
					</ol>
					<Callout
						icon={<StarIcon className='h-5 w-5' />}
						title='Dica Pro'
						description='Quer torná-lo mais interativo? Investigue a função input() para pedir ao utilizador que introduza o valor do raio.'
						variant='info'
					/>
				</CardContent>
			</Card>
		</div>
	);
}
