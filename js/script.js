var results = [
  { operator: 'Soma:', result: 0 },
  { operator: 'Subtração (X - Y):', result: 0 },
  { operator: 'Subtração (Y - X):', result: 0 },
  { operator: 'Multiplicação:', result: 0 },
  { operator: 'Divisão (X / Y):', result: 0 },
  { operator: 'Divisão (Y / X):', result: 0 },
  { operator: 'Potência de X na base de Y:', result: 0 },
  { operator: 'Potência de Y na base de X:', result: 0 },
  { operator: 'Raiz quadrada de X:', result: 0 },
  { operator: 'Raiz quadrada de Y:', result: 0 },
  { operator: 'Fatorial de X:', result: 0 },
  { operator: 'Fatorial de Y:', result: 0 },
  {
    operator: 'Porcentagem de X em relação a Y:',
    result: 0,
  },
  {
    operator: 'Porcentagem de X em relação a Y:',
    result: 0,
  },
  { operator: 'Média:', result: 0 },
];

function start() {
  render();
}

function render() {
  renderButtons();
  renderScreen();
}

function renderButtons() {
  var divCalculatorButtons = document.querySelector('#calculator-buttons');

  var calculateButton = createCalculateButton();
  var calculatorResetButton = createCalculatorResetButton();

  divCalculatorButtons.appendChild(calculateButton);
  divCalculatorButtons.appendChild(calculatorResetButton);
}

function createCalculateButton() {
  var button = document.createElement('button');
  button.textContent = 'CALCULAR';
  button.addEventListener('click', calculate);

  return button;
}

function calculate() {
  var numberX = Number(document.getElementById('input-first-number').value);
  var numberY = Number(document.getElementById('input-second-number').value);

  addition(numberX, numberY);
  subtractionXY(numberX, numberY);
  subtractionYX(numberX, numberY);
  multiplication(numberX, numberY);
  divisionXY(numberX, numberY);
  divisionYX(numberX, numberY);
  powerOfXAtTheBaseOfY(numberX, numberY);
  powerOfYAtTheBaseOfX(numberX, numberY);
  squareRootX(numberX);
  squareRootY(numberY);
  factorialX(numberX);
  factorialY(numberY);
  percentageOfXInRelationToY(numberX, numberY);
  percentageOfYInRelationToX(numberX, numberY);
  average(numberX, numberY);

  renderScreen();
}

function createCalculatorResetButton() {
  var button = document.createElement('button');
  button.textContent = 'ZERAR';
  button.addEventListener('click', resetCalculator);

  return button;
}

function resetCalculator() {
  document.getElementById('input-first-number').value = 0;
  document.getElementById('input-second-number').value = 0;

  for (i = 0; i < results.length; i++) {
    results[i].result = 0;
  }
  renderScreen();
}

function renderScreen() {
  var divRenderScreen = document.querySelector('#calculator-screen');
  divRenderScreen.innerHTML = '';
  divRenderScreen.classList.add('div-screen');
  var ulScreen = document.createElement('ul');
  ulScreen.classList.add('screen');

  for (var i = 0; i < results.length; i++) {
    var liOperators = document.createElement('li');
    liOperators.classList.add('operators');

    var liResults = document.createElement('li');
    liResults.classList.add('results');

    liOperators.textContent = results[i].operator + ' ';
    liResults.textContent = results[i].result;
    ulScreen.appendChild(liOperators);
    ulScreen.appendChild(liResults);
  }
  divRenderScreen.appendChild(ulScreen);
}

start();
