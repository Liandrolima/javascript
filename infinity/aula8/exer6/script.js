/*Atividade 6  crie uma função no JavaScript que irá trocar o texto de um elemento que está em uma lista ul.*/

function trocarTexto(index, novoTexto) {
    // Seleciona todos os elementos <li> da lista <ul> pelo ID 'minhaLista'
    const listaItens = document.querySelectorAll('#minhaLista li');

    // Verifica se o índice é válido
    if (index >= 0 && index < listaItens.length) {
        // Troca o texto do item no índice fornecido
        listaItens[index].textContent = novoTexto;
    } else {
        console.log('Índice inválido!');
    }
}
