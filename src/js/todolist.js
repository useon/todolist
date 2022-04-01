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
  span.classList.add('todoCheckBefore');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.classList.add('btnCheckBefore');
  button.addEventListener("click", todolistCheck);
  li.appendChild(span);
  li.appendChild(button);
  todolistMain.appendChild(li);
}

todolistForm.addEventListener("submit", todolistSubmit);

function todolistCheck(event) {
  const span = event.target.parentNode.firstChild;
  const button = event.target;
  span.classList.remove('todoCheckBefore');
  button.classList.remove('btnCheckBefore');
  span.classList.add('todoCheckAfter');
  button.classList.add('btnCheckAfter');
}