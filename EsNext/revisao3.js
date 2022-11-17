// ES8: object.value/Object.entries 

const obj = { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.values(obj)); 
console.log(Object.entries(obj)); 

//melhorias na notacao literal 
const nome = 'Carla'
const pessoa = { 
    nome,   // nao precisa mais coolocar nome:nome 
    ola() {  // nao precisa mais colocar a palavra function = ola function ( ) isso dentro de um obj
        return "oi gente "

    }
}

console.log(pessoa.nome, pessoa.ola())

//Class 

class Animal {}
class cachorro extends Animal  { 
    falar() { 
        return "au au "
    }
}
console.log (new cachorro().falar())