// arrow fanction  - sempre é uma funcao anonima nao tem como atribuir um nome a ela 
const soma = (a,b) => a + b 
console.log(soma(2,3)); 

// arrow fanction this  
const lexico1 = ( ) => console.log( this === exports)
const lexico2 = ( ) => lexico1.bind({ })

lexico1()
lexico2()

// parametris defaut 
function log( texto = "Node") { 
    console.log(texto)
}
log(undefined) // valor padrao 
log ( ) // valor padrao 
log(null) // retorna null 
log("sou mais forte  que o valor padrao")

// operador rest 
function total (...numeros) { 
    let total = 0 
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))