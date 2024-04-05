import "./style.css"

export function Button({ text, handleSubmit }) {
	return (
		<button className="button" onClick={handleSubmit}>
			{text}
		</button>
	)
}
