//Atividade 07
//Faça um programa que use a função valorPagamento para determinar o
//valor a ser pago por uma prestação de uma conta. O programa deverá
//solicitar ao usuário o valor da prestação e o número de dias em atraso e
//passar estes valores para a função valorPagamento, que calculará o
//valor a ser pago e devolverá este valor ao programa que a chamou. O
//programa deverá então exibir o valor a ser pago na tela.
//Após a execução o programa deverá voltar a pedir outro valor de
//prestação e assim continuar até que seja informado um valor igual a zero
//para a prestação. Neste momento o programa deverá ser encerrado,
//exibindo o relatório do dia, que conterá a quantidade e o valor total de
//prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte
//forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando
//houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.


function valorPagamento(valorPrestacao, diasAtraso) {
    const multa = 0.03; // 3% de multa
    const jurosPorDia = 0.001; // 0.1% de juros por dia

    if (diasAtraso > 0) {
        return valorPrestacao * (1 + multa) * (1 + jurosPorDia * diasAtraso);
    } else {
        return valorPrestacao;
    }
}

function main() {
    let totalPrestacoes = 0;
    let quantidadePrestacoes = 0;

    while (true) {
        const valorPrestacao = parseFloat(prompt("Digite o valor da prestação (ou 0 para encerrar):"));
        
        if (valorPrestacao === 0) {
            break;
        }
        
        const diasAtraso = parseInt(prompt("Digite o número de dias em atraso:"), 10);
        const valorPago = valorPagamento(valorPrestacao, diasAtraso);

        console.log(`Valor a ser pago: R$ ${valorPago.toFixed(2)}`);

        totalPrestacoes += valorPago;
        quantidadePrestacoes++;
    }

    console.log(`\nRelatório do dia:`);
    console.log(`Quantidade de prestações pagas: ${quantidadePrestacoes}`);
    console.log(`Valor total de prestações pagas: R$ ${totalPrestacoes.toFixed(2)}`);
}

// Executa o programa
main();


