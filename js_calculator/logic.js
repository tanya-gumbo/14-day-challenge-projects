console.log("Ma1");

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
