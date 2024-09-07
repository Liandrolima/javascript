//Atividade 01
//Solicite dois números ao usuário e verifique se ambos são
//positivos, se pelo menos um é positivo, e se nenhum é positivo,
//exibindo os resultados no console.

// Solicitar os dois números ao usuário
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

// Verificar se ambos os números são positivos
if (numero1 > 0 && numero2 > 0) {
    console.log("Ambos os números são positivos.");
    document.write("Ambos os números são positivos.");
}
// Verificar se pelo menos um número é positivo
else if (numero1 > 0 || numero2 > 0) {
    console.log("Pelo menos um dos números é positivo.");
    document.write("Pelo menos um dos números é positivo.");
}
// Verificar se nenhum número é positivo
else {
    console.log("Nenhum dos números é positivo.");
    document.write("Nenhum dos números é positivo.");
}

