import Produto from "./components/Produto"

function App(){
    return <>
        <h1>Renderização</h1>
        <Produto nome='Guitarra' estoque={true}/>
        <Produto nome='Ukulele' estoque={false}/>
        <Produto nome='Banjo' />
    </>
}

export default App