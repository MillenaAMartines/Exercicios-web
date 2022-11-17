//tagged de template  = processar o templente dentro de uma funcao  

function tag ( partes, ...valores) {  // valores é o que foi interpolado.  
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluno = 'Gui'
const Situacao = 'Aprovado '
console.log(tag `${aluno} esta ${Situacao}.`)