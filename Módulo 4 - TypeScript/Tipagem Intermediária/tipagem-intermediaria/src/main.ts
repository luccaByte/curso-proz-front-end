// para tipar o objeto é só colocar :
// let usuario: {
//     nome: string,
//     idade: number,
//     admin: boolean,
//     endereco: {
//         estado: string,
//         cidade: string
//     }
// }


// para gerar varios usuarios apartir de um objeto, usar o type definindo o objeto com letra maiuscula
type Usuario = {
    nome: string,
    idade: number,
    admin: boolean,
    endereco: {
        estado: string,
        cidade: string
    }
}

// definindo
let usuario: Usuario

// para atribuir ao objeto usuario, usar =
usuario = {
    nome: "Lucas",
    idade: 23,
    admin: false,
    endereco: {
        estado: 'SP',
        cidade: 'Caragua'
    }
}

let usuario02: Usuario = {
    nome: "Frieren",
    idade: 2000,
    admin: true,
    endereco: {
        estado: 'Seila',
        cidade: 'N sei o que'
    }
}

// tambem é possivel com numeros e etc
type NumerosPermitidos = 2 | 3 | 5

let numero: NumerosPermitidos = 5


// ===============================================================

// Tipagem de Arrays

let nomes: string[] = ['Lucas', 'Frieren', 'Fern']

// push() adiciona ao final do vetor
nomes.push('Himmel')

let numeros: number[] = [1, 2, 3, 4]

// ===============================================================

// Tipagem de Objeto

// Array de objeto

type Aluno = {
    nome: string,
    idade: number
}

// para criar um vetor de um objeto, coloque colchetes depois do nome do objeto
let alunos: Aluno[] = [
    {nome: 'Lucas', idade: 23},
    {nome: 'Frieren', idade: 2000},
    {nome: 'Fern', idade: 19},
    {nome: 'Himmel', idade: 80}
]

// ===============================================================

// Tipagem de Funções

function retornarPrimeiro (lista: Aluno[]): string {
    const primeiro = lista[0]
    return `O aluno ${primeiro.nome} tem ${primeiro.idade} anos.`
}

function maiorDeIdade(lista: Aluno[]){
    const numero = lista[0]

    if(numero.idade > 18){
        return true
    } else if(numero.idade < 18){
        return false
    } else {
        return false
    }
}