import InputComLabel from "./components/InputComLabel";
import { Botao } from "./components/InputComLabel"

// isso é um componente
function App() {
  return (
    <>
        <h1>Componentes</h1>

        {/* duas formas de chamar um componente (função) */}
        { InputComLabel({idString: 'nome', textoLabel: 'Nome:'}) }

        <InputComLabel 
            idString='nome' 
            textoLabel='Nome:' 
            // children={
            //     <>
            //         <p>Isto é um exemplo de children</p>
            //         <div>Isto é uma div</div>
            //         <a href="">Proz</a>
            //     </>
            // } 
        >
            {/* É mais vantajoso passar uma children dentro da tag de abertura e fechamento */}
            <p>Isto é um exemplo de children</p>
            <div>Isto é uma div</div>
            <a href="">Proz</a>
            <br/>
        </InputComLabel>
        <InputComLabel idString='idade' textoLabel='Idade:' />
        <InputComLabel idString='endereco' textoLabel='Endereço:' />

        <Botao textoBotao="Botão simples"/>
        <Botao textoBotao="Outro Botao"/>
    </>
  )
}

export default App
