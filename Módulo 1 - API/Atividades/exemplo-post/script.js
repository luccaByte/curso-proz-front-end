const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault(); 

    const nome = nomeProduto.value;
    const valor = valorProduto.value;
    const descricao = descricaoProduto.value;

    if (nome && valor && descricao) {
        const data = {
            produto: nome,
            valor: valor,
            descricao: descricao
        };

        fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.data) {
                nomeProduto.value = '';
                valorProduto.value = '';
                descricaoProduto.value = '';
                const novoProduto = document.createElement('div');
                novoProduto.innerHTML = `
                    <p><strong>Produto:</strong> ${data.produto}</p>
                    <p><strong>Valor:</strong> ${data.valor}</p>
                    <p><strong>Descrição:</strong> ${data.descricao}</p>
                `;
                produtosCadastrados.appendChild(novoProduto);

                feedbackUsuario.textContent = 'Produto cadastrado com sucesso!';
            } else {
                feedbackUsuario.textContent = 'Erro ao cadastrar o produto. Tente novamente.';
            }
        })
        .catch(error => {
            console.log(error);
            feedbackUsuario.textContent = `Error ${error}Tente novamente.`;
        });
    } else {
        feedbackUsuario.textContent = 'Por favor, preencha todos os campos.';
    }
});
