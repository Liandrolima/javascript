//Objetivo: Praticar operações básicas de criação, acesso e modificação de
//elementos em arrays.

//Estrutura:
//Crie um array chamado cores contendo as seguintes cores, Vermelho,
//Verde, Azul.

//1 - Adicione as cores Amarelo e Roxo ao final do array.
//2 - Em seguida, remova a última cor.
//3 - Use o método splice para remover "Verde" e adicionar "Laranja" e
//"Marrom" em seu lugar.
//4 - Crie um novo array chamado novasCores contendo as primeiras duas
//cores do array cores.
//5 - Use o método join para criar uma string com todas as cores do array
//cores, separadas por uma vírgula.
//6 - Inverta a ordem dos elementos no array cores.
//7 - Exiba os arrays cores e novasCores, e a string resultante no console.

let cores = ["Vermelho", "Verde", "Azul"];
console.log(cores);
cores.push("Amarelo", "Roxo");
console.log(cores);
let ultimaCor = cores.pop();
console.log(cores);
let indiceVerde = cores.indexOf("Verde"); // Encontra o índice de "Verde"
if (indiceVerde !== -1) {
  cores.splice(indiceVerde, 1, "Laranja", "Marrom"); // Remove "Verde" e adiciona "Laranja" e "Marrom"
}
console.log(cores);
let novasCores = cores.slice(0, 2);
console.log(novasCores);
let coresString = cores.join(",");
console.log(coresString);
cores.reverse();
console.log(cores);
console.log("Array cores:", cores); 
console.log("Array novasCores:", novasCores);
console.log("String com as cores:", coresString);
