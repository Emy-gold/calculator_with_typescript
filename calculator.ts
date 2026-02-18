const display = document.getElementById("display") as HTMLInputElement;
const numbers = document.querySelectorAll("[id^='number']"); // selects all elements with id starting with 'number'
const multiplication = document.getElementById("multiplication")!;
const subtraction = document.getElementById("subtraction")!;
const addition = document.getElementById("addition")!;
const devision = document.getElementById("devision")!;
const modulo = document.getElementById("modulo");
const point = document.getElementById("point");
const equal = document.getElementById("equal")!;
const clear = document.getElementById("clear")!;
const deleteBtn = document.getElementById("delete")!;

let firstnumber = "";
let secondnumber = "";
let operator = "";
let isSecondNumber = false;

//add numbers to display
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        const value = (number as HTMLElement).innerText;
        
        if(!isSecondNumber){
            firstnumber += value;
            display.value = firstnumber; 
        }else {
            secondnumber += value;
            display.value = secondnumber;
        }
    });
});

//Handle decimal point
point?.addEventListener("click", () => {
    if (!isSecondNumber){
        if(!firstnumber.includes(".")) firstnumber += ".";
        display.value = firstnumber;
    }else{
        if(!secondnumber.includes(".")) secondnumber += ".";
        display.value = secondnumber;
    }
})

//Handle the operator buttons
function setOperator(op : string){
    if(firstnumber === "") return;
    operator = op;
    isSecondNumber = true;
}

multiplication.addEventListener("click",() => setOperator("*"));
addition.addEventListener("click",() => setOperator("+"));
subtraction.addEventListener("click",() => setOperator("-"));
devision.addEventListener("click",() => setOperator("/"));
modulo?.addEventListener("click", () => setOperator("%"));

//handle the equal button
equal.addEventListener("click", () => {
    if(firstnumber === "" || secondnumber === "" || operator === "") return;
    const num1 = parseFloat(firstnumber);
    const num2 = parseFloat(secondnumber);
    let result : number;

    switch(operator){
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
clear.addEventListener("click", () => {
    firstnumber = "";
    secondnumber = "";
    operator = "";
    isSecondNumber = false;
    display.value = "";
})

//Handle delete button
deleteBtn.addEventListener("click", () => {
    if(!isSecondNumber){
        firstnumber = firstnumber.slice(0,-1);
        display.value = firstnumber;
    }else{
        secondnumber = secondnumber.slice(0,-1);
        display.value = secondnumber;
    }
})