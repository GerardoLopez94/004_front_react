import { useState } from "react";
import { Children } from "react";

const TRUNS = {
    X: 'x',
    O: 'o',
}



const Square = ({Children, isSelected, updateBoard, index}) => {
    //esto para cambiar la clase segun el turbo
    const className = `square ${isSelected ? 'is-selected' : ''}`
    return (
        <div className={className}>
            {Children}
        </div>
    );
}

function App() {
    //Creamos nuestro tablero y rellenamos con null
const [board, setBoard] = useState(Array(9).fill(null));
const [turn, setTurn] = useState(TRUNS.X);

updateBoard = () => {
    
}
    return (
      <main className= 'board'>
        <h1>Tic Tac Toe</h1>
        <section className='game'>
          {
            board.map( (square, index) => {
                return (
                    <Square 
                    key={index}
                    index={index}
                    updateBoard={updateBoard}
                    >
                       
                    </Square>
                )
            })
          }  
        </section>
      
        <section className="turn">
            <Square isSelected={turn === TRUNS.X} Children={TRUNS.X}></Square>
            <Square isSelected={turn === TRUNS.O} Children={TRUNS.O}></Square>
        </section>
      </main>
    )
}

export default App
