// import { somar, subtrair } from './operacoes.js'; // sempre colocar a extensão "operacoes.js"


// console.log('Hello');

// const result = somar(7, 4);
// let resultSub = subtrair (7, 4);

// console.log(result);
// console.log(resultSub);


/* EXPORT DEFAULT */

import modulo from "./calculadora.js"; // podemos renomear para qlqr nome(modulo (antes calculadora)), tomar cuidado na hora de usar o import pois tem que colocar o mesmo nome que atribuiu nesse import no resto das operações

const resultado = modulo.multiplicar(4, 2);

console.log(resultado);