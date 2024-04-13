// let numeroTs: number | string | boolean = 5; // tipagem explícita
// // podemos atribuir mais de um tipo para uma variável, usando pipe: |

// numeroTs = 10;

// numeroTs = 'Lucas';

// numeroTs = false;

let titulo = document.querySelector('h1');
let link = document.querySelector('a');


// tipo any

let inputNome: any = document.querySelector('input');



if (inputNome) {
    inputNome.value
} else {
    alert("nao foi possivel achar o elemento input")
}

// simplificando

inputNome?.value


