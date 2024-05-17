import styles from '../styles/Produto.module.css'

function Produto({nome, estoque}) {
    let textoEstoque = estoque > 0 ? `${estoque} iten(s)` : 'Indisponível' // if ternário

    // if (!estoque) return null

    return <div className={`${styles.container} ${estoque ? '' : styles.indisponivel}`}>
        <h3>Produto: {nome}</h3>
        <p style={ { color: estoque ? 'green' : 'red' } }>
            Estoque: {textoEstoque}
        </p>
    </div>
}

export default Produto;