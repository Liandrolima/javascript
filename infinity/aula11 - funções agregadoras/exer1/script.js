/*Atividade 01
Faça um programa que mostre na tela o dobro de cada número do
seguinte array [50, 45, 67, 89, 10, 5].*/


const numeros = [50, 45, 67, 89, 10, 5];

function calcularDobro(arr) {
    const dobroDoNumero = arr.map(function(numero) {
        return numero * 2; // Multiplica cada número por 2
    });
    return dobroDoNumero; // Retorna o array com os números dobrados
}

// Chamando a função e armazenando o resultado
const resultado = calcularDobro(numeros);
console.log(resultado); // Exibe o array com os números dobrados
