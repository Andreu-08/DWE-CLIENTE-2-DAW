import Ej from "../../components/ej";
import { useState } from "react";
import { sculptureList } from "./data";

export default () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handlePrevClick() {
    setIndex(index - 1);
  }

  function handleMoreclick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <Ej
        n="7"
        e="Ejercicio para practicar la propagacion de eventos en React"
      />
      <button 
        onClick={handlePrevClick} 
        disabled={index === 0}
      >
        Anterior
      </button>
      <button
        onClick={handleNextClick}
        disabled={index === sculptureList.length-1}
      >
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name}</i> por {sculpture.artist}
      </h2>
      <h3>
        {index + 1} de {sculptureList.length}
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <br />
      <button onClick={handleMoreclick}>
        {showMore ? "Ocultar" : "Mostrar"} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
};
