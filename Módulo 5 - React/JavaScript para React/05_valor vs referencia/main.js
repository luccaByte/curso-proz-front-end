// 5. valor vs referencia

// comparando o valor
let num = 48
console.log(num == 52)

// comparando a referencia
let numeros = [1, 2, 3]
console.log(numeros == [1, 2, 3]) // bad
console.log(numeros == numeros) // happy


let usuario = {
    nome: 'fern',
    idade: 19
}

console.log(usuario == {
    nome: 'fern',
    idade: 19
}) // bad
console.log(usuario == usuario) // happy