const iDayError = document.querySelector(".i-day p");
const userInputDay = document.querySelector("#day");
const iMonthError = document.querySelector(".i-month p");
const userInputMonth = document.querySelector("#month");
const iYearError = document.querySelector(".i-year p");
const userInputYear = document.querySelector("#year");
const arrowBtn = document.querySelector(".arrow");

const dispYear = document.querySelector(".years span");
const dispMonth = document.querySelector(".months span");
const dispDay = document.querySelector(".days span");

const currentDate = new Date();
const currMonth = currentDate.getMonth() + 1;
const currYear = currentDate.getFullYear();
const currDay = currentDate.getDate();

arrowBtn.addEventListener("click", function () {
  invalid();
  calculator();
});

function calculator() {
  if (currYear > userInputYear.value) {
    yr = currYear - userInputYear.value;
    console.log(userInputYear.value);
  }

  if (currMonth >= userInputMonth.value) {
    mnt = currMonth - userInputMonth.value;
  } else {
    yr--;
    mnt = currMonth + 12 - userInputMonth.value;
  }
  if (currDay >= userInputDay.value) {
    dy = currDay - userInputDay.value;
  } else {
    mnt--;
    dy = currDay + getDayNum() - userInputDay.value;
  }
  if (mnt < 0) {
    mnt = 11;
    yr--;
  }

  display();
}

// checking for the errors
function invalid() {
  if (userInputDay.value > getDayNum || userInputDay.value > 31) {
    iDayError.textContent = "Must be a valid day";
    iDayError.style.display = "block";
  } else if (userInputDay.value == "") {
    iDayError.textContent = "This field is required";
    iDayError.style.display = "block";
  } else {
    iDayError.style.display = "none";
  }
  if (userInputMonth.value > 12) {
    iMonthError.textContent + "Must  be a valid month";
    iMonthError.style.display = "block";
  } else if (userInputMonth.value == "") {
    iMonthError.textContent = "This field is required";
    iMonthError.style.display = "block";
  } else {
    iMonthError.style.display = "none";
  }
  if (userInputYear.value > currYear) {
    iYearError.textContent = "Must be in the past";
    iYearError.style.display = "block";
  } else if (userInputYear.value == "") {
    iYearError.textContent = "This field is required";
    iYearError.style.display = "block";
  } else {
    iMonthError.style.display = "none";
  }
}

function getDayNum() {
  return new Date(userInputYear.value, userInputMonth.value, 0).getDate();
}

function display() {
  if (
    iDayError.style.display == "block" ||
    iMonthError.style.display == "block" ||
    iYearError.style.display == "block"
  ) {
    dispDay.textContent = "--";
    dispYear.textContent = "--";
    dispMonth.textContent = "--";
  } else {
    dispDay.textContent = dy;
    dispYear.textContent = yr;
    dispMonth.textContent = mnt;
  }
}
