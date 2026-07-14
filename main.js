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
    if (e.target.textContent === "+/-") {
      toggleSign();
      changeFontSize(lowerScreenNumber.textContent.length);
      return;
    }
    if (e.target.textContent === ".") {
      appendDecimal();
      changeFontSize(lowerScreenNumber.textContent.length);
      return;
    }
    appendNumber(e.target.textContent);
  } else if (e.target.classList.contains("btnLight")) {
    if (e.target.textContent === "AC") {
      allClear();
      changeFontSize(lowerScreenNumber.textContent.length);
    } else if (e.target.textContent === "C") {
      clear();
      changeFontSize(lowerScreenNumber.textContent.length);
    } else if (e.target.textContent === "%") {
      percent();
      changeFontSize(lowerScreenNumber.textContent.length);
    }
  } else if (e.target.classList.contains("btnOrange")) {
    const value = e.target.textContent;
    if (value === "=") {
      if (operator === null) return;
      const secondNumber = Number(lowerScreenNumber.textContent);
      const result = operate(firstNumber, operator, secondNumber);
      lowerScreenNumber.textContent = result;
      changeFontSize(lowerScreenNumber.textContent.length);
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
      changeFontSize(lowerScreenNumber.textContent.length);
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
  if (lowerScreenNumber.textContent === "0" || shouldReset) {
    if (shouldReset) {
      upperScreenNumber.textContent =
        firstNumber + " " + operator;
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

const percent = () => {
  const current = Number(lowerScreenNumber.textContent);
  if (firstNumber !== null && operator !== null) {
    lowerScreenNumber.textContent = String(firstNumber * (current / 100));
  } else {
    lowerScreenNumber.textContent = String(current / 100);
  }
  shouldReset = false;
};

const toggleSign = () => {
  const current = Number(lowerScreenNumber.textContent);
  if (current === 0) return;
  lowerScreenNumber.textContent = String(current * -1);
  shouldReset = false;
};

const appendDecimal = () => {
  if (shouldReset) {
    lowerScreenNumber.textContent = "0";
    shouldReset = false;
  }
  if (lowerScreenNumber.textContent.includes(".")) return;
  lowerScreenNumber.textContent += ".";
};

const changeFontSize = (len) => {
  if (len <= 5) {
    lowerScreenNumber.style.fontSize = "80px";
  } else if (len <= 7) {
    lowerScreenNumber.style.fontSize = "60px";
  } else if (len <= 10) {
    lowerScreenNumber.style.fontSize = "50px";
  } else {
    lowerScreenNumber.style.fontSize = "39px";
  }
};

const sum = (a, b) => {
  return a + b;
};

const min = (a, b) => {
  return a - b;
};

const multiply = (a,b) => {
  return a*b;
};

const divide = (a,b) => {
  if(b === 0){
    alert("Cant divide by 0.");
    return "Error";
  }
  return parseFloat((a/b).toPrecision(10));
};

const operate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case "+":
      return sum(firstNumber, secondNumber);
      break;
    case "-":
      return min(firstNumber,secondNumber);
      break;
    case "÷":
      return divide(firstNumber,secondNumber);
      break;
    case "×":
      return multiply(firstNumber,secondNumber);
      break;
    default:
      break;
  }
};
