console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis () { 
    console.log('dentro de uma funcao ... ')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

}

logThis()

// dentro de uma funcao voce acessa o this como global e fora como  module 