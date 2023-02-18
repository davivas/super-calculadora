function addition(numberX, numberY) {
  var plus = numberX + numberY;
  results[0].result = plus;
  return plus;
}

function subtractionXY(numberX, numberY) {
  var minusXY = numberX - numberY;
  results[1].result = minusXY;
  return minusXY;
}

function subtractionYX(numberX, numberY) {
  var minusYX = numberY - numberX;
  results[2].result = minusYX;
  return minusYX;
}

function multiplication(numberX, numberY) {
  var multipliedBy = numberY * numberX;
  results[3].result = multipliedBy;
  return multipliedBy;
}

function divisionXY(numberX, numberY) {
  var dividedBy = (numberX / numberY).toFixed(2);
  results[4].result = dividedBy;
  return dividedBy;
}

function divisionYX(numberX, numberY) {
  var dividedBy = (numberY / numberX).toFixed(2);
  results[5].result = dividedBy;
  return dividedBy;
}

function powerOfXAtTheBaseOfY(numberX, numberY) {
  var power = numberX ** numberY;
  results[6].result = power;
  return power;
}

function powerOfYAtTheBaseOfX(numberX, numberY) {
  var power = numberY ** numberX;
  results[7].result = power;
  return power;
}

function squareRootX(numberX) {
  var sqrt = Math.sqrt(numberX).toFixed(2);
  results[8].result = sqrt;
  return sqrt;
}

function squareRootY(numberY) {
  var sqrt = Math.sqrt(numberY).toFixed(2);
  results[9].result = sqrt;
  return sqrt;
}

function factorialX(numberX) {
  var i = numberX;
  var result = numberX;
  while (i > 1) {
    i--;
    result *= i;
  }
  results[10].result = result;
  return result;
}

function factorialY(numberY) {
  var i = numberY;
  var result = numberY;
  while (i > 1) {
    i--;
    result *= i;
  }
  results[11].result = result;
  return result;
}

function percentageOfXInRelationToY(numberX, numberY) {
  var percentXY = Math.ceil((numberX * 100) / numberY);
  results[12].result = percentXY;
  return percentXY;
}

function percentageOfYInRelationToX(numberX, numberY) {
  var percentYX = Math.ceil((numberY * 100) / numberX);
  results[13].result = percentYX;
  return percentYX;
}

function average(numberX, numberY) {
  var result = (numberX + numberY) / 2;
  results[14].result = result;
  return result;
}
