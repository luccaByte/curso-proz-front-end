function somar(a, b) {
    return a + b;
}

const subtrair = (a, b) => {
    return a - b;
}

// sempre colocar no final do código (o código sempre é lido de cima para baixo, se exportamos as funçoes antes dele ser lido, vai dar erro)
export { somar, subtrair}; 