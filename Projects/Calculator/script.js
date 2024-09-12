const display = document.getElementById("display");

var doMath = {
  "+": function (a, b) {
    return a + b;
  },
  "-": function (a, b) {
    return a - b;
  },
  "*": function (a, b) {
    return a * b;
  },
  "/": function (a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    } else {
      return a / b;
    }
  },
};

function updateDisplay(ch) {
  display.value += ch;
}

function clearDisplay() {
  display.value = "";
  display.style.fontSize = "1.8rem";
}

function backspace() {
  display.value = display.value.slice(0, display.value.length - 1);
}

function calculate() {
  try {
    if (isNaN(handleOperator(display.value))) {
      throw new Error("Invalid input. Please enter a valid number.");
    } else {
      display.value = handleOperator(display.value);
    }
  } catch (error) {
    display.style.fontSize = "1.1rem";
    display.value = error;
  }
}

function handleOperator(ch) {
  let operation = ch;
  let total = 0;
  function getOperators() {
    let operators = [];
    for (let i = 0; i < operation.length; i++) {
      if (
        operation[i] === "+" ||
        operation[i] === "-" ||
        operation[i] === "*" ||
        operation[i] === "/"
      ) {
        operators.push(i);
      }
    }
    return operators;
  }
  if (getOperators().length === 0) {
    throw new Error("Invalid input.");
  } else {
    while (exist(`*`) && total >= 0) {
      evaluate(`*`);
    }
    while (exist(`/`) && total >= 0) {
      evaluate(`/`);
    }
    while (exist(`+`) || exist(`-`)) {
      add();
    }
  }

  function add() {
    let operators = getOperators();
    while (operators.length > 0) {
      operators = getOperators();
      total =
        Number(operation.slice(0, operators[0])) +
        Number(operation.slice(operators[0], operators[1]));
      operation = operation.replace(
        operation.slice(0, operators[1]),
        String(total)
      );
      operators.splice(0, 1);
    }
  }

  function evaluate(op) {
    let operators = getOperators();
    let j = 0;
    while (operators.length > 0 && j < operators.length) {
      if (operation[operators[j]] === op) {
        let indexOperation = operators[j];
        if (j === 0) {
          total = doMath[op](
            Number(operation.slice(0, indexOperation)),
            Number(operation.slice(indexOperation + 1, operators[1]))
          );
          operation = operation.replace(
            operation.slice(0, operators[1]),
            String(total)
          );
          operators.splice(j, 1);
        } else {
          total = doMath[op](
            Number(operation.slice(operators[j - 1] + 1, indexOperation)),
            Number(operation.slice(indexOperation + 1, operators[j + 1]))
          );
          operation = operation.replace(
            operation.slice(operators[j - 1] + 1, operators[j + 1]),
            String(total)
          );
          operators.splice(j, 1);
        }
        j++;
      }
      j++;
    }
  }
  function exist(op) {
    let i = 0;
    test = false;
    while (i < operation.length && !test) {
      if (operation[i] === op) {
        test = true;
      }
      i++;
    }
    return test;
  }
  return total;
}
