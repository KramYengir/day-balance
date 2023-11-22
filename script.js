const form = document.querySelector("form");
const goButton = document.querySelector("button");

const loopAmount = 5000000;

let monMinInput = document.getElementById("mon-min");
let tueMinInput = document.getElementById("tue-min");
let wedMinInput = document.getElementById("wed-min");
let thuMinInput = document.getElementById("thu-min");
let friMinInput = document.getElementById("fri-min");
let satMinInput = document.getElementById("sat-min");
let targetInput = document.getElementById("target");
let infoMsg = document.querySelector(".info-msg");
let infoMsgHeading = document.querySelector(".info-msg > h2");
let infoMsgText = document.querySelector(".info-msg > p");

let dayValues = [];
let newDayValues = [];
let newTotal;
let results = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getDayValues();
  getNewDayValues();
  setResults();
  printResults();
});

function getDayValues() {
  let days = [...document.querySelectorAll(".day-input > input")];
  days.forEach((day, i) => {
    dayValues[i] = Number(day.value);
  });
}

function getNewDayValues() {
  let target = targetInput.value;

  let daysSum = dayValues.reduce((total, value) => total + value, 0);

  let diff = target - daysSum;

  newDayValues[0] = Math.round((dayValues[0] + diff * 0.11) * 10) / 10;
  newDayValues[1] = Math.round((dayValues[1] + diff * 0.12) * 10) / 10;
  newDayValues[2] = Math.round((dayValues[2] + diff * 0.14) * 10) / 10;
  newDayValues[3] = Math.round((dayValues[3] + diff * 0.19) * 10) / 10;
  newDayValues[4] = Math.round((dayValues[4] + diff * 0.26) * 10) / 10;
  newDayValues[5] = Math.round((dayValues[5] + diff * 0.19) * 10) / 10;

  newTotal = newDayValues.reduce((total, value) => total + value, 0);
  console.table(newDayValues);

  console.log("NewTotal ", newTotal);
}

function setResults() {
  newDayValues.forEach((value, i) => (results[i] = value));
  results[6] = newTotal;
}

function printResults() {
  let resultsOutput = [...document.querySelectorAll(".result")];
  resultsOutput.forEach((el, i) => {
    el.textContent = "";
    el.textContent = results[i];
  });
}
