/* Atividade 3 Crie um elemento através do JavaScript, adicione um texto a ele e insira ele no documento.*/


function criarElemento() {
    // Cria um novo elemento <p>
    const novoParagrafo = document.createElement('p');

    // Adiciona texto ao parágrafo
    const textoParagrafo = document.createTextNode('Este é um novo parágrafo criado via JavaScript!');
    novoParagrafo.appendChild(textoParagrafo);

    // Insere o novo parágrafo no div com o ID 'container'
    const container = document.getElementById('container');
    container.appendChild(novoParagrafo);
}
