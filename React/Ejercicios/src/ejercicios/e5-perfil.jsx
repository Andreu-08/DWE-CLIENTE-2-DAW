import Ej from "../components/ej";

const persona = {
    nombre: "Andreu",
    edad: 25,
  };
  
  export default () => {
    return (
      <>
        <Ej
          n="5"
          e="Crea un componente que muestre los datos de una persona desde un objeto"/>
        <h2>
          {persona.nombre}, {persona.edad}
        </h2>
      </>
    );
  }
  