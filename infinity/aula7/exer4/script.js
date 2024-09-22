//Atividade 04
//Implemente uma função (callback) que receba um número como
//parâmetro e informe o cubo desse número

// Função que calcula o cubo de um número
function calcularCubo(numero, callback) {
    const cubo = numero ** 3;
    callback(cubo);
}

// Função de callback que exibe o resultado
function mostrarResultado(resultado) {
    console.log(`O cubo do número é: ${resultado}`);
}

// Chamando a função com um número e o callback
calcularCubo(10, mostrarResultado);
