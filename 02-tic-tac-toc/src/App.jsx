import { useState } from "react";
import { Children } from "react";

const TRUNS = {
    X: 'x',
    O: 'o',
}



const Square = ({Children, updateBoard, index}) => {
    return (
        <div className="square">
            {Children}
        </div>
    );
}

function App() {
    //Creamos nuestro tablero y rellenamos con null
const [board, setBoard] = useState(Array(9).fill('x'));
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
                    Children={index}
                    >
                       
                    </Square>
                )
            })
          }  
        </section>
      </main>
    )
}

export default App
