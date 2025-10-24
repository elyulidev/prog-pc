import { CodeBlock } from "@/components/code-block";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	IntegerIcon,
	BooleanIcon,
	FloatIcon,
	ComplexIcon,
	StringIcon,
	ListIcon,
	TupleIcon,
	DictionaryIcon,
} from "@/components/icons/data-types";
import { NumericTypes } from "@/components/lecture/numeric-types";
import { ArithmeticOperators } from "@/components/lecture/arithmetic-operators";
import { AssignmentOperators } from "@/components/lecture/assignment-operators";
import { Task } from "@/components/lecture/task";

const dataTypes = [
	{
		icon: <IntegerIcon />,
		title: "Inteiro",
		subtitle: "int",
	},
	{
		icon: <BooleanIcon />,
		title: "Booleano",
		subtitle: "bool",
	},
	{
		icon: <FloatIcon />,
		title: "Ponto Flutuante",
		subtitle: "float",
	},
	{
		icon: <ComplexIcon />,
		title: "Complexo",
		subtitle: "complex",
	},
	{
		icon: <StringIcon />,
		title: "String",
		subtitle: "str",
	},
	{
		icon: <ListIcon />,
		title: "Lista",
		subtitle: "list",
	},
	{
		icon: <TupleIcon />,
		title: "Tupla",
		subtitle: "tuple",
	},
	{
		icon: <DictionaryIcon />,
		title: "Dicionário",
		subtitle: "dict",
	},
];

