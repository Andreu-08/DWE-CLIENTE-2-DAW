
//Componente boton de cada casilla del juego
export default ({value, onSquareClick}) => {

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
