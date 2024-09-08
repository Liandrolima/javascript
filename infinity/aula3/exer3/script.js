//Atividade 03
//Crie um código que solicita ao usuário números repetidamente
//até que ele insira um valor não numérico. O código deve somar os
//números inseridos e exibir o resultado final.
let soma = 0
let entrada;
do {
    entrada = prompt("Insira um número (ou qualquer valor não numérico para sair):");
    let numero = parseFloat(entrada)
    if (!isNaN(numero)) {
        soma += numero
    } else {
        break;
    }
    
} while (true);
console.log("A soma dos números inseridos são: " +soma);