/*Atividade 03
Crie uma paleta de cores usando botões coloridos. Quando um botão de cor é clicado, definir a cor de fundo do corpo da página para essa cor selecionada.*/

const addBlackButton = document.getElementById('addBlackButton');
const addRedButton = document.getElementById('addRedButton');
const addBlueButton = document.getElementById('addBlueButton');

addBlackButton.addEventListener('click', () => {
    let liandro = document.querySelector('.liandro');
    liandro.style.background = '#000000';

})

addRedButton.addEventListener('click', () => {
    let liandro = document.querySelector('.liandro');
    liandro.style.background = '#f00';

})

addBlueButton.addEventListener('click', () => {
    let liandro = document.querySelector('.liandro');
    liandro.style.background = '#0000ff';

})
