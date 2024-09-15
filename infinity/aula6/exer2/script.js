//Atividade 02

//Implemente uma função que receba um número como parâmetro e informe o quadrado desse número.

let num = Number(prompt("Digite um número e eu lhe direi o quadrado dele"));

function square(num) {
    return num * num;
}

let result = square(num);
console.log(`O quadrado do número ${num} é ${result}`);
