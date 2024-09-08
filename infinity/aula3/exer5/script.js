//Atividade 05
//Escreva um programa que faça o seguinte: Peça ao usuário para
//inserir um número inteiro positivo.

//Utilize um loop while para calcular e exibir a soma de todos os
//números inteiros de 1 até o número inserido pelo usuário.

//Exiba o resultado em um alerta ou no console.

let numero = parseInt(prompt("Insira um número inteiro positivo:"));
let soma = 0;
let contador = 1;

if (numero > 0) {
  while (contador <= numero) {
    soma += contador;
    contador++;
  }
  
  console.log("A soma de todos os números de 1 até " + numero + " é: " + soma);
} else {
  console.log("Por favor, insira um número inteiro positivo.");
}
