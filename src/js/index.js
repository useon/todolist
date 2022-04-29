const loginWrap = document.querySelector('.loginWrap');
const inputNickname = document.querySelector('form');
const homeBody = document.querySelector('.homeBody');
const calendar = document.querySelector('.calendar');
const todolist = document.querySelector('.todolist');

if (localStorage.getItem('nickname') === null || localStorage.getItem('nickname') === '') {
  homeBody.classList.remove('homeBody');
  homeBody.classList.add('loginImg');
} else {
  visibleHome();
}

inputNickname.addEventListener('submit', indexNickname);

function indexNickname(event) {
  event.preventDefault();
  const inputValue = inputNickname.children[0].value;
  localStorage.setItem('nickname', JSON.stringify(inputValue));
  visibleHome();
}

function visibleHome() {
  homeBody.classList.remove('loginImg');
  homeBody.classList.add('homeBody');
  calendar.classList.remove('invisible');
  todolist.classList.remove('invisible');
  loginWrap.classList.add('invisible');
  loginWrap.classList.remove('loginWrap');
}