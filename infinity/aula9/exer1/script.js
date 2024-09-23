/*Atividade 01
Crie uma caixa de entrada de texto e um botão. Quando o botão é clicado,
criar uma lista não ordenada (<ul>) e adicionar cada palavra digitada na
caixa de entrada como um novo item da lista (<li>).*/

const inputText = document.getElementById('inputText');
        const addButton = document.getElementById('addButton');
        const wordList = document.getElementById('wordList');

        addButton.addEventListener('click', () => {
            const words = inputText.value.split(' '); // Divide o texto em palavras
            words.forEach(word => {
                if (word) { // Adiciona apenas palavras não vazias
                    const listItem = document.createElement('li');
                    listItem.textContent = word; // Define o texto do item da lista
                    wordList.appendChild(listItem); // Adiciona o item à lista
                }
            });
            inputText.value = ''; // Limpa a caixa de entrada após adicionar
        });