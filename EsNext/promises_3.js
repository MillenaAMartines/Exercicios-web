function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
        const [x, y] = a
    }



    return new Promise(resolver => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolver(aleatorio)
    })
}

function main () {
    gerarNumerosEntre(1, 60)
    console.log("já processou")
}
main()

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => ` O numero gerado foi ${numX10}`)
    .then(console.log)