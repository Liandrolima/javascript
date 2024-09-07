//[JS-A01] Considere três notas (n1, n2, n3) e seus respectivos pesos (p1, p2, p3). Calcule a média ponderada das notas e atribua o resultado à variável "media". Após o cálculo, exiba a média ponderada no console.

//OBS: Para calcular a média ponderada multiplica os valores das notas pelos valores dos pesos, e divide pelas somas de todos os pesos. Lembre-se de declarar valores para os pesos e para as notas.

// Declarar as notas e os pesos
let n1 = 7.5;
let n2 = 8.0;
let n3 = 6.5;
let p1 = 2;
let p2 = 3;
let p3 = 5;

// Calcular a média
let media = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3);

// Exibir a média formatada com duas casas decimais
console.log(`média das notas é ${media.toFixed(2)}` );
alert(`média das notas é ${media.toFixed(2)}`);
document.write(`média das notas é ${media.toFixed(2)}`);