document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Criar um novo item de tarefa
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span>${taskInput.value}</span>
      <div>
        <button class="edit">Editar Tarefa</button>
    <label>Status da Tarefa</label>
    <select class="tarefa">
        <option value=" " disabled select>Status</option>
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
     
    newTask.querySelector('.delete').addEventListener('click', function() {
      newTask.remove();
    });
  
    // Adicionar a nova tarefa à lista
    taskList.appendChild(newTask);
  
    // Limpar o campo de entrada
    taskInput.value = '';
  });
  