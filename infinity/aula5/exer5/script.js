/*FAÇA UM PROGRAMA QUE PEDE PARA O USUÁRIO DIGITAR UMA QUANTIDADE ILIMITADA DE PRODUTOS, ONDE PARA CADA PRODUTO ELE DIGITARÁ: nome, preço E GUARDARÁ EM UMA LISTA, E ESSA LISTA GUARDARÁ EM UMA LISTA MAIOR CHAMADA estoque, QUANDO O USUÁRIO RESOLVER ENCERRAR VOCÊ VAI:
MOSTRA QUAL FOI O PRODUTO MAIS CARO VENDIDO
MOSTRA QUAL FOI O PRODUTO MAIS BARATO VENDIDO
MOSTRA O TOTAL QUE FOI VENDIDO (QUANTOS ITENS E QUAL VALOR DA SOMATÓRIA DELES)*/


const estoque = []

while (true){
    const menu =prompt(`
        Escolha uma opção:
        1 - Adicionar um novo produto
        2 - Sair
        `)
    if (menu === "1"){
        const nome_produto = prompt("Digite o nome do produto")
        const preco_produto = Number(prompt("Digite o preço do produto"))
        const novo_produto = [nome_produto, preco_produto]
        estoque.push(novo_produto)
    }else if(menu === "2"){
        console.log("Fim do programa")
        break
    }else{
        console.log("Opção inválida")
    }
}

let produto_mais_caro = estoque[0]
let produto_mais_barato = estoque[0]
let soma_total = 0

for (produto_da_vez of estoque){
    const preco_atual = produto_da_vez[1]

    if(preco_atual > produto_mais_caro[1]){
        produto_mais_caro = produto_da_vez
    }

    if(preco_atual < produto_mais_barato[1]){
        produto_mais_barato = produto_da_vez
    }

    soma_total += preco_atual
}


console.log(`O produto mais caro foi o ${produto_mais_caro[0]} que custou R$ ${produto_mais_caro[1]}`)

console.log(`O produto mais barato foi o ${produto_mais_barato[0]} que custou R$ ${produto_mais_barato[1]}`)

console.log(`Foram vendidos ${estoque.length} produtos no total de R$ ${soma_total}`)
