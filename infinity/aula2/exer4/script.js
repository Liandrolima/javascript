//Atividade 04
//Crie um código JavaScript que solicite ao usuário dois números
//e uma operação matemática, utilize switch para realizar a operação e exibir o resultado.

//Solicite os números com prompt e armazene em numero1 e numero2.
//Solicite a operação e armazene em operacao.
//Utilize switch para realizar a operação escolhida e exiba o resultado com console.log.

let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha uma operação (+, -, *, /, %):");
let resultado;

switch (operacao) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        if (numero2 === 0) {
            console.log("Erro: Divisão por zero não permitida.");
            resultado = undefined;
        } else {
            resultado = numero1 / numero2;
        }
        break;
    case '%':
        if (numero2 === 0) {
            console.log("Erro: Divisão por zero não permitida.");
            resultado = undefined;
        } else {
            resultado = numero1 % numero2;
        }
        break;
    default:
        console.log("Operação inválida.");
        resultado = undefined;
}

if (resultado !== undefined) {
    console.log(`O resultado da operação ${numero1} ${operacao} ${numero2} é ${resultado}.`);
    alert(`O resultado da operação ${numero1} ${operacao} ${numero2} é ${resultado}.`);
}
