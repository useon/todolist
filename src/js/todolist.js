const todolistForm = document.querySelector('.todolistForm');
const todolistInput = document.querySelector('.todolistInput');
const listAddBtn = document.querySelector('.listAddBtn');
const todolistMain = document.querySelector('.todolistMain')
let todoArr = [];
const TODOARR_KEY = 'todoArr';

function todolistSubmit(event) {
  event.preventDefault();
  const newTodo = todolistInput.value;
  todolistInput.value = '';
  todoArr.push(newTodo);
  todolistPaint(newTodo);
  todolistSave();
}

function todolistPaint(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btnCheck = document.createElement('button');
  const btnremove = document.createElement('button');
  btnCheck.innerText = '';
  btnCheck.classList.add('btnCheckBefore');
  span.classList.add('todoCheckBefore');
  span.innerText = newTodo;
  btnCheck.addEventListener("click", todolistCheck);
  btnremove.innerText = '❌';
  btnremove.addEventListener("click", todolistRemove);
  li.appendChild(btnCheck);
  li.appendChild(span);
  li.appendChild(btnremove);
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

function todolistRemove(event) {
  const li = event.target.parentElement;
  li.remove();
}

function todolistSave() {
  localStorage.setItem(TODOARR_KEY, JSON.stringify(todoArr));
}

const todoSaved = localStorage.getItem(TODOARR_KEY);

if (todoSaved !== null) {
  const todoParse = JSON.parse(todoSaved);
  todoArr = todoParse;
  todoParse.forEach(todolistPaint);
}