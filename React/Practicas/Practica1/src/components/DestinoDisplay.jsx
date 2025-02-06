import React, { useState } from 'react';
import { destinos } from '../destinos';

//Componente que mostrara los destinos
function DestinoDisplay() {

  // Variable para almacenar el índice del destino actual. Inicia en 0.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Obtenemos el destino actual en un array 
  const destinoActual = destinos[currentIndex];

  //Función que se ejecuta al hacer clic en el botón "Siguiente".
  //Incrementa el indice si no esta en el ultimo destino 
  const handleSiguiente = () => {
    // Verificamos que el índice actual sea menor al índice del último destino.
    if (currentIndex < destinos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Función que se ejecuta al hacer clic en el botón "Anterior".
  // Se encarga de decrementar el índice si no se está en el primer destino.
  const handleAnterior = () => {
    // Verificamos que el índice actual sea mayor que 0.
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    // Contenedor principal del componente
    <div className="destino-display">
      {/*
        Título principal de la sección de votación.
        Se muestra en la parte superior de la página.
      */}
      <h2>Votación para el viaje de fin de curso</h2>

      {/*Sección que muestra la información del destino actual:*/}
      <div className="detalle-destino">
        {/* Muestra el nombre del destino */}
        <h3>{destinoActual.nombre}</h3>
        {/* Muestra la imagen del destino. */}
        <img
          src={destinoActual.foto}
          alt={destinoActual.nombre}
          style={{}} // Se aplican estilos inline mínimos para controlar el tamaño
        />

        {/* Muestra la descripción del destino */}
        <p>{destinoActual.descripcion}</p>

        {/* Muestra el precio del destino */}
        <p>
          <strong>Precio:</strong> ${destinoActual.precio}
        </p>
      </div>

      {/*
        Sección de navegación entre destinos.
        Incluye dos botones: "Anterior" y "Siguiente".
        Los botones se deshabilitan si no existe un destino anterior o siguiente.
      */}
      <div className="navegacion-destinos">
        {/*
          Botón "Anterior": Llama a la función handleAnterior al hacer clic.
          Se deshabilita si el índice actual es 0, lo que indica que no hay destino anterior.
        */}
        <button onClick={handleAnterior} disabled={currentIndex === 0}>
          Anterior
        </button>

        {/*
          Botón "Siguiente": Llama a la función handleSiguiente al hacer clic.
          Se deshabilita si el índice actual es igual al último índice del array "destinos".
        */}
        <button onClick={handleSiguiente} disabled={currentIndex === destinos.length - 1}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

// Exportamos el componente para que pueda ser utilizado en App.js
export default DestinoDisplay;
