import React, { useState } from "react";
import Ej from '../components/ej'

export default () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);
  
    return (
      <div>
        <Ej n="2" e="Contador que se actualiza en tiempo real"/>
        <h1>Contador: {contador}</h1>
        <button onClick={incrementar}>MAS</button>
        <button onClick={decrementar}>MENOS</button>
      </div>
    );

}
