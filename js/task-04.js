const decrementButton = document.querySelector(`[data-action='decrement']`);
const incrementButton = document.querySelector(`[data-action='increment']`);
const value = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  value.textContent = counterValue -= 1;
};

const increment = () => {
  value.textContent = counterValue += 1;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
