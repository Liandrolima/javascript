//Atividade 06
//Crie um código JavaScript que solicite ao usuário o nome e a idade através de
//prompt. Em seguida, exiba uma mensagem formatada no console utilizando
//tanto a concatenação tradicional quanto template strings.
let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
console.log("Olá," + nome + "! Você tem," + idade + "anos.");
alert("Olá," + nome + "! Você tem," + idade + "anos.");
document.write("Olá," + nome + "! Você tem," + idade + "anos.");

let mensagem = `Ola´, ${nome} vc tem ${idade} anos de idade`
console.log(mensagem)
alert(mensagem)
document.write(mensagem)
