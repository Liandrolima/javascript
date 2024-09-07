//Atividade 02
//Crie um código que solicite ao usuário dois números, compare-os com
//operadores de comparação.

//Use prompt para obter os números e armazene-os em numero1 e numero2.
//Utilize operadores de comparação e mostre os resultados com console.log.

// Solicitar dois números ao usuário
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

// Comparar os números e mostrar os resultados
console.log(`O número 1 é igual ao número 2? ${numero1 == numero2}`);
alert(`O número 1 é igual ao número 2? ${numero1 == numero2}`);
console.log(`O número 1 é estritamente igual ao número 2? ${numero1 === numero2}`);
alert(`O número 1 é estritamente igual ao número 2? ${numero1 === numero2}`);
console.log(`O número 1 é maior que o número 2? ${numero1 > numero2}`);
console.log(`O número 1 é menor que o número 2? ${numero1 < numero2}`);
console.log(`O número 1 é maior ou igual ao número 2? ${numero1 >= numero2}`);
console.log(`O número 1 é menor ou igual ao número 2? ${numero1 <= numero2}`);
console.log(`O número 1 é diferente do número 2? ${numero1 != numero2}`);
console.log(`O número 1 é estritamente diferente do número 2? ${numero1 !== numero2}`);
