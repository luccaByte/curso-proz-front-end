// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById('btn-usuario')
const usuariosContainer = document.getElementById('usuarios-container')
const helperTextUsuario = document.getElementById('helper-text-usuario')

// 2. Funções
function gerarUsuario(){
    /*
    const resposta = fetch('https://random-data-api.com/api/v2/users')
    console.log(resposta)

    const tratamentoResposta = resposta.then((res) => {
        console.log(res)
        return res.json() // é a mesma coisa que: JSON.parse(stringJSON)
    })

    tratamentoResposta.then((data) => {
        console.log(data)
    })
    */

    // outra maneira (mais simples kkk)

    fetch('https://random-data-api.com/api/v2/users')
        .then ((res) => res.json())
        .then ((data) => {
            const usuario = document.createElement('div') // criando usuario embaixo do botao
            usuario.innerHTML = `
                <img src="${data.avatar}"/>
                <span>
                    <strong>Username:</strong> ${data.username}
                </span>
            `;
            usuariosContainer.appendChild(usuario);
            console.log(data)
        })
}

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario)

// -------- Gerador de postagens -------- //
// 1. Captura de elementos

// 2. Funções

// 3. Eventos