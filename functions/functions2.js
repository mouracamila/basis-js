/*
    Argumentos e parâmetros
    Descrição
    Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.
*/

// function expression
// function anonymous

//Exemple 1

// parameters
const sum = function(n1, n2){
    total = n1 + n2
    return total
}

let n1 = 300
let n2 = 15

console.log (`O n1 é ${n1} e o n2 é o ${n2}`)
console.log(`A soma é ${sum(n1,n2)}`)
console.log(total)

//Exemple 2

function makePao (item1, item2){
    return item1 + item2
}

const pao = makePao ('trigo', 'agua')

console.log(pao)

//Exemple 3

let subject

function createThink() {
    subject = 'study'
}

//undefind
console.log(subject)
createThink()

//find
console.log(subject)