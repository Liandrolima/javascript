//Objetivo: Praticar operações básicas de criação, acesso e
//modificação de elementos em arrays.

//Estrutura:
//Crie um array chamado animais contendo os seguintes
//elementos, Cachorro, Gato, Papagaio. Em seguida:ok

//1 - Adicione o elemento Tartaruga ao final do arrayok
//2 - Remova o primeiro elemento e adicione o elementook
//Coelho no início.ok
//3 - Depois, substitua o elemento na posição 2 por Hamster.ok
//4 - Exiba o comprimento atual do array.ok
//5 - Acesse e exiba no console o elemento na posição 1.ok
//6 - Finalmente, exiba o array final no console.

let animais = ["Cachorro", "Gato", "Papagaio"];
animais.push("Tartaruga");
console.log(animais)
let primeiroanimal = animais.shift();
animais.unshift("Coelho");
console.log(animais);
animais[2] = "Hamster";
console.log(animais);
console.log("Comprimento atual do array: " + animais.length);
console.log("Elemento na posição 1: " + animais[1]);;
console.log("Array final: ", animais);


