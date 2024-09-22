//Atividade 05
//Crie uma função que aceita um número e retorna uma função que, por sua
//vez, aceita outro número e retorna a soma dos dois.

function somarNumeros(numero1) {
    return function(numero2) {
        return numero1 + numero2;
    };
}

// Exemplo de uso
const somarComCinco = somarNumeros(5);
const resultado = somarComCinco(3);

console.log(`A soma é: ${resultado}`); // A soma é: 8

