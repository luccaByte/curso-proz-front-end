import styles from '../styles/Botao.module.css'

function Botao({textoBotao}) {
    return <button className={styles.texto}>
        {textoBotao}
    </button>
}

export default Botao;