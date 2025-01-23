
import { useState } from 'react';
import Ej from '../components/ej'

export default () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value);
    }
  
    function handleLastNameChange(e) {
      setLastName(e.target.value);
    }
  
    function handleReset() {
      setFirstName('');
      setLastName('');
    }
  
    return (
      <>
        <Ej n="8" e="Habilitar inputs que no funcionan utilizando useState"/>
        <form onSubmit={e => e.preventDefault()}>
          <input
            placeholder="Nombre"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <input
            placeholder="Apellido"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <h1>Hola, {firstName} {lastName}</h1>
          <button onClick={handleReset}>Reiniciar</button>
        </form>
      </>
    );
}