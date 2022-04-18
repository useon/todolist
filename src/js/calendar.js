const todayView = document.querySelector('.today');
const weatherView = document.querySelector('.weather');
const dateView = document.querySelector('.date');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

const allDate = new Date();
let year = allDate.getFullYear();
let month = allDate.getMonth();
let day = allDate.getDay();
let date = allDate.getDate();
let prevLastDate = new Date(year, month, 0).getDate();
let prevLastDay = new Date(year, month, 0).getDay();
let thisLastDate = new Date(year, month + 1, 0).getDate();
let thisLastDay = new Date(year, month + 1, 0).getDay();

todayView.textContent = `${year}년 ${month + 1}월`;

let dateTag = '';

function daysPut() {
  for (let i = 0; i < prevLastDay + 1; i++) {
    dateTag += '<li></li>';
  }
  for (let i = 1; i < thisLastDate + 1; i++) {
    dateTag += `<li>${i}</li>`;
  }
  dateView.innerHTML = dateTag;
}

daysPut();

function prevMonthPut() {
  dateTag = '';
  month -= 1;
  prevLastDay = new Date(year, month, 0).getDay();
  thisLastDate = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < prevLastDay + 1; i++) {
    dateTag += '<li></li>';
  }
  for (let i = 1; i < thisLastDate + 1; i++) {
    dateTag += `<li>${i}</li>`;
  }
  dateView.innerHTML = dateTag;
  if (month <= -1) {
    month += 12;
    year -= 1;
  }
  todayView.textContent = `${year}년 ${month + 1}월`;
}

function nextMonthPut() {
  dateTag = '';
  month += 1;
  prevLastDay = new Date(year, month, 0).getDay();
  thisLastDate = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < prevLastDay + 1; i++) {
    dateTag += '<li></li>';
  }
  for (let i = 1; i < thisLastDate + 1; i++) {
    dateTag += `<li>${i}</li>`;
  }
  dateView.innerHTML = dateTag;
  if (month >= 12) {
    month -= 12;
    year += 1;
  }
  todayView.textContent = `${year}년 ${month + 1}월`;
}

prevBtn.addEventListener("click", prevMonthPut);
nextBtn.addEventListener("click", nextMonthPut);