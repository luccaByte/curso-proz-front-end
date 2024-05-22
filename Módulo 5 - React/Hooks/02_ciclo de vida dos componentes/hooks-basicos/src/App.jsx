import styles from './App.module.css'
import { useState } from 'react'
import { usuarios } from './lista'

function App() {
    let [selecionado, setSelecionado] = useState(null) 
    console.log(selecionado)


    return <>
        <h1>Hooks Básicos</h1>
        <div className={styles.container}>
            <div className={styles.lista}>
                <h2>Usuários:</h2>
                <ul>
                    {
                        usuarios.map((elemento, indice) => {
                            return <li key={indice} onClick={() => setSelecionado(elemento)}>
                                {elemento.nome}
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className={styles.detalhes}>
                <h2>Detalhes:</h2>
                <p>Nome: {selecionado ? selecionado.nome : ''}</p>
                <p>Sobrenome: {selecionado ? selecionado.sobrenome : ''}</p>
                <p>Idade: {selecionado ? selecionado.idade : ''}</p>
                <p>Profissão: {selecionado ? selecionado.profissao : ''}</p>
            </div>
        </div>
    </>
}

export default App
