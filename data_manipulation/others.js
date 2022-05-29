 var x = myFunction(4,3);
document.getElementById("demo").innerHTML= x;

function myFunction(a,b){
    return a*b;
}

// console.log(x)

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
document.getElementById("celsius").innerHTML = toCelsius();



let n1 = 30 
let n2 = 70

function sum(n1,n2){
    
    let total= n1+n2
    return total
}



console.log(`o numero n1 é ${n1}`)
console.log(`o numero n2 é ${n2}`)
console.log(`a soma é ${sum(n1,n2)}`)




let greeting = "say Hi";
let times = 4;

if (times > 3) {
    var hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
}
console.log(hello) // hello is not defined

// let iceCream = 'vanila';
// if(iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');
// } else {
//   alert('Awwww, but chocolate is my favorite...');
// }

document.querySelector('html').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
});