export default function lecture() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
			<Card className='lg:col-span-2'>
				<CardHeader>
					<div className='flex items-center gap-x-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-sparkles'
						>
							<path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' />
							<path d='M5 3v4' />
							<path d='M19 17v4' />
							<path d='M3 5h4' />
							<path d='M17 19h4' />
						</svg>
						<h1 className='text-2xl font-bold'>Tipos de Dados Padrão</h1>
					</div>
				</CardHeader>
				<CardContent className='grid grid-cols-2 md:grid-cols-4 gap-4'>
					{dataTypes.map((type, index) => (
						<Card
							key={index}
							className='p-4 flex flex-col items-center gap-y-2'
						>
							{type.icon}
							<p className='font-semibold'>{type.title}</p>
							<p className='text-muted-foreground'>{type.subtitle}</p>
						</Card>
					))}
				</CardContent>
			</Card>

			<NumericTypes />

			<Card className='lg:col-span-2'>
				<CardHeader>
					<CardTitle>String (str)</CardTitle>
					<CardDescription>
						É um conjunto de caracteres dispostos numa determinada ordem,
						geralmente são utilizados para representar palavras, frases ou
						textos. Podem ser delimitados por aspas simples, três aspas simples
						seguidas ou aspas duplas.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<CodeBlock
						language='python'
						code={`nome = "Andréa Lins"
email = '''andlins@lcg.ufrj.br'''
telefone = "00009999"

# print() é um comando para exibir um conteúdo na tela
print(nome)
print(email)
print(telefone)

# Saída:
# Andréa Lins
# andlins@lcg.ufrj.br
# 00009999`}
					/>
				</CardContent>
			</Card>

			<Card className='lg:col-span-2'>
				<CardHeader>
					<CardTitle>Listas (list)</CardTitle>
					<CardDescription>
						Agrupam um conjunto de elementos variados, podendo conter: inteiros,
						floats, strings, outras listas e outros tipos. Elas são definidas
						utilizando-se colchetes `[]` para delimitá-las e vírgulas para
						separar os elementos.
					</CardDescription>
				</CardHeader>
				<CardContent className='space-y-4'>
					<CodeBlock
						language='python'
						code={`lista_alunos = ["Davi", "Felipe", "Henrique", "Maria"]
lista_notas = [9.5, 7.5, 10, 8.0]

print(lista_alunos)
print(lista_notas)

# type() é um comando usado para saber o tipo do dado
print(type(lista_alunos))
# informa o tipo do dado na primeira posição [0] da lista
print(type(lista_alunos[0]))

print(type(lista_notas))
# informa o tipo do dado na terceira posição [2] da lista
print(type(lista_notas[2]))

# Saída
# ['Davi', 'Felipe', 'Henrique', 'Maria']
# [9.5, 7.5, 10, 8.0]
# <class 'list'>
# <class 'str'>
# <class 'list'>
# <class 'int'>`}
					/>
					<p>
						É possível alterar os dados existentes em uma lista, ou inserir
						novos dados. A seguir veremos alguns exemplos usando os comandos{" "}
						<code>append()</code> e <code>insert()</code>:
					</p>
					<CodeBlock
						language='python'
						title='Exemplo: Usando o comando append()'
						code={`# O comando append() acrescenta um elemento no final da lista
lista_alunos = ['Davi', 'Felipe', 'Henrique', 'Maria']
lista_notas = [9.5, 7.5, 10, 8.0]

new_lista_alunos = lista_alunos
new_lista_alunos.append("Laura")
print(lista_alunos)
print(new_lista_alunos)

new_lista_notas = lista_notas
new_lista_notas.append(7.0)
print(lista_notas)
print(new_lista_notas)

# Saída
# ['Davi', 'Felipe', 'Henrique', 'Maria', 'Laura']
# ['Davi', 'Felipe', 'Henrique', 'Maria', 'Laura']
# [9.5, 7.5, 10, 8.0, 7.0]
# [9.5, 7.5, 10, 8.0, 7.0]`}
					/>
					<p>
						Observe que ao acrescentar um elemento no final da lista{" "}
						<code>new_lista_alunos</code>, esse mesmo elemento também foi
						adicionado à lista <code>lista_alunos</code>. O mesmo ocorre ns
						lista de notas. Caso deseje que os elementos da primeira lista não
						sejam alterados, é preciso copiar os elementos da lista item por
						item.
					</p>
					<CodeBlock
						language='python'
						title='Exemplo: Usando o comando append() para acrescentar cada elemento no final da lista, individualmente'
						code={`lista_alunos = ['Davi', 'Felipe', 'Henrique', 'Maria']
lista_notas = [9.5, 7.5, 10, 8.0]
# len() fornece a quantidade de elementos da lista
print(len(lista_alunos))
print(lista_alunos)

# Saída
# 4
# ['Davi', 'Felipe', 'Henrique', 'Maria']

# Criando a nova lista vazia
new_lista_alunos = []
# Adicionando os dados à nova lista
new_lista_alunos.append(lista_alunos[0])
new_lista_alunos.append(lista_alunos[1])
new_lista_alunos.append(lista_alunos[2])
new_lista_alunos.append(lista_alunos[3])
new_lista_alunos.append("Laura")

print(lista_alunos)
print(new_lista_alunos)

# Saída
# ['Davi', 'Felipe', 'Henrique', 'Maria']
# ['Davi', 'Felipe', 'Henrique', 'Maria', 'Laura']`}
					/>
					<CodeBlock
						language='python'
						title='Exemplo: Usando o comando insert()'
						code={`# O comando insert(POSIÇÃO, DADO) acrescenta um elemento (DADO) na posição (POSIÇÃO) da lista
lista_alunos = ['Davi', 'Felipe', 'Henrique', 'Maria']
lista_notas = [9.5, 7.5, 10, 8.0]

new_lista_alunos = lista_alunos
print(lista_alunos)
new_lista_alunos.insert(3, "Laura")
print(new_lista_alunos)

new_lista_notas = lista_notas
print(lista_notas)
new_lista_notas.insert(3, 7.0)
print(new_lista_notas)

# Saída
# ['Davi', 'Felipe', 'Henrique', 'Maria']
# ['Davi', 'Felipe', 'Henrique', 'Laura', 'Maria']
# [9.5, 7.5, 10, 8.0]
# [9.5, 7.5, 10, 7.0, 8.0]`}
					/>
					<CodeBlock
						language='python'
						title='Exemplo: Alterando um dado na lista'
						code={`lista_notas = [9.5, 7.5, 10, 7.0, 8.0]
lista_notas[1] = 8.5
print(lista_notas)

# Saída
# [9.5, 8.5, 10, 7.0, 8.0]`}
					/>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Tuplas (tuple)</CardTitle>
					<CardDescription>
						Assim como a Lista, a Tupla é um tipo que agrupa um conjunto de
						elementos. No entanto, há uma diferença em sua forma de definição:
						utiliza-se parênteses `()` ao invés de colchetes como nas listas.
						Após a definição, Tuplas não podem ser modificadas, ou seja, elas
						são imutáveis, diferentemente das Listas.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<CodeBlock
						language='python'
						code={`tupla_alunos = ('Davi', 'Felipe', 'Henrique', 'Maria')
tupla_notas = (9.5, 7.5, 10, 8.0)

print(tupla_alunos)
print(tupla_notas)

print(type(tupla_alunos))
print(type(tupla_notas))

# Saída
# ('Davi', 'Felipe', 'Henrique', 'Maria')
# (9.5, 7.5, 10, 8.0)
# <class 'tuple'>
# <class 'tuple'>`}
					/>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Dicionário (dict)</CardTitle>
					<CardDescription>
						Por ser um tipo de dado bastante flexível, ele é utilizado para
						agrupar elementos através da estrutura de chave e valor, onde a
						chave é o primeiro elemento seguido por dois pontos e pelo valor.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<CodeBlock
						language='python'
						code={`dict_notas = {'Davi': 9.5, 'Felipe': 8.5, 'Henrique': 10, 'Maria': 8.0}
print(dict_notas)
print(type(dict_notas))

# Saída
# {'Davi': 9.5, 'Felipe': 8.5, 'Henrique': 10, 'Maria': 8.0}
# <class 'dict'>`}
					/>
				</CardContent>
			</Card>

			<ArithmeticOperators />
			<AssignmentOperators />
			<Task
				title='Tarefa: Calculadora de Média'
				description='Crie um programa em Python que calcule a média de três notas e imprima o resultado. Utilize variáveis para armazenar as notas e os operadores aritméticos para realizar o cálculo.'
			/>
		</div>
	);
}
