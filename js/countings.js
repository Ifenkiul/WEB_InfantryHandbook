'use strict';

(function () {
  let operator = -1;

  const chosenOperationInfo = [
    {
      //0
      displays: 1,
      text: 'Переведення Градусів в ... оберіть розмірність',
      displayFirstText: 'Введіть кут в градусах',
      displaySecondText: '',
    },

    {
      //1
      displays: 1,
      text: 'Переведення Тисячних в ... оберіть розмірність',
      displayFirstText: 'Введіть кут в тисячних',
      displaySecondText: '',
    },

    {
      //2
      displays: 2,
      text: 'ДУВ: Відстань',
      displayFirstText: 'Габарит цілі',
      displaySecondText: 'Кут спостереження',
    },
    {
      //3
      displays: 2,
      text: 'ДУВ: Габарит',
      displayFirstText: 'Дистанція до цілі',
      displaySecondText: 'Кут спостереження',
    },
    {
      //4
      displays: 2,
      text: 'ДУВ: Кут',
      displayFirstText: 'Габарит цілі',
      displaySecondText: 'Дистанція до цілі',
    },
    {
      //5 AK-47M
      displays: 3,
      text: 'Приведення до нормального бою ...',
      displayFirstText: 'Зміщення по горизонталі',
      displaySecondText: 'Зміщення по вертикалі',
      horizonalMoveMilimetr: [
        26, //AK-47
        26, //AK-74
        18, //RPK-74
        15, //PK
        37, //AKSU
      ],
      oborotVertical: [
        20, //AK-47
        20, //AK-74
        14, //RPK-74
        12, //PK
        28, //AKSU
      ],
    },
  ];

  //-------------------------------------------CHOSING OPERATION
  document
    .querySelector('select[name=methods]')
    .addEventListener('change', function (event) {
      operator = parseInt(event.target.value);
      showWorkSpace(operator);
    });

  function showWorkSpace(operationIndex) {
    const displayFirst = document.querySelector('.display.first');
    const displaySecond = document.querySelector('.display.second');
    const resultDiv = document.querySelector('.result');
    if (operator !== -1) {
      resultDiv.textContent = chosenOperationInfo[operationIndex].text;

      switch (chosenOperationInfo[operationIndex].displays) {
        case 3:
          hideWorkspaces();
          displaySecond.classList.add('visible');
          displaySecond.placeholder =
            chosenOperationInfo[operationIndex].displaySecondText;
          document
            .querySelector('.bullet__vector-vert')
            .classList.add('visible');
          document
            .querySelector('.bullet__vector-hor')
            .classList.add('visible');
          document.querySelector('.select__normBoi').classList.add('visible');
          break;

        case 2:
          hideWorkspaces();
          displaySecond.classList.add('visible');

          displaySecond.placeholder =
            chosenOperationInfo[operationIndex].displaySecondText;

          break;

        case 1:
          hideWorkspaces();
          if (operationIndex === 0) {
            document.querySelector('.degreesTo').classList.add('visible');
          } else {
            if (operationIndex === 1) {
              document.querySelector('.thousandsTo').classList.add('visible');
            }
          }
      }

      displayFirst.classList.add('visible');
      displayFirst.placeholder =
        chosenOperationInfo[operationIndex].displayFirstText;
    } else {
      resultDiv.textContent = 'Піхотна рахувалка';
      hideWorkspaces();
    }
  }

  function hideWorkspaces() {
    document.querySelector('.display.first').classList.remove('visible');
    document.querySelector('.display.second').classList.remove('visible');
    document.querySelector('.bullet__vector-vert').classList.remove('visible');
    document.querySelector('.bullet__vector-hor').classList.remove('visible');
    document.querySelector('.display.first').value = '';
    document.querySelector('.display.second').value = '';
    document.querySelector('.degreesTo').classList.remove('visible');
    document.querySelector('.thousandsTo').classList.remove('visible');
    document.querySelector('.select__normBoi').classList.remove('visible');
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
        resultScreen.textContent = degreeTo(displayFirst.value);
        break;

      case 1:
        resultScreen.textContent = thousandsTo(displayFirst.value);
        break;

      case 2:
      case 3:
      case 4:
        resultScreen.textContent = duiThousand(
          displayFirst.value,
          displaySecond.value,
          operator,
        );
        break;

      case 5:
        resultScreen.textContent = normBoi(
          operator,
          displayFirst.value,
          displaySecond.value,
        );
        break;
    }
  });

  //--------------------------- SOLVING DEGREES TO
  function degreeTo(firstOperand) {
    firstOperand = parseFloat(firstOperand);
    let resultText = '';
    if (firstOperand > 360 || firstOperand < 0 || Number.isNaN(firstOperand)) {
      resultText =
        'Оце паварот... А де це бачили такі кути в градусах?!? Кут в градусах може бути від 0 до 360.. Гайда перепишіть';
    } else {
      switch (document.querySelector('input[name="degreesTo"]:checked').value) {
        case '1':
          resultText = `${(firstOperand * 16.66666666666667).toFixed(
            1,
          )} тисячних`;
          break;

        case '2':
          resultText = `${(firstOperand * 60).toFixed(
            1,
          )} MOA  (кутових хвилин)`;
          break;

        case '3':
          resultText = `${(firstOperand * 17.77777777778).toFixed(
            1,
          )} MIL (мілірадіан)`;
          break;
      }
    }
    return resultText;
  }

  //--------------------------- SOLVING THOUSANDS TO
  function thousandsTo(firstOperand) {
    firstOperand = parseFloat(firstOperand);
    let resultText = '';

    if (firstOperand > 6000 || firstOperand < 0 || Number.isNaN(firstOperand)) {
      resultText = 'Доповідаю в голос: кут в тисячних може бути від 0 до 6000';
    } else {
      switch (
        document.querySelector('input[name="thousandsTo"]:checked').value
      ) {
        case '1': //to degrees
          resultText = `${(firstOperand * 0.06).toFixed(1)} градусів`;
          break;
        case '2': //to MOA
          resultText = `${(firstOperand * 3.6).toFixed(
            1,
          )} MOA  (кутових хвилин)`;
          break;
        case '3': //to Mil
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
      case 2:
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
      case 3:
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
      case 4:
        console.log(firstOperand + ', ' + secondOperand);
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

  //------------------------------NORM BOI
  function normBoi(operator, firstOperand, secondOperand) {
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);
    let resultText = '';
    const chosenWeapon = parseInt(
      document.querySelector('.select__normBoi').value,
    );
    console.log('weapon chosen: ' + chosenWeapon);
    if (chosenWeapon !== -1) {
      if (!Number.isNaN(firstOperand) && !Number.isNaN(secondOperand)) {
        const elementaryHor =
          Math.round(
            (1 /
              chosenOperationInfo[operator].horizonalMoveMilimetr[
                chosenWeapon
              ]) *
              100000,
          ) / 100000;
        // console.log(
        //   'Зміщенню на 1 см від КТ відповідає зміщення мушки на ' + elementaryHor,
        // );

        const elementaryVertical =
          Math.round(
            (1 / chosenOperationInfo[operator].oborotVertical[chosenWeapon]) *
              100000,
          ) / 100000;
        console.log(elementaryVertical);

        resultText = `Треба змістити мушку на ${
          Math.round(firstOperand * elementaryHor * 100) / 100
        } міліметрів ${
          document.querySelector('input[name="vectorHorizontal"]:checked').value
        }. Також треба змістити мушку на ${
          Math.round(secondOperand * elementaryVertical * 100) / 100
        } повних обертів ${
          document.querySelector('input[name="vectorVertical"]:checked').value
        }`;
      } else {
        resultText =
          'Ви щось вводите не то...У верхньому полі введіть відхилення СТВ від КТ по горизонталі в сантиметрах та оберіть напрям відхилення. В нижньому полі введіть відхилення СТВ від КТ по вертикалі в сантиметрах та оберіть напрям відхилення';
      }
    } else {
      resultText = 'Ви не обрали зброю';
    }

    return resultText;
  }

  //---------------------------- CLEAR DISPLAYS on DEL BUTTON
  document.querySelector('.delete__btn').addEventListener('click', function () {
    document.querySelector('.display.first').value = '';
    document.querySelector('.display.second').value = '';
  });
})();
