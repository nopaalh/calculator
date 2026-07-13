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
    const value = e.target.textContent;
    if (value === "=") {
      if (operator === null) return;
      const secondNumber = Number(lowerScreenNumber.textContent);
      const result = operate(firstNumber, operator, secondNumber);
      lowerScreenNumber.textContent = result;
      upperScreenNumber.textContent = "";

      firstNumber = result;
      operator = null;
      shouldReset = true;
      return;
    }

    if (operator !== null && !shouldReset) {
      const secondNumber = Number(lowerScreenNumber.textContent);
      const result = operate(firstNumber, operator, secondNumber);
      lowerScreenNumber.textContent = result;
      firstNumber = result;
    } else {
      firstNumber = Number(lowerScreenNumber.textContent);
    }
    operator = value;
    upperScreenNumber.textContent = `${firstNumber} ${operator}`;
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
      return sum(firstNumber, secondNumber);
      break;
    case "-":
      break;
    case "÷":
      break;
    case "×":
      break;
    default:
      break;
  }
};
