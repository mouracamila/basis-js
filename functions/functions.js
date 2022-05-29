/* 
    Funções construtoras

    Descrição
    Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:
    function Person(name) {
        this.name = name
        this.walk() = function() {
            return this.name + "está andando")
        }
    }
    const mayk = new Person("Mayk")
    const joao = new Person("João")

*/

//exemple 1

function PersonOne(name) {
    this.name = name
}

const sophie = new PersonOne ("Sophie")

console.log(sophie)

//exemple 2

function Person(name) {
    this.name = name
    
    this.walk() = function() {
        return this.name + ("está andando")
    }
}

const mayk = new Person("Mayk")
const joao = new Person("João")