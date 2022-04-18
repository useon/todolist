const todayView = document.querySelector('.today');
const weatherView = document.querySelector('.weather');
const dateView = document.querySelector('.date');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const todayBtn = document.querySelector('.todayBtn');

const allDate = new Date();
let year = allDate.getFullYear();
let month = allDate.getMonth();
let day = allDate.getDay();
let date = allDate.getDate();
let prevLastDate = new Date(year, month, 0).getDate();
let prevLastDay = new Date(year, month, 0).getDay();
let thisLastDate = new Date(year, month + 1, 0).getDate();
let thisLastDay = new Date(year, month + 1, 0).getDay();
let liToday;

todayView.textContent = `${year}년 ${month + 1}월`;

let dateTag = '';

function daysPut() {
  dateTag = '';
  year = allDate.getFullYear();
  month = allDate.getMonth();
  day = allDate.getDay();
  date = allDate.getDate();
  prevLastDay = new Date(year, month, 0).getDay();
  thisLastDate = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < prevLastDay + 1; i++) {
    dateTag += '<li></li>';
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

// function highlighting() {
//   // 해당 li를 잡아서 선언하기
//   // 해당 li에 클래스리스트를 부여하기
//   console.log(liToday, "함수 잘 들어가나요?")
//   // 잡아내긴 하는데 여기에선 parentNode등을 잡지 못한다.
// }

prevBtn.addEventListener("click", prevMonthPut);
todayBtn.addEventListener("click", daysPut);
nextBtn.addEventListener("click", nextMonthPut);