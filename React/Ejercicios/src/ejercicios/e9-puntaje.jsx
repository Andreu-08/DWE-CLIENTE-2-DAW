import { useState } from "react";
import Ej from '../components/ej'

export default () => {
    // Estado para mantener la puntuación
    const [score, setScore] = useState(0)

    // Función para incrementar la puntuación utilizando actualización funcional
    function incremento(){
        setScore(prev => prev + 1)
    }

    return(
        <>
            <Ej n="9" e="Crear un contador de puntuaciones"/>
            {/* Botón para incrementar de uno en uno */}
            <button onClick={() => incremento()}>+1</button>
            {/* Botón para incrementar de tres en tres */}
            <button onClick={() =>{
                incremento()
                incremento()
                incremento()
            }}>+3</button>
            {/* Mostrar puntuación actual */}
            <h1>Puntucaion {score}</h1>
        </>
    )
}