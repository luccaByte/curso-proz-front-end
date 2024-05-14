import InputComLabel from "./components/InputComLabel";
import { Botao } from "./components/InputComLabel"

// isso é um componente
function App() {
  return (
    <>
        <h1>Componentes</h1>

        {/* duas formas de chamar um componente (função) */}
        { InputComLabel({idString: 'nome', textoLabel: 'Nome:'}) }

        <InputComLabel idString='nome' textoLabel='Nome:' />
        <InputComLabel idString='idade' textoLabel='Idade:' />
        <InputComLabel idString='endereco' textoLabel='Endereço:' />

        <Botao textoBotao="Botão simples"/>
        <Botao textoBotao="Outro Botao"/>
    </>
  )
}

export default App
