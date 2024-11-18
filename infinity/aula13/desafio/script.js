/*Crie um jogo simples de adivinhação, em que o computador
escolhe um número aleatório entre 1 e 10, e o jogador tenta
adivinhar o número. Aqui estão os passos:

1. O computador escolhe um número aleatório entre 1 e 10 e o
armazena.

2. O programa solicita ao jogador que insira um palpite.

3. Utilize um bloco try e catch para lidar com a entrada do jogador. Se o
jogador inserir algo que não seja um número, exiba uma mensagem
indicando que apenas números são aceitos.
4. Se o palpite estiver correto, exiba uma mensagem de parabéns. Se
estiver errado, informe ao jogador se o número escolhido pelo computador
é maior ou menor que o palpite.

*/


let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativasRestantes = 3;
console.log("Tente adivinhar o número secreto entre 1 e 10!");

while (tentativasRestantes > 0) {
    
    let palpite = parseInt(prompt("Digite seu palpite:"));

    try {
        // Verificação de campos vazios
        if (palpite === '') {
            throw new Error('Por favor, preencha ambos os campos com números válidos.');
        }

        if (isNaN(palpite)) {
            throw new Error('Os valores inseridos não são números válidos.');
        }}catch (erro) {
            console.error("Ocorreu um erro", erro.mensagem);
        }
        
        
                
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