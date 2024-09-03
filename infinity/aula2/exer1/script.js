//let nascimento = prompt("Qual o ano em que você nasceu? ");
//console.log("Ano do nascimentpo: ", nascimento)
//let anoatual = 2024
//let idade = anoatual - nascimento
//console.log(idade);
//alert(idade);
const quant_horas = Number(prompt("Quantas horas você trabalha por mês? "))
const valor_horas = Number(prompt("Qual o valor da hora? "))
const salario_bruto = quant_horas * valor_horas
const inss = salario_bruto * 0.09
const ir = salario_bruto * 0.075
const fgts = salario_bruto * 0.08
const desc = inss + ir + fgts
const salario_liquido = salario_bruto - inss - ir - fgts
//console.log(`Sua idade é: ${idade} anos`)
document.write(`O total de desconto foi: ${desc} reais.`)
alert(`Seu salário líquido é: ${salario_liquido} reais`)
alert(`O total de desconto foi: ${desc} reais`)
//document.write(`Seu salário líquido é: ${salario_liquido} reais`)
document.write(`
    Salário Bruto: R$ ${salario_liquido} <br>
    Desconto do INSS: R$ ${inss} <br>
    Desconto do IR: R$ ${ir} <br>
    Desconto do FGTS: R$ ${fgts} <br>
    Salário Líquido: R$ ${salario_liquido}
    `)