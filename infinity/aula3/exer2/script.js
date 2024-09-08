//Atividade 02
//Escreva um código que utilize a estrutura do...while para solicitar
//ao usuário que insira um número. O loop deve continuar pedindo
//ao usuário até que um número negativo seja inserido.

let numero;

do {
  numero = parseFloat(prompt("Insira um número (digite um número negativo para sair):"));
} while (numero >= 0);

console.log("Você inseriu um número negativo. Fim do loop.");
