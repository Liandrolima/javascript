//Atividade 01
//Crie um código que solicite ao usuário um número
//e exiba a tabuada desse número (de 1 a 10) no console.

//Use prompt para obter o número e armazene-o em numero.
//Utilize um loop for para iterar de 1 a 10, multiplicando
//o número pelo índice do loop e exibindo o resultado.

let numero = parseFloat(prompt("Digite um numero de 1 a 10 \nTabuada do:  "));

console.log(`A tabuada do número ${numero} é:`);  // Exibe a mensagem uma vez

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);  // Exibe os cálculos no loop
}

