
const times = new Set ( )
times.add('Vasco')
times.add('Sao Paulo').add('Paulmeiras').add('santos')
times.add('flamento ')
times.add('Vasco')

console.log(times) // nao repeti o 6 elemento pois o set nao aceita repetico mesmo elemento 
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('flamento')
console.log(times.has('flamentos'))

// 

const nomes = ['Raquel', 'Lucas', 'Pedro', 'Magali', 'Lucas']
const nomeSet = new Set (nomes)
console.log(nomeSet)