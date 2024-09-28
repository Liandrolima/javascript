/*[JS-A09] Você foi contratado para desenvolver um aplicativo de anotações simples que permita aos usuários adicionar notas de texto e excluí-las conforme necessário. O objetivo é criar uma interface de usuário amigável que funcione no navegador.
Requisitos Técnicos

1- Utilize HTML e JavaScript para criar a interface e a funcionalidade do aplicativo.
2- Ao clicar no botão "Adicionar Nota", a nota digitada no campo de entrada de texto deve ser exibida na lista de notas abaixo do campo de entrada.
3- Cada nota deve ser acompanhada de um botão "Excluir" que, quando clicado, removerá a nota da lista.
4- O aplicativo deve ser responsivo, adaptando-se à largura da janela do navegador.
5- Sinta-se à vontade para personalizar a aparência e o estilo do aplicativo conforme desejar.*/

// Seleciona os elementos do DOM
const addNoteButton = document.getElementById('addNoteButton');
const noteText = document.getElementById('noteText');
const noteList = document.getElementById('noteList');

// Função para adicionar uma nova nota
function addNote() {
    const note = noteText.value.trim();

    // Verifica se o campo de entrada não está vazio
    if (note !== '') {
        const li = document.createElement('li');
        li.textContent = note;

        // Cria botão de exclusão
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        // Adiciona o botão à nota
        li.appendChild(deleteButton);

        // Adiciona a nota à lista
        noteList.appendChild(li);

        // Limpa o campo de entrada
        noteText.value = '';
    }
}

// Evento de clique no botão "Adicionar Nota"
addNoteButton.addEventListener('click', addNote);

// Evento de pressionar Enter no campo de texto
noteText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addNote();
    }
});
