
// for...in

let person = { 
    name: 'John',
    age: 30,
    weight: 60, 
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}

for(let prop in person){
    console.log(`name is`,person["name"])
}