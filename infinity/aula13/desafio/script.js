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

function validar() {
    const palpite = document.querySelector('#txtn1').value;
    document.querySelector('#error').innerHTML = ''; // Limpar qualquer mensagem de erro anterior

    try {
        // Verificação de campos vazios
        if (palpite === '') {
            throw new Error('Por favor, preencha com um número válido.');
        }

        if (palpite > 10) {
            throw new Error('Por favor, preencha com um número de 0 até 10.');
        }

        // Converter o palpite para número
        const palpiteNumerico = Number(palpite);

        // Verificar se o palpite é um número válido
        if (isNaN(palpiteNumerico)) {
            throw new Error('Por favor, insira um número válido.');
        }

        // Verificar se o palpite é correto
        if (palpiteNumerico === numeroSecreto) {
            document.querySelector('#error').innerHTML = "Parabéns! Você adivinhou o número!";
            document.querySelector('#error').style.color = '#4CAF50';
            console.log("Parabéns! Você adivinhou o número!");
            // Reiniciar o jogo
            reiniciarJogo();
        } else {
            tentativasRestantes--;
            if (tentativasRestantes > 0) {
                document.querySelector('#error').innerHTML = `Errado! Você tem ${tentativasRestantes} tentativas restantes.`;
                console.log(`Errado! Você tem ${tentativasRestantes} tentativas restantes.`);
            } else {
                document.querySelector('#error').innerHTML = `Você perdeu! O número secreto era ${numeroSecreto}.`;
                console.log(`Você perdeu! O número secreto era ${numeroSecreto}.`);
                // Reiniciar o jogo
                reiniciarJogo();
            }
        }
    } catch (error) {
        document.querySelector('#error').innerHTML = "Erro: " + error.message;
        console.error("Erro: ", error.message);
    }
}

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    tentativasRestantes = 3;
    // Limpar o campo de entrada de dados
    document.querySelector('#txtn1').value = '';
}
