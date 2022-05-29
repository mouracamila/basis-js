/*
    # Prototype

    Descrição
    O JavaScript possui uma característica chamada Prototype, que é uma série de 
    funcionalidades e atributos que já existem nativamente em diversos tipos de dados,
    que são lidados como objetos.

    * prototype-based language
    * prototype chain
    * __proto__
*/

/*
    # Type conversion coersion

    Descrição
    Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.
*/

// console.log(9+5)

/*
    # Strings em números

    Descrição
    É possível transformar números em formato de string através do método Number() e números em formato number em string usando o método String().
*/

/* 
    # Manipulando Strings e Números 

    Transformar String em Número e Número em String

    let string = "123"
    console.log(Number(string))

    let number = 321

    console.log(String(number))
*/

/*
    # Contando caracteres e digitos

    Descrição
    Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.
*/

/* 
  # Manipulando Strings e Números

    Contar quantos caracteres tem uma palavra e quantos dígitos tem um número 

*/

/*
    let word = "quantidade"
    console.log(word.length)


    let number = 2345456
    //para contar caracteres precisa transformar numero para string
    console.log(String(number).length)
 */


/*
    # Casas decimais

    Descrição
    Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.
*/

//let number = 234.24324
//console.log(number.toFixed(2).replace(".", ","))


/* 
    Maiúsculas e minúsculas
    Descrição
    Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.
*/

/*
let  word= "Hoje o dia tem sol com nuvens"

console.log(word.toLowerCase())
//hoje o dia tem sol com nuvens

console.log(word.toUpperCase())
//HOJE O DIA TEM SOL COM NUVENS

console.log(word.trim())
//Hoje o dia tem sol com nuvens

console.log(word.trimEnd())
//Hoje o dia tem sol com nuvens

console.log(word.toLowerCase().toUpperCase())
//HOJE O DIA TEM SOL COM NUVENS
*/

/*
    #Separando strings

    Descrição
    Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.
*/

/*
let phrase = "Para separar um texto por espaços"

//Para separar um texto por espaços
let myArray = phrase.split(" ")
console.log(myArray)

//Para juntar
let phraseWithOutSpace = myArray.join("")
console.log(phraseWithOutSpace)

//para add elements entre frases
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLocaleUpperCase())
*/

/*
    #Encontrando palavras em frases
    
    Descrição
    Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.
*/

// let phrase = "Lá o mar é profundo"

// console.log(phrase.includes("Mar"))

/*
    #Criando array com construtor

    Descrição
    Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").
*/

// let myArray = new Array('a', 'b', 'c')
// console.log(myArray)

// //array vazia
// let anyElements = new Array(10)
// console.log(anyElements)

/*
    Elementos do Array

    Descrição
    Para contar a quantidade de elementos em um array pode-se usar o método length.
*/

/*
// quantos elementos tem 
console.log(["a", "b", "c", "d", "e"].length)

//mostra o elemento dentro da Array
console.log(["ameixa", "banana", "cereja", "dado", "elephante"][2])
*/

/*
    Strings para arrays

    Descrição
    Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer").
*/

// let word = "manipulação"
// console.log(Array.from(word))