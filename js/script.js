let lengthArray = 50;
let inputLength = document.getElementById("lengthArray");

// main div where all the element of arr go
const containerDiv = document.getElementById("root");

let arr = [];

// render all element in arr according to its order in array
function renderArr(ar, i, j) {
  let total = arr.reduce((acc, num) => acc + num, 0);
  let iNow = 0;
  let jNow = 0;
  containerDiv.innerHTML = "";
  ar.forEach((e) => {
    const elemDiv = document.createElement("div");
    if (iNow == i || jNow == j) { // element that are code processing in the loop will be color red
      if (iNow == arr.length - 1 || jNow == arr.length - 1) { // if it's completed than make it black
        elemDiv.classList.add("bg-black");
      } else {
        elemDiv.classList.add("bg-red-600");
      }
    } else {
      elemDiv.classList.add("bg-black");
    }
    elemDiv.classList.add(
      `h-[${(e / total) * window.innerHeight * 0.3 * arr.length}px]`,
      "flex-1"
    );
    containerDiv.appendChild(elemDiv);

    iNow++;
    jNow++;
  });
}

// after array is sorted (make every elem green)
async function complete() {
  const divs = containerDiv.querySelectorAll("div");
  for (const div of divs) {
    div.classList.remove("bg-black");
    div.classList.add("bg-green-600");
    await new Promise((res) => setTimeout(res, 10)); // every 10ms
  }
}

// to generate random values in arr
function randomArr() {
  lengthArray = Number(inputLength.value);

  arr = Array.from(
    { length: lengthArray },
    () => Math.floor(Math.random() * 100) + 2
  );
  renderArr(arr);
}

// brute-force sorting algorithm
async function sort() {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // switch the elem
        renderArr(arr, i, j); // than render it
        await new Promise((res) => setTimeout(res, 10));
      }
    }
  }
  complete();
}

randomArr();
