import { CodeBlock } from "@/components/code-block";
import { Callout } from "@/components/lecture/callout";
import { LectureSection } from "@/components/lecture/lecture-section";
import { Task } from "@/components/lecture/task";
import {
	GitCommit,
	GitCompare,
	GitFork,
	GitMerge,
	RotateCcw,
	FunctionSquare,
	Blocks,
	Package,
	Box,
	ShieldCheck,
	Repeat,
	SkipForward,
	StopCircle,
	FileCode,
	PlayCircle,
	BookOpen,
	Clock,
	Users,
	User,
} from "lucide-react";
import React from "react";

const FeatureCard = ({
	icon,
	title,
	children,
	className,
}: {
	icon: React.ReactNode;
	title: string;
	children: React.ReactNode;
	className?: string;
}) => (
	<div
		className={`rounded-lg border bg-card/50 p-6 backdrop-blur-sm ${className} overflow-auto`}
	>
		<div className='flex items-start gap-4'>
			<div className='rounded-lg bg-primary/10 p-2 text-primary'>{icon}</div>
			<div>
				<h3 className='text-xl font-bold font-headline'>{title}</h3>
				<div className='prose prose-lg max-w-none text-muted-foreground p-3'>
					{children}
				</div>
			</div>
		</div>
	</div>
);

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
						Conferência 3: Estruturas de Controlo de Fluxo e Modularidade
					</h1>
					<p className='mt-4 max-w-3xl text-lg text-muted-foreground'>
						Nesta conferência, vamos mergulhar nos pilares da programação:
						Estruturas de Controlo de Fluxo e Modularidade. Aprenda a criar
						programas que tomam decisões, repetem tarefas e são organizados de
						forma eficiente.
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
								<strong>Público-Alvo:</strong> Iniciantes em Programação
							</span>
						</div>
					</div>
				</div>
			</header>

			{/* Block 1: Introduction */}
			<LectureSection
				title='Bloco 1: Introdução'
				subtitle='Além do caminho linear'
			>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='prose prose-lg max-w-none space-y-4 text-muted-foreground'>
						<p>
							Olá a todos! 👋 Bem-vindos à nossa terceira conferência. Hoje,
							vamos mergulhar em dois dos pilares mais fundamentais da
							programação: Estruturas de Controlo de Fluxo e Modularidade.
						</p>
						<p>
							Até agora, o vosso código executa de cima para baixo. Mas o mundo
							real não é linear. Precisamos que os nossos programas tomem
							decisões, repitam tarefas e sejam organizados. É isso que vamos
							aprender hoje.
						</p>
						<p>
							Imaginem o vosso código como uma receita de bolo 🍰. Seguir
							linearmente é fácil, mas limitado. E se a receita dissesse: &quot;
							<em>Se for um bolo de chocolate, adicionar cacau</em>&quot;? Isso
							é uma <strong>decisão</strong>. Ou: &quot;
							<em>
								Enquanto a massa não estiver homogénea, continuar a misturar
							</em>
							&quot;? Isso é uma <strong>repetição</strong>.
						</p>
					</div>
					<div className='rounded-lg border bg-card/50 p-6'>
						<h4 className='mb-4 flex items-center gap-2 text-xl font-bold font-headline'>
							<BookOpen className='text-primary' />
							Agenda da Conferência
						</h4>
						<ul className='space-y-3'>
							<li className='flex items-center gap-3'>
								<GitCompare className='h-5 w-5 text-primary' />
								<span>Estruturas de Decisão (if, else, elif)</span>
							</li>
							<li className='flex items-center gap-3'>
								<RotateCcw className='h-5 w-5 text-primary' />
								<span>Estruturas de Repetição (while, for)</span>
							</li>
							<li className='flex items-center gap-3'>
								<ShieldCheck className='h-5 w-5 text-primary' />
								<span>Gestão de Erros (try-except)</span>
							</li>
							<li className='flex items-center gap-3'>
								<FunctionSquare className='h-5 w-5 text-primary' />
								<span>Modularidade com Funções e Classes</span>
							</li>
						</ul>
					</div>
				</div>
			</LectureSection>

			{/* Block 2: Decision Structures */}
			<LectureSection
				title='Bloco 2: Estruturas de Decisão'
				subtitle='O poder do "Se"'
			>
				<div className='grid grid-cols-1 gap-6 '>
					<FeatureCard icon={<GitCommit size={24} />} title='if'>
						<p>
							A decisão mais simples. Avalia uma condição e, se for Verdadeira,
							executa um bloco de código.
						</p>
						<CodeBlock
							language='python'
							code={`idade = int(input("Idade? "))
if idade >= 18:
    print("É maior de idade.")`}
						/>
					</FeatureCard>
					<FeatureCard icon={<GitFork size={24} />} title='if-else'>
						<p>
							Uma decisão com um caminho alternativo. Se a condição for Falsa, o
							bloco <code>else</code> é executado. É um ou outro.
						</p>
						<CodeBlock
							language='python'
							code={`temperatura = 22
if temperatura > 25:
    print("Está calor!")
else:
    print("Não está calor.")`}
						/>
					</FeatureCard>
					<FeatureCard icon={<GitMerge size={24} />} title='if-elif-else'>
						<p>
							Para múltiplas condições em cadeia. A primeira condição Verdadeira
							é executada e o resto é ignorado.
						</p>
						<CodeBlock
							language='python'
							code={`nota = 85
if nota >= 90:
    print("A")
elif nota >= 80:
    print("B") # Executa isto e para
else:
    print("C")`}
						/>
					</FeatureCard>
				</div>
				<Callout title='Nota Rápida: switch-case'>
					<p>
						Algumas linguagens (C++, Java) têm uma estrutura <code>switch</code>{" "}
						para testar igualdade múltipla, que pode ser mais legível que vários{" "}
						<code>elif</code>.
					</p>
					<CodeBlock
						language='csharp'
						code={`// C# (não funciona em Python)
switch (diaDaSemana) {
    case 1: nome = "Segunda"; break;
    case 2: nome = "Terça"; break;
    default: nome = "Outro dia"; break;
}`}
					/>
				</Callout>
			</LectureSection>

			{/* Block 3: Repetition Structures */}
			<LectureSection
				title='Bloco 3: Estruturas de Repetição (Loops)'
				subtitle='Repetir tarefas de forma inteligente'
			>
				<div className='space-y-8'>
					<div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
						<div>
							<h3 className='flex items-center gap-2 text-2xl font-bold font-headline'>
								<Repeat className='text-primary' />O Loop Condicional: `while`
							</h3>
							<p className='mt-2 text-muted-foreground'>
								Executa um bloco de código repetidamente enquanto uma condição
								for Verdadeira. É ideal quando não sabemos o número exato de
								iterações.
							</p>
							<Callout title='Cuidado: Loops Infinitos!' type='danger'>
								<p>
									Se a condição do `while` nunca se tornar Falsa, o programa
									ficará preso para sempre. Certifique-se sempre de que a
									variável da condição é atualizada dentro do loop.
								</p>
							</Callout>
						</div>
						<CodeBlock
							language='python'
							code={`# Contagem decrescente
contador = 5
while contador > 0:
    print(contador)
    contador -= 1 # Essencial para evitar loop infinito
print("Lançar!")`}
						/>
					</div>

					<div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
						<div>
							<h3 className='flex items-center gap-2 text-2xl font-bold font-headline'>
								<Repeat className='text-primary' />O Loop Contado: `for`
							</h3>
							<p className='mt-2 text-muted-foreground'>
								Perfeito para iterar sobre uma sequência (lista, range, etc.).
								Executa o bloco de código uma vez para cada item na sequência,
								de forma mais limpa que um `while`.
							</p>
						</div>
						<CodeBlock
							language='python'
							code={`frutas = ["Maçã", "Banana", "Cereja"]
for fruta in frutas:
    print(f"Eu gosto de {fruta}")`}
						/>
					</div>

					<div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
						<FeatureCard icon={<StopCircle size={24} />} title='break'>
							<p>
								Interrompe e sai do loop imediatamente. Útil para parar a busca
								assim que um item é encontrado.
							</p>
							<CodeBlock
								language='python'
								code={`for nome in nomes:
    if nome == "Ana":
        print("Encontrado!")
        break # Para o loop`}
							/>
						</FeatureCard>
						<FeatureCard icon={<SkipForward size={24} />} title='continue'>
							<p>
								Salta a iteração atual e avança para a próxima. O loop não
								termina. Útil para ignorar certos itens.
							</p>
							<CodeBlock
								language='python'
								code={`for i in range(1, 11):
    if i % 2 == 0:
        continue # Salta os números pares
    print(i) # Só imprime ímpares`}
							/>
						</FeatureCard>
					</div>
					<div>
						<h3 className='mb-4 flex items-center gap-2 text-2xl font-bold font-headline'>
							<ShieldCheck className='text-primary' />
							Gestão de Erros com `try-except`
						</h3>
						<p className='mb-4 text-muted-foreground'>
							Quando uma operação pode falhar (ex: converter &quot;abc&quot; em
							número), o programa pode &quot;crashar&quot;. Para evitar isso,
							usamos o bloco <code>try-except</code>, que nos permite
							&quot;tentar&quot; executar um código e &quot;apanhar&quot; o erro
							se ele acontecer, de forma a podermos lidar com ele sem parar o
							programa.
						</p>
						<CodeBlock
							language='python'
							code={`while True: # Loop para pedir até ser válido
    try:
        idade_str = input("Qual é a sua idade? ")
        idade_num = int(idade_str)
        break # Se a conversão funcionar, sai do loop
    except ValueError:
        # Se falhar, informa e o loop repete-se
        print("Erro: Isso não é um número. Tente novamente.")

print(f"Obrigado! A sua idade é {idade_num}.")`}
						/>
					</div>
				</div>
			</LectureSection>

			{/* Block 4: Modularity */}
			<LectureSection
				title='Bloco 4: Modularidade'
				subtitle='Organizando o código como um profissional'
			>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<FeatureCard
						icon={<FunctionSquare size={24} />}
						title='Funções: O Princípio DRY'
						className='md:col-span-2'
					>
						<p>
							Para evitar repetir código (<strong>D</strong>on&apos;t{" "}
							<strong>R</strong>epeat <strong>Y</strong>ourself), agrupamos
							lógica reutilizável em <strong>funções</strong>. Uma função é um
							bloco de código nomeado que podemos &quot;chamar&quot; quando
							precisarmos. Elas podem receber dados (<strong>parâmetros</strong>
							) e devolver um resultado (<strong>return</strong>).
						</p>
						<CodeBlock
							language='python'
							code={`# 'def' define a função, 'a' e 'b' são parâmetros
def somar(a, b):
    total = a + b
    return total # 'return' devolve o valor

# Chamamos a função e guardamos o resultado
resultado = somar(5, 3) # resultado será 8`}
						/>
					</FeatureCard>
					<FeatureCard icon={<Blocks size={24} />} title='Escopo de Variáveis'>
						<p>
							<strong>Locais:</strong> Criadas dentro de uma função, só existem
							lá dentro. Isto evita conflitos.
							<br />
							<strong>Globais:</strong> Criadas fora, acessíveis em todo o lado.
							Devem ser usadas com cuidado para evitar confusão.
						</p>
						<CodeBlock
							language='python'
							code={`x = 10 # Global
def minha_funcao():
    y = 5 # Local
    print(x) # Acede à global
# print(y) # Daria erro!`}
						/>
					</FeatureCard>
					<FeatureCard icon={<Package size={24} />} title='Módulos e Imports'>
						<p>
							Dividimos o código em vários ficheiros (módulos). Usamos{" "}
							<code>import</code> para aceder a funções de outros ficheiros,
							sejam eles nossos ou de bibliotecas externas.
						</p>
						<CodeBlock
							language='python'
							code={`# Em geometria.py -> def area_circulo(r): ...

# Em main.py
import geometria
geometria.area_circulo(10)`}
						/>
					</FeatureCard>
					<FeatureCard
						icon={<Box size={24} />}
						title='Classes e Objetos (POO)'
						className='md:col-span-2'
					>
						<p>
							A Programação Orientada a Objetos (POO) permite-nos criar os
							nossos próprios tipos de dados. Uma <strong>Classe</strong> é um
							molde (ex: a planta de um <code>Carro</code>) e um{" "}
							<strong>Objeto</strong> é a instância real construída a partir
							desse molde (ex: <code>meu_carro_vermelho</code>). Isto agrupa
							dados (atributos) e as funções que operam nesses dados (métodos).
						</p>
						<CodeBlock
							language='python'
							code={`class Estudante:
    def __init__(self, nome_input):
        self.nome = nome_input # Atributo

    def apresentar_se(self): # Método
        print(f"Olá! O meu nome é {self.nome}.")

# Criar um objeto (instância) da classe
estudante_ana = Estudante("Ana Silva")
# Chamar o seu método
estudante_ana.apresentar_se()`}
						/>
					</FeatureCard>
				</div>
			</LectureSection>

			{/* Block 5: Integrated Example */}
			<LectureSection
				title='Bloco 5: Exemplo Integrador'
				subtitle='Juntando todos os conceitos'
			>
				<p className='prose prose-lg max-w-none text-muted-foreground'>
					Vamos criar um mini-programa de gestão de pauta, dividido em dois
					ficheiros. Este exemplo usa classes, funções, loops, decisões e gestão
					de erros.
				</p>
				<div className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2'>
					<div className='rounded-lg border bg-card/50 p-4'>
						<h4 className='mb-2 flex items-center gap-2 font-mono text-sm font-semibold'>
							<FileCode className='text-primary' />
							gestor_alunos.py
						</h4>
						<CodeBlock
							language='python'
							code={`# 1. A CLASSE que modela os nossos dados
class Aluno:
    def __init__(self, nome, numero):
        self.nome = nome
        self.numero = numero
        self.nota = 0

    def dar_nota(self, nota_atribuida):
        # 2. Decisão (IF) para validar dados
        if 0 <= nota_atribuida <= 20:
            self.nota = nota_atribuida
            return True
        else:
            print("Erro: A nota deve ser entre 0 e 20.")
            return False

    def apresentar(self):
        print(f"Aluno: {self.nome} - Nota: {self.nota}")

# 3. UMA FUNÇÃO de ajuda
def pedir_nota_aluno():
    # 4. Gestão de Erros (TRY-EXCEPT)
    try:
        nota_str = input("Introduza a nota (0-20): ")
        return int(nota_str)
    except ValueError:
        print("Input inválido.")
        return None`}
						/>
					</div>
					<div className='rounded-lg border bg-card/50 p-4'>
						<h4 className='mb-2 flex items-center gap-2 font-mono text-sm font-semibold'>
							<PlayCircle className='text-primary' />
							main.py
						</h4>
						<CodeBlock
							language='python'
							code={`# 5. IMPORTAÇÃO do nosso módulo
from gestor_alunos import Aluno, pedir_nota_aluno

def main():
    lista_da_turma = [
        Aluno("Beatriz Costa", 1001),
        Aluno("Carlos Dias", 1002)
    ]

    # 6. LOOP (FOR) sobre objetos
    for aluno in lista_da_turma:
        print(f"\\nA avaliar: {aluno.nome}")

        # 7. LOOP (WHILE) para input correto
        while True:
            nota = pedir_nota_aluno()
            if nota is not None and aluno.dar_nota(nota):
                break # Sai do while se a nota for válida

    print("\\n--- Pauta Final ---")
    for aluno in lista_da_turma:
        aluno.apresentar()

# Ponto de entrada do programa
if __name__ == "__main__":
    main()`}
						/>
					</div>
				</div>
			</LectureSection>

			{/* Conclusion & Homework */}
			<LectureSection
				title='Bloco 6: Conclusão e Tarefa'
				subtitle='Ponha em prática o que aprendeu'
			>
				<Task title='Tarefa: Gestor de Turma Interativo'>
					<p className='font-semibold text-foreground'>
						✅ Hoje vimos como controlar o fluxo do nosso código com{" "}
						<strong>decisões</strong> (if/else) e <strong>repetições</strong>{" "}
						(loops), e como organizar tudo com <strong>funções</strong>,{" "}
						<strong>classes</strong> e <strong>módulos</strong>. Agora, é a
						vossa vez de expandir o nosso projeto!
					</p>
					<ol className='list-decimal space-y-2 pl-5 text-muted-foreground'>
						<li>
							<strong>
								Melhorar a Classe <code>Aluno</code> (em{" "}
								<code>gestor_alunos.py</code>):
							</strong>
							<ul className='list-disc space-y-2 pl-5 text-muted-foreground'>
								<li>
									Adicione um novo atributo no{" "}
									<span className='font-bold'>constructor</span>:{" "}
									<code>self.faltas = 0</code>.
								</li>
								<li>
									Crie um novo método{" "}
									<code className='font-bold'>marcar_falta(self)</code> que faz{" "}
									<code>self.faltas += 1</code>.
								</li>
								<li>
									Modifique o método{" "}
									<code className='font-bold'>apresentar(self)</code> para
									mostrar também o número de faltas.
								</li>
							</ul>
						</li>
						<li>
							<strong>
								Melhorar o <code>main.py</code>:
							</strong>
							<ul className='list-disc space-y-2 pl-5 text-muted-foreground'>
								<li>
									Crie uma função{" "}
									<code className='font-bold'>mostrar_menu()</code> que imprime
									opções para o utilizador: 1. Dar notas, 2. Marcar falta, 3.
									Ver pauta, 4. Sair.
								</li>
								<li>
									Coloque a lógica principal num loop <code>while True</code>{" "}
									que corre o menu.
								</li>
								<li>
									Use <code>if/elif/else</code> para executar a lógica com base
									na escolha. Se for &quot;4&quot;, use <code>break</code> para
									sair.
								</li>
							</ul>
						</li>
					</ol>
				</Task>
			</LectureSection>

			<LectureSection title='Bloco 7: Perguntas e Respostas (Q&A)'>
				<div className='prose prose-lg max-w-none text-muted-foreground rounded-lg border bg-card/50 p-4'>
					<p className='text-xl'>
						Agora é a vossa vez! Que dúvidas têm? Algum conceito que não ficou
						claro?
					</p>
				</div>
			</LectureSection>
		</main>
	);
};

export default LecturePage;
