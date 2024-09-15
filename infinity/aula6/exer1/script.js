//Atividade 01
//Escreva uma função que permita contar o número de vogais contidas
//em uma string fornecida pelo usuário. Por exemplo, o usuário informa
//a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).

let palavra = prompt("Digite uma palavra e eu lhe direi quantas vogais ele tem")
function countVowelsInString(palavra) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (const char of palavra) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

function findVowels(palavra) {
    const vowels = 'aeiouAEIOU';
    const foundVowels = new Set();
    
    for (const char of palavra) {
        if (vowels.includes(char)) {
            foundVowels.add(char.toLowerCase());
        }
    }
    
    return Array.from(foundVowels);
}

// Exemplo de uso:
document.write(`Você digitou a palavra ${palavra}, ela contem`,  countVowelsInString(palavra), `vogais e elas são:`, findVowels(palavra)); 
