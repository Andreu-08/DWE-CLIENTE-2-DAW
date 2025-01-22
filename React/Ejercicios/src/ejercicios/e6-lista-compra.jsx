import Ej from "../components/ej";

const comida = [
    { id: 1, nombre: "Pizza", precio: 5, fruta: false },
    { id: 2, nombre: "Bubango", precio: 4, fruta: true },
    { id: 3, nombre: "Manzana", precio: 3, fruta: true },
    { id: 4, nombre: "Pera", precio: 2, fruta: true },
    { id: 5, nombre: "Tortilla", precio: 6, fruta: false },
  ];
  
  //funcion que muestra una lista de la compra con un if para diferenciar las frutas
  export default () => {
    
    const lista = comida.map((comida) => (
      <li key={comida.id} style={{ color: comida.fruta ? "green" : "red" }}>
        {comida.nombre} - {comida.precio}€
      </li>
    ));
  
    return (
      <>
        <Ej
          n="6"
          e="Crea un componente que muestre una lista de la compra con un condicional para los estilos (si son frutas verde)"/>
        <h2>Lista de la compra</h2>
        <ul>{lista}</ul>
      </>
    );
  }
  