import React from "react"

import "./style.css"

export default function StaticTextarea({ text, className }) {
	const lines = text.replace(/\t/g, " ").split(/\n/)
	const rows = lines.length
	const cols = Math.max(...lines.map((line) => line.length)) + 1

	className = className ? className + " textarea-static" : "textarea-static"

	return (
		<textarea
			className={className}
			defaultValue={lines.join("\n")}
			rows={rows}
			cols={cols}
			disabled
		/>
	)
}
