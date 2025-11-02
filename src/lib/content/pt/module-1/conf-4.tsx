import React from "react";
import { CodeBlock } from "@/components/code-block";
import { Callout } from "@/components/lecture/callout";
import { LectureSection } from "@/components/lecture/lecture-section";
import { Task } from "@/components/lecture/task";
import {
	Package,
	FileCode,
	Clock,
	Users,
	User,
	Calculator,
	Pi,
	Hash,
	BadgePlus,
	Divide,
	Square,
	ArrowBigRight,
	History,
	BookOpen,
} from "lucide-react";
import { FeatureCard } from "@/components/lecture/featured-card";

const LecturePage = () => {
	return (
		<main className='space-y-16'>
			{/* Conference Header */}
			<header className='relative overflow-hidden rounded-lg bg-primary/5 p-8'>
				<div className='relative z-10'>
					<p className='mb-2 font-semibold text-primary'>
						Módulo I: Fundamentos de Python e Lógica Algorítmica
					</p>
					<h1 className='text-4xl font-bold tracking-tight lg:text-5xl font-headline'>
						Conferência 4: O Módulo Math em Python: Computação Numérica e
						Matemática
					</h1>
					<p className='mt-4 max-w-3xl text-lg text-muted-foreground'>
						Nesta conferência, vamos explorar o poderoso módulo math do Python,
						uma ferramenta essencial para cálculos matemáticos e computação
						numérica. Desde operações básicas até funções trigonométricas
						avançadas.
					</p>
					<div className='mt-6 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground'>
						<div className='flex items-center gap-2'>
							<User className='h-4 w-4' />
							<span>
								<strong>Palestrante:</strong> Project IDX
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<Clock className='h-4 w-4' />
							<span>
								<strong>Duração:</strong> 90 Minutos
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<Users className='h-4 w-4' />
							<span>
								<strong>Público-Alvo:</strong> Programadores Python
							</span>
						</div>
					</div>
				</div>
			</header>

			{/* Block 1: Introduction */}
			<LectureSection
				title='Bloco 1: Introdução ao Módulo Math'
				subtitle='Fundamentos da Computação Matemática em Python'
			>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='prose prose-lg max-w-none space-y-4 text-muted-foreground'>
						<p>
							O módulo <code>math</code> é uma parte fundamental da biblioteca
							padrão do Python, fornecendo uma ampla gama de funções e
							constantes matemáticas essenciais para computação científica,
							análise de dados e engenharia.
						</p>
						<p>
							A beleza deste módulo está na sua simplicidade e eficiência. Não é
							necessário instalação adicional - ele vem embutido no Python!
						</p>
					</div>
					<div className='rounded-lg border bg-card/50 p-6'>
						<h4 className='mb-4 flex items-center gap-2 text-xl font-bold font-headline'>
							<BookOpen className='text-primary' />
							Agenda da Conferência
						</h4>
						<ul className='space-y-3'>
							<li className='flex items-center gap-3'>
								<Package className='h-5 w-5 text-primary' />
								<span>Importação e Uso Básico</span>
							</li>
							<li className='flex items-center gap-3'>
								<Calculator className='h-5 w-5 text-primary' />
								<span>Funções Aritméticas e Constantes</span>
							</li>
							<li className='flex items-center gap-3'>
								<Pi className='h-5 w-5 text-primary' />
								<span>Trigonometria e Constantes Matemáticas</span>
							</li>
							<li className='flex items-center gap-3'>
								<Hash className='h-5 w-5 text-primary' />
								<span>Funções Avançadas e Aplicações</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-8'>
					<CodeBlock
						language='python'
						code={`# Importando o módulo math
import math

# Exemplos básicos
print(math.sqrt(25))    # Raiz quadrada: 5.0
print(math.pi)          # Constante π: 3.141592653589793
print(math.pow(2, 3))   # Potência: 8.0`}
					/>
				</div>
			</LectureSection>

			{/* Block 2: Basic Functions */}
			<LectureSection
				title='Bloco 2: Funções Básicas e Constantes'
				subtitle='Operações Matemáticas Fundamentais'
			>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
					<FeatureCard
						icon={<Calculator size={24} />}
						title='Funções Aritméticas'
					>
						<p>
							O módulo math fornece funções para operações matemáticas básicas
							mas essenciais:
						</p>
						<ul className='list-disc pl-6 mt-2'>
							<li>
								<code>ceil(x)</code>: Arredonda para cima
							</li>
							<li>
								<code>floor(x)</code>: Arredonda para baixo
							</li>
							<li>
								<code>fabs(x)</code>: Valor absoluto
							</li>
							<li>
								<code>factorial(x)</code>: Fatorial de x
							</li>
						</ul>
					</FeatureCard>

					<FeatureCard icon={<Pi size={24} />} title='Constantes Matemáticas'>
						<p>Constantes matemáticas precisas e prontamente disponíveis:</p>
						<ul className='list-disc pl-6 mt-2'>
							<li>
								<code>math.pi</code>: π (3.141592...)
							</li>
							<li>
								<code>math.e</code>: e (2.718281...)
							</li>
							<li>
								<code>math.inf</code>: Infinito
							</li>
							<li>
								<code>math.nan</code>: Not a Number
							</li>
						</ul>
					</FeatureCard>
				</div>

				<div className='mt-6'>
					<CodeBlock
						language='python'
						code={`import math

# Exemplos de arredondamento
print(math.ceil(4.3))   # 5
print(math.floor(4.7))  # 4

# Fatorial e valor absoluto
print(math.factorial(5))  # 120
print(math.fabs(-7.8))   # 7.8

# Usando constantes
radius = 5
area = math.pi * math.pow(radius, 2)
print(f"Área do círculo: {area:.2f}")`}
					/>
				</div>
			</LectureSection>

			{/* Block 3: Trigonometric Functions */}
			<LectureSection
				title='Bloco 3: Funções Trigonométricas'
				subtitle='Trigonometria em Python'
			>
				<div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
					<FeatureCard icon={<Hash size={24} />} title='Funções Básicas'>
						<ul className='list-disc pl-6'>
							<li>
								<code>sin(x)</code>
							</li>
							<li>
								<code>cos(x)</code>
							</li>
							<li>
								<code>tan(x)</code>
							</li>
						</ul>
					</FeatureCard>

					<FeatureCard
						icon={<ArrowBigRight size={24} />}
						title='Funções Inversas'
					>
						<ul className='list-disc pl-6'>
							<li>
								<code>asin(x)</code>
							</li>
							<li>
								<code>acos(x)</code>
							</li>
							<li>
								<code>atan(x)</code>
							</li>
						</ul>
					</FeatureCard>

					<FeatureCard
						icon={<History size={24} />}
						title='Funções Hiperbólicas'
					>
						<ul className='list-disc pl-6'>
							<li>
								<code>sinh(x)</code>
							</li>
							<li>
								<code>cosh(x)</code>
							</li>
							<li>
								<code>tanh(x)</code>
							</li>
						</ul>
					</FeatureCard>
				</div>

				<div className='mt-6'>
					<CodeBlock
						language='python'
						code={`import math

# Converter graus para radianos
angulo_graus = 45
angulo_rad = math.radians(angulo_graus)

# Calcular seno, cosseno e tangente
print(f"sin({angulo_graus}°) = {math.sin(angulo_rad):.4f}")
print(f"cos({angulo_graus}°) = {math.cos(angulo_rad):.4f}")
print(f"tan({angulo_graus}°) = {math.tan(angulo_rad):.4f}")

# Converter radianos para graus
print(f"{math.pi} radianos = {math.degrees(math.pi)}°")`}
					/>
				</div>

				<Callout title='Dica Importante' type='info'>
					<p>
						Lembre-se que as funções trigonométricas em Python trabalham com
						radianos, não graus! Use <code>math.radians()</code> para converter
						graus em radianos e <code>math.degrees()</code> para o contrário.
					</p>
				</Callout>
			</LectureSection>

			{/* Block 4: Advanced Functions */}
			<LectureSection
				title='Bloco 4: Funções Avançadas'
				subtitle='Logaritmos, Exponenciais e Mais'
			>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
					<FeatureCard
						icon={<BadgePlus size={24} />}
						title='Funções Exponenciais'
					>
						<ul className='list-disc pl-6'>
							<li>
								<code>exp(x)</code>: e^x
							</li>
							<li>
								<code>expm1(x)</code>: e^x - 1
							</li>
							<li>
								<code>pow(x, y)</code>: x^y
							</li>
						</ul>
					</FeatureCard>

					<FeatureCard icon={<Divide size={24} />} title='Funções Logarítmicas'>
						<ul className='list-disc pl-6'>
							<li>
								<code>log(x[, base])</code>
							</li>
							<li>
								<code>log2(x)</code>
							</li>
							<li>
								<code>log10(x)</code>
							</li>
						</ul>
					</FeatureCard>

					<FeatureCard
						icon={<Square size={24} />}
						title='Funções de Análise'
						className='md:col-span-2'
					>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<h4 className='font-semibold mb-2'>Análise Numérica:</h4>
								<ul className='list-disc pl-6'>
									<li>
										<code>sqrt(x)</code>: Raiz quadrada
									</li>
									<li>
										<code>modf(x)</code>: Parte fracionária e inteira
									</li>
									<li>
										<code>isfinite(x)</code>: Verifica se é finito
									</li>
								</ul>
							</div>
							<div>
								<h4 className='font-semibold mb-2'>Funções Especiais:</h4>
								<ul className='list-disc pl-6'>
									<li>
										<code>gamma(x)</code>: Função Gamma
									</li>
									<li>
										<code>erf(x)</code>: Função erro
									</li>
									<li>
										<code>lgamma(x)</code>: Log da função Gamma
									</li>
								</ul>
							</div>
						</div>
					</FeatureCard>
				</div>

				<div className='mt-6'>
					<CodeBlock
						language='python'
						code={`import math

# Exemplos de logaritmos
print(math.log(100, 10))  # log base 10 de 100 = 2.0
print(math.log2(8))       # log base 2 de 8 = 3.0
print(math.log10(1000))   # log base 10 de 1000 = 3.0

# Exemplos de exponenciais
print(math.exp(2))        # e^2 ≈ 7.389
print(math.pow(2, 3))     # 2^3 = 8.0

# Análise numérica
print(math.modf(3.14))    # (0.14, 3.0)
print(math.isfinite(math.inf))  # False`}
					/>
				</div>
			</LectureSection>

			{/* Block 5: Practical Applications */}
			<LectureSection
				title='Bloco 5: Aplicações Práticas'
				subtitle='Usando o módulo math em situações reais'
			>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='rounded-lg border bg-card/50 p-4'>
						<h4 className='mb-2 flex items-center gap-2 font-mono text-sm font-semibold'>
							<FileCode className='text-primary' />
							calculo_financeiro.py
						</h4>
						<CodeBlock
							language='python'
							code={`import math

def calcular_juros_compostos(principal, taxa, tempo):
    """
    Calcula juros compostos
    principal: valor inicial
    taxa: taxa de juros anual (em decimal)
    tempo: tempo em anos
    """
    return principal * math.exp(taxa * tempo)

# Exemplo de uso
investimento = 1000  # 1000€ inicial
taxa_anual = 0.05   # 5% ao ano
anos = 10           # por 10 anos

valor_final = calcular_juros_compostos(investimento, taxa_anual, anos)
print(f"Valor final: {valor_final:.2f}€")`}
						/>
					</div>

					<div className='rounded-lg border bg-card/50 p-4'>
						<h4 className='mb-2 flex items-center gap-2 font-mono text-sm font-semibold'>
							<FileCode className='text-primary' />
							geometria.py
						</h4>
						<CodeBlock
							language='python'
							code={`import math

def distancia_pontos(x1, y1, x2, y2):
    """
    Calcula a distância entre dois pontos
    usando o teorema de Pitágoras
    """
    return math.sqrt(math.pow(x2 - x1, 2) +
                    math.pow(y2 - y1, 2))

def area_setor_circular(raio, angulo_graus):
    """
    Calcula a área de um setor circular
    raio: raio do círculo
    angulo_graus: ângulo em graus
    """
    angulo_rad = math.radians(angulo_graus)
    return (raio * raio * angulo_rad) / 2

# Exemplos
print(distancia_pontos(0, 0, 3, 4))  # 5.0
print(area_setor_circular(5, 90))     # ≈ 19.63`}
						/>
					</div>
				</div>
			</LectureSection>

			{/* Block 6: Exercise and Conclusion */}
			<LectureSection
				title='Bloco 6: Exercício Prático e Conclusão'
				subtitle='Ponha em prática o que aprendeu'
			>
				<Task title='Exercício: Calculadora Científica'>
					<p className='font-semibold text-foreground'>
						✅ Crie uma calculadora científica simples que utilize as funções do
						módulo math para realizar cálculos avançados.
					</p>
					<ol className='list-decimal space-y-2 pl-5 text-muted-foreground'>
						<li>
							<strong>Funções a Implementar:</strong>
							<ul className='list-disc space-y-2 pl-5'>
								<li>Cálculo de raiz n-ésima</li>
								<li>Conversão entre graus e radianos</li>
								<li>Funções trigonométricas</li>
								<li>Logaritmos em diferentes bases</li>
							</ul>
						</li>
						<li>
							<strong>Interface:</strong>
							<ul className='list-disc space-y-2 pl-5'>
								<li>Menu de opções para o usuário</li>
								<li>Validação de entrada</li>
								<li>Tratamento de erros para entradas inválidas</li>
							</ul>
						</li>
					</ol>
				</Task>

				<div className='mt-8 rounded-lg border bg-card/50 p-6'>
					<h4 className='mb-4 text-xl font-bold font-headline'>
						Pontos-Chave:
					</h4>
					<ul className='space-y-2 text-muted-foreground'>
						<li>
							• O módulo math é fundamental para computação numérica em Python
						</li>
						<li>• Fornece funções matemáticas precisas e otimizadas</li>
						<li>• Inclui constantes matemáticas importantes como π e e</li>
						<li>• É parte da biblioteca padrão - não requer instalação</li>
						<li>• Essencial para cálculos científicos e de engenharia</li>
					</ul>
				</div>
			</LectureSection>
		</main>
	);
};

export default LecturePage;
