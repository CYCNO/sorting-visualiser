import { beep } from "./audio.js";
import { renderArr, complete } from "./render.js";
import { bubbleSort } from "./sort-algo/bubble-sort.js";
let lengthArray = 50;
let inputLength = document.getElementById("lengthArray");

let arr = [];

// usefull elements
const containerDiv = document.getElementById("root");
const randomBtn = document.getElementById("randomBtn");
const sortBtn = document.getElementById("sortBtn");

// click and function will trigger
sortBtn.addEventListener("click", sortBtn.addEventListener("click", () => runSort(bubbleSort)));
randomBtn.addEventListener("click", randomArr);

// to generate random values in arr
function randomArr() {
  lengthArray = Number(inputLength.value);

  arr = Array.from(
    { length: lengthArray },
    () => Math.floor(Math.random() * 100) + 2
  );
  renderArr(containerDiv, arr);
}

function runSort(sort) { 
  sort(containerDiv, arr)
}

randomArr();