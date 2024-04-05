import { Container } from "../divContainer/Container"
import { Trash, Pencil } from "@phosphor-icons/react"
import "./style.css"

export function Item({
	handleTaskDone,
	taskText,
	date,
	id,
	handleDelete,
	task,
	completed,
}) {
	let itemStyle = completed ? "itemChecked" : "itemNotCheck"
	return (
		<Container>
			<div className="itemContainer" key={id}>
				<div className={itemStyle}>
					<input
						type="checkbox"
						onClick={() => {
							handleTaskDone(task.id)
						}}
						checked={completed}
					/>
					<div className="containertext">
						<span className="itemtext">{taskText}</span>
						<span className="itemDate">{date}</span>
					</div>
				</div>
				<div className="itemButtons">
					<button>
						<Pencil size={20} color="#064c2d" />
					</button>
					<button
						onClick={() => {
							handleDelete(task.id)
						}}
						type="button"
					>
						<Trash size={20} color="#e60f0f" />
					</button>
				</div>
			</div>
		</Container>
	)
}
