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


// Parametros opcionais

// para deixar um parametro opcional, basta colocar ? na frente da variavel
function calcularPagamento(valor: number, parcelas: number, desconto?: number) {

    const parcelasComValores: number[] = []
    
    for (let i = 1; i <= parcelas; i++) {
        let valorNovo = valor

        if (desconto) {
            valorNovo = valor - (valor * desconto)
        }

        parcelasComValores.push(valorNovo / parcelas)
    }

    return parcelasComValores
}

// podemos ou nao usar o parametro que está marcada como opcional
calcularPagamento(148, 3, 0.25)

console.log(calcularPagamento(150, 3, 0.2)) // valor, parcela, desconto

// ===============================================================

// Tipos genéricos (Arrays)

type Lista<T> = T[]; // pessoal costuma usar T para nomear um tipo generico

// uso do tipo generico
let listaNumeros: Lista<number> = []
listaNumeros.push(5)

let listaNomes: Lista<string> = []
listaNomes.push('Fern')

let listaObjeto: Lista<Usuario> = [
    {
        nome: 'Frieren', idade: 2000,
        admin: false,
        endereco: {
            estado: "",
            cidade: ""
        }
    },
    {
        nome: 'Fern', idade: 19,
        admin: true,
        endereco: {
            estado: "",
            cidade: ""
        }
    }
]