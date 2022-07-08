import { Identifiable } from "./identifiable"
import { ImageDto } from "./image.dto"

// AnswerComponent

interface AnswerTextComponent {
	__component: "task-answer.text"
	text: string
}

type AnswerComponent = AnswerTextComponent & Identifiable

// FieldComponent

interface FieldRichTextComponent {
	__component: "task-field.rich-text"
	text: string
}

interface FieldCodeComponent {
	__component: "task-field.code"
	code: string
	language: "csharp" | "cpp" | "javascript"
}

interface FieldImageComponent {
	__component: "task-field.image"
	caption: string
	image: {
		data: ImageDto
	}
}

type FieldComponent = (
	| FieldCodeComponent
	| FieldRichTextComponent
	| FieldImageComponent
) &
	Identifiable

export interface TaskDto {
	id: number
	attributes: {
		answer: AnswerComponent[]
		fields: FieldComponent[]
	}
}
