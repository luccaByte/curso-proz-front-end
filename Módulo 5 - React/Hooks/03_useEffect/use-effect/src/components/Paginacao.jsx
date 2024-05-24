import styles from '../styles/Paginacao.module.css'

function Paginacao({ pagina, setPagina }) {
    return <div className={styles.container}>
        <button 
            onClick={() => setPagina(1)} 
            className={pagina == 1 ? styles.selecionado : ''}
        >1</button>
        <button 
            onClick={() => setPagina(2)} 
            className={pagina == 2 ? styles.selecionado : ''}
        >2</button>
    </div>
}

export default Paginacao