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
	FieldRichTextComponent,
	TaskDto,
} from "../../interface/task.dto"
import "./style.css"

function FieldRichText(component: FieldRichTextComponent) {
	return <div></div>
}

function FieldCode(component: FieldCodeComponent) {
	return <div></div>
}

function FieldImage(component: FieldImageComponent) {
	// TODO: implement
	return <div></div>
}

function mapFieldComponent(component: FieldComponent) {
	if (isFieldRichTextComponent(component)) {
		return FieldRichText(component)
	}
	if (isFieldCodeComponent(component)) {
		return FieldCode(component)
	}
	if (isFieldImageComponent(component)) {
		return FieldImage(component)
	}
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
