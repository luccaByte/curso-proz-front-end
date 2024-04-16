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