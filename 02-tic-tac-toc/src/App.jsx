import { useState } from "react";
import { Children } from "react";

const TRUNS = {
    X: 'x',
    O: 'o',
}



const Square = ({Children, isSelected, updateBoard, index}) => {
    //esto para cambiar la clase segun el turbo
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard();
    }
    return (
        <div onClick={handleClick} className={className}>
            {Children}
        </div>
    );
}

function App() {
    //Creamos nuestro tablero y rellenamos con null
const [board, setBoard] = useState(Array(9).fill(null));
const [turn, setTurn] = useState(TRUNS.X);

const updateBoard = () => {
    //Debemos calcular el nuevo turno
    const newTurn = turn === TRUNS.X ? TRUNS.O : TRUNS.X;
    setTurn(newTurn);
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
                    updateBoard={updateBoard}
                    index={index}
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
