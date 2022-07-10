import React from "react"
import {
	isFieldCodeComponent,
	isFieldImageComponent,
	isFieldRichTextComponent,
} from "../../interface/task.guards"
import {
	FieldCodeComponent,
	FieldComponent,
	FieldImageComponent,
	TaskDto,
} from "../../interface/task.dto"
import "./style.css"
import FieldRichText from "../FieldRichText"
import HighlightedCode from "../HighlightedCode"

function FieldCode(component: FieldCodeComponent) {
	return (
		<div className="task-field--code">
			<HighlightedCode
				code={component.code}
				language={component.language}
			/>
		</div>
	)
}

function FieldImage(component: FieldImageComponent) {
	// TODO: implement
	return <div className="task-field--image"></div>
}

function mapFieldComponent(component: FieldComponent) {
	let mapped = <div>not implemented</div>

	if (isFieldRichTextComponent(component)) {
		mapped = FieldRichText(component)
	} else if (isFieldCodeComponent(component)) {
		mapped = FieldCode(component)
	} else if (isFieldImageComponent(component)) {
		mapped = FieldImage(component)
	}

	const key = component.__component + "__" + component.id
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
