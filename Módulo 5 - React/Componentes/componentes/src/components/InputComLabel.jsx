// isso é um componente
function InputComLabel({idString, textoLabel}){
    return <>
        <label htmlFor={idString}>{textoLabel} </label>
        <input type="text" id={idString} name={idString} />
        <br />
    </>
}

function Botao({textoBotao}) {
    return <button>
        {textoBotao}
    </button>
}

export default InputComLabel
export { Botao }