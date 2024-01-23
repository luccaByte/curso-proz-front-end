# CodePark 2

Você está desenvolvendo um site de e-commerce e precisa exibir uma lista de produtos ao seu usuário. Para isso, você precisa fazer uma requisição do tipo GET a uma API solicitando a lista de produtos pela seguinte URL: https://lojafalsaapi.com/produtos.

Pensando em como aprimorar a experiência do seu usuário, você confere a documentação da API e encontra o seguinte trecho: 

Para ordenar os produtos, basta incluir a chave 'ordenar' com o valor 'asc' de ascendente, ou 'dec' de decrescente na query string da sua requisição. É também possível limitar o número de resultados exibidos usando a chave 'limite' com um número representando a quantidade de produtos a ser exibidos como valor. 

Escreva a rota da requisição necessária para solicitar a lista de produtos em ordem alfabética inversa (do Z ao A). Como desafio extra, defina também um máximo de 20 produtos a serem exibidos. 