'use strict';
let operator = -1;
const chosenOperationInfo = [
  {
    //0
    displays: 1,
    text: 'Переведення градусів в тисячн',
  },
  {
    //1
    displays: 1,
    text: 'Переведення градусів в MOA',
  },
  {
    //2
    displays: 1,
    text: 'Переведення градусів в Mil',
  },
  {
    //3
    displays: 1,
    text: 'Переведення Тисячні в градуси',
  },
  {
    //4
    displays: 1,
    text: 'Переведення Тисячних в MOA',
  },
  {
    //5
    displays: 1,
    text: 'Переведення Тисячні в Mil',
  },
  {
    //6
    displays: 2,
    text: 'ДУВ: Відстань',
    displayFirstText: 'Габарит цілі',
    displaySecondText: 'Кут спостереження за ціллю',
  },
  {
    //7
    displays: 2,
    text: 'ДУВ: Габарит',
    displayFirstText: 'Дистанція до цілі',
    displaySecondText: 'Кут спостереження за ціллю',
  },
  {
    //8
    displays: 2,
    text: 'ДУВ: Кут',
    displayFirstText: 'Габарит цілі',
    displaySecondText: 'Кут спостереження за ціллю',
  },
];

document
  .querySelector('select[name=methods]')
  .addEventListener('change', function (event) {
    operator = parseInt(event.target.value);
    showWorkSpace(operator);
  });

function showWorkSpace(operationIndex) {
  const displayFirst = document.querySelector('.display__label.first');
  const displaySecond = document.querySelector('.display__label.second');

  document.querySelector('.result').textContent =
    chosenOperationInfo[operationIndex].text;

  if (chosenOperationInfo[operationIndex].displays === 2) {
    displaySecond.classList.add('visible');
    document.querySelector('.display.first').placeholder =
      chosenOperationInfo[operationIndex].displayFirstText;
    document.querySelector('.display.second').placeholder =
      chosenOperationInfo[operationIndex].displaySecondText;
  } else {
    document
      .querySelector('.display__label.second')
      .classList.remove('visible');
  }
  displayFirst.classList.add('visible');
}

//----------------------------------- SOLVING THE RESULT BY =
document.querySelector('.btn__count').addEventListener('click', function () {
  const displayFirst = document.querySelector('.display.first');
  const displaySecond = document.querySelector('.display.second');
  const resultScreen = document.querySelector('.result');

  switch (operator) {
    case -1:
      resultScreen.textContent = 'Ви не обрали жодної операції...';
      break;
    case 0:
    case 1:
    case 2:
      resultScreen.textContent = degreeTo(displayFirst.value, operator);
      break;
    case 3:
    case 4:
    case 5:
      resultScreen.textContent = thousandsTo(displayFirst.value, operator);
      break;
    case 5:
    case 6:
    case 7:
      resultScreen.textContent = duiThousand(
        displayFirst.value,
        displaySecond.value,
        operator,
      );
      break;
  }
});

//--------------------------- SOLVING DEGREES TO
function degreeTo(firstOperand, operator) {
  firstOperand = parseFloat(firstOperand);
  let resultText = '';
  if (firstOperand > 360 || firstOperand < 0 || Number.isNaN(firstOperand)) {
    resultText =
      'Оце паварот... А де це бачили такі кути в градусах?!? Кут в градусах може бути від 0 до 360.. Гайда перепишіть';
  } else {
    switch (operator) {
      case 0:
        resultText = `${(firstOperand * 16.66666666666667).toFixed(
          1,
        )} тисячних`;
        break;

      case 1:
        resultText = `${(firstOperand * 60).toFixed(1)} MOA  (кутових хвилин)`;
        break;

      case 2:
        resultText = `${(firstOperand * 17.77777777778).toFixed(
          1,
        )} MIL (мілірадіан)`;
        break;
    }
  }
  return resultText;
}

//--------------------------- SOLVING THOUSANDS TO
function thousandsTo(firstOperand, operator) {
  firstOperand = parseFloat(firstOperand, operator);
  let resultText = '';

  if (firstOperand > 6000 || firstOperand < 0 || Number.isNaN(firstOperand)) {
    resultText = 'Доповідаю в голос: кут в тисячних може бути від 0 до 6000';
  } else {
    switch (operator) {
      case 3:
        resultText = `${(firstOperand * 0.06).toFixed(1)} градусів`;
        break;
      case 4:
        resultText = `${(firstOperand * 3.6).toFixed(1)} MOA  (кутових хвилин)`;
        break;
      case 5:
        resultText = `${(firstOperand * 1.06666666666).toFixed(
          1,
        )} MIL (мілірадіан)`;
        break;
    }
  }
  return resultText;
}

