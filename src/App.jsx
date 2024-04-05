import { useState } from "react"
import "./App.css"
import { Container } from "./Components/divContainer/Container"
import { InputItem } from "./Components/input/Index"
import { handleDate } from "./Js-Functions/handleDate"
import { List } from "./Components/todoList"

function App() {
	const [id, setId] = useState(1)

	const [taskText, setTaskText] = useState("")
	const [tasks, setTasks] = useState([
		{
			id: 0,
			taskText: "Dummy",
			date: handleDate(),
			completed: false,
		},
	])

	const handleSubmit = () => {
		const newTask = {
			id: id,
			taskText: taskText,
			date: handleDate(),
			completed: false,
		}
		setTasks([...tasks, newTask])
		setTaskText("")
		setId(id + 1)
	}

	const handleDelete = (id) => {
		const newList = tasks.filter((task) => task.id !== id)
		setTasks(newList)
	}

	const handleTaskDone = (id) => {
		const check = tasks.map((task) => {
			if (task.id === id) return { ...task, completed: !task.completed }
			return task
		})
		setTasks(check)
	}

	return (
		<div className="mainDiv">
			<h1>TodoList</h1>
			<Container>
				<InputItem
					handleSubmit={handleSubmit}
					value={taskText}
					setTaskText={setTaskText}
				/>
			</Container>
			<List
				tasks={tasks}
				handleDelete={handleDelete}
				handleTaskDone={handleTaskDone}
			/>
		</div>
	)
}

export default App
