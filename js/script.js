let lengthArray = 50;
let inputLength = document.getElementById("lengthArray");

const containerDiv = document.getElementById("root");

let arr = [];

function renderArr(ar, i, j) {
  let total = arr.reduce((acc, num) => acc + num, 0);
  let iNow = 0;
  let jNow = 0;
  containerDiv.innerHTML = "";
  ar.forEach((e) => {
    const elemDiv = document.createElement("div");
    if (iNow == i || jNow == j) {
      if (iNow == arr.length - 1 || jNow == arr.length - 1) {
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

async function complete() {
  const divs = containerDiv.querySelectorAll("div");
  for (const div of divs) {
    div.classList.remove("bg-black");
    div.classList.add("bg-green-600");
    await new Promise((res) => setTimeout(res, 10));
  }
}

function randomArr() {
  lengthArray = Number(inputLength.value);

  arr = Array.from(
    { length: lengthArray },
    () => Math.floor(Math.random() * 100) + 2
  );
  renderArr(arr);
}

async function sort() {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        renderArr(arr, i, j);
        await new Promise((res) => setTimeout(res, 10));
      }
    }
  }
  complete();
}

randomArr();
