const form = document.querySelector("form");
const goButton = document.querySelector("button");

let monMinInput = document.getElementById("mon-min");
let tueMinInput = document.getElementById("tue-min");
let wedMinInput = document.getElementById("wed-min");
let thuMinInput = document.getElementById("thu-min");
let friMinInput = document.getElementById("fri-min");
let satMinInput = document.getElementById("sat-min");
let targetInput = document.getElementById("target");

let wedBase;
let monBase;
let tueBase;
let thuBase;
let friBase;
let satBase;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setBaseValues();
  getRandomNumForDay();
});

function setBaseValues() {
  monBase = Number(monMinInput.value) + Number(monMinInput.value) * 0.18;
  tueBase = Number(tueMinInput.value) + Number(tueMinInput.value) * 0.18;
  wedBase = Number(wedMinInput.value) + Number(wedMinInput.value) * 0.18;
  thuBase = Number(thuMinInput.value) + Number(thuMinInput.value) * 0.18;
  friBase = Number(friMinInput.value) + Number(friMinInput.value) * 0.2;
  satBase = Number(satMinInput.value) + Number(satMinInput.value) * 0.18;
}

const getRandomNumForDay = () => {
  let monRandom;
  let tueRandom;
  let wedRandom;
  let thuRandom;
  let friRandom;
  let satRandom;

  let targetVal = Number(target.value);

  let isMatch = false;

  let control = 1;
  let sum = 0;

  while (!isMatch) {
    monRandom = monBase + getRandomIntInclusive(50, 100);
    tueRandom = tueBase + getRandomIntInclusive(50, 100);
    wedRandom = wedBase + getRandomIntInclusive(50, 100);
    thuRandom = thuBase + getRandomIntInclusive(50, 100);
    friRandom = friBase + getRandomIntInclusive(50, 200);
    satRandom = satBase + getRandomIntInclusive(50, 100);

    let daysArray = [
      monRandom,
      tueRandom,
      wedRandom,
      thuRandom,
      friRandom,
      satRandom,
    ];

    sum = daysArray.reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);

    if (sum === targetVal) {
      isMatch = true;
    }

    if (control > 2000000) {
      break;
    }

    control++;
  }

  console.log(sum);
  console.log("Took: ", control, " goes");

  if (isMatch) {
    printResults(
      monRandom,
      tueRandom,
      wedRandom,
      thuRandom,
      friRandom,
      satRandom
    );
  }
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let result = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive

  return Math.round(result * 100) / 100;
}

function printResults(mon, tue, wed, thu, fri, sat) {
  let results = [...document.querySelectorAll(".result")];
  results.forEach((el, i) => {
    el.textContent = "";
    el.textContent = arguments[i];
  });
}
