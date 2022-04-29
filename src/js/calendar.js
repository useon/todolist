const todayView = document.querySelector('.today');
const weatherView = document.querySelector('.weather');
const dateView = document.querySelector('.date');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const todayBtn = document.querySelector('.todayBtn');
const allDate = new Date();
let year = allDate.getFullYear();
let month = allDate.getMonth();
const thisMonth = allDate.getMonth();
let day = allDate.getDay();
let date = allDate.getDate();
let prevLastDate = new Date(year, month, 0).getDate();
let prevLastDay = new Date(year, month, 0).getDay();
let thisLastDate = new Date(year, month + 1, 0).getDate();
let thisLastDay = new Date(year, month + 1, 0).getDay();
let liToday;
let dateTag = '';

todayView.textContent = `${year}년 ${month + 1}월`;


function daysPut() {
  dateTag = '';
  year = allDate.getFullYear();
  month = allDate.getMonth();
  day = allDate.getDay();
  date = allDate.getDate();
  prevLastDay = new Date(year, month, 0).getDay();
  thisLastDate = new Date(year, month + 1, 0).getDate();

  if (prevLastDay !== 6) {
    for (let i = 0; i <= prevLastDay; i++) {
      dateTag += '<li></li>';
    }
  }

  for (let i = 1; i < thisLastDate + 1; i++) {
    if (i == date) {
      dateTag += `<li><span class="dateHighlighting">${i}</span></li>`;
    } else {
      dateTag += `<li>${i}</li>`;
    }
  }
  dateView.innerHTML = dateTag;
  todayView.textContent = `${year}년 ${month + 1}월`;
}

daysPut();

function prevMonthPut() {
  dateTag = '';
  month -= 1;
  prevLastDay = new Date(year, month, 0).getDay();
  thisLastDate = new Date(year, month + 1, 0).getDate();

  if (prevLastDay !== 6) {
    for (let i = 0; i <= prevLastDay; i++) {
      dateTag += '<li></li>';
    }
  }

  for (let i = 1; i < thisLastDate + 1; i++) {
    if (i == date && thisMonth === month) {
      dateTag += `<li><span class="dateHighlighting">${i}</span></li>`;
    } else {
      dateTag += `<li>${i}</li>`;
    }
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

  if (prevLastDay !== 6) {
    for (let i = 0; i <= prevLastDay; i++) {
      dateTag += '<li></li>';
    }
  }

  for (let i = 1; i < thisLastDate + 1; i++) {
    if (i == date && thisMonth === month) {
      dateTag += `<li><span class="dateHighlighting">${i}</span></li>`;
    } else {
      dateTag += `<li>${i}</li>`;
    }
  }
  dateView.innerHTML = dateTag;

  if (month >= 12) {
    month -= 12;
    year += 1;
  }
  todayView.textContent = `${year}년 ${month + 1}월`;
}

prevBtn.addEventListener("click", prevMonthPut);
todayBtn.addEventListener("click", daysPut);
nextBtn.addEventListener("click", nextMonthPut);