console.log("JS");

// MAKE THE CALCULATOR WORK

// DONT USE THE EVAL METHOD

// pressing buttons inputs numbers into the calculator - event listner on the buttons that will store the values in a variable

// pressing function buttons clear the input from the screen so user can add second numbers - fills a variable with the user input

// function stores what numbers user has inputed along with what functions were used. - function puts together the user inputes

// pressing = does the math thing. - function performs the math that the user put in.

let userInput = "";
let operator = "";
let userInput2 = "";
var allInputs = document.querySelectorAll("input");
console.log(allInputs);
// Pressing number buttons
var elements = document.getElementsByTagName("input");
console.log(elements);

// function clickButtons() {
for (let element of elements) {
  element.onclick = function (event) {
    var value = element.value;
    var realValue = Number(value);
    console.log(value, realValue);
    if (isNaN(realValue)) {
      if (value == "=" && userInput2.length > 0) {
        if (operator == "+") {
          var realUserInput = Number(userInput);
          var realUserInput2 = Number(userInput2);
          var result = realUserInput + realUserInput2;
          console.log(result);
        } else if (operator == "-") {
          var realUserInput = Number(userInput);
          var realUserInput2 = Number(userInput2);
          var result = realUserInput - realUserInput2;
          console.log(result);
        } else if (operator == "*") {
          var realUserInput = Number(userInput);
          var realUserInput2 = Number(userInput2);
          var result = realUserInput * realUserInput2;
          console.log(result);
        } else if (operator == "/") {
          var realUserInput = Number(userInput);
          var realUserInput2 = Number(userInput2);
          var result = realUserInput / realUserInput2;
          console.log(result);
        }
        userInput = "";
        userInput2 = "";
        operator = "";
      } else {
        operator = element.value;
      }
    } else {
      if (userInput.length > 0 && operator.length > 0) {
        userInput2 += element.value;
      } else {
        userInput += element.value;
      }
    }
    console.log(userInput, operator, userInput2);
  };
}
// }

// hitting the '=' button
// form.addEventListener("evaluate", function (e) {});
