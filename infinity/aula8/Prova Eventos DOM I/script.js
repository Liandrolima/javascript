/*[JS-A08] Você está planejando uma viagem para os Estados Unidos e precisa converter algumas distâncias do sistema métrico (metros) para o sistema imperial (jardas, pés, polegadas, milhas). Para facilitar sua tarefa, você decidiu criar um conversor de unidades de comprimento.
Instruções:

Selecione a unidade de medida de destino no segundo menu suspenso. Você pode escolher entre "Jarda", "Pé", "Polegada" ou "Milha".
Clique no botão "Converter" para ver o resultado da conversão.
Dicas de Valores:

Um metro é aproximadamente igual a 1.094 jardas, 3.281 pés, 39.37 polegadas ou 0.000621 milhas.*/

function converter() {
    // Obtenha o valor inserido em metros
    const metros = parseFloat(document.getElementById('metros').value);
    
    // Verifique se o valor é válido
    if (isNaN(metros) || metros <= 0) {
        alert("Por favor, insira um valor válido em metros.");
        return;
    }

    // Obtenha a unidade selecionada
    const unidade = document.getElementById('unidade').value;

    // Variável para armazenar o resultado da conversão
    let resultado;

    // Conversão com base na unidade selecionada
    switch (unidade) {
        case 'jardas':
            resultado = metros * 1.094;
            break;
        case 'pes':
            resultado = metros * 3.281;
            break;
        case 'polegadas':
            resultado = metros * 39.37;
            break;
        case 'milhas':
            resultado = metros * 0.000621;
            break;
        default:
            resultado = "Unidade inválida";
    }

    // Exibir o resultado no parágrafo
    document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(4)} ${unidade}`;
}










/*function converterMedida(metro, callback) {
    return callback(metro);
}

// Função de callback para converter Metro para Jardas
const metroParaJardas = (metro) => metro * 1094;

// Função de callback para converter Metro para Pés
const metroParaPes = (metro) => metro * 3.281;

// Função de callback para converter Metro para Polegadas
const metroParaPolegadas = (metro) => metro * 39.37;

// Função de callback para converter Metro para Milhas
const metroParaMilhas = (metro) => metro * 0.000621;

// Exemplo de uso:
const medidaEmMetro = 25;

const medidaEmJardas = converterMedida(medidaEmMetro, metroParaJardas);
console.log(`Medida em Jardas: ${medidaEmJardas}`);

const medidaEmPes = converterMedida(medidaEmMetro, metroParaPes);
console.log(`Medida em Pés: ${medidaEmPes}`);

const medidaEmPolegadas = converterMedida(medidaEmMetro, metroParaPolegadas);
console.log(`Medida em Polegadas: ${medidaEmPolegadas}`);

const medidaEmMilhas = converterMedida(medidaEmMetro, metroParaMilhas);
console.log(`Medida em Polegadas: ${medidaEmMilhas}`);*/
