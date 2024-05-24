import { useEffect, useState } from 'react';
import Lista from './components/Lista'
import Paginacao from "./components/Paginacao";

function App() {
    const [lista, setLista] = useState([])
    const [carregando, setCarregando] = useState(false) 

    useEffect(() => {
        setCarregando(true)

        fetch('https://reqres.in/api/users?page=1&&delay=5')
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados.data)
            setLista(dados.data)

            setCarregando(false)
        })
    }, [])

    return <>
        <h1>Use Effect</h1>
        {
            carregando == true ? 
            <p>Carregando...</p> 
            :
            <Lista lista={lista} />
        }
        <Paginacao />
    </>
}

export default App