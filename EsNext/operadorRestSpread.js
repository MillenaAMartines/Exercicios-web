// operador .... rest(juntar) spread(espalhar)
// usar rest como parametro de funcao 


// usar spread como objetos 
const funcionario = { nome: "Maria" , salario: 18500.99}
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spread com array  
const grupoA = ['Joao', 'Pedro', 'Lucio' ]
const grupoFinal = ['Maria', 'Joana', ...grupoA]
console.log(grupoFinal)  // espalhar todos os atributos dentro dev  um outro objeto  