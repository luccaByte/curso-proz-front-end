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

    helperTextUsuario.innerText = 'Carregando...';


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
            usuario.classList.add('usuario')
            usuariosContainer.appendChild(usuario);
            helperTextUsuario.innerText = ' ';
            console.log(data);
        })
        // adicionando tratamento de erro
        .catch((error) => {
            helperTextUsuario.innerText = ' ';
            alert('Não foi possível gerar o usuário');
            console.log(error)
        })
}

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario)

// -------- Gerador de postagens -------- //

// 1. Captura de elementos

const postTitle = document.getElementById('post-title');
const postBody = document.getElementById('post-body');
const btnPost = document.getElementById('btn-post');
const postsContainer = document.getElementById('posts-container');

// 2. Funções

function gerarPost (e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content Type": "application/json"
        },
        body: {
            
        }
    })
};

// 3. Eventos

btnPost.addEventListener('click', (e) => gerarPost(e))