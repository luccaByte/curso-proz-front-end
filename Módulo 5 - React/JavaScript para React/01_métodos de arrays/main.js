// 1. métodos de arrays

const numeros = [15, 27, 33, 64, 75]
numeros.push(41)

console.log(numeros)

// filtrar

// o filter() vai passar por cada elemento do array e vai retornar a funçao como parametro
const numerosMaiores = numeros.filter((elemento) => {
    return elemento > 50
})

console.log(numerosMaiores)

// transformar elementos de uma lista

// map() mapeia os vetores para obter novos vetores do vetor original
const nomes = ['frieren', 'fern']
const nomesComCaracteres = nomes.map((elemento) => {
    return {
        nome: elemento,
        inicialNome: elemento[0],
        caracteres: elemento.length
    }
})