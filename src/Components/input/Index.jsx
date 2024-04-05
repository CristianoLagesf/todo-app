import { Button } from "../button/Index"
import "./style.css"
import { ArrowFatLineRight } from "@phosphor-icons/react"

export function InputItem({ handleSubmit, value, setTaskText }) {
	return (
		<div className="Bordercontainer">
			<div className="inputContainer">
				<ArrowFatLineRight
					height={32}
					width={35}
					color="#ffffff"
					className="icon"
				/>
				<input
					className="inputText"
					placeholder="New Task"
					value={value}
					onKeyDown={(e) => {
						if (e.key === "Enter") handleSubmit()
					}}
					onChange={(e) => setTaskText(e.target.value)}
				/>
			</div>
			{value == "" ? (
				""
			) : (
				<Button text="Add New Task" handleSubmit={handleSubmit} />
			)}
		</div>
	)
}
