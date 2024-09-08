//Atividade 04
//Crie um código JavaScript que solicite ao usuário uma palavra ou
//frase e, em seguida, utilize o loop for...of para iterar sobre cada
//caractere da string, exibindo-os no console.

const palavra = prompt("Informe uma palavra")
for (const letra of palavra) {
    console.log(letra);
}
