let screenLower = [];

const lowerScreenNumber = document.querySelector(".screen .lower");
const buttons = document.querySelector("button");
const keypad = document.querySelector(".keypad");

keypad.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  if (e.target.classList.contains("btnDark")) {
    appendNumber(e.target.textContent);
  }
});

const appendNumber = (number) => {
  if (lowerScreenNumber.textContent == 0) {
    lowerScreenNumber.textContent = "";
  }
  lowerScreenNumber.textContent += number;
};
