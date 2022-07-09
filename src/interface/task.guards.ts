// AnswerComponent.

import {
	AnswerComponent,
	AnswerTextComponent,
	FieldCodeComponent,
	FieldComponent,
	FieldImageComponent,
	FieldRichTextComponent,
} from "./task.dto"

export function isAnswerTextComponent(
	component: AnswerComponent
): component is AnswerTextComponent {
	return component.__component === "task-answer.text"
}

// FieldComponent.

export function isFieldRichTextComponent(
	component: FieldComponent
): component is FieldRichTextComponent {
	return component.__component === "task-field.rich-text"
}

export function isFieldCodeComponent(
	component: FieldComponent
): component is FieldCodeComponent {
	return component.__component === "task-field.code"
}

export function isFieldImageComponent(
	component: FieldComponent
): component is FieldImageComponent {
	return component.__component === "task-field.image"
}
