import { useState } from 'react';
import { destinos } from '../destinos';

function MuestraDestino() {
  const [indiceActual, setIndiceActual] = useState(0);
  const destino = destinos[indiceActual];

  const siguiente = () => {
    if (indiceActual < destinos.length - 1) {
      setIndiceActual(indiceActual + 1);
    }
  };

  const anterior = () => {
    if (indiceActual > 0) {
      setIndiceActual(indiceActual - 1);
    }
  };

  return (
    <div className="destino-display">
      <h2>Votación para el viaje de fin de curso</h2>
      <div className="detalle-destino">
        <h3>{destino.nombre}</h3>
        <img 
          src={destino.foto}
          alt={destino.nombre}
          style={{}}
        />
        <p>{destino.descripcion}</p>
        <p>
          <strong>Precio:</strong> ${destino.precio}
        </p>
      </div>
      <div className="navegacion-destinos">
        <button onClick={anterior} disabled={indiceActual === 0}>
          Anterior
        </button>
        <button onClick={siguiente} disabled={indiceActual === destinos.length - 1}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default MuestraDestino;
