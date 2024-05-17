import styles from '../styles/Produto.module.css'

function Produto({nome, estoque}) {
    let textoEstoque = estoque == true ? 'Disponível' : 'Indisponível' // if ternário
    
    // if (estoque == true) {
    //     textoEstoque = 'Disponível'
    // } else {
    //     textoEstoque = 'Indisponível'
    // }

    return <div className={styles.container}>
        <h3>Produto: {nome}</h3>
        <p>Estoque: {textoEstoque}</p>
    </div>
}

export default Produto;