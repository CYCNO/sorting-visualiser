import { renderArr,complete } from "../render.js";
import { beep } from "../audio.js";

// bubble sort algorithm
export async function bubbleSort(containerDiv, arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // switch the elem
        renderArr(containerDiv, arr, i, j); // than render it
        await new Promise((res) => setTimeout(res, 10));
      }
    }
    beep(440, "sine", 0.5);
  }
  complete(containerDiv);
}
