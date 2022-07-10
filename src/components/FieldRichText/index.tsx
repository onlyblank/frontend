import ReactMarkdown from "react-markdown"
import { FieldRichTextComponent } from "../../interface/task.dto"

export default function FieldRichText(component: FieldRichTextComponent) {
	return (
		<div className="task-field--rich-text">
			<ReactMarkdown>{component.text}</ReactMarkdown>
		</div>
	)
}
