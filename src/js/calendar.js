const todayView = document.querySelector('.today');
const weatherView = document.querySelector('.weather');
const dateView = document.querySelector('.date');

const allDate = new Date();
const year = allDate.getFullYear();
const month = allDate.getMonth();
const day = allDate.getDay();
const date = allDate.getDate();
const prevLastDate = new Date(year, month, 0).getDate();
const prevLastDay = new Date(year, month, 0).getDay();
const thisLastDate = new Date(year, month + 1, 0).getDate();
const thisLastDay = new Date(year, month + 1, 0).getDay();

todayView.textContent = `${year}년 ${month + 1}월 ${date}일`;

function daysPut() {
  let dateTag = '';
  for (let i = 0; i < prevLastDay; i++) {
    dateTag += '<li></li>';
  }
  for (let i = 1; i < thisLastDate + 1; i++) {
    dateTag += `<li>${i}</li>`;
  }
  dateView.innerHTML = dateTag;
}

daysPut();