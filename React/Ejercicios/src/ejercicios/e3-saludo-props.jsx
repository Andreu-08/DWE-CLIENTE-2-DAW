import Ej from "../components/ej";
import React, { useState } from "react";
export default () => {
  const [nombre, setNombre] = useState("");

  const cambios = (evento) => setNombre(evento.target.value);

  return (
    <>
      <Ej
        n="3"
        e="Crea un componente con un campo de entrada <input>
            donde puedas escribir tu nombre
            Muestra abajo un mensaje en tiempo real que ponga Hola, [nombre] que se 
            actualiza mientras escribes"
      />
      <input
        type="text"
        value={nombre}
        onChange={cambios}
        placeholder="Escribe aqui un nombre..."
      />
      <h4>Hola, {nombre}</h4>
    </>
  );
};
