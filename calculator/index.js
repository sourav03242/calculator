const input = document.getElementById("result");

const display = (number) => {
  input.value += " " + number + " ";
};

const clearScreen = () => {
  input.value = "";
};
function syntaxError() {
  if (
    eval(input.value) == SyntaxError ||
    eval(input.value) == ReferenceError ||
    eval(input.value) == TypeError
  ) {
    input.value == "Syntax Error";
  }
}
function equals() {
  if (input.value.indexOf("^") > -1) {
    var base = input.value.slice(0, input.value.indexOf("^"));
    var exponent = input.value.slice(input.value.indexOf("^") + 1);
    input.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    input.value = eval(input.value);
    checkLength();
    syntaxError();
  }
}

function clear() {
  input.value = "";
}

function backspace() {
  input.value = input.value.substring(0, input.value.length - 1);
}

function multiply() {
  input.value += "*";
}

function divide() {
  input.value += "/";
}

function plusMinus() {
  if (input.value.charAt(0) === "-") {
    input.value = input.value.slice(1);
  } else {
    input.value = "-" + input.value;
  }
}

function factorial() {
  var number = 1;
  if (input.value === 0) {
    input.value = "1";
  } else if (input.value < 0) {
    input.value = "undefined";
  } else {
    var number = 1;
    for (var i = input.value; i > 0; i--) {
      number *= i;
    }
    input.value = number;
  }
}

function pi() {
  input.value = input.value * Math.PI;
}

function square() {
  input.value = eval(input.value * input.value);
}

function squareRoot() {
  input.value = Math.sqrt(input.value);
}

function percent() {
  input.value = input.value / 100;
}

function sin() {
  input.value = Math.sin(input.value);
}

function cos() {
  input.value = Math.cos(input.value);
}

function tan() {
  input.value = Math.tan(input.value);
}

function log() {
  input.value = Math.log10(input.value);
}

function ln() {
  input.value = Math.log(input.value);
}

function exponent() {
  input.value += "^";
}

function exp() {
  input.value = Math.exp(input.value);
}

function radians() {
  input.value = input.value * (Math.PI / 180);
}

function degrees() {
  input.value = input.value * (180 / Math.PI);
}
