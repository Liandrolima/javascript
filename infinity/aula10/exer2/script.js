/*Atividade 02 Crie um formulário com um campo de texto e um botão. Ao clicar no
botão, adicione um novo elemento à página com o texto digitado no
campo de texto.*/

function adicionar() {
    const mensagem = document.getElementById('msg').value; // Pegue o valor do campo
    const resultado = document.getElementById('res'); // Selecione a div de resultado

    if (mensagem !== "") {
        resultado.innerHTML = `<strong>${mensagem}</strong>`;
    } else {
        resultado.innerHTML = "<strong>Por favor, digite uma mensagem.</strong>";
    }
}



/*function adicionar() {
    const mensagem = window.document.getElementById('msg').value;
    
    const m = (msg.value)
    
    
    res.innerHTML = `<strong>${m}</strong>`
}*/