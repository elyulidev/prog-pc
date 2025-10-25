import { CodeBlock } from "@/components/code-block";
import { Callout } from "@/components/lecture/callout";
import { LectureSection } from "@/components/lecture/lecture-section";
import { Task } from "@/components/lecture/task";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const LecturePage = () => {
	return (
		<div className='space-y-12'>
			{/* Conference Header */}
			<header className='rounded-lg bg-primary/5 p-8'>
				<p className='text-lg font-semibold text-primary'>
					Módulo I: Fundamentos de Python e Lógica Algorítmica
				</p>
				<h1 className='text-4xl font-bold tracking-tight lg:text-5xl font-headline'>
					Conferência 3: Estruturas de Controlo de Fluxo e Modularidade
				</h1>
				<p className='mt-4 text-lg text-muted-foreground max-w-3xl'>
					Nesta conferência, vamos mergulhar em dois dos pilares mais
					fundamentais da programação: Estruturas de Controlo de Fluxo e
					Modularidade. Aprenderemos como fazer os nossos programas tomar
					decisões, repetir tarefas e serem organizados de forma eficiente.
				</p>
			</header>

			{/* Introduction */}
			<LectureSection title='Bloco 1: Introdução'>
				<Card>
					<CardHeader>
						<CardTitle>Boas-vindas e Agenda</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							Olá a todos! 👋 Bem-vindos à nossa terceira conferência. Hoje,
							vamos mergulhar em dois dos pilares mais fundamentais da
							programação: Estruturas de Controlo de Fluxo e Modularidade.
						</p>
						<p>
							Até agora, provavelmente escreveram código que executa de cima
							para baixo, uma linha de cada vez, e termina. Mas o mundo real não
							é assim tão linear. Precisamos que os nossos programas tomem
							decisões, repitam tarefas e sejam organizados. É exatamente isso
							que vamos aprender hoje.
						</p>
						<p>A nossa agenda para os próximos 90 minutos:</p>
						<ol>
							<li>
								<strong>O que é o Controlo de Fluxo?</strong>
								<ul>
									<li>A execução sequencial (o padrão).</li>
									<li>A necessidade de desvio: Decisões e Repetições.</li>
								</ul>
							</li>
							<li>
								<strong>Parte 1: Estruturas de Decisão (O "Se")</strong>
								<ul>
									<li>
										<code>if</code>, <code>if-else</code>,{" "}
										<code>if-elif-else</code>
									</li>
									<li>Operadores Lógicos (AND, OR, NOT)</li>
									<li>
										Estruturas <code>switch-case</code> (ou equivalentes)
									</li>
								</ul>
							</li>
							<li>
								<strong>Parte 2: Estruturas de Repetição (Os "Loops")</strong>
								<ul>
									<li>
										<code>while</code> (enquanto)
									</li>
									<li>
										<code>for</code> (para)
									</li>
									<li>
										Controlo de loops: <code>break</code> e{" "}
										<code>continue</code>
									</li>
									<li>Manejar erros. Excepções(try-except)</li>
								</ul>
							</li>
							<li>
								<strong>Parte 3: Modularidade (O "Como Organizar")</strong>
								<ul>
									<li>O que são funções (ou métodos)?</li>
									<li>Porquê usar funções? (O Princípio DRY)</li>
									<li>Anatomia de uma função: parâmetros e retorno.</li>
									<li>Escopo de variáveis (local vs. global).</li>
									<li>
										Modularidade Real: Importando Ficheiros Externos. Variável{" "}
										<code>__name__</code>
									</li>
									<li>Classes e Objetos(breve introdução)</li>
								</ul>
							</li>
							<li>
								<strong>Exemplo Práctico Integrador</strong>
							</li>
							<li>
								<strong>Conclusão e Tarefa Extraclasse</strong>
							</li>
						</ol>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>O Fluxo de Controlo Padrão</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>Imaginem que o vosso código é uma receita de bolo. 🍰</p>
						<ol>
							<li>Pegar na taça.</li>
							<li>Adicionar farinha.</li>
							<li>Adicionar ovos.</li>
							<li>Adicionar açúcar.</li>
							<li>Misturar tudo.</li>
							<li>Levar ao forno.</li>
							<li>Esperar 30 minutos.</li>
							<li>Retirar.</li>
						</ol>
						<p>
							Isto é um fluxo sequencial. Cada instrução é executada exatamente
							uma vez, na ordem em que está escrita. É simples, mas muito
							limitado.
						</p>
						<p>
							E se a receita dissesse: "Se for um bolo de chocolate, adicionar
							cacau"?
						</p>
						<p>
							Ou: "Enquanto a massa não estiver homogénea, continuar a
							misturar"?
						</p>
						<p>
							Ou: "Para preparar a forma: Repetir 3 vezes o processo de untar e
							polvilhar"?
						</p>
						<p>
							De repente, a nossa receita simples tornou-se num algoritmo.
							Deixámos de ter um caminho único. Ganhámos o poder de tomar
							decisões e de repetir tarefas.
						</p>
						<p>
							Isto é o <strong>Controlo de Fluxo</strong>: a capacidade de
							alterar a ordem pela qual as instruções são executadas, com base
							em certas condições.
						</p>
						<p>
							E a <strong>Modularidade</strong>? Imaginem que a "receita" de
							"fazer a cobertura" é tão complexa que a escrevemos numa página
							separada. Sempre que precisamos da cobertura, em vez de reescrever
							todos os passos, apenas dizemos: "Ver página 5: 'Fazer
							Cobertura'". Isso é uma função! É a base da modularidade: agrupar
							código reutilizável.
						</p>
					</CardContent>
				</Card>
			</LectureSection>

			{/* Decision Structures */}
			<LectureSection title='Bloco 2: Estruturas de Decisão'>
				<Card>
					<CardHeader>
						<CardTitle>A Decisão Simples: if</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							O <code>if</code> (que significa "se") é a estrutura de decisão
							mais simples. Ele avalia uma condição (algo que só pode ser
							Verdadeiro ou Falso) e, se for verdadeira, executa um bloco de
							código.
						</p>
						<p>
							Imaginem um fluxograma. O fluxo normal é uma seta a apontar para
							baixo. De repente, encontramos um losango 💎. Dentro dele, está a
							pergunta: "Está a chover?".
						</p>
						<ul>
							<li>
								Se a resposta for "Sim" (Verdadeiro), uma seta desvia-se para um
								lado e executa a caixa "Levar guarda-chuva".
							</li>
							<li>
								Se a resposta for "Não" (Falso), a seta simplesmente ignora essa
								caixa.
							</li>
						</ul>
						<p>
							No final, ambos os caminhos voltam a juntar-se para continuar o
							programa.
						</p>
						<CodeBlock
							language='python'
							code={`
# O programa pergunta a idade
idade = int(input("Qual é a sua idade? "))

# A condição é (idade >= 18)
# Isto avalia para Verdadeiro (True) ou Falso (False)
if idade >= 18:
    # Este bloco SÓ executa se a condição for Verdadeira
    print("Você é maior de idade.")
    print("Já pode tirar a carta de condução.")

# Esta linha está fora do bloco "if", por isso executa SEMPRE
print("O programa terminou.")
`}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>A Decisão Binária: if-else</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							Isto é ótimo, mas e se quisermos fazer algo específico quando a
							condição é falsa? Em vez de apenas ignorar, queremos um caminho
							alternativo. Usamos o <code>else</code> (que significa "senão").
						</p>
						<p>Voltamos ao nosso losango 💎: "Está a chover?".</p>
						<ul>
							<li>
								Se "Sim" (Verdadeiro), seguimos o caminho A: "Levar
								guarda-chuva".
							</li>
							<li>
								Se "Não" (Falso), seguimos o caminho B: "Levar óculos de sol".
							</li>
						</ul>
						<p>
							<strong>Importante:</strong> É impossível seguir os dois caminhos.
							É um ou outro.
						</p>
						<CodeBlock
							language='python'
							code={`
temperatura = 22

if temperatura > 25:
    # Bloco Verdadeiro
    print("Está calor! Ligue o ar condicionado.")
else:
    # Bloco Falso
    print("Está uma temperatura agradável.")
    print("Não é preciso ligar o ar condicionado.")

print("Fim da verificação do tempo.")
`}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Múltiplas Decisões: if-elif-else</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							E se tivermos mais de duas opções? A solução é o <code>elif</code>{" "}
							(uma contração de "else if"). O <code>elif</code> permite-nos
							testar uma nova condição apenas se a condição anterior for falsa.
						</p>
						<CodeBlock
							language='python'
							code={`
nota = 85
if nota >= 90:
    print("Classificação: A")
elif nota >= 80:  # Só é testado se (nota >= 90) for FALSO
    print("Classificação: B")
elif nota >= 70:  # Só é testado se (nota >= 80) for FALSO
    print("Classificação: C")
elif nota >= 60:
    print("Classificação: D")
else:  # Só executa se TODAS as condições acima forem FALSAS
    print("Classificação: F (Reprovado)")
`}
						/>
						<Callout title='Nota Rápida: switch-case'>
							<p>
								Algumas linguagens (como C++, Java, C#) têm uma estrutura
								especial para verificar se uma variável é igual a múltiplos
								valores diferentes, chamada <code>switch</code>.
							</p>
							<CodeBlock
								language='csharp'
								code={`
// Exemplo em C# (não funciona em Python)
int diaDaSemana = 3;
string nomeDoDia;
switch (diaDaSemana)
{
    case 1:
        nomeDoDia = "Segunda-feira";
        break; // O "break" é vital!
    case 2:
        nomeDoDia = "Terça-feira";
        break;
    case 3:
        nomeDoDia = "Quarta-feira";
        break;
    default: // Equivalente ao "else"
        nomeDoDia = "Fim de semana";
        break;
}
Console.WriteLine(nomeDoDia); // Imprime "Quarta-feira"
`}
							/>
						</Callout>
					</CardContent>
				</Card>
			</LectureSection>

			{/* Repetition Structures */}
			<LectureSection title='Bloco 3: Estruturas de Repetição (Loops)'>
				<Card>
					<CardHeader>
						<CardTitle>O Loop Condicional: while</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							O loop <code>while</code> (enquanto) é o mais simples. Ele testa
							uma condição. Se for verdadeira, executa o bloco de código. Depois
							volta ao topo e testa a condição novamente, até que a condição se
							torne Falsa.
						</p>
						<CodeBlock
							language='python'
							code={`
# Contagem decrescente para o lançamento
contador = 10
while contador > 0:
    print(f"T-menos {contador} segundos...")
    # Passo CRÍTICO: temos de alterar a variável da condição!
    contador = contador - 1 # Ou contador -= 1
print("LANÇAR! 🚀")
`}
						/>
						<Callout title='Cuidado: Loops Infinitos' type='danger'>
							<p>
								O que acontece se nos esquecermos da linha{" "}
								<code>contador = contador - 1</code>? A condição{" "}
								<code>10 &gt; 0</code> será sempre Verdadeira, e o programa
								ficará preso para sempre!
							</p>
							<CodeBlock
								language='python'
								code={`
# PERIGO: LOOP INFINITO!
numero_secreto = 7
palpite = 0
while palpite != numero_secreto:
    # O utilizador nunca tem a chance de mudar o palpite DENTRO do loop!
    print("Adivinhe o número:")

# O código correto teria o input DENTRO do loop.
`}
							/>
						</Callout>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>O Loop Contado: for</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							E se soubermos exatamente quantas vezes queremos repetir? Usamos o
							loop <code>for</code> (para), desenhado para iterar sobre uma
							sequência de itens.
						</p>
						<CodeBlock
							language='python'
							code={`
# Queremos contar de 1 até 5.
# range(1, 6) gera a sequência: 1, 2, 3, 4, 5

for numero in range(1, 6):
    print(f"O número atual é {numero}")

print("Loop 'for' terminado.")
`}
						/>
						<p>
							O <code>for</code> é ainda mais poderoso. Pode iterar sobre
							qualquer coleção, como uma lista de compras.
						</p>
						<CodeBlock
							language='python'
							code={`
lista_compras = ["Maçãs", "Leite", "Pão", "Café"]

print("Preciso de comprar:")
for item in lista_compras:
    print(f"- {item}")
`}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Controlar o Loop: break e continue</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							<strong>
								<code>break</code>
							</strong>{" "}
							(Quebrar/Parar): Sai imediatamente do loop.
						</p>
						<CodeBlock
							language='python'
							code={`
nomes = ["Rui", "Maria", "Pedro", "Ana", "Sofia", "Miguel"]
nome_procurado = "Ana"

for nome in nomes:
    print(f"A verificar... {nome}")
    if nome == nome_procurado:
        print("Encontrado!")
        break  # Sai do loop 'for' imediatamente!
`}
						/>
						<p>
							<strong>
								<code>continue</code>
							</strong>{" "}
							(Continuar/Saltar): Salta o resto da iteração atual e passa para a
							próxima.
						</p>
						<CodeBlock
							language='python'
							code={`
for i in range(1, 11): # Números de 1 a 10
    # Se o número for par...
    if i % 2 == 0:
        continue # ...salta o resto do código e vai para a próxima iteração

    # Este código só executa para números ímpares
    print(f"Processando número ímpar: {i}")
`}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Gestão de Erros: try-except</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							O que acontece quando o nosso código espera uma coisa, mas o
							utilizador faz outra? O programa pode "crashar". Para evitar isso,
							usamos o bloco <code>try-except</code>.
						</p>
						<p>
							O bloco <code>try-except</code> permite-nos "tentar" executar um
							código perigoso. Se falhar, em vez de crashar, ele salta para um
							bloco de "exceção".
						</p>
						<CodeBlock
							language='python'
							code={`
try:
    # Bloco perigoso: Tentamos fazer a conversão
    idade_str = input("Qual é a sua idade? ")
    idade_num = int(idade_str)
    print(f"Daqui a 10 anos terá {idade_num + 10} anos.")
except ValueError:
    # Bloco de segurança: Só executa se o 'try' falhar
    print("Erro: Por favor, introduza um NÚMERO válido (ex: 25).")

print("O programa continua...")
`}
						/>
						<p>
							Podemos combinar isto com um <code>while</code> para forçar uma
							resposta válida:
						</p>
						<CodeBlock
							language='python'
							code={`
while True: # Loop infinito
    try:
        idade_str = input("Qual é a sua idade? ")
        idade_num = int(idade_str)
        # Se a conversão funcionar, saímos do loop
        break
    except ValueError:
        # Se falhar, informamos e o loop repete-se
        print("Erro: Isso não é um número. Tente novamente.")

print(f"Obrigado! A sua idade é {idade_num}.")
`}
						/>
					</CardContent>
				</Card>
			</LectureSection>
			{/* Modularity and Functions */}
			<LectureSection title='Bloco 4: Modularidade e Funções'>
				<Card>
					<CardHeader>
						<CardTitle>O Problema: Repetição de Código</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							Repetir o mesmo código em vários locais é mau porque aumenta a
							chance de erros e dificulta a manutenção. Isto viola o princípio{" "}
							<strong>DRY: Don't Repeat Yourself</strong> (Não te Repitas).
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>A Solução: Funções</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							A solução é "empacotar" essa lógica repetida numa{" "}
							<strong>função</strong>, um bloco de código nomeado que podemos
							"chamar" (executar) sempre que quisermos.
						</p>
						<h5>1. Definir a Função</h5>
						<CodeBlock
							language='python'
							code={`
# def = "definir função"
# saudacao = nome da função
# (nome_utilizador) = parâmetro (dados que a função recebe)
def saudacao(nome_utilizador):
    print("--------------------")
    print(f"Bem-vindo, {nome_utilizador}!")
    print("O sistema está pronto.")
    print("--------------------")
`}
						/>
						<h5>2. Chamar (Invocar) a Função</h5>
						<CodeBlock
							language='python'
							code={`
saudacao("João")
saudacao("Admin")
`}
						/>
						<p>Vantagens:</p>
						<ul>
							<li>
								<strong>Reutilização:</strong> Escrevemos uma vez, usamos
								muitas.
							</li>
							<li>
								<strong>Manutenção:</strong> Alteramos a lógica num único local.
							</li>
							<li>
								<strong>Abstração:</strong> Escondemos a complexidade.
							</li>
						</ul>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Anatomia de uma Função: Parâmetros e Retorno</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<ul>
							<li>
								<strong>Parâmetros (Input):</strong> Os dados que a função
								recebe.
							</li>
							<li>
								<strong>Valor de Retorno (Output):</strong> Os dados que a
								função devolve.
							</li>
						</ul>
						<CodeBlock
							language='python'
							code={`
# Esta função recebe dois números (a, b) e retorna um valor
def somar(a, b):
    total = a + b
    return total # A palavra-chave 'return' envia o resultado de volta

# Chamamos a função e guardamos o seu resultado numa variável
resultado_soma = somar(5, 3)
print(f"O resultado da soma é: {resultado_soma}") # Imprime 8
`}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Escopo de Variáveis (Local vs. Global)</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							<strong>Variáveis Locais:</strong> Criadas dentro de uma função,
							só existem dentro dela. Isto é bom para isolamento.
						</p>
						<p>
							<strong>Variáveis Globais:</strong> Definidas fora de qualquer
							função, podem ser lidas por qualquer uma. É má prática
							modificá-las frequentemente.
						</p>
						<CodeBlock
							language='python'
							code={`
# Variável Global
nome_app = "O Meu Super Programa"

def minha_funcao():
    variavel_local = 100 # Variável Local
    print(f"Dentro da função, posso ler a global: {nome_app}")
    print(f"E a local: {variavel_local}")

minha_funcao()
# print(variavel_local) # ISTO DÁ ERRO!
`}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>
							Modularidade Real: Importando Ficheiros Externos
						</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							Podemos dividir o nosso código em múltiplos ficheiros (módulos) e
							usar a palavra-chave <code>import</code> para os reutilizar.
						</p>
						<h5>Ficheiro: geometria.py</h5>
						<CodeBlock
							language='python'
							code={`
# Dentro do ficheiro: geometria.py
def calcular_area_retangulo(comprimento, largura):
    return comprimento * largura
`}
						/>
						<h5>Ficheiro: main.py</h5>
						<CodeBlock
							language='python'
							code={`
# Dentro do ficheiro: main.py
import geometria

area = geometria.calcular_area_retangulo(10, 5)
print(f"A área é {area}")
`}
						/>
						<Callout title='O que é if __name__ == "__main__"?'>
							<p>
								Esta é uma construção padrão em Python que garante que o código
								dentro dela só é executado quando o ficheiro é corrido
								diretamente, e não quando é importado como um módulo.
							</p>
						</Callout>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>
							Introdução à Programação Orientada a Objetos (POO)
						</CardTitle>
					</CardHeader>
					<CardContent className='prose prose-lg max-w-none'>
						<p>
							E se pudéssemos criar os nossos próprios tipos de variáveis, que
							tivessem dados e funções "lá dentro"?
						</p>
						<ul>
							<li>
								Uma <strong>Classe</strong> é uma planta ou um molde (ex: a
								planta de um Carro).
							</li>
							<li>
								Um <strong>Objeto</strong> é a coisa real construída a partir da
								planta (ex: o meu carro vermelho).
							</li>
						</ul>
						<h5>Criar e Usar uma Classe</h5>
						<CodeBlock
							language='python'
							code={`
# "class" é a palavra-chave para definir a planta
class Estudante:
    # O "construtor" (__init__): chamado quando criamos um NOVO objeto
    def __init__(self, nome_input, idade_input):
        # Guardamos os dados DENTRO do objeto ("self")
        self.nome = nome_input
        self.idade = idade_input

    # Um "método" (uma função que pertence à classe)
    def apresentar_se(self):
        print(f"Olá! O meu nome é {self.nome} e tenho {self.idade} anos.")

# Criar objetos (instâncias) a partir da classe
estudante_ana = Estudante("Ana Silva", 20)
estudante_rui = Estudante("Rui Mendes", 22)

# Chamar os seus métodos
estudante_ana.apresentar_se() # Olá! O meu nome é Ana Silva e tenho 20 anos.
estudante_rui.apresentar_se() # Olá! O meu nome é Rui Mendes e tenho 22 anos.
`}
						/>
					</CardContent>
				</Card>
			</LectureSection>
			<Task
				title='A sua primeira missão: A Área de um Círculo'
				description={`<ol className='list-decimal space-y-2 pl-5 text-muted-foreground'>
					<li>
						Melhorar a Classe <code>Aluno</code> (em{" "}
						<code>gestor_alunos.py</code>):
						<ul className='list-disc pl-5'>
							<li>
								Adicione um novo atributo no <code>__init__</code>:{" "}
								<code>self.faltas = 0</code>.
							</li>
							<li>
								Adicione um novo método: <code>marcar_falta(self)</code>. Este
								método deve simplesmente fazer <code>self.faltas += 1</code>.
							</li>
							<li>
								Modifique o método <code>apresentar(self)</code> para que também
								mostre o número de faltas.
							</li>
						</ul>
					</li>
					<li>
						Melhorar o <code>main.py</code>:
						<ul className='list-disc pl-5'>
							<li>
								Crie uma nova função <code>mostrar_menu()</code> que imprime
								opções para o utilizador:
								<ol className='list-decimal pl-5'>
									<li>Dar notas a todos os alunos.</li>
									<li>Marcar falta a um aluno.</li>
									<li>Ver pauta final.</li>
									<li>Sair.</li>
								</ol>
							</li>
							<li>
								Coloque o programa principal (o <code>main()</code>) dentro de
								um <code>while True:</code> que corre o menu.
							</li>
							<li>
								Use <code>if/elif/else</code> para correr a lógica apropriada
								com base na escolha do utilizador. (Se escolher "4", use{" "}
								<code>break</code> para sair do loop <code>while</code>).
							</li>
							<li>
								Para a opção "Marcar falta", terá de perguntar qual o aluno
								(pelo número, por exemplo) e depois encontrar esse objeto{" "}
								<code>Aluno</code> na <code>lista_da_turma</code> para poder
								chamar o método <code>marcar_falta()</code>.
							</li>
						</ul>
					</li>
				</ol>`}
			/>
		</div>
	);
};

export default LecturePage;
