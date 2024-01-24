# CodePark 3

Você faz parte da equipe de Front End de um e-commerce onde usuários poderão comprar e vender produtos relacionados à cultura geek. A equipe de Back End está desenvolvendo uma API para você permitir aos usuários postar os produtos que querem vender, e para isso encaminharam para você os seguinte trecho da documentação que estão montando:

Para cadastrar um produto é necessário enviar uma requisição do tipo POST para a URL https://httpbin.org/post enviando uma string JSON como corpo da requisição. A string JSON deve ser um objeto com pelo menos três propriedades: produto, valor e descrição.

Crie um site simples com inputs para o nome, o valor, a descrição do produto e um botão para enviar as informações, além de um elemento textual vazio para mostrar um feedback. Escreva o código JavaScript necessário para capturar as informações inseridas pelo usuário, enviá-las para o Back End usando a Fetch API, e tratar a resposta da requisição avisando ao usuário se o cadastro do produto foi ou não realizado com sucesso. Lembre de limpar os inputs caso a requisição seja tratada com sucesso, e de manter os valores preenchidos pelo usuário caso a requisição for rejeitada.

Se preferir, pode baixar um template do projeto com um HTML simples e o JavaScript inicial já prontos no link em anexo. Como desafio extra, caso a requisição for tratada com sucesso, pode adicionar os produtos no site numa seção chamada 'Produtos Cadastrados'.