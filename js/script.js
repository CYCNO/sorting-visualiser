import { beep, playDiceRoll } from "./audio.js";
import { renderArr, complete } from "./render.js";
import { bubbleSort } from "./sort-algo/bubble-sort.js";
let lengthArray = 50;
let inputLength = document.getElementById("lengthArray");

let arr = [];

// usefull elements
const containerDiv = document.getElementById("root");
const randomBtn = document.getElementById("randomBtn");
const sortBtn = document.getElementById("sortBtn");
let isSorting = false;
let webLoad = true;

// click and function will trigger
sortBtn.addEventListener("click", () => runSort(bubbleSort));

randomBtn.addEventListener("click", randomArr);

// to generate random values in arr
function randomArr() {
  if (!webLoad) {
    playDiceRoll();
  }
  lengthArray = Number(inputLength.value);

  arr = Array.from(
    { length: lengthArray },
    () => Math.floor(Math.random() * 100) + 2
  );
  renderArr(containerDiv, arr);
  webLoad = false;
}

async function runSort(sort) {
  if (!isSorting) {
    isSorting = true;
    sortBtn.innerText = "Stop";
    await sort(containerDiv, arr);
    isSorting = false;
    sortBtn.innerText = "Sort";
  } else {
    location.reload();
  }
}

randomArr();
