import React, {useEffect} from "react"

import "./style.css"

export default function StaticTextarea({ text, className }) {
	const lines = text.replace(/\t/g, " ").split(/\n/)
	const rows = lines.length
	const cols = Math.max(...lines.map((line) => line.length)) + 7

	const textareaRef = React.createRef();

	className = className ? className + " textarea-static" : "textarea-static"

	useEffect(() => {
		const textarea = textareaRef.current;
		textarea.style.height = "auto";
		textarea.style.height = textarea.scrollHeight + "px";

		
	}, [text, textareaRef])

	return (
		<textarea
			className={className}
			defaultValue={lines.join("\n")}
			rows={rows}
			cols={cols}
			ref={textareaRef}
			disabled
		/>
	)
}
