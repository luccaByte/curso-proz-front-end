// 2. desestruturação

// abordagem "tradicional"

const produto = {
    nome: 'leite',
    preco: 7.99
}

// let nome = produto.nome
// let valor = produto.preco

console.log(nome, valor)

// simplificada

let { nome, preco } = produto
console.log(nome, preco)

let novoPreco = preco * 2
console.log(novoPreco)

// destruturando vetor de forma "tradicional"

const produtos = ['Bolachas', 'Arroz', 'Guarana']

// const elemento01 = produtos[0]
// const elemento02 = produtos[1]
// const elemento03 = produtos[2]

console.log(elemento01, elemento02, elemento03)

// simplificada
// ao inves de {}, será []

const [ elemento01, elemento02, elemento03 ] = produtos

console.log(elemento01, elemento02, elemento03)