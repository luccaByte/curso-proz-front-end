import styles from './styles/App.module.css'
import { useState } from 'react'
import { usuarios } from './lista'
import Detalhes from "./components/Detalhes";

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
            
            <Detalhes selecionado={selecionado} />
        </div>
    </>
}

export default App
