// Importamos React para poder utilizar JSX y definir componentes
import React from 'react';
import './App.css';
import DestinoDisplay from './components/DestinoDisplay';
import FormularioVotacion from './components/FormularioVotacion';

// Componente principal de la aplicación
function App() {
  return (
    // Contenedor principal de la aplicación
    <div className="App">
      {/* Componente que muestra los destinos */}
      <DestinoDisplay />
      {/* Componente que muestra el formulario de votación */}
      <FormularioVotacion />
    </div>
  );
}

// Exportamos el componente App 
export default App;