// ---------------------------------------- SOLVING FUNCTION DUV
function duiThousand(firstOperand, secondOperand, operator) {
  firstOperand = parseFloat(firstOperand);
  secondOperand = parseFloat(secondOperand);
  let resultText = '';
  switch (operator) {
    case 6:
      if (
        firstOperand > 0 &&
        secondOperand > 0 &&
        secondOperand <= 1500 &&
        !Number.isNaN(firstOperand) &&
        !Number.isNaN(secondOperand)
      ) {
        resultText = `Відстань до цілі складає ${(
          (firstOperand * 1000) /
          secondOperand
        ).toFixed(0)} метрів`;
      } else {
        resultText =
          "Друже, щось Ви ввели не так, гайда розбиратись... У верхньому полі вводите габарит об'єкта в метрах. Він має бути додатній. У нижньому вводите кут спостереження в тисячних який знаходиться у проміжку (0;1500). Ну бо ж не хочете сказати, що спостергіаєте об'єкт на 360 градусів...";
      }

      break;
    case 7:
      if (
        firstOperand > 0 &&
        secondOperand > 0 &&
        secondOperand <= 1500 &&
        !Number.isNaN(firstOperand) &&
        !Number.isNaN(secondOperand)
      ) {
        resultText = ` Габарит цілі складає ${(
          (firstOperand * secondOperand) /
          1000
        ).toFixed(1)} метрів`;
      } else {
        resultText =
          "Ну давай, скажи, що у всьому винен Т9... Перше поле відповідає за відстань до об'єкта і має бути більше 0. Друге поле відповідає за кут спостереження і має бути в проміжку (0;1500)... Даю ще одну спробу ";
      }

      break;
    case 8:
      if (
        firstOperand > 0 &&
        secondOperand > 0 &&
        !Number.isNaN(firstOperand) &&
        !Number.isNaN(secondOperand)
      ) {
        resultText = `Кут спостереження за об'єктом складає ${(
          (firstOperand * 1000) /
          secondOperand
        ).toFixed(0)} тисячних`;
      } else {
        resultText =
          "Певно, що у вас там на Марсі так дані і вводять ну а по наших правилах перше поле відповідає за габарит об'єкта і має бути більше за 0. Друге поле відповідає за відстань до цілі і, прикинь, теж має бути більше за 0. Давай, Спок, вводь ще раз";
      }
      break;
  }
  return resultText;
}

// //Додає числа в поля в залежності від того чи введено оператор чи ні
// document
//   .querySelectorAll('.number__btn')
//   .forEach(button => button.addEventListener('click', addNumbers));

// function addNumbers(buttonPressed) {
//   const buttonText = buttonPressed.target.innerText;
//   const displayString = operator === '' ? firstOperand : secondOperand;

//   let outputChar = '';
//   switch (buttonText) {
//     case '.':
//       if (displayString.length !== 0 && displayString.indexOf('.') === -1) {
//         outputChar = buttonText;
//       }
//       break;

//     case '-':
//       if (displayString.length === 0) {
//         outputChar = buttonText;
//       }
//       break;

//     default:
//       outputChar = buttonText;
//   }

//   if (operator === '') firstOperand += outputChar;
//   else secondOperand += outputChar;
//   outputOnDisplay(firstOperand, operator, secondOperand);
// }

// //реалізація кнопок операторів
// document
//   .querySelectorAll('.operation__btn')
//   .forEach(button => button.addEventListener('click', addOperations));

// function addOperations(buttonPressed) {
//   const buttonText = buttonPressed.target.innerText;
//   if (firstOperand !== '') {
//     operator = buttonText;
//   } else {
//     document.querySelector('.result').textContent =
//       'Нє нє нє, давайте без чітів, спочатку вводьте перше число';
//   }
//   outputOnDisplay(firstOperand, operator, secondOperand);
// }

// //РЕАЛІЗАЦІЯ ВИДАЛЕННЯ ВМІСТУ ПОЛІВ
// document.querySelector('.delete__btn').addEventListener('click', deleteElement);

