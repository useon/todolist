const todolistForm = document.querySelector('.todolistForm');
const todolistInput = document.querySelector('.todolistInput');
const listAddBtn = document.querySelector('.listAddBtn');
const todolistMain = document.querySelector('.todolistMain')
let todoArr = [];
const TODOARR_KEY = 'todoArr';
let isCheck = false;
let todolistObj;
let num = 0;


function todolistSubmit(event) {
  event.preventDefault();
  const newTodo = todolistInput.value;
  todolistObj = {
    text: newTodo,
    id: Date.now(),
  };
  todolistInput.value = '';
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
  // if (todoArr[num].check === true) {
  //   btnCheck.classList.add('btnCheckAfter');
  // }
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
  const liId = event.target.parentNode.id;
  span.classList.remove('todoCheckBefore');
  button.classList.toggle('btnCheckAfter');
  span.classList.add('todoCheckAfter');

  while (num < 1000) {
    if (todoArr[num].id === Number(liId)) {
      break;
    } else {
      num++;
    }
  }
  todoArr[num].check = !(todoArr[num].check);
  todolistSave();
  num = 0;
}

function todolistRemove(event) {
  const li = event.target.parentElement;
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