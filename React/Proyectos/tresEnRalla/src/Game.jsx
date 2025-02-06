import Board from "./components/board";
import { useState } from "react";

export default () => {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const xisNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handelePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  /* 
   * La constante moves crea un array de elementos de lista (<li>) para el historial de movimientos.
   * Utiliza .map() para iterar sobre el historial de jugadas donde:
   * - step: representa el estado del tablero en cada movimiento
   * - move: es el índice que representa el número del movimiento
   */
  const moves = history.map((step, move) => {
    let description;
    // Si el movimiento es mayor que 0 (no es el inicio), muestra el número de movimiento
    if (move > 0) {
      description = "Ir al movimiento #" + move;
    } else {
      // Si es el movimiento 0, muestra el texto para volver al inicio
      description = "Ir al inicio del juego";
    }
    // Retorna un elemento de lista con un botón que permite saltar a ese movimiento
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div>
        <Board
          xisNext={xisNext}
          squares={currentSquares}
          onPlay={handelePlay}
        />
        <button onClick={resetGame} className="reset-button">
          Reiniciar Juego
        </button>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