// function deleteElement() {
//   //   if (secondOperand !== '') secondOperand = '';
//   //   else if (operator !== '') operator = '';
//   //   else firstOperand = '';
//   //   outputOnDisplay(firstOperand, operator, secondOperand);
//   firstOperand = '';
//   operator = '';
//   secondOperand = '';
//   outputOnDisplay(firstOperand, operator, secondOperand);
// }
// //ВИВЕДЕННЯ НА ЕКРАН
// function outputOnDisplay(firstOperand, operator, secondOperand) {
//   display.value = firstOperand + ' ' + operator + ' ' + secondOperand;
// }

// //ОБЧИСЛЕННЯ
// document.querySelector('.btn__count').addEventListener('click', countResult);

// function countResult() {
//   const resultText = document.querySelector('.result');

//   if (firstOperand !== '' && operator !== '') {
//     switch (operator.slice(0, 1)) {
//       //ГРАДУСИ В...
//       case 'Г':
//         resultText.textContent = degreeTo(firstOperand, operator);
//         break;

//       //ТИСЯЧНІ В ...
//       case 'Т':
//         resultText.textContent = thousandsTo(firstOperand, operator);
//         break;

//       //ДУВ
//       case 'Д':
//         resultText.textContent = duiThousand(
//           firstOperand,
//           operator,
//           secondOperand,
//         );
//         break;
//     }
//   } else
//     resultText.textContent =
//       'Шановний, шо Ви тицяєте? Може б Ви щось повводили?';
// }

// //FUNCTION DEGREES TO MIL, THOUSANDS, MOA
//

// //FUNCTION THOUSANDS TO MIL, DEGREES, MOA
// function thousandsTo(firstOperand, operator) {
//   firstOperand = parseFloat(firstOperand);
//   let resultText = '';

//   if (firstOperand > 6000 || firstOperand < 0) {
//     resultText = 'Доповідаю в голос: кут в тисячних може бути від 0 до 6000';
//   } else {
//     switch (operator) {
//       case 'Тисячні в градуси':
//         resultText = `${(firstOperand * 0.06).toFixed(1)} градусів`;
//         break;
//       case 'Тисячні в MOA':
//         resultText = `${(firstOperand * 3.6).toFixed(1)} MOA  (кутових хвилин)`;
//         break;
//       case 'Тисячні в Mil':
//         resultText = `${(firstOperand * 1.06666666666).toFixed(
//           1,
//         )} MIL (мілірадіан)`;
//         break;
//     }
//   }
//   return resultText;
// }

// //FUNCTION DUV
// function duiThousand(firstOperand, operator, secondOperand) {
//   firstOperand = parseFloat(firstOperand);
//   secondOperand = parseFloat(secondOperand);
//   let resultText = '';
//   switch (operator) {
//     case 'ДУВ: Відстань':
//       if (firstOperand > 0 && secondOperand > 0 && secondOperand <= 1500) {
//         resultText = `Відстань до цілі складає ${(
//           (firstOperand * 1000) /
//           secondOperand
//         ).toFixed(0)} метрів`;
//       } else {
//         resultText =
//           "Друже, щось Ви ввели не так, гайда розбиратись... У верхньому полі вводите габарит об'єкта в метрах. Він має бути додатній. У нижньому вводите кут спостереження в тисячних який знаходиться у проміжку (0;1500). Ну бо ж не хочете сказати, що спостергіаєте об'єкт на 360 градусів...";
//       }

//       break;
//     case 'ДУВ: Габарит':
//       if (firstOperand > 0 && secondOperand > 0 && secondOperand <= 1500) {
//         resultText = ` Габарит цілі складає ${(
//           (firstOperand * secondOperand) /
//           1000
//         ).toFixed(1)} метрів`;
//       } else {
//         resultText =
//           "Ну давай, скажи, що у всьому винен Т9... Перше поле відповідає за відстань до об'єкта і має бути більше 0. Друге поле відповідає за кут спостереження і має бути в проміжку (0;1500)... Даю ще одну спробу ";
//       }

//       break;
//     case 'ДУВ: Кут':
//       if (firstOperand > 0 && secondOperand > 0) {
//         resultText = `Кут спостереження за об'єктом складає ${(
//           (firstOperand * 1000) /
//           secondOperand
//         ).toFixed(0)} тисячних`;
//       } else {
//         resultText =
//           "Певно, що у вас там на Марсі так дані і вводять ну а по наших правилах перше поле відповідає за габарит об'єкта і має бути більше за 0. Друге поле відповідає за відстань до цілі і, прикинь, теж має бути більше за 0. Давай, Спок, вводь ще раз";
//       }
//       break;
//   }
//   return resultText;
// }
