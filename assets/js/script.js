"use strict";

let rightIcon = document.querySelector(".slider .icons i:nth-child(2)");

let leftIcon = document.querySelector(".slider .icons i:nth-child(1)");

function rightSlider() {
    let activeSlider = document.querySelector(".active-slider");

    if (activeSlider.nextElementSibling != null) {
        activeSlider.classList.remove("active-slider");
        activeSlider.nextElementSibling.classList.add("active-slider");
    } else {
        activeSlider.classList.remove("active-slider");
        rightIcon.parentNode.nextElementSibling.firstElementChild.classList.add("active-slider");
    }
}

function leftSlider() {
    let activeSlider = document.querySelector(".active-slider");

    if (activeSlider.previousElementSibling != null) {
        activeSlider.classList.remove("active-slider");
        activeSlider.previousElementSibling.classList.add("active-slider");
    } else {
        activeSlider.classList.remove("active-slider");
        leftIcon.parentNode.nextElementSibling.lastElementChild.classList.add("active-slider");
    }
}


rightIcon.addEventListener("click", rightSlider);

rightIcon.addEventListener("mouseover", rightSlider);

leftIcon.addEventListener("click", leftSlider);

leftIcon.addEventListener("mouseover", leftSlider);


// setInterval(() => {
//     rightSlider();
// }, 1000);


//calculator

let num1 = document.querySelector(".calculator .num1");
let num2 = document.querySelector(".calculator .num2");

let plusIcon = document.querySelector(".fa-plus");
let minusIcon = document.querySelector(".fa-minus");
let divideIcon = document.querySelector(".fa-divide");
let multiplyIcon = document.querySelector(".fa-xmark");

let resultInput = document.querySelector(".result input");

let numInputs = document.querySelectorAll(".calculator .nums input");


function inputValidations(inputs) {
    let operationCount = 0;

    inputs.forEach(numInput => {
        if (numInput.value == "") {
            numInput.nextElementSibling.classList.remove("d-none");
            operationCount++;
        } else {
            numInput.nextElementSibling.classList.add("d-none")
        }
    });

    return operationCount;
}

function resetInputs(input1,input2){
    input1.value = "";
    input2.value = "";
}


plusIcon.addEventListener("click", function () {
    if (inputValidations(numInputs) == 0) {
        let number1 = parseInt(num1.value);
        let number2 = parseInt(num2.value);
        let result = number1 + number2;
        resultInput.value = result;
        resetInputs(num1,num2);
    } else {
        resultInput.value = "";
    }
})

minusIcon.addEventListener("click", function () {
    if (inputValidations(numInputs) == 0) {
        let number1 = parseInt(num1.value);
        let number2 = parseInt(num2.value);
        let result = number1 - number2;
        resultInput.value = result;
        resetInputs(num1,num2);
    } else {
        resultInput.value = "";
    }
})

divideIcon.addEventListener("click", function () {
    if (inputValidations(numInputs) == 0) {
        let number1 = parseInt(num1.value);
        let number2 = parseInt(num2.value);

        if(number2 == 0){
            resultInput.value = "ERROR";
            resetInputs(num1,num2);
            return;
        }
        let result = number1 / number2;
        resultInput.value = result;
        resetInputs(num1,num2);
    } else {
        resultInput.value = "";
    }
})


multiplyIcon.addEventListener("click", function () {
    if (inputValidations(numInputs) == 0) {
        let number1 = parseInt(num1.value);
        let number2 = parseInt(num2.value);
        let result = number1 * number2;
        resultInput.value = result;
        resetInputs(num1,num2);
    } else {
        resultInput.value = "";
    }
})