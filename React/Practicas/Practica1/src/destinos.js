// src/destinos.js
// --------------------------------------------------------------------------------
// Este archivo contiene la "base de datos" de destinos para la votación del viaje.
// Se crea un array de objetos, donde cada objeto representa un destino con su respectiva
// información: nombre, descripción, foto y precio.
// --------------------------------------------------------------------------------

// Exportamos el array "destinos" para poder importarlo en otros componentes de la aplicación.
export const destinos = [
    {
      // Nombre del destino
      nombre: "Playa",
      // Descripción que resalta las características del destino
      descripcion: "Un destino paradisíaco con playas de arena blanca y aguas cristalinas.",
      // Ruta o URL de la imagen del destino (se usa un placeholder para este ejemplo)
      foto: "https://www.exoticca.com/es/blog/wp-content/uploads/2019/05/viajes-a-playas-paradis%C3%ADacas.jpg",
      // Precio del destino
      precio: 500
    },
    {
      // Segundo destino: Montaña Mística
      nombre: "Montaña",
      descripcion: "Una aventura en la montaña con paisajes increíbles y aire puro.",
      foto: "https://matilde.detorresvillagra.com/wp-content/uploads/2013/05/monta%C3%B1a.jpg",
      precio: 450
    },
    {
      // Tercer destino: Ciudad Histórica
      nombre: "Ciudad Histórica",
      descripcion: "Descubre la historia y la cultura de una ciudad llena de encanto.",
      foto: "https://i0.wp.com/viajealpatrimonio.com/wp-content/uploads/2016/07/0130-ciudad-historica-fortificada-de-cuenca.jpg",
      precio: 600
    },
    {
      // Cuarto destino: Parque Natural
      nombre: "Parque Natural",
      descripcion: "Disfruta de la naturaleza y la tranquilidad en este parque lleno de vida.",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp07plr9kAa7fFIWurUtdkOWAP-q8c-K9Vbw&s",
      precio: 400
    },
    {
      // Quinto destino: Isla Tropical
      nombre: "Isla Tropical",
      descripcion: "Escápate a una isla tropical donde el sol y el mar te esperan.",
      foto: "https://png.pngtree.com/thumb_back/fw800/background/20250116/pngtree-aerial-view-of-a-tropical-island-with-clear-blue-waters-and-image_16923663.jpg",
      precio: 550
    }
  ];