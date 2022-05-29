//throw
function sayMyName(name = ''){
    if (name === '') {
        throw 'whats is the name?'
    }
    console.log('after erro')
}

// try...catch
try { 
    sayMyName()
} catch(e) {
    console.log(e)
}
console.log('after try/catch')