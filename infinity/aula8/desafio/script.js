/*Crie uma página HTML com uma caixa de entrada (input), um botão "Adicionar Tarefa" e uma lista de tarefas (ul). Escreva funções em JavaScript para realizar as seguintes operações:

Adicionar uma nova tarefa à lista quando o botão "Adicionar Tarefa" for clicado.

Marcar uma tarefa como concluída quando ela for clicada.

Remover uma tarefa da lista quando um botão de exclusão associado a ela for clicado.
Cada tarefa na lista deve ter um checkbox para indicar se está concluída e um botão de exclusão para remover a tarefa.
Adicione estilos CSS para melhorar a aparência da lista de tarefas.
Dicas:
Use o método document.createElement para criar elementos (li, input, button) dinamicamente.
Ao marcar uma tarefa como concluída, modifique seu estilo visualmente (por exemplo, alterando a
cor ou adicionando uma classe CSS).
Considere armazenar as tarefas em uma estrutura de dados, como um array, para facilitar a manipulação.*/

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
  
