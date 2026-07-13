let firstNumber = null;
let operator = null;
let shouldReset = false;

const lowerScreenNumber = document.querySelector(".screen .lower");
const upperScreenNumber = document.querySelector(".screen .upper");
const buttons = document.querySelector("button");
const keypad = document.querySelector(".keypad");

keypad.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  if (e.target.classList.contains("btnDark")) {
    appendNumber(e.target.textContent);
  } else if (e.target.classList.contains("btnLight")) {
    if (e.target.textContent === "AC") {
      allClear();
    } else if (e.target.textContent === "C") {
      clear();
    }
  } else if (e.target.classList.contains("btnOrange")) {
    if (e.target.textContent === "=") {
      if (operator !== null) {
        operate(firstNumber, operator, Number(lowerScreenNumber.textContent));
      }
      return;
    }
    operator = e.target.textContent;
    firstNumber = Number(lowerScreenNumber.textContent);
    shouldReset = true;
  }
});

const appendNumber = (number) => {
  if (lowerScreenNumber.textContent.length === 16) {
    return;
  }
  if (lowerScreenNumber.textContent == 0 || shouldReset) {
    if (shouldReset) {
      upperScreenNumber.textContent =
        lowerScreenNumber.textContent + " " + operator;
      shouldReset = false;
    }
    lowerScreenNumber.textContent = "";
  }
  lowerScreenNumber.textContent += number;
  changeFontSize(lowerScreenNumber.textContent.length);
};

const allClear = () => {
  lowerScreenNumber.textContent = "0";
  upperScreenNumber.textContent = "";

  firstNumber = null;
  operator = null;
  shouldReset = false;
};

const clear = () => {
  lowerScreenNumber.textContent = "0";
  shouldReset = false;
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

const sum = (a, b) => {
  return a + b;
};

const operate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case "+":
      let ans = sum(firstNumber, secondNumber);
      lowerScreenNumber.textContent = ans;
      upperScreenNumber.textContent = "";
      break;
    case "-":
      break;
    case "/":
      break;
    case "*":
      break;
    default:
      break;
  }
};
