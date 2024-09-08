//Atividade 02
//Crie um código JavaScript que itere de 1 a 10 usando um loop for.

//Use continue para pular iterações quando o número for par
//e break para sair do loop quando o número for igual a 8.
//Exiba os números processados no console.


for (let i = 0; i <= 10; i++) {
    if (i % 2 ===0) {
        continue
    }
    if (i === 8) {
        break;
    }
    console.log(i);
}