//Atividade 03
//Crie um código que solicite ao usuário um número, verifique
//se é positivo, negativo ou zero, e exiba uma mensagem no console.

//Use prompt para obter o número, armazene-o em numero,
//e utilize if, else if, e else para a verificação.
//Exiba a mensagem com console.log.

let numero = Number(prompt("Digite um número"))
if (numero > 0) {
    console.log("O número é <strong>Positivo</strong>")
    document.write("O número é <strong>Positivo</strong>")
}else if (numero < 0) {
    console.log("O número é <strong>Negativo</strong>")
    document.write("O número é <strong>Positivo</strong>")
}else {
    console.log("O número é <strong>Zero</strong>")
    document.write("O número é <strong>Positivo</strong>")
}