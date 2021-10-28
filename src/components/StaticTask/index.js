import React from "react"
import { CodeEditor, StaticTextarea } from "../../components"

import "./style.css"

export default function StaticTask({ task }) {
	return (
		<div className="task__wrapper">
			<div className="task">
				{task.question && (
					<div className="task__question-wrapper">
						<StaticTextarea
							text={task.question}
							className="task__question"
						/>
					</div>
				)}
				{task.code && (
					<div className="task__code-editor-wrapper">
						<CodeEditor code={task.code} readOnly />
					</div>
				)}
				{task.annotation && (
					<div className="task__annotation-wrapper">
						<StaticTextarea
							text={task.annotation}
							className="task__annotation"
						/>
					</div>
				)}
			</div>
		</div>
	)
}
