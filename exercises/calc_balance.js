/*
  Create an object with 2 props, both with two arrays:
  * input: [ ]
  * output: [ ]
  After, create a function to calculate the balance the input and output.
*/

const expenses = {
  input: [1000, 2000],
  output: [200, 400],
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
    return `positive balance, your balance is ${calc}`;
  }

  return `negative balance, your balance is ${calc}`;
}

console.log(balance());
