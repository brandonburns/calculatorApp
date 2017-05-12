document.getElementById('numbersContainer').addEventListener('click', calculate);

document.getElementById('symbols').addEventListener('click', totalCalculate);

document.getElementById('equalsSign').addEventListener('click', equals);

document.getElementById('clear').addEventListener('click', clear);

var display = document.getElementById('display');

var value = '';
var initalValue = '';
var symbol = '';

function calculate(e) {
  value += e.target.innerHTML.toString();
  display.innerHTML = value;
}

function totalCalculate(e) {
  symbol = e.target.innerHTML.toString();
  if (symbol === "%") {
    display.innerHTML = value / 100;
    value = value / 100;
  } else {
    initialValue = value;
    value = '';
  }
}

function equals() {
  var finalValue = (+(value));
  var finalInitial = (+(initialValue));

  if (symbol === "*") {
    display.innerHTML = finalInitial * finalValue;
    value = finalInitial * finalValue
  } else if (symbol === "-") {
    display.innerHTML = finalInitial - finalValue;
    value = finalInitial - finalValue
  } else if (symbol === "/") {
    display.innerHTML = finalInitial / finalValue;
    value = finalInitial / finalValue
  } else if (symbol === "+") {
    display.innerHTML = finalInitial + finalValue;
    value = finalInitial + finalValue
  }

}

function clear() {
  value = '';
  initalValue = '';
  symbol = '';
  finalValue = 0;
  initialValue = 0;
  display.innerHTML = '';
}
