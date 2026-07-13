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
  changeFontSize(lowerScreenNumber.textContent.length);
};

const resetInput = () => {
  lowerScreenNumber.textContent = "0";
};

const changeFontSize = (len) => {
  if (len <= 5) {
    lowerScreenNumber.style.fontSize = "80px";
  } else if (len === 6) {
    lowerScreenNumber.style.fontSize = "60px";
  } else if (len === 8) {
    lowerScreenNumber.style.fontSize = "50px";
  } else if (len === 12) {
    lowerScreenNumber.style.fontSize = "42px";
  }
};
