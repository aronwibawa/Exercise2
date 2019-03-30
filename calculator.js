function getNumber(num) {
  var var_input = document.getElementById("input");
  switch (num) {
    case 1:
      var_input.value += "1";
      break;
    case 2:
      var_input.value += "2";
      break;
    case 3:
      var_input.value += "3";
      break;
    case 4:
      var_input.value += "4";
      break;
    case 5:
      var_input.value += "5";
      break;
    case 6:
      var_input.value += "6";
      break;
    case 7:
      var_input.value += "7";
      break;
    case 8:
      var_input.value += "8";
      break;
    case 9:
      var_input.value += "9";
      break;
    case 0:
      var_input.value += "0";
      break;
  }
}

function getOperand(operand) {
  var var_input = document.getElementById("input");
  switch (operand) {
    case "+":
      var_input.value += "+";
      break;
    case "-":
      var_input.value += "-";
      break;
    case "x":
      var_input.value += "*";
      break;
    case "/":
      var_input.value += "/";
      break;
    case "+/-":
      if (var_input.value.length <= 1) {
        var_input.value = "-" + var_input.value;
      } else {
        var_input.value =
          var_input.value.substring(0, var_input.value.length - 1) +
          "-" +
          var_input.value.substring(
            var_input.value.length - 1,
            var_input.value.length
          );
      }

      break;
    case ".":
      var_input.value += ".";
      break;
  }
}

function calculate() {
  try {
    var var_input = document.getElementById("input");
    var ans = eval(var_input.value);
    document.getElementById("answer").value = "=" + ans;
  } catch (error) {
    document.getElementById("answer").value = "error";
  }
}

var i = 0;
function bracket() {
  var var_input = document.getElementById("input");
  if (i == 0) {
    var_input.value += "(";
    i = 1;
  } else if (i == 1) {
    var_input.value += ")";
    i = 0;
  }
}

function backspace() {
  var var_input = document.getElementById("input");
  var x = var_input.value;
  if (x.length > 0) {
    x = x.substring(0, x.length - 1);
    var_input.value = x;
  }
}

function clearScreen() {
  document.getElementById("input").value = "";
  document.getElementById("answer").value = "";
}
