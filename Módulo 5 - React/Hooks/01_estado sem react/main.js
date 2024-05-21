// 1. capturar elementos
const usuarios = document.querySelectorAll('li');
const escolhido = document.getElementById('escolhido');
let estado = ''

// 2. definir comportamento
function selecionarUsuario(usuario) {
    estado = usuario
    escolhido.innerText = estado
}

// 3. add evento
for (const e of usuarios) {
    e.addEventListener('click', () => { selecionarUsuario(e.innerText) })
}