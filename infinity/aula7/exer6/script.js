//Atividade 06 Crie uma função chamada operacoesMatematicas que recebe dois números e uma função de callback como argumentos. A função deve aplicar a função de callback aos dois números e retornar o resultado.

function operacoesMatematicas(numero1, numero2, callback) {
    return callback(numero1, numero2);
}

// Exemplo de uso com diferentes operações matemáticas

// Função de soma
function somar(a, b) {
    return a + b;
}

// Função de subtração
function subtrair(a, b) {
    return a - b;
}

// Função de multiplicação
function multiplicar(a, b) {
    return a * b;
}

// Função de divisão
function dividir(a, b) {
    return a / b;
}

// Chamando a função com diferentes operações
console.log(operacoesMatematicas(10, 5, somar));        // 15
console.log(operacoesMatematicas(10, 5, subtrair));     // 5
console.log(operacoesMatematicas(10, 5, multiplicar));  // 50
console.log(operacoesMatematicas(10, 5, dividir));      // 2
