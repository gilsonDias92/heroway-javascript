//calculator

const displayText = document.getElementById("display-text");
const keyClear = document.getElementById("btn-clear");
const key0 = document.getElementById("btn-0");
const key1 = document.getElementById("btn-1");
const key2 = document.getElementById("btn-2");
const key3 = document.getElementById("btn-3");
const key4 = document.getElementById("btn-4");
const key5 = document.getElementById("btn-5");
const key6 = document.getElementById("btn-6");
const key7 = document.getElementById("btn-7");
const key8 = document.getElementById("btn-8");
const key9 = document.getElementById("btn-9");
const keyEquals = document.getElementById("btn-equals");
const keyDot = document.getElementById("btn-dot");
const keySum = document.getElementById("btn-sum");
const keySub = document.getElementById("btn-sub");
const keyMult = document.getElementById("btn-mult");
const keyDiv = document.getElementById("btn-div");

key0.addEventListener("click", () => {
  displayText.innerText += key0.innerHTML;
});
key1.addEventListener("click", () => {
  displayText.innerText += key1.innerHTML;
});
key2.addEventListener("click", () => {
  displayText.innerText += key2.innerHTML;
});
key3.addEventListener("click", () => {
  displayText.innerText += key3.innerHTML;
});
key4.addEventListener("click", () => {
  displayText.innerText += key4.innerHTML;
});
key5.addEventListener("click", () => {
  displayText.innerText += key5.innerHTML;
});
key6.addEventListener("click", () => {
  displayText.innerText += key6.innerHTML;
});
key7.addEventListener("click", () => {
  displayText.innerText += key7.innerHTML;
});
key8.addEventListener("click", () => {
  displayText.innerText += key8.innerHTML;
});
key9.addEventListener("click", () => {
  displayText.innerText += key9.innerHTML;
});

const clearDispaly = keyClear.addEventListener("click", () => {
  displayText.innerText = "";
  let number = 0;
  let result = 0;
  let number2 = 0;
});

const sum2Numbers = keySum.addEventListener("click", () => {
  number = Number(displayText.innerText);
  displayText.innerText = "";

  keyEquals.addEventListener("click", () => {
    number2 = Number(displayText.innerText);
    result = number + number2;
    displayText.innerText = result;
  });
});

const sub2Numbers = keySub.addEventListener("click", () => {
  number = Number(displayText.innerText);
  displayText.innerText = "";

  keyEquals.addEventListener("click", () => {
    number2 = Number(displayText.innerText);
    result = number - number2;
    displayText.innerText = result;
    result = 0;
    number = 0;
    number2 = 0;
  });
});

const mult2Numbers = keyMult.addEventListener("click", () => {
  number = Number(displayText.innerText);
  displayText.innerText = "";

  keyEquals.addEventListener("click", () => {
    number2 = Number(displayText.innerText);
    result = number * number2;
    displayText.innerText = result;
    result = 0;
    number = 0;
    number2 = 0;
  });
});

/*const inputValue1 = document.getElementById("entrada-1");
const inputValue2 = document.getElementById("entrada-2");
const btnClear = document.getElementById("btn-clear");
const btnSum = document.getElementById("btn-soma");
const btnSub = document.getElementById("btn-subtracao");
const btnMult = document.getElementById("btn-multiplicacao");
const btnDiv = document.getElementById("btn-divisao");
const resultado = document.getElementById("resultado");

btnClear.addEventListener("click", () => {
  inputValue1.value = " ";
  inputValue2.value = " ";
});

const handlerOperation = fn => {
  fn();
};

const sum2Numbers = btnSum.addEventListener('click', () => {
  let result = Number(inputValue1.value) + Number(inputValue2.value);
  resultado.innerText = result;
});

const sub2Numbers = btnSub.addEventListener('click', () => {
  let result = Number(inputValue1.value) - Number(inputValue2.value);
  resultado.innerText = result;
});

const mult2Numbers = btnMult.addEventListener('click', () => {
  let result = Number(inputValue1.value) * Number(inputValue2.value);
  resultado.innerText = result;
});

const div2Numbers = btnDiv.addEventListener('click', () => {
  let result = Number(inputValue1.value) / Number(inputValue2.value);
  if (inputValue2.value === 0){
    result = 0;
  }
  resultado.innerText = result;
});

const fnSum = (a, b) => {
  return a + b;
};

const fnSub = (a, b) => {
  return a - b;
};

const fnMult = (a, b) => {
  return a * b;
};

const fnDiv = (a, b) => {
  return b === 0 ? 0 : a / b;
};

sum(inputValue1.value, inputValue2.value);
*/
