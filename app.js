//and grab DOM elements

// 

// set event listeners on each button, do math and update DOM


const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const input8 = document.getElementById('input8');
const equalsTo = document.getElementById('equals-to-button');
const answerDisplay = document.getElementById('answer-display')


equalsTo.addEventListener('click', () => {
    console.log('submit answer!');

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


