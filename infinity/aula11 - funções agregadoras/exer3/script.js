/*Atividade 03 Faça um Programa que calcule a soma de todos os números do seguinte
array [1, 2, 3, 4, 5, 6].*/

const numeros = [1, 2, 3, 4, 5, 6];
const resultado = numeros.reduce(somatorio);
function somatorio(total, numero) {
    return total + numero;
}
document.querySelector("#demo").innerHTML = resultado;