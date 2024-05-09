let app = document.getElementById('app')

function renderizarBotao(texto) {
    return `
    <button>
        ${texto}
    </button>
    `
}


app.innerHTML = `
    <h1>Premissa do React</h1>${renderizarBotao('Botão titulo')}
    
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia tenetur asperiores facere cum corrupti? Illum, a! Sunt, corrupti. Rem natus ut excepturi sit rerum similique officia cumque officiis fugit ex?</p>${renderizarBotao('Botão parágrafo')}
    
    <footer>
        Este é o footer
        ${renderizarBotao('Redes sociais')}
        ${renderizarBotao('Entre em contato')}
        ${renderizarBotao('Trabalhe conosco')}
    </footer>
`