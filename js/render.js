import { beep } from "./audio.js";

// render all element in arr according to its order in array
export function renderArr(containerDiv, arr, i, j) {
  let total = arr.reduce((acc, num) => acc + num, 0);
  let iNow = 0;
  let jNow = 0;
  containerDiv.innerHTML = "";
  arr.forEach((e) => {
    const elemDiv = document.createElement("div");
    if (iNow == i || jNow == j) {
      // element that are code processing in the loop will be color red
      if (iNow == arr.length - 1 || jNow == arr.length - 1) {
        // if it's completed than make it black
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
export async function complete(containerDiv) {
  const divs = containerDiv.querySelectorAll("div");
  for (const div of divs) {
    div.classList.remove("bg-black");
    div.classList.add("bg-green-600");
    beep(550, "square", 0.3);
    await new Promise((res) => setTimeout(res, 10)); // every 10ms
  }
}