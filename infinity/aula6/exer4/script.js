//Atividade 04
//Escreva uma função que verifica se um número fornecido pelo usuário em
//um prompt é primo ou não.


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let num = Number(prompt("Digite um número e eu lhe direi se é primo ou não"));

if (isPrime(num)) {
    console.log(`${num} é primo`);
} else {
    console.log(`${num} não é primo`);
}
