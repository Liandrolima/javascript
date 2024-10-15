const questions = [
    "São processos administrativos.Exceto:",
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
    ["Staff","Linear", "Organização formal", "Funcional"],
    ["Divisão do trabalho, autoridade e responsabilidade, disciplina, unidade de comando.","Estabelecimento de recursos, unidade de direção", "Planejamento, controle e coordenação.", "Tempos e movimentos, liderança, efetividade e eficiência."],
    ["Divisão do trabalho e especialização do operário, estudo da fadiga humana, hierarquia e autoridade.","Desenho de cargos e de tarefas, estudo da fadiga humana, conceito de homo economicus.", "Padronização de métodos e de máquinas, estudo da organização informal.", "Divisão do trabalho, incentivos salariais e prêmios de produção, ênfase na estrutura organizacional"],
    ["Tradicional, carismática, racional-legal", "Tradicional, carismática, racional-legal, racional-legal", "Tradicional, carismática, carismática, racional-legal", "Sinceramente não sei"],
    ["Produção, vendas, pessoal e finanças", "Planejamento, organização, direção e controle.", "Pesquisa, previsão, planejamento, organização e controle.", "Técnica, comercial, contábil, segurança e administração."], 
    ["Hierarquia e autoridade, profissionalização dos participantes, especialização da administração, competência técnica e meritocracia, pessoalidade nas relações", "Rotinas e procedimentos padronizados, caráter informal das comunicações, especialização da administração.", "Completa previsibilidade do funcionamento, competência técnica e meritocracia,hierarquia e autoridade, profissionalismo dos participantes.", "Rotinas e procedimentos padronizados, competência técnica e antiguidade, hierarquia e autoridade, competência técnica e meritocracia, profissionalização dos participantes, caráter racional e divisão do trabalho "],
    ["Planejamento, intensificação, coordenação.", "Intencificação, economicidade, empregabilidade.", "produtividade, economicidade, intensificação.", "Produtividade, economicidade, execução, intencificação."]       
];
const correctAnswers = [3,1,2,1,0,1,1,3,2,2];

let roletaButton = document.querySelector('#roleta')
roletaButton.style.display = "none";
let nowQuestion = Math.floor(Math.random() * questions.length);

generateQuestions();
selectButton();

function generateQuestions(){
    
    document.querySelector("#question").innerHTML = questions[nowQuestion];
    
    const optionsContainer = document.querySelectorAll('button');
    optionsContainer.forEach((element,index) =>{element.textContent = options[nowQuestion][index]});
    
}

function selectButton(){
    const alternativas = document.querySelectorAll('.alternativa');

    alternativas.forEach(button =>{
        button.addEventListener('click', () => {
            const answer = button.value;0 
            checkAnswer(answer);
    })
})
}

function checkAnswer(answer){
    answer = parseInt(answer);
    let statusAnswer = document.querySelector("#statusAnswer");
    if(answer == correctAnswers[nowQuestion]){
        statusAnswer.innerHTML = "Acertou!!!"
    }
    else{
        console.log
        statusAnswer.innerHTML = `Errou meu chapa, resposta correta ${options[nowQuestion][correctAnswers[nowQuestion]]}`
    }
    roletaButton.style.display = "block";
}

document.querySelector('#roleta').addEventListener('click', () => location.reload())