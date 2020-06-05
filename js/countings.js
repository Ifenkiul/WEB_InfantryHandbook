'use strict';

const topHasDot = false;
const botHasDot = false;

const display = document.querySelector('.display');
let firstOperand = '';
let operator = '';
let secondOperand = '';

document
  .querySelectorAll('.number__btn')
  .forEach(button => button.addEventListener('click', addNumbers));

//Додає числа в поля в залежності від того чи введено оператор чи ні
function addNumbers(buttonPressed) {
  const buttonText = buttonPressed.target.innerText;
  const displayString = operator === '' ? firstOperand : secondOperand;

  let outputChar = '';
  switch (buttonText) {
    case '.':
      if (displayString.length !== 0 && displayString.indexOf('.') === -1) {
        outputChar = buttonText;
      }
      break;

    case '-':
      if (displayString.length === 0) {
        outputChar = buttonText;
      }
      break;

    default:
      outputChar = buttonText;
  }

  if (operator === '') firstOperand += outputChar;
  else secondOperand += outputChar;
  outputOnDisplay(firstOperand, operator, secondOperand);
}

//реалізація кнопок операторів
document
  .querySelectorAll('.operation__btn')
  .forEach(button => button.addEventListener('click', addOperations));

function addOperations(buttonPressed) {
  const buttonText = buttonPressed.target.innerText;
  if (firstOperand !== '') {
    operator = buttonText;
  } else {
    document.querySelector('.result').textContent =
      'Нє нє нє, давайте без чітів, спочатку вводьте перше число';
  }
  outputOnDisplay(firstOperand, operator, secondOperand);
}

//РЕАЛІЗАЦІЯ ВИДАЛЕННЯ ВМІСТУ ПОЛІВ
document.querySelector('.delete__btn').addEventListener('click', deleteElement);

function deleteElement() {
  //   if (secondOperand !== '') secondOperand = '';
  //   else if (operator !== '') operator = '';
  //   else firstOperand = '';
  //   outputOnDisplay(firstOperand, operator, secondOperand);
  firstOperand = '';
  operator = '';
  secondOperand = '';
  outputOnDisplay(firstOperand, operator, secondOperand);
}
//ВИВЕДЕННЯ НА ЕКРАН
function outputOnDisplay(firstOperand, operator, secondOperand) {
  display.value = firstOperand + ' ' + operator + ' ' + secondOperand;
}

//ОБЧИСЛЕННЯ
document.querySelector('.btn__count').addEventListener('click', countResult);

function countResult() {
  const resultText = document.querySelector('.result');

  if (firstOperand !== '' && operator !== '') {
    switch (operator.slice(0, 1)) {
      //ГРАДУСИ В...
      case 'Г':
        resultText.textContent = degreeTo(firstOperand, operator);
        break;

      //ТИСЯЧНІ В ...
      case 'Т':
        resultText.textContent = thousandsTo(firstOperand, operator);
        break;

      //ДУВ
      case 'Д':
        resultText.textContent = duiThousand(
          firstOperand,
          operator,
          secondOperand,
        );
        break;
    }
  } else
    resultText.textContent =
      'Шановний, шо Ви тицяєте? Може б Ви щось повводили?';
}

//FUNCTION DEGREES TO MIL, THOUSANDS, MOA
function degreeTo(firstOperand, operator) {
  firstOperand = parseFloat(firstOperand);
  let resultText = '';
  if (firstOperand > 360) {
    resultText =
      'Оце паварот... А де це Ви бачили кут в градусах більше 360... Гайда перепишіть';
  } else {
    switch (operator) {
      case 'Градуси в тисячні':
        resultText = `${(firstOperand * 16.66666666666667).toFixed(
          0,
        )} тисячних`;
        break;

      case 'Градуси в MOA':
        resultText = `${(firstOperand * 60).toFixed(2)} MOA  (кутових хвилин)`;
        break;

      case 'Градуси в Mil':
        resultText = `${(firstOperand * 17.77777777778).toFixed(
          2,
        )} MIL (мілірадіан)`;
        break;
    }
  }
  return resultText;
}

//FUNCTION THOUSANDS TO MIL, DEGREES, MOA
function thousandsTo(firstOperand, operator) {
  let resultText = '';

  if (firstOperand > 6000) {
    resultText = 'Доповідаю в голос: повне коло складає 6000 тисячних';
  } else {
    switch (operator) {
      case 'Тисячні в градуси':
        resultText = `${(firstOperand * 0.06).toFixed(2)} градусів`;
        break;
      case 'Тисячні в MOA':
        resultText = `${(firstOperand * 3.6).toFixed(2)} MOA  (кутових хвилин)`;
        break;
      case 'Тисячні в Mil':
        resultText = `${(firstOperand * 1.06666666666).toFixed(
          2,
        )} MIL (мілірадіан)`;
        break;
    }
  }
  return resultText;
}

//FUNCTION DUV
function duiThousand(firstOperand, operator, secondOperand) {
  let resultText = '';
  switch (operator) {
    case 'ДУВ: Відстань':
      if (firstOperand > 0 && secondOperand > 0 && secondOperand <= 1500) {
        resultText = `Відстань до цілі складає ${(
          (firstOperand * 1000) /
          secondOperand
        ).toFixed(0)} метрів`;
      } else {
        resultText =
          "Друже, щось Ви ввели не так, гайда розбиратись... У верхньому полі вводите габарит об'єкта в метрах. Він має бути додатній. У нижньому вводите кут спостереження в тисячних який знаходиться у проміжку (0;1500). Ну бо ж не хочете сказати, що спостергіаєте об'єкт на 360 градусів...";
      }

      break;
    case 'ДУВ: Габарит':
      if (firstOperand > 0 && secondOperand > 0 && secondOperand <= 1500) {
        resultText = ` Габарит цілі складає ${(
          (firstOperand * secondOperand) /
          1000
        ).toFixed(1)} метрів`;
      } else {
        resultText =
          "Ну давай, скажи, що у всьому винен Т9... Перше поле відповідає за відстань до об'єкта і має бути більше 0. Друге поле відповідає за кут спостереження і має бути в проміжку (0;1500)... Даю ще одну спробу ";
      }

      break;
    case 'ДУВ: Кут':
      if (firstOperand > 0 && secondOperand > 0) {
        resultText = `Кут спостереження за об'єктом складає ${(
          (firstOperand * 1000) /
          numberBot
        ).toFixed(0)} тисячних`;
      } else {
        resultText =
          "Певно, що у вас там на Марсі так дані і вводять ну а по наших правилах перше поле відповідає за габарит об'єкта і має бути більше за 0. Друге поле відповідає за відстань до цілі і, прикинь, теж має бути більше за 0. Давай, Спок, вводь ще раз";
      }
      break;
  }
  return resultText;
}
