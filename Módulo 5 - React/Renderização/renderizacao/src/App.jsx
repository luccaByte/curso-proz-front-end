import Produto from "./components/Produto"

const listaInstrumentos = [
    {nomeInstrumento: 'Guitarra', estoqueInstrumento: 12},
    {nomeInstrumento: 'Piano', estoqueInstrumento: 2},
    {nomeInstrumento: 'Bateria', estoqueInstrumento: 3},
    {nomeInstrumento: 'Pandeiro', estoqueInstrumento: 0},
    {nomeInstrumento: 'Ukulele', estoqueInstrumento: 8},
    {nomeInstrumento: 'Flauta', estoqueInstrumento: 18},
    {nomeInstrumento: 'Baixo', estoqueInstrumento: 0},
    {nomeInstrumento: 'Baixo', estoqueInstrumento: 0}
]

function App(){
    return <>
        <h1>Renderização</h1>
        {/* <Produto nome='Guitarra' estoque={10}/>
        <Produto nome='Ukulele' estoque={400}/>
        <Produto nome='Banjo' /> */}

        {
            listaInstrumentos.map( (e, i) => {
                return <Produto 
                    key={i}
                    nome={e.nomeInstrumento} 
                    estoque={e.estoqueInstrumento} 
                />
            } )
        }
    </>
}

export default App