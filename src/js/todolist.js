const todolistForm = document.querySelector('.todolistForm');
const todolistInput = document.querySelector('.todolistInput');
const listAddBtn = document.querySelector('.listAddBtn');
const todolistMain = document.querySelector('.todolistMain')

let todoArr = [];
const TODOARR_KEY = 'todoArr';
let isCheck = false;
let todolistObj;
let num = 0;




function todolistPaint(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  const btnCheck = document.createElement('button');
  const btnRemove = document.createElement('button');
  btnCheck.classList.add('btnCheck')
  btnRemove.classList.add('btnRemove');
  btnCheck.innerText = '';
  span.innerText = newTodo.text;
  btnCheck.addEventListener("click", todolistCheck);
  btnRemove.innerText = 'X';
  btnRemove.addEventListener("click", todolistRemove);
  li.appendChild(btnCheck);
  li.appendChild(span);
  li.appendChild(btnRemove);
  todolistMain.appendChild(li);

  const liArr = document.querySelectorAll('.todolistMain li');
  console.log(liArr[0].firstChild)
  for (let i = 0; i < todoArr.length; i++) {
    if (todoArr[i].check === true && liArr[i] !== undefined) {
      liArr[i].children[1].classList.add('spanCheckAfter');
      liArr[i].firstChild.classList.add('btnCheckAfter');
    }
  }
}

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

todolistForm.addEventListener("submit", todolistSubmit);

function todolistCheck(event) {
  const span = event.target.parentNode.children[1];
  const button = event.target;
  const liId = event.target.parentNode.id;
  button.classList.toggle('btnCheckAfter');
  span.classList.add('spanCheckAfter');

  while (num < 1000) {
    if (todoArr[num].id === Number(liId)) {
      break;
    } else {
      num++;
    }
  }
  todoArr[num].check = !(todoArr[num].check);
  todoArrNum = todoArr[num].check;
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