const questions = [
    "São processos administrativos. Exceto:",
    "Função administrativa que consiste em verificar se as coisas estão sendo feitas de acordo com o plano adotado, as instruções transmitidas e os princípios estabelecidos.",
    "As funções do administrador e as funções básicas de uma empresa foram apresentadas no",
    "Estrutura organizacional baseada no modelo piramidal é conhecida como:",
    "São exemplos de princípios gerais de administração segundo Fayol",
    "São funções da ORT:",
    "A afirmativa que informa as três formas de autoridade e a forma de autoridade mais eficiente segundo Max Webber são:",
    "Segundo Henri Fayol, as funções básicas ou operações essenciais das empresas são:",
    "São princípios da burocracia:",
    "Princípios adotados por Ford:"
];

const options = [
    ["Planejamento e direção", "Organização e controle", "Planejamento e controle", "Coordenação e departamentalização"],
    ["Previsão", "Controle", "Coordenação", "Organização"],
    ["Taylorismo", "Fordismo", "Fayolismo", "Humanismo"],
    ["Staff", "Linear", "Organização formal", "Funcional"],
    ["Divisão do trabalho, autoridade e responsabilidade, disciplina, unidade de comando.", "Estabelecimento de recursos, unidade de direção", "Planejamento, controle e coordenação.", "Tempos e movimentos, liderança, efetividade e eficiência."],
    ["Divisão do trabalho e especialização do operário, estudo da fadiga humana, hierarquia e autoridade.", "Desenho de cargos e de tarefas, estudo da fadiga humana, conceito de homo economicus.", "Padronização de métodos e de máquinas, estudo da organização informal.", "Divisão do trabalho, incentivos salariais e prêmios de produção, ênfase na estrutura organizacional"],
    ["Tradicional, carismática, racional-legal", "Tradicional, carismática, racional-legal, racional-legal", "Tradicional, carismática, carismática, racional-legal", "Sinceramente não sei"],
    ["Produção, vendas, pessoal e finanças", "Planejamento, organização, direção e controle.", "Pesquisa, previsão, planejamento, organização e controle.", "Técnica, comercial, contábil, segurança e administração."], 
    ["Hierarquia e autoridade, profissionalização dos participantes, especialização da administração, competência técnica e meritocracia, pessoalidade nas relações", "Rotinas e procedimentos padronizados, caráter informal das comunicações, especialização da administração.", "Completa previsibilidade do funcionamento, competência técnica e meritocracia,hierarquia e autoridade, profissionalismo dos participantes.", "Rotinas e procedimentos padronizados, competência técnica e antiguidade, hierarquia e autoridade, competência técnica e meritocracia, profissionalização dos participantes, caráter racional e divisão do trabalho "],
    ["Planejamento, intensificação, coordenação.", "Intensificação, economicidade, empregabilidade.", "Produtividade, economicidade, intensificação.", "Produtividade, economicidade, execução, intensificação."]
];

const correctAnswers = [3, 1, 2, 1, 0, 1, 1, 3, 2, 2];

let score = 0;  // Pontuação do usuário
let questionsDone = [];  // Perguntas já respondidas
let nowQuestion;
const roletaButton = document.querySelector('#roleta');
roletaButton.style.display = "none";

// Gera uma pergunta aleatória que ainda não foi feita
function getRandomQuestion() {
    if (questionsDone.length === questions.length) {
        showFinalScore();  // Exibe a pontuação final quando todas as perguntas forem feitas
        return;
    }

    do {
        nowQuestion = Math.floor(Math.random() * questions.length);
    } while (questionsDone.includes(nowQuestion));

    questionsDone.push(nowQuestion);
    
    document.querySelector("#question").innerHTML = questions[nowQuestion];
    const optionsContainer = document.querySelectorAll('.alternative');
    
    optionsContainer.forEach((element, index) => {
        element.textContent = options[nowQuestion][index];
        element.setAttribute('data-value', index);
    });
}

// Adiciona eventos de clique aos botões de alternativas
function selectButton() {
    const alternativas = document.querySelectorAll('.alternative');
    
    alternativas.forEach(button => {
        button.addEventListener('click', () => {
            const answer = parseInt(button.getAttribute('data-value'));
            checkAnswer(answer);
        });
    });
}

// Verifica se a resposta está correta
function checkAnswer(answer) {
    const statusAnswer = document.querySelector("#statusAnswer");
    
    if (answer === correctAnswers[nowQuestion]) {
        statusAnswer.innerHTML = "Acertou!!!";
        score++;  // Incrementa a pontuação
    } else {
        statusAnswer.innerHTML = `Errou! Resposta correta: ${options[nowQuestion][correctAnswers[nowQuestion]]}`;
    }
    
    roletaButton.style.display = "block";  // Exibe o botão para gerar nova pergunta
}

// Exibe a pontuação final e a nota
function showFinalScore() {
    const totalQuestions = questions.length;
    const finalScore = score;
    
    // Exibe a mensagem final com a pontuação e a nota
    document.querySelector("#question").innerHTML = "Você respondeu todas as perguntas!";
    document.querySelector("#statusAnswer").innerHTML = `Você acertou ${finalScore} de ${totalQuestions} perguntas.<br>Sua nota final é: ${finalScore}/${totalQuestions}.`;
    
    // Esconde o botão roleta para não gerar mais perguntas
    roletaButton.style.display = "none";
}

roletaButton.addEventListener('click', () => {
    getRandomQuestion();
    roletaButton.style.display = "none";
});

// Inicializa o quiz
getRandomQuestion();
selectButton();
