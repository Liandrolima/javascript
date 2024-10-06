/*Atividade 04 Crie uma função que calcula o Índice de Massa Corporal (IMC) e
retorna se a pessoa está abaixo do peso, no peso ideal ou acima do
peso.*/

function imc() {
    const n1 = document.getElementById('ipeso')
    const n2 = document.querySelector('input#ialtura')
    const res = document.getElementById('res') // Certifique-se de ter um elemento com id="resultado"
    
    let peso = Number(n1.value)
    let altura = Number(n2.value)
    let IMC = peso / (altura * altura)

    if (IMC < 18.5) {        
        res.innerHTML = `<p>Seu IMC é <strong>${IMC.toFixed(2)}</strong>. Você está abaixo do peso</p>`
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        res.innerHTML = `<p>Seu IMC é <strong>${IMC.toFixed(2)}</strong>. Seu peso está normal</p>`     
    } else if (IMC > 24.9) {
        res.innerHTML = `<p>Seu IMC é <strong>${IMC.toFixed(2)}</strong>. Você está acima do peso</p>`
    }
}

function limpar() {
    document.getElementById('ipeso').value = ''; // Limpa o campo de peso
    document.getElementById('ialtura').value = ''; // Limpa o campo de altura
    document.getElementById('res').innerHTML = ''; // Limpa o resultado
}

// Para exibir uma mensagem logo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mensagem').innerHTML = 'Cuide sempre de sua saúde!'
});


/*function limpar(){
    const n1 = document.getElementById('ipeso')
    const n2 = document.querySelector('input#ialtura')
    const res = document.getElementById('res')
    n1.value = '';
    n2.value = '';
    res.innerHtml = '';
}*/
