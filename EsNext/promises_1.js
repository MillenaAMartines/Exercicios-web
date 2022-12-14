let a = 1
console.log(a);


function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Beatriz', 'Leonardo', 'vitor']) // gera apenas um unico valor 

})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(letraMinuscula => console.log(letraMinuscula))