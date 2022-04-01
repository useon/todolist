const todolistForm = document.querySelector('.todolistForm');
const todolistInput = document.querySelector('.todolistInput');
const listAddBtn = document.querySelector('.listAddBtn');
const todolistMain = document.querySelector('.todolistMain')


function todolistSubmit(event) {
  event.preventDefault();
  const newTodo = todolistInput.value;
  todolistInput.value = '';
  todolistPaint(newTodo)
}

function todolistPaint(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '❌';
  li.appendChild(span);
  li.appendChild(button);
  todolistMain.appendChild(li);
}

todolistForm.addEventListener("submit", todolistSubmit);