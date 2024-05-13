// isso é um componente
function InputComLabel(){
    return <>
        <label htmlFor="">Nome: </label>
        <input type="text" />
        <br />
    </>
}

// isso é outro componente
function App() {
  return (
    <>
        <h1>Componentes</h1>

        {/* duas formas de chamar um componente (função) */}
        { InputComLabel() }
        <InputComLabel />

    </>
  )
}

export default App
