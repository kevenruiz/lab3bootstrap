// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide } from '../utilities.js';
const test = QUnit.test;

test('time to test an add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 5;
    const sum = 9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});

test('time to test a subtract', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 6;
    const y = 5;
    const subtract = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = subtract(x, y);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, subtract);
});
test('time to test a multiply', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 5;
    const multiply = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = multiply(x, y);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, multiply);
});
test('time to test a divide', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 20;
    const y = 5;
    const divide = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = divide(x, y);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, divide);
});