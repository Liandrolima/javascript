//Atividade 05
//Crie uma função anônima que simule uma calculadora básica. Ela deve
//aceitar dois números e uma operação (adição, subtração,
//multiplicação, divisão) como parâmetros e retornar o resultado.

const minicalcumadora = function(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Erro: Divisão por zero';
            }
            return num1 / num2;
        default:
            return 'Operação inválida';
    }
};

// Exemplo de uso:
const num1 = 10;
const num2 = 5;
const operation = '+';
const result = minicalcumadora(num1, num2, operation);

console.log(`Resultado: ${result}`);
