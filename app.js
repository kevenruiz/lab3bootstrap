//and grab DOM elements

// 

// set event listeners on each button, do math and update DOM

import { add, subtract, multiply, divide } from './utilities.js'





const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const input8 = document.getElementById('input8');
const equalsTo = document.getElementById('equals-to-button');
const equalsTo2 = document.getElementById('equals-to-button2');
const equalsTo3 = document.getElementById('equals-to-button3');
const equalsTo4 = document.getElementById('equals-to-button4');
const answerDisplay = document.getElementById('answer-display');
const answerDisplay2 = document.getElementById('answer-display2');
const answerDisplay3 = document.getElementById('answer-display3');
const answerDisplay4 = document.getElementById('answer-display4');

equalsTo.addEventListener('click', () => {
    console.log('submit answer!');
    answerDisplay.textContent = add(Number(input1.value), Number(input2.value));

});

equalsTo2.addEventListener('click', () => {
    console.log('submit answer!');
    answerDisplay2.textContent = Number(input3.value) - Number(input4.value);

});

equalsTo3.addEventListener('click', () => {
    console.log('submit answer!');
    answerDisplay3.textContent = Number(input5.value) * Number(input6.value);


});

equalsTo4.addEventListener('click', () => {
    console.log('submit answer!');
    answerDisplay4.textContent = Number(input7.value) / Number(input8.value);

});


input1.addEventListener('click', () => {
    console.log('entry 1 Addition');

});

input2.addEventListener('click', () => {
    console.log('entry 2 Addition');

});
input3.addEventListener('click', () => {
    console.log('entry 1 Subtraction');

});

input4.addEventListener('click', () => {
    console.log('entry 2 Subtraction');

});

input5.addEventListener('click', () => {
    console.log('entry 1 Multiplication');

});

input6.addEventListener('click', () => {
    console.log('entry 2 Multiplication');

});

input7.addEventListener('click', () => {
    console.log('entry 1 Division');

});

input8.addEventListener('click', () => {
    console.log('entry 2 Division');

});

import { add } from './utilities';

