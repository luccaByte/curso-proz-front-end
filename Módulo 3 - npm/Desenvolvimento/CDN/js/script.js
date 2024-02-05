const btnGerar = document.getElementById('btn-gerar');

function gerarUsuario() {
    fetch ("https://random-data-api.com/api/v2/users")
    .then ((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
}

btnGerar.addEventListener('click', gerarUsuario)