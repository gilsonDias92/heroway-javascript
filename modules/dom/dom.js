// const input = document.getElementById('input');
// const button = document.getElementById('button');

// const number = document.getElementById('number');
// const result = document.getElementById('result');

// input.addEventListener('input', (e) => {
//   input.style.color = e.target.value < 0 ? 'red' : 'black';
// });

// /* ---- */

// button.addEventListener('click', () => {
//   const parsedValue = Number(input.value);

//   if (Number.isNaN(parsedValue)) {
//     result.style.color = 'red';
//     result.textContent = 'ERROR!';
//   } else {
//     number.textContent = parsedValue;
//     result.textContent = parsedValue + 10;
//   }
// });

const input = document.getElementById("input");
const button = document.getElementById("button");

//atualizar valor de um span no html
const spanNumber = document.getElementById("number");

const result = document.getElementById("result");
const sumSpan = document.getElementById("sumNumber");

// a cada tecla digitada no input ele executa o código abaixo
// função para validar se é um número em tempo real
input.addEventListener('keypress', (event) => {
  let inputNum = input.value;
  const lastValue = inputNum.charAt(inputNum.length -1);

  if (!(Number.isFinite(lastValue))) {
    const newValue = inputNum.substring(0, inputNum.length -1);
    inputNum = newValue;
  }
});

// quando o usuário termina de digitar ele executa o código abaixo
input.addEventListener('change', () => {
  console.log(input.value);
});

button.addEventListener('click', () => {
  //convertendo string para numero e guardando em variaveis
  const inputValue = Number(input.value);
  const sumNumber = Number(sumSpan.innerText);

  if (Number.isNaN(inputValue) === true) {
    result.innerText = "ERRO!!";
    result.style.color = 'red';
    result.style.fontWeight = 'bold';
  } else {
    //alterar com o valor do input.value
    result.style.color = 'black';
    number.innerText = inputValue;
    result.innerText = inputValue + sumNumber;

    // mostra as prop da variavel
  }
});