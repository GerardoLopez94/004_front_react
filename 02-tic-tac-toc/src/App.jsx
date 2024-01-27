
const TRUNS = {
    X: 'x',
    O: 'o',
}

//Creamos nuestro tablero y rellenamos con null
const board = Array(9).fill(null);

function App() {
    return (
        <main className= 'board'>
            <h1>Tic Tac Toe</h1>
            <section className='game'>
                {
                    board.map((pos, index) => {
                        return (
                            <div className="cell" key={index}>
                                <span className="cell__content">
                                    {index}
                                </span>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default App
