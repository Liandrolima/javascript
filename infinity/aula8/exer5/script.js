/*Atividade 5 Pegue todos os elementos li de dentro de uma ul que tiveram a classe item de dentro de uma ul.*/

// Seleciona todos os elementos <li> dentro de <ul> que possuem a classe 'item'
const itens = document.querySelectorAll('ul li.item');

// Itera sobre os elementos selecionados e exibe no console
itens.forEach((item) => {
    console.log(item.textContent); // Mostra o conteúdo de cada <li>
});
