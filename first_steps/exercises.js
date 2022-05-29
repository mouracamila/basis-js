// 1. Declare uma variável de nome weight

let weight

// 2. Que tipo de dado é a variável acima?

console.log (`A variavel acima é do tipo = ${typeof weight}`)

/* Declare uma vaariável e atribua valores para um dos dados:
    *name: String
    *age: Number (integer)
    *stars: Number (float)
    * isSubscribed: Boolean
*/ 

/*let name = 'Rafael'
let age = 27
let star = 20.4
isSubscribed = false

console.log(name, age, star, isSubscribed) */

/* 
    4. variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight>kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada proproedade do objeto

*/ 

let student = {
    name : 'Carol',
    age : 19,
    weight : 55,
}

console.log (`${student.name} de ${student.age} anos pesa ${student.weight}Kg.`)

/* 
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenum valor, ou seja, somente o Array vazio
*/

// let students = []

/* 
    6. Retribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/ 

// let students = [
//     student
// ]

// console.log (students)

/* 
    7. COloque no console o valor da posiçcão zero do Array acima
*/

// console.log(students[0])

/*
    8. Crie um novo student e coloque na posiçcão 1 do Array students
*/

const newStudent ={
    name: "John",
    age: 23,
    weight: 74, 
}

let upadateStudents = [
    student,
    newStudent,
]

console.log(upadateStudents)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e porque? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)

    var a = 1 

    R = vai dar undefund
*/

console.log(a)
    var a = 1 
