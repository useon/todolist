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
  const todolistObj = {
    text: newTodo,
    id: Date.now(),
  }
  todoArr.push(todolistObj);
  todolistPaint(todolistObj);
  todolistSave();
}

function todolistPaint(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  const btnCheck = document.createElement('button');
  const btnremove = document.createElement('button');
  btnCheck.innerText = '';
  span.classList.add('todoCheckBefore');
  span.innerText = newTodo.text;
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
  button.classList.toggle('btnCheckAfter');
  span.classList.add('todoCheckAfter');
}



function todolistRemove(event) {
  const li = event.target.parentElement;
  console.log(li.id)
  li.remove();
  todoArr = todoArr.filter((todo) => todo.id !== parseInt(li.id));
  todolistSave();
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