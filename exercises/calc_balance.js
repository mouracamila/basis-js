/*
  Create an object with 2 props, both with two arrays:
  * input: [ ]
  * output: [ ]
  After, create a function to calculate the balance the input and output.
*/

const expenses = {
  input: [1000.678, 123, 1239.23],
  output: [1000, 250, 3467.89],
};

function sum(array) {
  let result = 0;

  for (let value of array) {
    result = result + value;
  }

  return result;
}

function balance() {
  let calc = sum(expenses.input) - sum(expenses.output);

  if (calc > 0) {
    return `positive balance, your balance is $${calc.toFixed(2)}`;
  }

  if (calc == 0) {
    return `neutro balance, your balance is $${calc.toFixed(2)}`;
  }

  return `negative balance, your balance is $${calc.toFixed(2)}`;
}

console.log(balance());
