//Atividade 04
//Crie um código que peça ao usuário para adivinhar um número
//entre 1 e 10, repetindo o pedido até que o usuário acerte. Defina
//o número a ser adivinhado diretamente no código.


const numeroCorreto = 7; // Defina o número a ser adivinhado
let palpite;

do {
  palpite = parseInt(prompt("Adivinhe um número entre 1 e 10:"));
  
  if (palpite !== numeroCorreto) {
    console.log("Tente novamente!");
  }

} while (palpite !== numeroCorreto);

console.log("Parabéns! Você adivinhou o número correto.");
