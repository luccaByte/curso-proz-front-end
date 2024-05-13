
function App() {
    const labelDoInput = 'idade'

    return (
        
        <> {/* fragmentos: são tags vazias "<></>", são mais recomendaveis */}

            <h1 className="titulo">Arquivo app.jsx</h1>
            <p>texto do arquivo app.jsx</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sunt explicabo distinctio alias voluptatibus labore adipisci dolor omnis, nobis recusandae, impedit eius fugiat necessitatibus placeat ducimus, provident voluptate sint sapiente.</p>

            {/* podemos fechar qualquer tag nele mesmo, html não é permitido mas no react sim */}
            <div />

            <label htmlFor={labelDoInput}>Idade: </label>
            <input type="text" id="idade" />

        </>
    )
}

export default App
