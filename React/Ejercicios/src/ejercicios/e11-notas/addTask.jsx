import { useState } from 'react'

export default ({ onAddTask }) => {
    const [text, setText] = useState('')

    return(
        <>
            <input 
                type="text" 
                placeholder="Agregar Tarea"
                value={text} 
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() =>{
                onAddTask(text)
                setText('')
            }}>Añadir</button>
        </>
    )
}