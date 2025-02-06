import { useReducer } from 'react'
import Ej from '../../components/ej'
import AddTask from './addTask'
import TaskList from './taskList'
//Componente para añadir tareas que llamaremos en el componente principal(lista de tareas)

const initialTasks = []

function tasksReducer(state, action) {
	switch(action.type) {
		case 'ADD_TASK':
			return [...state, action.payload]
		case 'DELETE_TASK':
			return state.filter((_, i) => i !== action.payload)
		default:
			return state
	}
}

//Componente principal para la aplicacion de lista de tareas
export default () => {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
    
	const handleAddTask = (text) => {
		if (text.trim() !== '') {
			dispatch({ type: 'ADD_TASK', payload: text })
		}
	}

	const handleDeleteTask = (index) => {
		dispatch({ type: 'DELETE_TASK', payload: index })
	}

	return(
		<>
			<Ej n="11" e="Crear un componente que funcione como una lista de tareas ToDo" />
			<h1>Lista de tareas</h1>
			<AddTask onAddTask={handleAddTask} />
			<TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
		</>
	)
}