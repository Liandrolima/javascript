//[JS-A02] Escreva um programa em JavaScript que solicite ao usuário o nome, altura em centímetros e peso de uma pessoa. O programa deve calcular o índice de massa corporal (IMC) dessa pessoa, considerando a fórmula IMC = peso / (altura * altura), onde a altura deve ser convertida de centímetros para metros. Em seguida, o programa deve classificar o peso com base no IMC calculado, de acordo com a tabela a seguir:

//Menor que 16: Baixo peso muito grave
//De 16 a 16.99: Baixo peso grave
//De 17 a 18.49: Baixo peso
//De 18.50 a 24.99: Peso normal
//De 25 a 29.99: Sobrepeso
//De 30 a 34.99: Obesidade grau I
//De 35 a 39.99: Obesidade grau II
//Maior ou igual a 40: Obesidade grau III
//O programa deve exibir o nome da pessoa, o índice de massa corporal calculado e a classificação correspondente.

let nome = prompt("Digite seu nome");
let altura = Number(prompt("Digite sua altura em centímetros"));
let peso = Number(prompt("Digite seu peso em kg"));
let convaltura = altura / 100;
let IMC = peso / (convaltura * convaltura);
let classificação

switch (true) {
    case IMC < 16:        
        classificação = "Baixo peso muito grave";
        break;
    case IMC >= 16 && IMC <= 16.99:       
        classificação = "Baixo peso grave";
        break;
    case IMC >= 17 && IMC <= 18.49:       
        classificação = "Baixo peso";
        break;
    case IMC >= 18.50 && IMC <= 24.99:    
        classificação = "Peso normal";
        break;
    case IMC >= 25 && IMC <= 29.99:       
        classificação = "Sobrepeso";
        break;
    case IMC >= 30 && IMC <= 34.99:       
        classificação = "Obesidade grau I";
        break;
    case IMC >= 35 && IMC <= 39.99:       
        classificação = "Obesidade grau II";
        break;
    case IMC >= 40:        
        classificação = "Obesidade grau III";
        break;
    default:
        classificação = "Classificação desconhecida";
        break;
}
console.log(`Olá ${nome} seu IMC é ${IMC.toFixed(2)} e sua clasificação é: ${classificação} `)