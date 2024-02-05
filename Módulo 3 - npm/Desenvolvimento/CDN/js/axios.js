const btnGerar = document.getElementById('btn-gerar');

function gerarUsuario() {
    axios.get ("https://random-data-api.com/api/v2/users")
    .then(response => {
        console.log(response);
    })
}

btnGerar.addEventListener('click', gerarUsuario)