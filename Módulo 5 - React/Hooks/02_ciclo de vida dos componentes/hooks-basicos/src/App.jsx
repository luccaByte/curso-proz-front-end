import styles from './App.module.css'

function App() {
    let estado = ''
    function mudarEstado(nome) {
        estado = nome
        console.log(estado)
    }

    return <>
        <h1>Hooks Básicos</h1>
        <div className={styles.container}>
            <div className={styles.lista}>
                <h2>Usuários:</h2>
                <ul>
                    <li onClick={() => mudarEstado('Homer')}>Homer</li>
                    <li>Marge</li>
                    <li>Moe</li>
                </ul>
            </div>
            <div className={styles.detalhes}>
                <h2>Detalhes:</h2>
                <p>Nome: </p>
                <p>Sobrenome: </p>
                <p>Idade: </p>
                <p>Profissão: </p>
            </div>
        </div>
    </>
}

export default App
