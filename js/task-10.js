/**
 * Write a script to create and clear a collection of elements. The user enters the number of elements
 * into input and clicks the New button, after which a collection is rendered.
 * When you click on the Clear button, the collection is cleared.
 *
 * <div id="controls">
 *   <input type="number" min="1" max="100" step="1" />
 *   <button type="button" data-create>Create</button>
 *   <button type="button" data-destroy>Destroy</button>
 * </div>
 *
 * <div id="boxes"></div>
 *
 * Create a createBoxes(amount) function that takes one parameter, a number.
 * The function creates as many <div> as specified in amount and adds them to div#boxes.
 *
 * 1 The dimensions of the very first <div> are 30px by 30px.
 * 2 Each element after the first one should be 10px wider and higher than the previous one.
 * 3 All elements must have a random HEX background color. Use the ready-made getRandomHexColor function to get a color.*
 *
 * Create a destroyBoxes() function that clears the contents of div#boxes, thereby removing all created elements.
 */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector(`[type="number"]`);
const createButton = document.querySelector(`[data-create]`);
const destroyButton = document.querySelector(`[data-destroy]`);

//     !! FIRST SOLUTION

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement("div");
//     box.style.width = `${30 + i * 10}px`;
//     box.style.height = `${30 + i * 10}px`;
//     box.style.margin = "5px";
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.appendChild(boxEl);
//   }
// }

//     !! SECOND SOLUTION

let width = 20;
let height = 20;

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${(width += 10)}px`;
    box.style.height = `${(height += 10)}px`;
    box.style.margin = "3px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
};

const createBoxesButton = () => {
  createBoxes(input.value);
};
createButton.addEventListener("click", createBoxesButton);

const destroyBoxesButton = () => {
  boxes.innerHTML = "";
  input.value = "";
  width = 20;
  height = 20;
};
destroyButton.addEventListener("click", destroyBoxesButton);
