console.log("JS");

// MAKE THE CALCULATOR WORK

// DONT USE THE EVAL METHOD

// pressing buttons inputs numbers into the calculator - event listner on the buttons that will store the values in a variable

// pressing function buttons clear the input from the screen so user can add second numbers - fills a variable with the user input

// pressing = does the math thing. - function performs the math that the user put in.

let userInput = "";
let operator = "";
let userInput2 = "";

var elements = document.getElementsByTagName("input");
let display = document.getElementById("display");

for (let element of elements) {
  element.onclick = function () {
    var value = element.value;
    var realValue = Number(value);
    if (value == "c") {
      userInput = "";
      userInput2 = "";
      operator = "";
      display.value = "0";
    } else if (isNaN(realValue)) {
      if (value == "=" && userInput2.length > 0) {
        var realUserInput = Number(userInput);
        var realUserInput2 = Number(userInput2);
        if (operator == "+") {
          var result = realUserInput + realUserInput2;
        } else if (operator == "-") {
          var result = realUserInput - realUserInput2;
        } else if (operator == "*") {
          var result = realUserInput * realUserInput2;
        } else if (operator == "/") {
          var result = realUserInput / realUserInput2;
        }
        display.value = result;
        userInput = "";
        userInput2 = "";
        operator = "";
      } else {
        operator = element.value;
        display.value = 0;
      }
    } else {
      if (userInput.length > 0 && operator.length > 0) {
        userInput2 += element.value;
        display.value = userInput2;
      } else {
        userInput += element.value;
        display.value = userInput;
      }
    }
  };
}
