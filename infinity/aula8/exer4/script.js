/*Atividade 4 Altere o atributo src de uma tag img para trocar a imagem que ele está apresentando através do JavaScript.*/

function trocarImagem() {
    // Seleciona a imagem pelo ID
    const imagem = document.getElementById('minhaImagem');

    // Altera o atributo 'src' para a nova imagem
    imagem.src = 'imagem2.jpg'; // Substitua pelo caminho da nova imagem
}
