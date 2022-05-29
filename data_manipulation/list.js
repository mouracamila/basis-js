/*
    # Manipulando arrays

    Descrição
    Existem várias maneiras de manipular arrays, como: 
    o método push(), que adiciona um elemento no final do array, 
    o método unshift(), que adiciona um elemento no começo do array, 
    o método pop(), que retira um elemento do final do array, 
    o método shift(), que retira um elemento do começo do array, 
    o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, 
    o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover 
    e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.
*/

let techs = ["html", "css", "js"]

// add item no fim 
techs.push("node")
techs.push("nodejs", "sql", "java", "php")

// add no começo
techs.unshift("javascript")

// remover do fim
// techs.pop()

// pegar alguns elementos do array
// console.log(techs.slice(1,4))

// remove 1 ou mais elementos em qualquer posição do array
// techs.splice(1,1)

// encontra a posição de um elemnto no array

//retirar elemento
let index = techs.indexOf('java')

//mostrar a posiçao
techs.splice(index, 1)

console.log(techs)