//[JS-A04] Você é um desenvolvedor de software que trabalha em uma equipe especializada em criar ferramentas matemáticas para uma empresa do mercado financeiro. A empresa precisa de uma nova funcionalidade para sua plataforma online, permitindo que os usuários obtenham informações sobre cálculos matemáticos importantes relacionados aos investimentos.



//Sua tarefa é criar um módulo JavaScript que ofereça aos usuários a possibilidade de inserir um número inteiro positivo e, em resposta, calcular o fatorial desse número e também a sequência de Fibonacci até aquele número. Isso ajudará os investidores a realizar análises mais detalhadas sobre suas decisões financeiras.


// Função para calcular o fatorial
function calcularFatorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return 'O número deve ser um inteiro positivo.';
    }
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Função para calcular a sequência de Fibonacci até n
function calcularFibonacci(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return 'O número deve ser um inteiro positivo.';
    }
    let fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] <= n) {
        let nextValue = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (nextValue > n) break;
        fibonacci.push(nextValue);
    }
    return fibonacci;
}

// Solicita ao usuário um número inteiro positivo
let numero = Number(prompt("Digite um número inteiro positivo"));

// Valida a entrada
if (numero < 0 || !Number.isInteger(numero)) {
    console.log("O número deve ser um inteiro positivo.");
} else {
    // Calcula e exibe o fatorial
    let fatorial = calcularFatorial(numero);
    console.log("O fatorial de " + numero + " é " + fatorial);

    // Calcula e exibe a sequência de Fibonacci
    let fibonacci = calcularFibonacci(numero);
    console.log("A sequência de Fibonacci até " + numero + " é: " + fibonacci.join(', '));
}

