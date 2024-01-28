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
        updateBoard(index);
    }
    return (
        <div onClick={handleClick} className={className}>
            {Children}
        </div>
    );
}

const WINNER_COMBOS = [
    //Horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //Vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //Diagonal
    [0,4,8],
    [2,4,6],
]    

function App() {
    //Creamos nuestro tablero y rellenamos con null
const [board, setBoard] = useState(Array(9).fill(null));
const [turn, setTurn] = useState(TRUNS.X);
// null es que no hay ganador, false es que hay empate
const [winner, setwinner] = useState(null);

const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a,b,c] = combo;
        if (boardToCheck[a] && 
            boardToCheck[a] === boardToCheck[b] && 
            boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
        }
    }
    return null;
}

const updateBoard = (index) => {
    //Si ya hay un valor en el square, no hacemos nada
    if (board[index] || winner) return;
    //Actualizamos el square en que dimos click
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //Debemos calcular el nuevo turno
    const newTurn = turn === TRUNS.X ? TRUNS.O : TRUNS.X;
    setTurn(newTurn);
    //Verificar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
        setwinner(newWinner);
    }
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
                    Children={square}
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
