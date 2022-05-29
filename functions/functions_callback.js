/* 
    Callback function

    Descrição
    Uma callback function é uma função que está sendo passada para outra função como parâmetro.

*/

function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de ex0ecutar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)