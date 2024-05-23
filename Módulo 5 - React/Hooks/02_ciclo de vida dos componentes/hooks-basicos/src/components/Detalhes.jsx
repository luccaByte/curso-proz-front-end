import styles from '../styles/App.module.css'

function Detalhes( {selecionado} ) {
    return <div className={styles.detalhes}>
        <h2>Detalhes:</h2>
        {
            selecionado ?
            <> 
                <p>Nome: {selecionado.nome}</p>
                <p>Sobrenome: {selecionado.sobrenome}</p>
                <p>Idade: {selecionado.idade}</p>
                <p>Profissão: {selecionado.profissao}</p>
            </>
            :
            <p>
                Selecione um usuário
            </p>
        }
        
    </div>
}

export default Detalhes