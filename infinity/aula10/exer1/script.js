/*Atividade 01
Crie um formulário com campos de nome, email e senha. Adicione um
evento de submit ao formulário que valida se todos os campos foram
preenchidos. Se não, exiba uma mensagem de erro.*/

const form = document.getElementById('meuForm');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const nome = document.getElementById('inome').value;
    const email = document.getElementById('iemail').value;
    const senha = document.getElementById('isen').value;
    if(nome && email && senha != "") {
        console.log('Nome enviado: ' + nome);
        console.log('Nome enviado: ' + email);
        console.log('Nome enviado: ' + senha);
    }else {
        const mensagemErro = document.getElementById('mensagemErro');
        mensagemErro.textContent = "Erro! Preencha todos os dados";
        mensagemErro.style.display = "block";
    }
    
})