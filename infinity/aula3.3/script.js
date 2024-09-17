let valor_final = 0
while(true){
    const menu = prompt(`
        Escolha uma opção
        1 - Passar um produto
        2 - Sair
    `)
    if(menu === "1"){
        const produto = prompt("Digite o nome do produto: ")
        const preco = Number(prompt("Digite o preço do produto: "))
        valor_final += preco
    }else if (menu === "2"){
        alert("Fim do programa")
        alert(`Valor total a pagar R$ ${valor_final}`)
        break
    }else{
        alert("Opção Inválida")
    }
}