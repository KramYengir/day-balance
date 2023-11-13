const form = document.querySelector("form");
const goButton = document.querySelector("button");

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

let wedBase;
let monBase;
let tueBase;
let thuBase;
let friBase;
let satBase;

let offset;
let overOrUnder;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setRandomDayValues();
  getRandomNumForDay();
});

function setRandomDayValues() {
  monBase = increaseByRandomPercentage(Number(monMinInput.value), 15, 18);
  tueBase = increaseByRandomPercentage(Number(tueMinInput.value), 15, 18);
  wedBase = increaseByRandomPercentage(Number(wedMinInput.value), 15, 20);
  thuBase = increaseByRandomPercentage(Number(thuMinInput.value), 15, 20);
  friBase = increaseByRandomPercentage(Number(friMinInput.value), 15, 22);
  satBase = increaseByRandomPercentage(Number(satMinInput.value), 15, 20);

  //console.log(monBase);
}
function increaseByRandomPercentage(number, lowPercent, highPercent) {
  // Generate a random percentage between lowPercent and highPercent
  var randomPercentage =
    Math.random() * (highPercent - lowPercent) + lowPercent;

  // Round off to two decimal places and convert back to a number
  randomPercentage = parseFloat(randomPercentage.toFixed(2));

  // Calculate the increase
  var increase = Number((randomPercentage / 100) * number);
  increase = parseFloat(increase.toFixed(1));

  // Return the increased number
  return number + increase;
}

const getRandomNumForDay = () => {
  let targetVal = Number(target.value);

  let isMatch = false;

  let control = 1;
  let sum = 0;

  while (!isMatch) {
    let daysArray = [monBase, tueBase, wedBase, thuBase, friBase, satBase];

    sum = daysArray.reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);

    sum = parseFloat(sum.toFixed(2));

    // if is within 20...
    if (sum >= targetVal - 10 && sum <= targetVal + 10) {
      isMatch = true;
      offset = sum - targetVal;
      offset = parseFloat(offset.toFixed(2));
      overOrUnder = offset > 0 ? "over" : "under";
    }

    if (control > 1000000) {
      break;
    }

    control++;
  }

  console.log(sum);
  console.log("Monday ", monBase);
  console.log("Took: ", control, " goes");

  if (isMatch) {
    infoMsgHeading.textContent = "Success";
    infoMsg.classList.add("success");
    infoMsgText.textContent = `Result: ${sum}. Just ${offset} ${overOrUnder}`;
  } else {
    infoMsgHeading.textContent = "Try Again";
    infoMsg.classList.remove("success");
    infoMsgText.textContent = "";
  }

  printResults(monBase, tueBase, wedBase, thuBase, friBase, satBase);
};

function printResults(mon, tue, wed, thu, fri, sat) {
  let results = [...document.querySelectorAll(".result")];
  results.forEach((el, i) => {
    el.textContent = "";
    el.textContent = arguments[i];
  });
}
