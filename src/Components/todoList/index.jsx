import { Item } from "../todoItem/Index"

export function List({ handleTaskDone, tasks, handleDelete }) {
	return (
		<>
			{tasks.map((task) => {
				return (
					<Item
						handleTaskDone={handleTaskDone}
						task={task}
						handleDelete={handleDelete}
						taskText={task.taskText}
						id={task.id}
						key={task.id}
						date={task.date}
						completed={task.completed}
					/>
				)
			})}
		</>
	)
}
