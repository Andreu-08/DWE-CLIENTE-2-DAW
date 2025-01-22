import Ej from "../components/ej";

export default () => {
    function handleclick() {
        alert("AAAAAAAAAAAAAAAHHHHHHHHHHHH");
      }
      return (
        <>
        <Ej n="4" e="Crea un boton que al pulsarlo muestre un alert con un mensaje"/>
        <button onClick={handleclick}>CHILLAR</button>
        </>
    );
}