// 6. for ... in e for ... of

let numeros = [48, 19, 21]

console.log('For padrao')

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    
    console.log(element)
}

// versao simplificada

// for in

console.log('For in')
for (const i in numeros) {
    const element = numeros[i];
    
    console.log(element)
}

// versao mais simplificada ainda

// for of

console.log('For of')
for (const j of numeros) { // o "j" já pega o elemento em si, ao invés de pegar a indice de cada elemento
    console.log(j)
}

// iterar sobre objetos

let filme = {
    titulo: 'Toy Story',
    ano: 1995,
    genero: 'animação'
}

for (const chave in filme) {
    console.log(`${chave}: ${filme[chave]}`)
}