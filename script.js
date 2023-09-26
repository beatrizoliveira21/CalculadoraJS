const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let result = 0;
let operator = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value.match(/[0-9]/)) {
            currentInput += value;
            display.value = currentInput;
        } else if (value === "=") {
            if (operator === "+") {
                result += parseFloat(currentInput);
            } else if (operator === "-") {
                result -= parseFloat(currentInput);
            } else if (operator === "*") {
                result *= parseFloat(currentInput);
            } else if (operator === "/") {
                result /= parseFloat(currentInput);
            } else {
                result = parseFloat(currentInput);
            }
            display.value = result;
            currentInput = "";
            operator = "";
        } else {
            operator = value;
            currentInput = "";
        }
    });
});
