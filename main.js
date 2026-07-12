let screenLower = [];
let shouldReset = false;

const lowerScreenNumber = document.querySelector(".screen .lower");
const buttons = document.querySelector("button");
const keypad = document.querySelector(".keypad");

keypad.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  if (e.target.classList.contains("btnDark")) {
    appendNumber(e.target.textContent);
  } else if (e.target.classList.contains("btnLight")) {
    if (e.target.textContent === "AC") {
      resetInput();
    } else if (e.target.textContent === "C") {
      resetInput();
    }
  }
});

const appendNumber = (number) => {
  if (lowerScreenNumber.textContent.length === 16) {
    return;
  }
  if (lowerScreenNumber.textContent == 0) {
    lowerScreenNumber.textContent = "";
  }
  lowerScreenNumber.textContent += number;
};

const resetInput = () => {
  lowerScreenNumber.textContent = "0";
};
