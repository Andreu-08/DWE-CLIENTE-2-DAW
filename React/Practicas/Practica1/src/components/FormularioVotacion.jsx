// src/components/FormularioVotacion.js

// Importamos React y el hook useState para manejar el estado del componente.
import React, { useState } from 'react';
// Importamos la base de datos de destinos para usarlos en los selectores de preferencia.
import { destinos } from '../destinos';

function FormularioVotacion() {
  // Declaramos el estado "formData" para almacenar los datos del formulario.
  // Cada propiedad corresponde a un campo del formulario.
  const [formData, setFormData] = useState({
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    dni: '',
    telefono: '',
    preferencia1: '',
    preferencia2: '',
    preferencia3: ''
  });

  // Función genérica para actualizar los campos de texto (nombre, apellidos, DNI).
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Actualizamos el estado copiando los valores actuales y modificando el campo correspondiente.
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función específica para el campo "teléfono" para restringir la entrada a números.
  const handleTelefonoChange = (e) => {
    const value = e.target.value;
    // Se utiliza una expresión regular para permitir solo dígitos (0-9).
    if (/^\d*$/.test(value)) {
      // Si la entrada es válida, se actualiza el estado.
      setFormData({
        ...formData,
        telefono: value
      });
    } else {
      // Si se ingresa un carácter no numérico, se muestra un mensaje de alerta.
      alert('Solo se permiten números en el campo de teléfono.');
    }
  };

  // Función para manejar el cambio en los selectores de preferencia.
  // Además, si se modifica una preferencia, se limpian las siguientes para evitar inconsistencias.
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      // Si se cambia la primera preferencia, se reinician la segunda y la tercera.
      ...(name === 'preferencia1' && { preferencia2: '', preferencia3: '' }),
      // Si se cambia la segunda preferencia, se reinicia la tercera.
      ...(name === 'preferencia2' && { preferencia3: '' })
    });
  };

  // Función para manejar el envío del formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir la recarga de la página.

    // Validación de que todos los campos estén completos.
    if (
      !formData.nombre ||
      !formData.primerApellido ||
      !formData.segundoApellido ||
      !formData.dni ||
      !formData.telefono ||
      !formData.preferencia1 ||
      !formData.preferencia2 ||
      !formData.preferencia3
    ) {
      // Si falta algún campo, se muestra un mensaje de alerta y se detiene el envío.
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    // Si todos los campos están completos, se muestra un mensaje de confirmación.
    alert('¡Tu voto ha sido enviado con éxito!');
    
    // Aquí se podría implementar la lógica para enviar los datos a un servidor o procesarlos de otra manera.

    // Opcionalmente, se limpia el formulario después de enviar.
    setFormData({
      nombre: '',
      primerApellido: '',
      segundoApellido: '',
      dni: '',
      telefono: '',
      preferencia1: '',
      preferencia2: '',
      preferencia3: ''
    });
  };

  // Función para limpiar el formulario al hacer clic en el botón "Limpiar".
  const handleClear = () => {
    setFormData({
      nombre: '',
      primerApellido: '',
      segundoApellido: '',
      dni: '',
      telefono: '',
      preferencia1: '',
      preferencia2: '',
      preferencia3: ''
    });
  };

  // Filtrado de opciones para el primer selector: se muestran todos los destinos.
  const opcionesPreferencia1 = destinos;

  // Filtrado para el segundo selector: se excluye el destino seleccionado en el primer selector.
  const opcionesPreferencia2 = destinos.filter(
    (destino) => destino.nombre !== formData.preferencia1
  );

  // Filtrado para el tercer selector: se excluyen los destinos seleccionados en el primer y segundo selector.
  const opcionesPreferencia3 = destinos.filter(
    (destino) =>
      destino.nombre !== formData.preferencia1 &&
      destino.nombre !== formData.preferencia2
  );

  return (
    <div className="formulario-votacion">
      {/* Título del formulario */}
      <h3>Formulario para emitir tu voto</h3>
      {/* El formulario se encarga de capturar los datos del usuario */}
      <form onSubmit={handleSubmit}>
        {/*
          Campo de texto para el nombre.
          El atributo "value" se asocia con el estado para mostrar el valor actual,
          y "onChange" actualiza el estado conforme el usuario escribe.
        */}
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>
        {/*
          Campo para el primer apellido.
        */}
        <div>
          <label htmlFor="primerApellido">Primer Apellido:</label>
          <input
            type="text"
            id="primerApellido"
            name="primerApellido"
            placeholder="Ingresa tu primer apellido"
            value={formData.primerApellido}
            onChange={handleInputChange}
          />
        </div>
        {/*
          Campo para el segundo apellido.
        */}
        <div>
          <label htmlFor="segundoApellido">Segundo Apellido:</label>
          <input
            type="text"
            id="segundoApellido"
            name="segundoApellido"
            placeholder="Ingresa tu segundo apellido"
            value={formData.segundoApellido}
            onChange={handleInputChange}
          />
        </div>
        {/*
          Campo para el DNI.
        */}
        <div>
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            placeholder="Ingresa tu DNI"
            value={formData.dni}
            onChange={handleInputChange}
          />
        </div>
        {/*
          Campo para el teléfono.
          Se utiliza un manejador de cambio específico para restringir la entrada a números.
        */}
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Ingresa tu teléfono"
            value={formData.telefono}
            onChange={handleTelefonoChange}
          />
        </div>
        {/*
          Selector para la primera preferencia.
          Este selector está siempre activo y muestra todas las opciones disponibles.
        */}
        <div>
          <label htmlFor="preferencia1">Primera Preferencia:</label>
          <select
            id="preferencia1"
            name="preferencia1"
            value={formData.preferencia1}
            onChange={handleSelectChange}
          >
            <option value="">Seleccione un destino</option>
            {opcionesPreferencia1.map((destino, index) => (
              <option key={index} value={destino.nombre}>
                {destino.nombre}
              </option>
            ))}
          </select>
        </div>
        {/*
          Selector para la segunda preferencia.
          Se habilita solo si se ha seleccionado la primera preferencia,
          y no muestra el destino ya seleccionado en el primer selector.
        */}
        <div>
          <label htmlFor="preferencia2">Segunda Preferencia:</label>
          <select
            id="preferencia2"
            name="preferencia2"
            value={formData.preferencia2}
            onChange={handleSelectChange}
            disabled={!formData.preferencia1} // Deshabilitado si no hay selección en el primer selector.
          >
            <option value="">Seleccione un destino</option>
            {opcionesPreferencia2.map((destino, index) => (
              <option key={index} value={destino.nombre}>
                {destino.nombre}
              </option>
            ))}
          </select>
        </div>
        {/*
          Selector para la tercera preferencia.
          Se habilita solo si se ha seleccionado la segunda preferencia,
          y no muestra los destinos seleccionados en los selectores anteriores.
        */}
        <div>
          <label htmlFor="preferencia3">Tercera Preferencia:</label>
          <select
            id="preferencia3"
            name="preferencia3"
            value={formData.preferencia3}
            onChange={handleSelectChange}
            disabled={!formData.preferencia2} // Deshabilitado si no hay selección en el segundo selector.
          >
            <option value="">Seleccione un destino</option>
            {opcionesPreferencia3.map((destino, index) => (
              <option key={index} value={destino.nombre}>
                {destino.nombre}
              </option>
            ))}
          </select>
        </div>
        {/*
          Botones de acción:
          - "Enviar" envía el formulario tras validar que todos los campos estén completos.
          - "Limpiar" restablece el formulario, borrando los datos introducidos.
        */}
        <div className="acciones-formulario">
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleClear}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}

// Exportamos el componente para poder utilizarlo en App.js.
export default FormularioVotacion;
