/*Atividade 02 Crie um arquivo JavaScript e implemente a função valorInput que irá
pegar o valor do input e coloque em um parágrafo o valor que foi
resgatado do input.*/

function valorInput() {
    // Captura o valor do input pelo ID
    const inputValue = document.getElementById('myInput').value;
    
    // Define o valor capturado no parágrafo com o ID 'output'
    document.getElementById('output').innerText = inputValue;
}
