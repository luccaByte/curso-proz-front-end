const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')


function cadastroProduto(e) {
    feedbackUsuario.innerText = 'Carregando o produto cadastrado...';
    e.preventDefault();

    const nome = nomeProduto.value;
    const valor = valorProduto.value;
    const descricao = descricaoProduto.value;

    const jsonBody = JSON.stringify ({
        nome: nome,
        valor: valor,
        descricao: descricao
    })

    fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: jsonBody
    })
    .then (response => response.json())
    .then (data => {
        console.log(data)
        
        produtosCadastrados.innerHTML = `
            <p><strong>Nome:</strong> ${data.json.nome}</p>
            <p><strong>Valor:</strong> ${data.json.valor}</p>
            <p><strong>Descrição:</strong> ${data.json.descricao}</p>
        `;

        nomeProduto.value = '';
        valorProduto.value = '';
        descricaoProduto.value = '';
        feedbackUsuario.innerText = '';
        
        alert('Produto cadastrado com sucesso!')
    })
    .catch ((error) => {
        console.log(error);
        feedbackUsuario.innerText = 'Não foi possível gerar o produto :c';
    }) 
}

btnEnviar.addEventListener('click', (e) => {cadastroProduto(e)});
