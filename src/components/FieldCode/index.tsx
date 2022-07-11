import { FieldCodeComponent } from "../../interface/task.dto"
import HighlightedCode from "../HighlightedCode"

export default function FieldCode(component: FieldCodeComponent) {
	return (
		<div className="task-field--code">
			<HighlightedCode
				code={component.code}
				language={component.language}
			/>
		</div>
	)
}
