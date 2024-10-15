/*Atividade 02 Faça um Programa que mostre na tela apenas os número pares do
seguinte array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function calcularNumerosPares(arr) {
    const NumerosPares = arr.filter(function(numero) {
        return numero % 2 === 0; 
    });
    return NumerosPares; 
}


const resultado = calcularNumerosPares(numeros);
console.log(resultado); 