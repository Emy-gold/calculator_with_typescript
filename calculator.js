var display = document.getElementById("display");
var numbers = document.querySelectorAll("[id^='number']"); // selects all elements with id starting with 'number'
var multiplication = document.getElementById("multiplication");
var subtraction = document.getElementById("subtraction");
var addition = document.getElementById("addition");
var devision = document.getElementById("devision");
var modulo = document.getElementById("modulo");
var point = document.getElementById("point");
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
var deleteBtn = document.getElementById("delete");
var firstnumber = "";
var secondnumber = "";
var operator = "";
var isSecondNumber = false;
//add numbers to display
numbers.forEach(function (number) {
    number.addEventListener("click", function () {
        var value = number.innerText;
        if (!isSecondNumber) {
            firstnumber += value;
            display.value = firstnumber;
        }
        else {
            secondnumber += value;
            display.value = secondnumber;
        }
    });
});
//Handle decimal point
point === null || point === void 0 ? void 0 : point.addEventListener("click", function () {
    if (!isSecondNumber) {
        if (!firstnumber.includes("."))
            firstnumber += ".";
        display.value = firstnumber;
    }
    else {
        if (!secondnumber.includes("."))
            secondnumber += ".";
        display.value = secondnumber;
    }
});
//Handle the operator buttons
function setOperator(op) {
    if (firstnumber === "")
        return;
    operator = op;
    isSecondNumber = true;
}
multiplication.addEventListener("click", function () { return setOperator("*"); });
addition.addEventListener("click", function () { return setOperator("+"); });
subtraction.addEventListener("click", function () { return setOperator("-"); });
devision.addEventListener("click", function () { return setOperator("/"); });
modulo === null || modulo === void 0 ? void 0 : modulo.addEventListener("click", function () { return setOperator("%"); });
//handle the equal button
equal.addEventListener("click", function () {
    if (firstnumber === "" || secondnumber === "" || operator === "")
        return;
    var num1 = parseFloat(firstnumber);
    var num2 = parseFloat(secondnumber);
    var result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            return;
    }
    display.value = result.toString();
    //Reset state for next calculation
    firstnumber = result.toString();
    secondnumber = "";
    operator = "";
    isSecondNumber = false;
});
//Handle clear button
clear.addEventListener("click", function () {
    firstnumber = "";
    secondnumber = "";
    operator = "";
    isSecondNumber = false;
    display.value = "";
});
//Handle delete button
deleteBtn.addEventListener("click", function () {
    if (!isSecondNumber) {
        firstnumber = firstnumber.slice(0, 1);
        display.value = firstnumber;
    }
    else {
        secondnumber = secondnumber.slice(0, 1);
        display.value = secondnumber;
    }
});
