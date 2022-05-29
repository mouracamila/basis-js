// switch
function calc(n1, operator, n2) {
    let result = 0

    switch (operator) {
        case '+':
            result = n1 + n2
            break
        case '-':
            result = n1 - n2
            break
        case '*':
            result = n1 * n2
            break
        case '/':
            result = n1 / n2
            break
        default:
            console.log('Not implemented')
            break
    }
    return result
}

let pn1 = 10 
let pn2 = 100
let poperator = '-'

let result2 = calc(pn1, poperator, pn2)
console.log(result2)

console.log(calc(pn1, poperator, pn2))

let numero1 = 10
let numero2 = 5

let result3 = calc(numero1, "*", numero2)
console.log(result3)