//calculator

const inputValue1 = document.getElementById("entrada-1");
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
