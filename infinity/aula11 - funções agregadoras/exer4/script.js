/*Atividade 04 Dada uma lista de números imprima cada elemento elevado ao
quadrado.*/

const numeros = [1, 2, 3, 4, 5, 6];
function calcularQuadrado(arr){
    const quadrado = arr.map(function(numero){
        return numero ** 2;
    })
    return quadrado;
}

const resultado = calcularQuadrado(numeros);
console.log(resultado);
document.querySelector("#demo").innerHTML = resultado