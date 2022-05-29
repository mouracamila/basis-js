//if and else

let temp = 31

if (temp >=  37) {
    console.log('high fever')
} else if(temp < 37.5 && temp >= 37) {
    console.log('moderate fever')
} else {
    console.log('healthy')
}

let tempe = 36.9
let highTempe = tempe >= 37.5
let mediumTempe = tempe < 37.5 && tempe

if (highTempe){
    console.log('High Fever')
} else if(mediumTempe){
    console.log( 'Moderate Fever')
} else {
    console.log ('healthy')
}