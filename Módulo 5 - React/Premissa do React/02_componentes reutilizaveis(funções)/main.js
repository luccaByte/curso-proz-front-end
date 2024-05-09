let app = document.getElementById('app')


function renderizarBotao() {
    return `
    <button>
        botão
    </button>
    `
}


app.innerHTML = `
    <h1>Premissa do React</h1>
    ${renderizarBotao()}
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia tenetur asperiores facere cum corrupti? Illum, a! Sunt, corrupti. Rem natus ut excepturi sit rerum similique officia cumque officiis fugit ex?</p>
    ${renderizarBotao()}
    <footer>Este é o footer</footer>
`