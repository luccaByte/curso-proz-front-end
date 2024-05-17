import Produto from "./components/Produto"

function App(){
    return <>
        <h1>Renderização</h1>
        <Produto nome='Guitarra' estoque={10}/>
        <Produto nome='Ukulele' estoque={400}/>
        <Produto nome='Banjo' />
    </>
}

export default App