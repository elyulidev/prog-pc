import { CodeBlock } from "@/components/code-block";
import { Callout } from "@/components/lecture/callout";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Book,
	Calculator,
	Hash,
	Library,
	List,
	Orbit,
	Rocket,
	Shapes,
	StarIcon,
	Variable,
} from "lucide-react";

export default function LecturePage() {
	return (
		<div className='space-y-12'>
			{/* Conference Header */}
			<header className='rounded-lg bg-primary/5 p-8'>
				<p className='text-lg font-semibold text-primary'>
					Módulo I: Fundamentos de Python e Lógica Algorítmica
				</p>
				<h1 className='text-4xl font-bold tracking-tight lg:text-5xl font-headline'>
					Conferência 2: Os Blocos de Construção do Código
				</h1>
				<p className='mt-4 text-lg text-muted-foreground max-w-3xl'>
					De números e texto a estruturas complexas, vamos explorar as
					ferramentas fundamentais que o Python nos oferece para armazenar,
					manipular e organizar informação.
				</p>
			</header>

			{/* Segment 1: Variables and Dynamic Typing */}
			<Card className='hover:border-primary/50 transition-all'>
				<CardHeader className='flex-row items-center gap-4'>
					<div className='p-3 rounded-full bg-primary/10'>
						<Variable className='h-6 w-6 text-primary' />
					</div>
					<div>
						<CardTitle className='font-headline text-2xl'>
							As Caixas Mágicas de Python: Variáveis e Tipagem Dinâmica
						</CardTitle>
						<CardDescription>
							O Conceito de Variável: Caixas com Etiquetas
						</CardDescription>
					</div>
				</CardHeader>
				<CardContent className='space-y-4'>
					<p className='text-muted-foreground'>
						Uma variável é um contentor com um nome que armazena informação. Em
						Python, criar uma é tão simples como dar-lhe um nome e usar o sinal
						de igual (<code>=</code>).
					</p>
					<CodeBlock
						language='python'
						code={`# 'n' é a etiqueta da nossa caixa, e 13 é o que guardamos dentro.
n = 13
nombre_usuario = "Alex"      # Texto (string)
precio_producto = 29.99     # Um número com decimais (float)
sesion_activa = True        # Um valor de verdade/falsidade (booleano)`}
					/>
					<h4 className='font-semibold text-foreground pt-4'>
						Atalhos Eficientes: Operadores de Atribuição Combinados
					</h4>
					<p className='text-muted-foreground'>
						Para modificar um valor existente, o Python oferece atalhos
						elegantes:
					</p>
					<CodeBlock
						language='python'
						code={`puntos = 5
puntos += 3  # Exatamente o mesmo que: puntos = puntos + 3. Agora 'puntos' vale 8.
puntos *= 2  # O mesmo que: puntos = puntos * 2. Agora 'puntos' vale 16.`}
					/>
					<h4 className='font-semibold text-foreground pt-4'>
						A Magia da Tipagem Dinâmica
					</h4>
					<p className='text-muted-foreground'>
						Ao contrário de outras linguagens, as &quot;caixas&quot; do Python
						podem mudar o tipo de conteúdo que guardam em qualquer momento.
					</p>
					<CodeBlock
						language='python'
						code={`# No início, 'x' guarda um número inteiro.
x = 10
print(type(x))  # Python diz-nos: <class 'int'>

# Agora, guarda texto na mesma caixa sem problemas.
x = "Agora sou um texto!"
print(type(x))  # Python diz-nos: <class 'str'>`}
					/>
				</CardContent>
			</Card>

			{/* Segment 2: The Universe of Numbers */}
			<Card className='hover:border-primary/50 transition-all'>
				<CardHeader className='flex-row items-center gap-4'>
					<div className='p-3 rounded-full bg-primary/10'>
						<Hash className='h-6 w-6 text-primary' />
					</div>
					<CardTitle className='font-headline text-2xl'>
						O Universo dos Números em Python
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='grid gap-8 md:grid-cols-2'>
						<div className='space-y-4'>
							<h4 className='font-semibold text-foreground'>
								Inteiros (int) e Booleanos (bool)
							</h4>
							<p className='text-muted-foreground'>
								<strong>Inteiros:</strong> São os números completos, positivos
								ou negativos. Pode usar <code>_</code> para facilitar a leitura.
							</p>
							<CodeBlock
								language='python'
								code={`poblacion_mundial = 8_000_000_000`}
							/>
							<p className='text-muted-foreground'>
								<strong>Booleanos:</strong> Só têm dois valores:{" "}
								<code>True</code> (1) ou <code>False</code> (0).
							</p>
							<CodeBlock language='python' code={`es_mayor_de_edad = True`} />
						</div>
						<div className='space-y-4'>
							<h4 className='font-semibold text-foreground'>
								De Ponto Flutuante (float)
							</h4>
							<p className='text-muted-foreground'>
								Os <code>float</code> são os números que têm uma parte decimal.
							</p>
							<CodeBlock language='python' code={`pi = 3.14159`} />
						</div>
					</div>
					<div className='pt-6'>
						<h4 className='font-semibold text-foreground'>
							O Plano Complexo (complex): Para Lá da Reta Numérica
						</h4>
						<p className='text-muted-foreground'>
							Para resolver{" "}
							<span
								dangerouslySetInnerHTML={{
									__html: `<math xmlns='http://www.w3.org/1998/Math/MathML'><msqrt><mrow><mo>-</mo><mn>1</mn></mrow></msqrt></math>`,
								}}
							/>
							, os matemáticos inventaram uma nova dimensão: o eixo imaginário.
							Um número complexo é uma coordenada neste novo plano (
							<code>a + bj</code>).
						</p>
						<CodeBlock
							language='python'
							code={`# z1 é: "3 passos para a direita, 4 passos para cima"
z1 = 3 + 4j
# z2 é: "2 passos para a direita, 2 passos para baixo"
z2 = 2 - 2j`}
						/>
					</div>
				</CardContent>
			</Card>

			{/* Segment 3 & 4: Operators and Complex Plane */}
			<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
				<Card className='hover:border-primary/50 transition-all'>
					<CardHeader className='flex-row items-center gap-4'>
						<div className='p-3 rounded-full bg-primary/10'>
							<Calculator className='h-6 w-6 text-primary' />
						</div>
						<CardTitle className='font-headline text-2xl'>
							As Ferramentas do Matemático
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<p className='text-muted-foreground'>
							O Python inclui um arsenal completo de operadores aritméticos e
							segue a hierarquia <strong>PEMDAS</strong> (Parênteses, Expoentes,
							Multiplicação/Divisão, Adição/Subtração).
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full text-sm'>
								<thead>
									<tr className='border-b'>
										<th className='px-2 py-2 text-left font-semibold'>
											Operador
										</th>
										<th className='px-2 py-2 text-left font-semibold'>
											Operação
										</th>
										<th className='px-2 py-2 text-left font-semibold'>
											Exemplo
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className='border-b'>
										<td className='border-r px-2 py-1'>
											<code>+</code>
										</td>
										<td className='border-r px-2 py-1'>Adição</td>
										<td className='px-2 py-1'>
											<code>5 + 3</code> -&gt; 8
										</td>
									</tr>
									<tr className='border-b'>
										<td className='border-r px-2 py-1'>
											<code>-</code>
										</td>
										<td className='border-r px-2 py-1'>Subtração</td>
										<td className='px-2 py-1'>
											<code>10 - 4</code> -&gt; 6
										</td>
									</tr>
									<tr className='border-b'>
										<td className='border-r px-2 py-1'>
											<code>*</code>
										</td>
										<td className='border-r px-2 py-1'>Multiplicação</td>
										<td className='px-2 py-1'>
											<code>3 * 4</code> -&gt; 12
										</td>
									</tr>
									<tr className='border-b'>
										<td className='border-r px-2 py-1'>
											<code>/</code>
										</td>
										<td className='border-r px-2 py-1'>Divisão</td>
										<td className='px-2 py-1'>
											<code>7 / 2</code> -&gt; 3.5
										</td>
									</tr>
									<tr className='border-b'>
										<td className='border-r px-2 py-1'>
											<code>{"//"}</code>
										</td>
										<td className='border-r px-2 py-1'>Divisão inteira</td>
										<td className='px-2 py-1'>
											<code>{"7 // 2"}</code> -&gt; 3
										</td>
									</tr>
									<tr className='border-b'>
										<td className='border-r px-2 py-1'>
											<code>%</code>
										</td>
										<td className='border-r px-2 py-1'>Módulo (resto)</td>
										<td className='px-2 py-1'>
											<code>7 % 2</code> -&gt; 1
										</td>
									</tr>
									<tr>
										<td className='border-r px-2 py-1'>
											<code>**</code>
										</td>
										<td className='border-r px-2 py-1'>Potenciação</td>
										<td className='px-2 py-1'>
											<code>2 ** 3</code> -&gt; 8
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<p className='text-muted-foreground pt-4'>
							A radiciação é feita com potências fracionárias:
						</p>
						<CodeBlock
							language='python'
							code={`raiz_quadrada = 16 ** 0.5   # Resultado: 4.0`}
						/>
					</CardContent>
				</Card>

				<Card className='hover:border-primary/50 transition-all'>
					<CardHeader className='flex-row items-center gap-4'>
						<div className='p-3 rounded-full bg-primary/10'>
							<Orbit className='h-6 w-6 text-primary' />
						</div>
						<CardTitle className='font-headline text-2xl'>
							A Navegar no Plano Complexo
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<p className='text-muted-foreground'>
							Somar e subtrair números complexos é intuitivo, mas o Python
							também lida com operações mais difíceis sem esforço.
						</p>
						<CodeBlock
							language='python'
							code={`z1 = 3 + 4j
z2 = 2 - 2j
suma = z1 + z2   # Resultado: (5+2j)`}
						/>
						<p className='text-muted-foreground'>
							Podemos aceder facilmente às suas propriedades:
						</p>
						<CodeBlock
							language='python'
							code={`z = 3 + 4j
print(z.real)         # Resultado: 3.0
print(z.imag)         # Resultado: 4.0
print(z.conjugate())  # Resultado: (3-4j)
print(abs(z))         # Módulo ou magnitude: 5.0`}
						/>
					</CardContent>
				</Card>
			</div>

			{/* Segment 5: Collections */}
			<Card className='hover:border-primary/50 transition-all'>
				<CardHeader className='flex-row items-center gap-4'>
					<div className='p-3 rounded-full bg-primary/10'>
						<Library className='h-6 w-6 text-primary' />
					</div>
					<CardTitle className='font-headline text-2xl'>
						A Organizar os Nossos Dados: Coleções
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='grid gap-8 md:grid-cols-3'>
						<div className='space-y-2'>
							<div className='flex items-center gap-3'>
								<List className='h-5 w-5 text-primary' />
								<h4 className='font-semibold text-foreground'>
									Listas: Um Comboio Flexível
								</h4>
							</div>
							<p className='text-muted-foreground text-sm'>
								Coleções ordenadas e <strong>mutáveis</strong>. Pode adicionar,
								remover ou alterar elementos.
							</p>
							<CodeBlock
								language='python'
								code={`numeros = [1, 2, 3]
numeros.append(4)
numeros[0] = 100`}
							/>
						</div>
						<div className='space-y-2'>
							<div className='flex items-center gap-3'>
								<Shapes className='h-5 w-5 text-primary' />
								<h4 className='font-semibold text-foreground'>
									Tuplas: Uma Caixa Forte
								</h4>
							</div>
							<p className='text-muted-foreground text-sm'>
								Coleções ordenadas e <strong>imutáveis</strong>. Uma vez
								criadas, não podem ser alteradas.
							</p>
							<CodeBlock
								language='python'
								code={`coordenadas = (40.7, -74.0)
# coordenadas[0] = 10 # ERRO!`}
							/>
						</div>
						<div className='space-y-2'>
							<div className='flex items-center gap-3'>
								<Book className='h-5 w-5 text-primary' />
								<h4 className='font-semibold text-foreground'>
									Dicionários: A Agenda Perfeita
								</h4>
							</div>
							<p className='text-muted-foreground text-sm'>
								Coleções de pares <strong>chave-valor</strong>, organizadas por
								nome, não por posição.
							</p>
							<CodeBlock
								language='python'
								code={`estudante = {"nome": "Maria"}
print(estudante["nome"])`}
							/>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Segment 6: Conclusion and Challenge */}
			<Card className='hover:border-primary/50 transition-all border-2 border-primary/20'>
				<CardHeader className='flex-row items-center gap-4'>
					<div className='p-3 rounded-full bg-primary/10'>
						<Rocket className='h-6 w-6 text-primary' />
					</div>
					<CardTitle className='font-headline text-2xl'>
						Conclusão e o Teu Próximo Desafio
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					<p className='font-semibold text-foreground'>
						Hoje construímos uma base sólida para trabalhar com dados. Agora é a
						sua vez de praticar com uma &quot;Mini Calculadora Científica&quot;.
					</p>
					<ol className='list-decimal space-y-2 pl-5 text-muted-foreground'>
						<li>
							Crie um programa que defina dois números <code>a</code> e{" "}
							<code>b</code> (podem ser <code>int</code>, <code>float</code> ou{" "}
							<code>complex</code>).
						</li>
						<li>
							Calcule e mostre a soma, subtração, multiplicação, divisão e a
							potência de{" "}
							<span
								dangerouslySetInnerHTML={{
									__html: `<math xmlns='http://www.w3.org/1998/Math/MathML'><msup><mtext>a</mtext><mtext>b</mtext></msup></math>`,
								}}
							/>
						</li>
						<li>
							Se forem complexos, mostre a sua parte real, imaginária, conjugado
							e o seu módulo.
						</li>
					</ol>
					<Callout
						icon={<StarIcon className='h-5 w-5' />}
						title='Dica Pro'
						description='Investigue a função input() para que o programa peça os números ao utilizador e seja interativo.'
						variant='info'
					/>
				</CardContent>
			</Card>
		</div>
	);
}
