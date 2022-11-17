// let e const 

{
    var a = 2; 
    let b = 3;  
    console.log(b)

}
console.log(a)
//console.log(b) nao é possivel imprimir fora do bloco por conta que o let tem escopo de bloco. 


// templete sting 
const produto = 'IPad'; 
console.log(`${produto} é caro`) //pode quebrar em mais linha. 

//destructuring
const [l, e, ...tras] = "cod3r" // string []
console.log(l, e, tras)

const [ x, y] = [1, 2] // array  []
console.log(x, y)

const {idade, nome} = {nome:'Ana', idade: 20} // desetruturar um atribut de objeto {}
console.log(idade, nome)
