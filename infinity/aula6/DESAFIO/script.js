function rollDice() {
    // Lança dois dados e retorna a soma dos resultados
    return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
}

function crapsGame() {
    const roll = rollDice();
    console.log(`Você tirou: ${roll}`);

    if (roll === 7 || roll === 11) {
        console.log("Você tirou um natural! Você ganhou!");
    } else if (roll === 2 || roll === 3 || roll === 12) {
        console.log("Craps! Você perdeu.");
    } else {
        // O valor do ponto é o resultado da primeira jogada
        const point = roll;
        console.log(`Seu ponto é: ${point}`);
        let continueRolling = true;

        while (continueRolling) {
            const newRoll = rollDice();
            console.log(`Você tirou: ${newRoll}`);
            
            if (newRoll === point) {
                console.log("Você tirou o ponto novamente! Você ganhou!");
                continueRolling = false;
            } else if (newRoll === 7) {
                console.log("Você tirou um 7 antes de tirar o ponto! Você perdeu.");
                continueRolling = false;
            }
        }
    }
}

// Inicia o jogo
crapsGame();
