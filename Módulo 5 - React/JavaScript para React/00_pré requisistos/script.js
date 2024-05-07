// PRÉ REQUISITOS

// =========================================================

// arrow functions

// mtas linhas D:
function somar(a, b) {
    return a + b
}

// uma linha :D
(a, b) => a + b

function chamarOutraFuncao(c, d){

}

chamarOutraFuncao(() => {

})

// =========================================================

// templates strings

let a = 'primeiro'
let b = 'segundo'
let c = 'terceiro'

// concatenação tradicional
console.log('primeiro, ' + 'segundo, ' + ' terceiro');
//ou
console.log(a + ' ' + b + ' ' + c);

// template string: utilizando ${} dentro de uma crase``
console.log(`${a} ${b} ${c}`);

// =========================================================

// importação e exportação

//export padrao
export default {
    nome: 'Fern',
    idade: 19
}

export const nome = 'Lucas'
export const idade = 23