//Atividade 02
//Crie uma arrow function chamada contarVogais que recebe uma
//string como argumento e retorna a quantidade de vogais na string.

const contarVogaisArrow = (palavra) => {
    const vogais = 'aeiouAEIOU';
    let count = 0;

    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            count++;
        }
    }
    
    return count;
};

// Exemplo de uso:
console.log(contarVogaisArrow('humildade')); // Saída: 2



