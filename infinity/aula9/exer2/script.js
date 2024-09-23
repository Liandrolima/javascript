/*Atividade 02

Crie um botão que, quando clicado, adiciona um novo parágrafo com um
texto personalizado.*/

const addParagraphButton = document.getElementById('addParagraphButton');
        const paragraphContainer = document.getElementById('paragraphContainer');

        addParagraphButton.addEventListener('click', () => {
            const newParagraph = document.createElement('p'); // Cria um novo parágrafo
            newParagraph.textContent = 'Este é um parágrafo adicionado com um texto personalizado.'; // Define o texto do parágrafo
            paragraphContainer.appendChild(newParagraph); // Adiciona o parágrafo ao container
        });
