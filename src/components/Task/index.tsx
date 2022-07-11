import {
	isFieldCodeComponent,
	isFieldImageComponent,
	isFieldRichTextComponent,
} from "../../interface/task.guards"
import { FieldComponent, TaskDto } from "../../interface/task.dto"
import "./style.css"
import FieldRichText from "../FieldRichText"
import FieldCode from "../FieldCode"
import FieldImage from "../FieldImage"

function mapFieldComponent(component: FieldComponent) {
	let mapped = <div>unknown component type</div>

	if (isFieldRichTextComponent(component)) {
		mapped = FieldRichText(component)
	} else if (isFieldCodeComponent(component)) {
		mapped = FieldCode(component)
	} else if (isFieldImageComponent(component)) {
		mapped = FieldImage(component)
	}

	const key = component.__component + "." + component.id
	return (
		<div className="task__field" key={key}>
			{mapped}
		</div>
	)
}

type Props = {
	task: TaskDto | null
}

export default function Task({ task }: Props) {
	const fields = task?.attributes.fields

	return (
		<div className="task__wrapper">
			<div className="task">
				{fields && fields.map(mapFieldComponent)}
			</div>
		</div>
	)
}
