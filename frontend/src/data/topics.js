export const javaTopics = [
    {
        id: 1,
        title: "LocalDate e API de Datas",
        description: "A API java.time (JSR-310), introduzida no Java 8, resolveu os antigos problemas das classes Date e Calendar. O LocalDate representa uma data sem fuso horário (ISO-8601). É imutável e 'thread-safe', o que significa que cada operação cria uma nova instância em vez de modificar a original, evitando bugs em sistemas concorrentes.",
        category: "Datas",
        level: "Básico",
        useCase: "Utilizado em qualquer regra de negócio que envolva apenas o calendário civil: calcular data de vencimento de boletos, verificar se um usuário é maior de idade, ou registrar datas de feriados nacionais onde o horário exato não importa.",
        code: `// Criando e formatando datas com a API moderna
LocalDate hoje = LocalDate.now();
LocalDate nascimento = LocalDate.of(1995, Month.MAY, 15);

// Cálculos de período
Period idade = Period.between(nascimento, hoje);
System.out.println("Idade: " + idade.getYears() + " anos");

// Formatação customizada (padrão brasileiro)
DateTimeFormatter formatoBR = DateTimeFormatter.ofPattern("dd/MM/yyyy");
System.out.println("Data Formatada: " + hoje.format(formatoBR));

// Manipulação (Imutabilidade em ação)
LocalDate proximaSemana = hoje.plusWeeks(1);`
    },
    {
        id: 2,
        title: "Estruturas Condicionais Complexas",
        description: "O controle de fluxo permite que o software execute diferentes caminhos lógicos. Além do IF/ELSE, o Java moderno introduziu melhorias no Switch Expression. A lógica condicional é a base da inteligência de qualquer algoritmo, permitindo validar estados, entradas de usuário e regras de segurança antes de processar dados sensíveis.",
        category: "Lógica",
        level: "Iniciante",
        useCase: "Validação de acessos (RBAC), motores de cálculo de impostos onde a alíquota varia conforme a faixa salarial, e sistemas de estados (ex: mudar o status de um pedido de 'Pendente' para 'Aprovado' apenas se o pagamento for confirmado).",
        code: `// Exemplo de Switch Expression (Java 14+) e If encadeado
String statusPedido = "PAGO";
double valorTotal = 150.00;

// Lógica de Desconto
double desconto = 0;
if (valorTotal > 100 && statusPedido.equals("PAGO")) {
    desconto = valorTotal * 0.10; // 10% de desconto
}

// Switch moderno mais limpo e seguro
String mensagem = switch (statusPedido) {
    case "PENDENTE" -> "Aguardando confirmação do banco.";
    case "PAGO", "ENTREGUE" -> "Processo finalizado com sucesso.";
    case "CANCELADO" -> "O pedido foi estornado.";
    default -> "Status desconhecido.";
};

System.out.println("Desconto: R$ " + desconto);
System.out.println("Status: " + mensagem);`
    },
    {
        id: 3,
        title: "Laços de Repetição e Iteração",
        description: "Laços de repetição (Loops) permitem executar um bloco de código múltiplas vezes. O Java oferece o 'for' tradicional para contagens conhecidas, o 'while' para condições dinâmicas e o 'Enhanced For' (for-each) para percorrer coleções de forma simplificada e segura, evitando erros de índice fora de alcance (IndexOutOfBounds).",
        category: "Lógica",
        level: "Iniciante",
        useCase: "Processamento de lotes (Batch), como enviar e-mails para todos os clientes de uma lista, gerar relatórios mensais somando valores diários, ou buscar um item específico dentro de um estoque de produtos.",
        code: `// Diferentes formas de iterar sobre dados
List<String> logs = Arrays.asList("Erro 404", "Erro 500", "Sucesso 200");

// For-each: O padrão para leitura de listas
System.out.println("--- Varrendo logs ---");
for (String log : logs) {
    if(log.contains("Erro")) {
        System.out.println("Alerta crítico: " + log);
    }
}

// While: Quando não sabemos o fim exato
int tentativa = 1;
boolean conectado = false;
while (!conectado && tentativa <= 3) {
    System.out.println("Tentativa de conexão: " + tentativa);
    // Lógica fictícia de conexão
    tentativa++;
}`
    },
    {
        id: 5,
        title: "POO: Classes, Atributos e Métodos",
        description: "A Programação Orientada a Objetos (POO) é o paradigma central do Java. Uma Classe funciona como um blueprint (planta) que define o estado (Atributos) e o comportamento (Métodos) de um objeto. Atributos representam o que o objeto 'sabe' e Métodos representam o que o objeto 'faz'.",
        category: "POO",
        level: "Básico",
        useCase: "Modelagem de domínios em sistemas corporativos: representar um 'Produto' em um E-commerce, um 'Paciente' em um sistema hospitalar ou uma 'Transação' em um Internet Banking.",
        code: `public class ContaBancaria {
    // Atributos (Estado)
    private String titular;
    private double saldo;

    // Construtor (Inicialização)
    public ContaBancaria(String titular, double valorInicial) {
        this.titular = titular;
        this.saldo = valorInicial;
    }

    // Métodos (Comportamento)
    public void depositar(double valor) {
        if (valor > 0) {
            this.saldo += valor;
            System.out.println("Depósito de R$ " + valor + " realizado.");
        }
    }

    public boolean sacar(double valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    public double getSaldo() { return this.saldo; }
}`
    },
    {
        id: 9,
        title: "Streams API: Filtros e Transformações",
        description: "A Streams API revolucionou o Java ao trazer o paradigma funcional para as coleções. Ela permite processar sequências de elementos de forma declarativa (focado no 'que' fazer, não no 'como'). Com Streams, podemos filtrar, mapear e reduzir dados de forma extremamente concisa, facilitando inclusive o processamento paralelo.",
        category: "Funcional",
        level: "Intermediário",
        useCase: "Muito usada em APIs REST para filtrar dados antes de enviá-los ao Front-end: remover usuários inativos de uma lista, transformar uma lista de Objetos 'User' em uma lista de Strings 'Emails', ou somar o faturamento total de uma lista de vendas.",
        code: `List<Produto> estoque = Arrays.asList(
    new Produto("Teclado", 150.0, "Eletronicos"),
    new Produto("Mouse", 80.0, "Eletronicos"),
    new Produto("Cadeira", 1200.0, "Moveis")
);

// Pipeline de processamento: Filtrar, Mapear e Coletar
List<String> nomesEletronicosBaratos = estoque.stream()
    .filter(p -> p.getPreco() < 200)               // Filtra preco < 200
    .filter(p -> p.getCategoria().equals("Eletronicos")) // Filtra categoria
    .map(Produto::getNome)                         // Pega só o nome
    .sorted()                                      // Ordena A-Z
    .collect(Collectors.toList());                 // Converte para Lista

System.out.println(nomesEletronicosBaratos);`
    }
];