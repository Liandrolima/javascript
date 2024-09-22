//[JS-A07] Imagine que você está criando uma solução digital para restaurantes, incluindo uma calculadora de gorjetas de fácil uso. O objetivo é desenvolver uma página da web onde os clientes possam inserir o valor total da conta e escolher a qualidade do serviço: "Bom", "Regular" ou "Ruim". Para isso, serão utilizadas arrow functions e funções de callback.

// Arrow functions para calcular porcentagem de gorjeta
const calcularGorjetaBom = (valorConta) => valorConta * 0.20;
const calcularGorjetaRegular = (valorConta) => valorConta * 0.10;
const calcularGorjetaRuim = (valorConta) => valorConta * 0.05;

// Função principal que calcula a gorjeta usando uma função de callback
const calcularGorjeta = () => {
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const qualidadeServico = document.getElementById('qualidadeServico').value;
    let gorjeta;

    // Callback para determinar a gorjeta de acordo com a qualidade do serviço
    const escolherCallback = (qualidade) => {
        switch (qualidade) {
            case 'bom':
                return calcularGorjetaBom;
            case 'regular':
                return calcularGorjetaRegular;
            case 'ruim':
                return calcularGorjetaRuim;
        }
    };

    // Verificando se o valor da conta foi inserido corretamente
    if (!isNaN(valorConta) && valorConta > 0) {
        // Aplicando o callback correto
        const callback = escolherCallback(qualidadeServico);
        gorjeta = callback(valorConta);

        // Exibindo o resultado
        document.getElementById('resultado').textContent = `A gorjeta sugerida é: R$ ${gorjeta.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira um valor válido para a conta.';
    }
};