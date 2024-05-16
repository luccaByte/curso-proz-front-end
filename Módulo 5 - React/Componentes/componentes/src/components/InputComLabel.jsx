import styles from '../styles/InputComLabel.module.css'

// isso é um componente
function InputComLabel({idString, textoLabel, children}){
    return <>
        <label  className={`${styles.texto} ${styles.outroTexto}`} htmlFor={idString}>{textoLabel} </label>
        { children }
        <input type="text" id={idString} name={idString} />
        <br />
    </>
}


export default InputComLabel

