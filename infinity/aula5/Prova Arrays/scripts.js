document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Criar um novo item de tarefa
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span>${taskInput.value}</span>
      <div>
        <button class="edit">Editar</button>
        <button class="delete">Excluir</button>
      </div>
    `;
  
    // Adicionar eventos para os botões de editar e excluir
    newTask.querySelector('.edit').addEventListener('click', function() {
      const taskText = prompt('Edite a tarefa:', taskInput.value);
      if (taskText !== null) {
        newTask.querySelector('span').innerText = taskText;
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
  