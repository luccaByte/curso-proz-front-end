# Tipagem básica

### Tipos do DOM

Quando usamos TypeScript para desenvolver aplicações Front End existe um grupo de tipos muito comum, além dos tipos básicos, e são os tipos do grupo **HTMLElement**.

Este tipo é utilizado quando "capturamos" algum elemento do DOM usando os "métodos de captura" (`.querySelectorAll( )`, .`getElementById( )`, e afins).

*Um detalhe importante que devemos lembrar é que os "métodos de captura" podem não encontrar os elementos do DOM que passamos como argumento.*

Nestes casos, eles retornarão o valor `null`, que representa a ausência de qualquer valor.

Por esse motivo, as variáveis que guardam os elementos retornados pelos "métodos de captura" salvam elementos HTML ou nenhum valor. Representamos isso da seguinte forma:

*Neste exemplo separamos a tipagem da variável, e a atribuição do valor inicial dela, mas é possível também fazer a tipagem e atribuição na mesma linha.*

Por último, devemos lembrar também que distintos elementos HTML possuem distintos atributos.

Alguns atributos são comuns para todos (ex. `id`), e outros são específicos apenas para alguns elementos (ex. `href`).

"Tipar" todos os elementos capturados do DOM apenas como **HTMLElement** desconsidera estas particularidades de cada elemento e, por esse motivo, existem tipos específicos no TypeScript para cada tipo de elemento HTML. Por exemplo, para capturar um elemento do tipo '`h1`', faremos o seguinte:

Assim, propriedades particulares aos elementos h1 serão acessíveis pela variável 'titulo' (ex. `innerText`), e propriedades inexistentes não serão acessíveis (ex. `href`).

Você pode encontrar uma lista com todos os tipos do TypeScript disponíveis para elementos HTML no seguinte link:

---

### Tipo Any (Qualquer)

Uma “alternativa de fuga” que o TypeScript oferece quando não queremos (ou sabemos) definir algum tipo em particular é a palavra reservada any.

“Any” (ou “qualquer” do inglês), é um tipo que aceita qualquer tipo de atribuição (String, boolean, null, undefined, HTMLElement, etc).

Para efeitos práticos, ele “anula” todas as funcionalidades do TS, nos “permitindo escrever o código JavaScript” sem precisar nos anular com a tipagem.

```tsx
let algumElemento: any
```

*Tente sempre deixar o tipo `any`como último recurso ao trabalhar com TypeScript, pois é apenas aplicando as tipagens corretas que aprenderemos a usar TS.*

Alguns dos beneficios do TS que já conhecemos e que perdemos ao utilizar o operador 'any':

- Definir uniões de tipos específicos que uma variável pode receber;
- As sugestões para autocompletar noso código baseadas em tipos literais;
- Avisos de erro quando tentamos atribuir um tipo de dado errado numa variável;
- Lidar com a possível ausência de elementos do DOM que podem não ter sido capturados;
- Avisos de erro quando tentamos acessar atributos inexistente de algum elemento capturado no DOM;