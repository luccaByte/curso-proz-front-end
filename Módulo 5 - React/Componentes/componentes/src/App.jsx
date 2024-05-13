
// isso é um componente
function InputComLabel(idString, textoLabel){
    return <>
        <label htmlFor={idString}>{textoLabel} </label>
        <input type="text" id={idString} name={idString} />
        <br />
    </>
}

// isso é outro componente
function App() {
  return (
    <>
        <h1>Componentes</h1>

        {/* duas formas de chamar um componente (função) */}
        { InputComLabel({idString: 'nome', textoLabel: 'Nome:'}) }

        <InputComLabel idString='nome' textoLabel='Nome:' />
		<InputComLabel idString='idade' textoLabel='Idade:' />
		<InputComLabel idString='endereco' textoLabel='Endereço:' />

    </>
  )
}

export default App
