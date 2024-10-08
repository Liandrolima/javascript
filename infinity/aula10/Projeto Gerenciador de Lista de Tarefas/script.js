document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Criar um novo item de tarefa
    const newTask = document.createElement('li');
    newTask.style.borderRadius = "10px";
    newTask.innerHTML = `
      <span>${taskInput.value.toUpperCase()}</span>
      <div>
        <button class="edit">Editar Tarefa</button>    
    <select class="tarefa">
        <option value="status">Status da Tarefa</option>
        <option value="iniciar">Iniciar</option>
        <option value="ocorrendo">Em processo</option>
        <option value="concluida">Concluida</option>
    </select>
        <button class="delete">Excluir Tarefa</button>
      </div>
    `;
  
    // Adicionar eventos para os botões de editar e excluir
    newTask.querySelector('.edit').addEventListener('click', function() {
        const currentText = newTask.querySelector('span').innerText;        
        const taskText = prompt('Edite a tarefa:', currentText); // Edita o texto da tarefa existente        
        if (taskText !== null) {
          newTask.querySelector('span').innerText = taskText;                    
        }
      });
    
    newTask.querySelector('.tarefa').addEventListener('change', function() {
        const selectedStatus = this.value; // Pega o valor da opção selecionada
        const taskText = newTask.querySelector('span');
        if (selectedStatus === "iniciar") {
          taskText.style.color = "blue"; // Muda a cor do select se "Iniciar" for selecionado
        } else if (selectedStatus === "ocorrendo") {
          taskText.style.color = "orange"; // Muda para cor laranja se "Em processo" for selecionado
        } else if (selectedStatus === "concluida") {
          taskText.style.color = "green"; // Muda para cor verde se "Concluída" for selecionado
        } else if (selectedStatus === "status") {
          taskText.style.color = "black";
        }
    });
    
    
     
    newTask.querySelector('.delete').addEventListener('click', function() {
      newTask.remove();
    });
  
    // Adicionar a nova tarefa à lista
    taskList.appendChild(newTask);
  
    // Limpar o campo de entrada
    taskInput.value = '';
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mensagem').innerHTML = 'Jesus só salva se renunciar!'
});
  