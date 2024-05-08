// 4. operador spread (...)

// spread (...) "espalha" os elementos
let numerosImpares = [1, 3, 5]
let numeroPares = [2, 4, 6]
let numeros = [...numerosImpares, ...numeroPares] // espalhando

console.log(numeros)


// spread com objetos

let info = {
    nome: 'Fern',
    idade: 19
}

let login = {
    login: 'fern.zoltrak',
    senha: 'frieren123'
}

let usuario = {
    ...info,
    ...login
}

console.log(usuario)