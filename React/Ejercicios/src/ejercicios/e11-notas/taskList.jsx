//funcion componenente para listar las tareas
export default ({ tasks, onDeleteTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button 
                        onClick={() => onDeleteTask(index)}
                        style={{ fontSize: '12px', padding: '4px 8px', marginLeft: '8px' }}
                    >
                        Eliminar
                    </button>
                </li>
            ))}
        </ul>
    )
}
