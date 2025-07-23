operatorsArray = [];
numbersArray = [];
numbersExamples = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let currentNumber = "";
let operator = "";
let userExpression = "";

function populateDigitKeypad(){
    for (let x = 0; x < 10; x++){
        let digit_container = document.querySelector(".digit-keypad");
        let key = document.createElement("button");
        key.textContent = x;
        key.classList.add("digit-key");
        digit_container.appendChild(key);
    }
    let numberKeys = document.querySelector(".digit-keypad");
    let actualKey = document.createElement("button");
    actualKey.textContent = "Clear";
    actualKey.classList.add("clear", "function-key");
    numberKeys.appendChild(actualKey);

    let addKey = document.querySelector(".digit-keypad");
    let theKey = document.createElement("button");
    theKey.textContent = "=";
    theKey.classList.add("equals", "function-key");
    addKey.appendChild(theKey);
}

populateDigitKeypad()

function separateNumsFromOperands(){
    let expression = userExpression;
    for (let letter of expression){
        if (letter in numbersExamples){
            currentNumber = currentNumber + letter;
        }else{
            numbersArray.push(currentNumber);
            currentNumber = "";
            operatorsArray.push(letter);
        }
    }
}

function evaluateExpression(){
    separateNumsFromOperands();
    let result = Number(numbersArray[0]);
    for (let x = 0; x < operatorsArray.length; x++){
        let currentOperator = operatorsArray[x];
        switch(currentOperator){
            case "x":
                result = result * Number(numbersArray[x+1]);
                break;
            case "/":
                result = result / Number(numbersArray[x+1]);
                break; 
            case "+":
                result = result + Number(numbersArray[x+1]);
                break; 
            case "-":
                result = result - Number(numbersArray[x+1]);
                break; 
        }
    }
    console.log(`The result of calculation is ${result}`);
    numbersArray = [];
    operatorsArray = [];
    userExpression = "";
    return result;
}

let displayText = document.querySelector(".display");
displayText.textContent = "";
let keypadKeys = document.querySelectorAll(".digit-key, .function-key");
keypadKeys.forEach(element => {
    element.addEventListener("click" , ()=>{
        text = element.textContent;
        userExpression = userExpression + text;
        displayText.textContent = userExpression;
    })
});


