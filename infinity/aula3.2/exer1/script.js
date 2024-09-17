//FAÇA UM PROGRMA PARA ADIVINHAR UM NÚMERO SECRETO ENTRE 1-10 ANTERIORMENTE Á ENTRADA DO USUÁRIO EM SUA TENTATIVAS. CRIE UMA VARIÁVEL PARA CALCULAR A QUANTIDADE RESTANTE DE TENTATIVAS DO USUÁRIO.


let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativasRestantes = 3;
console.log("Tente adivinhar o número secreto entre 1 e 10!");

while (tentativasRestantes > 0) {
    
    let palpite = parseInt(prompt("Digite seu palpite:"));

    
    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você adivinhou o número!");
        break; 
    } else {
        tentativasRestantes--; 
        console.log(`Errado! Você tem ${tentativasRestantes} tentativas restantes.`);
    }

    
    if (tentativasRestantes === 0) {
        console.log(`Você perdeu! O número secreto era ${numeroSecreto}.`);
    }
}
