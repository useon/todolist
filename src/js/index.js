const inputNickname = document.querySelector('form');

inputNickname.addEventListener('submit', indexNickname);

function indexNickname(event) {
  event.preventDefault();
  const inputValue = inputNickname.children[0].value;
  localStorage.setItem('nickname', JSON.stringify(inputValue));
}
