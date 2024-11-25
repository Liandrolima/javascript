document.addEventListener('DOMContentLoaded', () => {
    const breedButtonsContainer = document.getElementById('breed-buttons');
    const dogImagesContainer = document.getElementById('dog-images');
    const loadingMessage = document.createElement('p');
    loadingMessage.textContent = 'Carregando...';
    loadingMessage.style.display = 'none'; // Oculto inicialmente
    document.body.appendChild(loadingMessage);

    // Função para buscar a lista de raças de cachorro
    async function fetchBreeds() {
        try {
            showLoading(true);
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            
            if (!response.ok) throw new Error(`Erro ${response.status}: Falha ao buscar raças`);
            
            const data = await response.json();
            
            if (data.status === 'success') {
                displayBreeds(data.message);
            } else {
                throw new Error('Erro desconhecido ao buscar raças');
            }
        } catch (error) {
            alert(`Erro ao carregar a lista de raças: ${error.message}`);
        } finally {
            showLoading(false);
        }
    }

    // Função para exibir os botões de raças
    function displayBreeds(breeds) {
        breedButtonsContainer.innerHTML = ''; // Limpar botões anteriores
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
            showLoading(true);
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`);
            
            if (!response.ok) throw new Error(`Erro ${response.status}: Falha ao buscar imagens`);
            
            const data = await response.json();
            
            if (data.status === 'success') {
                displayDogImages(data.message);
            } else {
                throw new Error('Erro desconhecido ao buscar imagens');
            }
        } catch (error) {
            alert(`Erro ao carregar as imagens: ${error.message}`);
        } finally {
            showLoading(false);
        }
    }

    // Função para exibir as imagens das raças
    function displayDogImages(images) {
        dogImagesContainer.innerHTML = ''; // Limpar imagens anteriores
        images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = 'Imagem de cachorro';
            dogImagesContainer.appendChild(img);
        });
    }

    // Função para exibir ou ocultar a mensagem de carregamento
    function showLoading(isLoading) {
        loadingMessage.style.display = isLoading ? 'block' : 'none';
    }

    // Chamada inicial para carregar as raças
    fetchBreeds();
});
