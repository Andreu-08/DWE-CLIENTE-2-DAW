import Ej from "../components/ej";
import { useState } from "react";

export default () => {
    // Estados para manejar la respuesta, el estado del formulario y errores
    const [answer, setAnswer] = useState("");
    const [status, setStatus] = useState("typing");
    const [error, setError] = useState(null);

    // Muestra mensaje de éxito si la respuesta es correcta
    if(status === 'success'){
        return(
            <>
            <Ej n="10" e="Crear un cuestionario con 3 preguntas y 3 respuestas" />
            <h1>Respuesta Correcta</h1>
            </>
        )
    }

    // Maneja cambios en el textarea
    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    // Maneja el envío del formulario
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submiting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch(error) {
            setError(error);
            setStatus('error');
        }
    }
    
    return (
        <>
            <Ej n="10" e="Maneja el estado de una respuesta indicando si es correcta o no." />
            {/* Formulario del cuestionario */}
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === "submiting"}
                />
                <br />
                {/* Botón deshabilitado si no hay respuesta o está enviando */}
                <button disabled={answer.length === 0 || status === "submiting"}>
                    Enviar
                </button>
                {/* Muestra mensaje de error si existe */}
                {status === 'error' && <p style={{color: 'red'}}>{error.message}</p>}
            </form>
        </>
    );
};

// Simula una validación en el servidor
function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError){
                reject(new Error('Respuesta Incorrecta'))
            }else{
                resolve()
            }
        }, 1500)
    })
}
