/*
  Create a function that takes the string 
  in celsius or fahrenheit and make a change to another unit.
*/

function tempConverter(temp) {
  temp = temp.toUpperCase();

  let unit = temp.slice(-1);
  let value = temp.slice(0, temp.length - 1);

  if (unit == "F") {
    let tempC = (value - 32) * 5/9;
    return `${temp} converted to Celsius is ${tempC.toFixed(1)}°C`;
  }

  if (unit == "C") {
    let tempF = value * 1.8 + 32;
    return `${temp} converted to Fahrenheit is ${tempF}°F`;
  }

  return `Error ${temp} is not a valid`;
}

console.log(tempConverter("30C"));
console.log(tempConverter("30F"));

console.log(tempConverter("10f"));
console.log(tempConverter("50c"));

console.log(tempConverter("50a"));
