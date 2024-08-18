// Arrays com as variantes
const variantes = [
    { id: 1, image: 'https://conteudo.imguol.com.br/c/bol/fotos/e4/2018/12/15/homem-aranha-1544839682796_615x300.jpg' },
    { id: 2, image: 'https://epipoca.com.br/wp-content/uploads/2022/03/Homem-de-Ferro-Superior-nos-quadrinhos-Reproducao-1-1200x900.jpg' },
    { id: 3, image: 'https://img.odcdn.com.br/wp-content/uploads/2024/07/imagem_2024-07-26_100618145.png' },
    { id: 4, image: 'https://cinevibes.com.br/wp-content/uploads/2024/08/dfa09abab340e380345d35f290f0f09b-1024x538.jpg' },
    { id: 5, image: 'https://rollingstone.com.br/media/_versions/loki-classico-richard-e-grant-marvel-mcu-foto-reproducao_widelg.jpg' },
    { id: 6, image: 'https://rollingstone.com.br/media/uploads/reed-richards-john-krasinski-fantastic-four-foto-divulgacao-marvel.jpg' }
];

const variantes2 = [
    { id: 1, image: 'https://conteudo.imguol.com.br/c/bol/fotos/d2/2018/12/15/peter-porker-1544839711890_615x300.jpg.webp' },
    { id: 2, image: 'https://tenhaseuingresso.com/wp-content/uploads/2022/01/tomcruise1.jpg' },
    { id: 3, image: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/02/legiao_hFZUugWcTkLfea2PyqbRsDnd1oEVmlBJAjGHS06z7t.jpg.webp' },
    { id: 4, image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/deadpool-3-ryan-reynolds.jpg?w=1220&h=674&crop=1&quality=50' },
    { id: 5, image: 'https://img.odcdn.com.br/wp-content/uploads/2021/05/Loki-1024x576.jpg' },
    { id: 6, image: 'https://tm.ibxk.com.br/2023/11/16/16120226813139.jpg?ims=750x' }
];

// Variáveis de controle do jogo
let firstVariant = null;
let secondVariant = null;
let matchedVariants = 0;
let lockBoard = false; 

// Função que inicia o jogo
function startGame() {
    const gameVariants = document.getElementById('game-variants');
    gameVariants.innerHTML = ''; 
    document.getElementById('message').textContent = '';

    // Embaralha e junta as variantes
    const shuffledVariants = shuffle([...variantes, ...variantes2]);

    shuffledVariants.forEach(variant => {
        const variantElement = createVariantElement(variant);
        gameVariants.appendChild(variantElement);
    });

    // Reseta variáveis de controle
    firstVariant = null;
    secondVariant = null;
    matchedVariants = 0;
    lockBoard = false;

    document.getElementById('pontos').textContent = `Pontos: ${matchedVariants}`;
}

// Função que cria um elemento de variante no DOM
function createVariantElement(variant) {
    const variantElement = document.createElement('div');
    variantElement.classList.add('card');
    variantElement.dataset.id = variant.id;
    
    const imgElement = document.createElement('img');
    imgElement.src = variant.image;
    variantElement.appendChild(imgElement);
    
    // Adiciona evento de clique para a variante
    variantElement.addEventListener('click', handleVariantClick);

    return variantElement;
}

// Função que lida com o clique na variante
function handleVariantClick(event) {
    if (lockBoard) return;  // Impede o clique se o tabuleiro estiver bloqueado

    const clickedVariant = event.currentTarget;

    // Ignora se a variante já está virada ou se é a mesma variante clicada
    if (clickedVariant === firstVariant || clickedVariant.classList.contains('flipped')) return;

    clickedVariant.classList.add('flipped');

    if (!firstVariant) {
        firstVariant = clickedVariant;
    } else if (!secondVariant) {
        secondVariant = clickedVariant;
        checkForMatch();  // Verifica se as variantes combinam
    }
}

// Função que verifica se as duas variantes clicadas formam um par correspondente
function checkForMatch() {
    const isMatch = firstVariant.dataset.id === secondVariant.dataset.id;

    if (isMatch) {
        matchedVariants++;
        document.getElementById('pontos').textContent = `Pontos: ${matchedVariants}`;
        disableCards();  // Mantém os cards virados
        if (matchedVariants === variantes.length) {
            document.getElementById('message').textContent = 'Parabéns! Você encontrou todas as Variantes!';
        }
    } else {
        unflipCards();  // Desvira os cards se não combinarem
    }
}

// Função para manter os cards virados quando combinarem
function disableCards() {
    firstVariant.removeEventListener('click', handleVariantClick);
    secondVariant.removeEventListener('click', handleVariantClick);
    resetBoard();
}

// Função para desvirar os cards quando não combinarem
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstVariant.classList.remove('flipped');
        secondVariant.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

// Função que reseta as variáveis de controle após a verificação
function resetBoard() {
    [firstVariant, secondVariant] = [null, null];
    lockBoard = false;
}

// Função para embaralhar as variantes
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Inicia o jogo ao carregar a página
startGame();
