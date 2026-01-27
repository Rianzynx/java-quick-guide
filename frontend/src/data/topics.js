export const javaTopics = [
    {
        id: 1,
        title: "Olá Mundo (Hello World)",
        description: "Este é o ponto de partida universal na programação. O 'Hello World' serve para apresentar a estrutura básica de um programa Java: a declaração de uma classe, o método principal (main), que é a porta de entrada por onde o programa começa a rodar, e o comando de saída de dados no console.",
        category: "Fundamentos",
        level: "Iniciante",
        useCase: "Verificar se o Java está instalado corretamente e se o seu editor de código consegue compilar e executar um programa simples.",
        code: `// Toda aplicação Java começa dentro de uma Classe
public class Main {
    // O método 'main' é o ponto de partida obrigatório
    public static void main(String[] args) {
        // Exibe o texto entre aspas no terminal/console
        System.out.println("Olá, Bob! Bem-vindo ao mundo do Java.");
    }
}`
    },
    {
        id: 2,
        title: "Variáveis de Texto (String)",
        description: "A classe String permite armazenar e manipular sequências de letras, símbolos e números tratados como texto. Diferente de outros tipos, Strings são objetos no Java e oferecem diversos métodos para transformar o texto, como deixar tudo em maiúsculas ou contar quantos caracteres existem na frase.",
        category: "Fundamentos",
        level: "Iniciante",
        useCase: "Armazenar nomes de usuários, endereços de e-mail, senhas (antes de criptografar) e qualquer outra informação textual.",
        code: `// Declarando uma variável do tipo texto para o Charles
String usuario = "Charles";
String saudacao = "Bom dia, ";

// O símbolo '+' aqui serve para 'juntar' (concatenar) os textos
System.out.println(saudacao + usuario + "!");`
    },
    {
        id: 3,
        title: "Números Inteiros (int)",
        description: "O tipo primitivo 'int' é o mais comum para lidar com números inteiros (sem casas decimais). Ele ocupa 32 bits de memória e pode armazenar valores de aproximadamente -2 bilhões até +2 bilhões. É ideal para contagens e identificadores que não exigem precisão decimal.",
        category: "Fundamentos",
        level: "Iniciante",
        useCase: "Controle de estoque, contagem de voltas em um loop, idades, anos e números de identificação (IDs).",
        code: `// Criando variáveis para armazenar números inteiros
int idadeBob = 20;
int idadeCharles = 25;

// Realizando uma operação matemática simples
int somaIdades = idadeBob + idadeCharles;

// Exibindo o resultado numérico
System.out.println("A soma das idades é: " + somaIdades);`
    },
    {
        id: 4,
        title: "Números Decimais (double)",
        description: "Diferente do 'int', o tipo 'double' (ponto flutuante de precisão dupla) é utilizado para representar números que possuem frações ou casas decimais. Ele é o padrão no Java para cálculos matemáticos que exigem precisão, como valores monetários simples ou medições científicas.",
        category: "Fundamentos",
        level: "Iniciante",
        useCase: "Cálculo de salários, preços de produtos, médias escolares, pesos e medidas de altura.",
        code: `// O ponto '.' é usado para separar as casas decimais, não a vírgula
double precoPao = 4.50;
double alturaCharles = 1.85;

// Multiplicando um valor decimal por um inteiro
double totalCompra = precoPao * 10; 

System.out.println("Charles comprou 10 pães por R$ " + totalCompra);`
    },
    {
        id: 5,
        title: "Operadores Matemáticos",
        description: "Os operadores aritméticos são os símbolos que permitem ao Java realizar operações matemáticas básicas sobre variáveis e valores. Seguem a regra da matemática comum: multiplicação e divisão têm prioridade sobre soma e subtração, a menos que se use parênteses para mudar a ordem.",
        category: "Logica",
        level: "Iniciante",
        useCase: "Motores de cálculo, atualizações de placares de jogos e qualquer lógica que envolva manipulação de valores numéricos.",
        code: `// O uso de parênteses garante que a soma ocorra ANTES da multiplicação
int resultado = (10 + 5) * 2; // Resulta em 30

int divisao = 10 / 2; // Resulta em 5
int subtracao = 20 - 7; // Resulta em 13`
    },
    {
        id: 6,
        title: "Resto da Divisão (%)",
        description: "O operador de módulo (%), muitas vezes chamado de 'resto', retorna o que sobra de uma divisão entre dois números inteiros. Se você divide 10 por 3, o quociente é 3 e sobra 1; esse '1' é o resultado que o operador % nos entrega.",
        category: "Logica",
        level: "Iniciante",
        useCase: "Verificar se um número é par (resto zero quando dividido por 2) ou ímpar, e criar algoritmos que reiniciam contagens (como um relógio).",
        code: `int numero = 11;

// Se o resto da divisão por 2 for zero, o número é par
if (numero % 2 == 0) {
    System.out.println("O número é Par");
} else {
    // Caso sobre 1, o número é ímpar
    System.out.println("O número é Ímpar");
}`
    },
    {
        id: 7,
        title: "Booleano (true/false)",
        description: "O tipo 'boolean' é a unidade de lógica mais simples do Java, podendo assumir apenas dois estados: 'true' (verdadeiro) ou 'false' (falso). Eles são o coração de todas as estruturas de decisão, pois o computador sempre decide caminhos baseando-se nestes dois estados.",
        category: "Fundamentos",
        level: "Iniciante",
        useCase: "Verificar se uma lâmpada está ligada, se um usuário está autenticado ou se uma condição de segurança foi atingida.",
        code: `// Declarando estados lógicos
boolean bobEstaLogado = true;
boolean charlesPagouConta = false;

// O '!' inverte o valor (NÃO lógico)
boolean charlesNaoPagou = !charlesPagouConta; // Resulta em true`
    },
    {
        id: 8,
        title: "Estrutura IF (Se)",
        description: "O 'if' é a estrutura de controle básica que permite ao software executar um bloco de código apenas se uma determinada condição lógica for verdadeira. É como uma bifurcação na estrada: o código só entra por aquele caminho se o teste resultar em verdadeiro.",
        category: "Logica",
        level: "Iniciante",
        useCase: "Validar se um campo foi preenchido, verificar se a idade permite acesso a um site ou checar se um jogador tem vidas restantes.",
        code: `int idade = 20;

// O código dentro das chaves {} só executa se a idade for 18 ou maior
if (idade >= 18) {
    System.out.println("Acesso liberado para o Bob.");
}`
    },
    {
        id: 9,
        title: "Estrutura ELSE (Senão)",
        description: "O 'else' funciona como o Plano B do seu código. Ele define o que o programa deve fazer obrigatoriamente quando a condição testada no 'if' anterior falha (é falsa). Isso evita que o programa fique sem uma resposta ou ação definida.",
        category: "Logica",
        level: "Iniciante",
        useCase: "Exibir 'Acesso Negado' caso o login falhe, ou 'Reprovado' caso a nota seja baixa.",
        code: `int nota = 5;

if (nota >= 7) {
    System.out.println("Charles aprovado!");
} else {
    // Executa se a nota for menor que 7
    System.out.println("Charles em recuperação.");
}`
    },
    {
        id: 10,
        title: "Operador E (&&)",
        description: "O operador lógico 'AND' (E) é usado quando você precisa validar múltiplas condições simultaneamente. Para que o resultado final seja verdadeiro, TODAS as condições individuais ligadas pelo && precisam ser verdadeiras ao mesmo tempo.",
        category: "Logica",
        level: "Iniciante",
        useCase: "Verificar se o usuário digitou o e-mail CORRETO e a senha CORRETA antes de permitir o login.",
        code: `String nome = "Charles";
int idade = 25;

// O código só entra aqui se o nome for Charles E a idade for maior que 20
if (nome.equals("Charles") && idade > 20) {
    System.out.println("Charles, seu perfil foi localizado.");
}`
    },
    {
        id: 11,
        title: "Operador OU (||)",
        description: "O operador lógico 'OR' (OU) é mais flexível que o &&. Ele retorna verdadeiro se pelo menos UMA das condições for verdadeira. Basta que um dos lados seja atendido para que todo o bloco de código seja executado.",
        category: "Logica",
        level: "Iniciante",
        useCase: "Permitir entrada se o usuário for um administrador OU se ele for o dono da conta.",
        code: `boolean eBob = true;
boolean eCharles = false;

// Basta um deles ser verdadeiro para liberar o acesso
if (eBob || eCharles) {
    System.out.println("Acesso VIP liberado!");
}`
    },
    {
        id: 12,
        title: "Laço While",
        description: "O 'while' (enquanto) cria um ciclo de repetição que continua executando um bloco de código por tempo indeterminado, desde que a condição de teste permaneça verdadeira. É ideal para situações onde não sabemos exatamente quantas vezes precisaremos repetir a ação.",
        category: "Logica",
        level: "Iniciante",
        useCase: "Manter um programa aberto enquanto o usuário não digitar 'sair', ou tentar conexão com um servidor até funcionar.",
        code: `int contador = 1;

// Enquanto o contador for menor ou igual a 3, o código repete
while (contador <= 3) {
    System.out.println("Tentativa nº " + contador);
    // IMPORTANTE: Aumentar o contador para não travar em loop infinito
    contador++; 
}`
    },
    {
        id: 13,
        title: "Laço For",
        description: "A estrutura 'for' é uma forma compacta e organizada de criar loops. Ela agrupa a inicialização de uma variável, a condição de parada e o passo de incremento (ou decremento) em uma única linha. É a escolha preferida quando já sabemos o limite exato da repetição.",
        category: "Logica",
        level: "Iniciante",
        useCase: "Percorrer todos os itens de uma lista, imprimir uma tabuada completa ou realizar uma ação exatamente 10 vezes.",
        code: `// (início; condição; passo)
for (int i = 1; i <= 5; i++) {
    System.out.println("Bob deu a volta nº " + i);
}`
    },
    {
        id: 14,
        title: "Entrada com Scanner",
        description: "O Scanner é uma ferramenta do Java que permite ao programa 'ouvir' o que o usuário digita no teclado através do console. Com ele, seus programas deixam de ser estáticos e passam a interagir com os dados fornecidos em tempo real pelas pessoas.",
        category: "Interatividade",
        level: "Iniciante",
        useCase: "Criar formulários de cadastro via terminal, calculadoras interativas e menus de navegação.",
        code: `// Importação necessária no topo do arquivo: import java.util.Scanner;
Scanner leitor = new Scanner(System.in);

System.out.print("Digite seu nome, Charles: ");
// O programa 'para' aqui e espera Charles digitar algo e dar Enter
String nomeInformado = leitor.nextLine();

System.out.println("Olá, " + nomeInformado);`
    },
    {
        id: 15,
        title: "Arrays Simples",
        description: "Arrays (ou vetores) funcionam como gaveteiros que guardam vários valores do mesmo tipo sob um único nome. Cada valor fica em uma posição numerada chamada 'índice'. Lembre-se: em Java, a contagem dos índices sempre começa do ZERO.",
        category: "Estrutura",
        level: "Iniciante",
        useCase: "Lista de nomes de alunos, histórico das últimas 10 temperaturas medidas ou uma lista de produtos no carrinho.",
        code: `// Criando uma lista de nomes com 2 posições
String[] nomes = {"Bob", "Charles"};

// Acessando o primeiro item (Índice 0)
System.out.println("O primeiro da lista é: " + nomes[0]);

// Verificando o tamanho da lista
System.out.println("A lista tem " + nomes.length + " nomes.");`
    },
    {
        id: 16,
        title: "Métodos (Funções)",
        description: "Métodos são blocos de código que realizam uma tarefa específica e podem ser 'chamados' a qualquer momento. Eles ajudam a organizar o programa e evitam que você tenha que copiar e colar o mesmo código várias vezes em partes diferentes do sistema.",
        category: "Estrutura",
        level: "Iniciante",
        useCase: "Função para calcular desconto, função para validar CPF ou simplesmente para exibir uma mensagem padrão de erro.",
        code: `// Um método que recebe um nome e exibe uma saudação
public void cumprimentar(String nome) {
    System.out.println("Seja bem-vindo, " + nome);
}

// Para usar, basta chamar: cumprimentar("Charles");`
    },
    {
        id: 17,
        title: "Comentários no Código",
        description: "Comentários são anotações feitas pelo desenvolvedor que o Java ignora completamente na hora de rodar o programa. Eles são vitais para explicar lógicas complexas para outros programadores (ou para você mesmo no futuro) e para organizar o documento.",
        category: "Fundamentos",
        level: "Iniciante",
        useCase: "Documentar por que uma decisão técnica foi tomada ou desativar temporariamente uma parte do código para testes.",
        code: `// Este é um comentário de uma linha (mais comum)

/*
   Este é um comentário de bloco.
   Ele pode ocupar várias linhas.
   Muito usado para documentação de métodos.
*/`
    },
    {
        id: 18,
        title: "Classes e Objetos",
        description: "Java é uma linguagem baseada em Objetos. Uma 'Classe' funciona como a planta baixa de uma casa ou o molde de um carro: ela define como as coisas devem ser. O 'Objeto' é a casa construída ou o carro físico que saiu da fábrica a partir daquele molde.",
        category: "POO",
        level: "Iniciante",
        useCase: "Representar entidades do mundo real no código, como um Cliente, um Produto, uma Conta Bancária ou um Jogador.",
        code: `// Classe Pessoa (O Molde)
class Pessoa {
    String nome;
}

// Criando o objeto 'bob' a partir da classe 'Pessoa'
Pessoa bob = new Pessoa();
bob.nome = "Bob";`
    },
    {
        id: 19,
        title: "Atributos de Classe",
        description: "Atributos são as características ou propriedades que um objeto possui. Se pensarmos em uma classe 'Carro', os atributos seriam: cor, modelo, ano e placa. Eles definem o 'estado' do objeto em um determinado momento.",
        category: "POO",
        level: "Iniciante",
        useCase: "Definir que todo produto no seu e-commerce terá obrigatoriamente um preço e um nome.",
        code: `class Estudante {
    // Estes são os atributos
    String nome;
    int matricula;
    double mediaFinal;
}`
    },
    {
        id: 20,
        title: "Constantes (final)",
        description: "No Java, usamos a palavra-chave 'final' para declarar uma constante. Diferente de uma variável comum, o valor de uma constante nunca pode ser alterado depois de ser definido pela primeira vez. Por convenção, nomes de constantes são escritos todos em MAIÚSCULO.",
        category: "Fundamentos",
        level: "Iniciante",
        useCase: "Valores matemáticos fixos (PI), configurações de conexão que não mudam ou regras de negócio imutáveis (Ex: TAXA_MINIMA).",
        code: `// Declarando uma constante
final double PI = 3.14159;

// Se tentarmos fazer: PI = 4.0; -> O Java gera um erro de compilação!
System.out.println("O valor de PI é imutável: " + PI);`
    }
];