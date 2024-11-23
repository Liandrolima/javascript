document.addEventListener('DOMContentLoaded', () => {
    const breedButtonsContainer = document.getElementById('breed-buttons');
    const dogImagesContainer = document.getElementById('dog-images');

    // Função para buscar a lista de raças de cachorro
    async function fetchBreeds() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();
            
            if (data.status === 'success') {
                displayBreeds(data.message);
            } else {
                throw new Error('Erro ao buscar raças');
            }
        } catch (error) {
            alert('Erro ao carregar a lista de raças: ' + error.message);
        }
    }

    // Função para exibir os botões de raças
    function displayBreeds(breeds) {
        for (const breed in breeds) {
            const button = document.createElement('button');
            button.textContent = breed;
            button.addEventListener('click', () => fetchDogImages(breed));
            breedButtonsContainer.appendChild(button);
        }
    }

    // Função para buscar imagens da raça selecionada
    async function fetchDogImages(breed) {
        try {
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`);
            const data = await response.json();
            
            if (data.status === 'success') {
                displayDogImages(data.message);
            } else {
                throw new Error('Erro ao buscar imagens');
            }
        } catch (error) {
            alert('Erro ao carregar as imagens: ' + error.message);
        }
    }

    // Função para exibir as imagens das raças
    function displayDogImages(images) {
        dogImagesContainer.innerHTML = ''; // Limpar imagens anteriores
        images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            dogImagesContainer.appendChild(img);
        });
    }

    // Chamada inicial para carregar as raças
    fetchBreeds();
});
