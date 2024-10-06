/*Atividade 03 Crie uma função que recebe um array de números e retorna a soma deles.*/


function somar() {
    let numeros = [1, 2, 3, 4, 5];
    let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    console.log(soma);
    document.getElementById('resultado').innerHTML= `A soma é ${soma}`;
}