export const updateValueTable, =>{
const valueTable = document.getElementsByClassName("valueTable")[0];
const incrementButton = document.getElementsByClassName("increment")[0];
const decrementButton = document.getElementsByClassName("decrement")[0];
const resetButton = document.getElementsByClassName("reset")[0];
};
let value = 0;
const updateValueTable = () => {
  if (value >= 25) {
    value = 25;
    incrementButton.disabled = true;
  } else if (value <= 0) {
    value = 0;
    decrementButton.disabled = true;
  } else {
    incrementButton.disabled = false;
    decrementButton.disabled = false;
  }

  valueTable.textContent = value;
};

incrementButton.addEventListener("click", () => {
  value++;
  updateValueTable();
});

decrementButton.addEventListener("click", () => {
  value--;
  updateValueTable();
});

resetButton.addEventListener("click", () => {
  value = 0;
  updateValueTable();
  decrementButton.disabled = true;
});
