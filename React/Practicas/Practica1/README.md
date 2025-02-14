# Proyecto de Votación de Destinos

Bienvenido al repositorio del _Proyecto de Votación de Destinos_. Este proyecto es una aplicación web construida con React y Vite, diseñada para simular el proceso de votación para elegir el destino de un viaje escolar de fin de curso.

## Descripción

El proyecto ofrece una experiencia interactiva en la que los usuarios pueden:
- Visualizar los destinos disponibles para un viaje escolar mediante un **slider** de imágenes y detalles.
- Seleccionar sus destinos preferidos utilizando un formulario dinámico.
  
La aplicación se estructura en dos componentes principales que se encuentran en la carpeta `src/components`.

---

## Componentes

### DestinoDisplay

Este componente se encarga de mostrar los datos de cada destino en forma de slider. Permite al usuario navegar hacia adelante y atrás entre los destinos disponibles.

- **Archivo:** [src/components/DestinoDisplay.jsx](./src/components/DestinoDisplay.jsx)
- **Funcionalidad principal:** Muestra el nombre, la foto, la descripción y el precio de cada destino.  
- **Interacción:** Utiliza botones para ir al destino anterior o siguiente.

---

### FormularioVotacion

Este componente es el encargado de recoger la votación del usuario. Presenta un formulario en el que se solicitan datos personales y las preferencias por los destinos.

- **Archivo:** [src/components/FormularioVotacion.jsx](./src/components/FormularioVotacion.jsx)
- **Funcionalidad principal:** Permite al usuario rellenar sus datos y elegir tres destinos en orden de preferencia.
- **Validación:** Se aseguran que se completen todos los campos antes de enviar el formulario.
- **Interacción:** El formulario se limpia después de enviar la información correctamente.

---

## Tecnologías Utilizadas

- **React:** Para construir la interfaz de usuario y gestionar el estado de los componentes.
- **Vite:** Herramienta de bundling que permite un desarrollo rápido con _Hot 
---


## Referencias

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Rules](https://eslint.org/)

---

