import { useState } from 'react';
import { destinos } from '../destinos';

function FormularioVoto() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido1: '',
    apellido2: '',
    dni: '',
    telefono: '',
    pref1: '',
    pref2: '',
    pref3: ''
  });

  const cambioInput = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value
    });
  };

  const cambioTelefono = (e) => {
    const valor = e.target.value;
    if (/^\d*$/.test(valor)) {
      setDatos({
        ...datos,
        telefono: valor
      });
    } else {
      alert('Solo números en el teléfono');
    }
  };

  const cambioSelect = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
      ...(name === 'pref1' && { pref2: '', pref3: '' }),
      ...(name === 'pref2' && { pref3: '' })
    });
  };

  const enviar = (e) => {
    e.preventDefault();
    if (
      !datos.nombre ||
      !datos.apellido1 ||
      !datos.apellido2 ||
      !datos.dni ||
      !datos.telefono ||
      !datos.pref1 ||
      !datos.pref2 ||
      !datos.pref3
    ) {
      alert('Completa todos los campos');
      return;
    }
    alert('Voto enviado exitosamente!');
    setDatos({
      nombre: '',
      apellido1: '',
      apellido2: '',
      dni: '',
      telefono: '',
      pref1: '',
      pref2: '',
      pref3: ''
    });
  };

  const limpiar = () => {
    setDatos({
      nombre: '',
      apellido1: '',
      apellido2: '',
      dni: '',
      telefono: '',
      pref1: '',
      pref2: '',
      pref3: ''
    });
  };

  const opciones1 = destinos;
  const opciones2 = destinos.filter(d => d.nombre !== datos.pref1);
  const opciones3 = destinos.filter(d => d.nombre !== datos.pref1 && d.nombre !== datos.pref2);

  return (
    <div className="formulario-votacion">
      <h3>Formulario para emitir tu voto</h3>
      <form onSubmit={enviar}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={datos.nombre}
            onChange={cambioInput}
          />
        </div>
        <div>
          <label htmlFor="apellido1">Primer Apellido:</label>
          <input
            type="text"
            id="apellido1"
            name="apellido1"
            placeholder="Ingresa tu primer apellido"
            value={datos.apellido1}
            onChange={cambioInput}
          />
        </div>
        <div>
          <label htmlFor="apellido2">Segundo Apellido:</label>
          <input
            type="text"
            id="apellido2"
            name="apellido2"
            placeholder="Ingresa tu segundo apellido"
            value={datos.apellido2}
            onChange={cambioInput}
          />
        </div>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            placeholder="Ingresa tu DNI"
            value={datos.dni}
            onChange={cambioInput}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Ingresa tu teléfono"
            value={datos.telefono}
            onChange={cambioTelefono}
          />
        </div>
        <div>
          <label htmlFor="pref1">Primera Preferencia:</label>
          <select id="pref1" name="pref1" value={datos.pref1} onChange={cambioSelect}>
            <option value="">Elige un destino</option>
            {opciones1.map((d, i) => (
              <option key={i} value={d.nombre}>{d.nombre}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pref2">Segunda Preferencia:</label>
          <select 
            id="pref2" 
            name="pref2" 
            value={datos.pref2} 
            onChange={cambioSelect} 
            disabled={!datos.pref1}
          >
            <option value="">Elige un destino</option>
            {opciones2.map((d, i) => (
              <option key={i} value={d.nombre}>{d.nombre}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pref3">Tercera Preferencia:</label>
          <select 
            id="pref3" 
            name="pref3" 
            value={datos.pref3} 
            onChange={cambioSelect} 
            disabled={!datos.pref2}
          >
            <option value="">Elige un destino</option>
            {opciones3.map((d, i) => (
              <option key={i} value={d.nombre}>{d.nombre}</option>
            ))}
          </select>
        </div>
        <div className="acciones-formulario">
          <button type="submit">Enviar</button>
          <button type="button" onClick={limpiar}>Limpiar</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioVoto;
