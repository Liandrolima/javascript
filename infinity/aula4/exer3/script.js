//Atividade 03
//Crie um código JavaScript que itere de 1 a 20 usando um loop for.

//Use continue para pular iterações quando o número for múltiplo de 3
//e break para sair do loop quando o número for maior que 15.
//Exiba os números processados no console com console.log.

for (let i = 0; i <= 20; i++) {
    if (i % 3 ===0) {
        continue;
    }
    if (i > 15) {
        break;
    }
    console.log(i);
}