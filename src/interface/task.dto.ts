import { ImageDto } from "./image.dto"
import { Component, Resource } from "./schema"

// AnswerComponent

type AnswerTextComponent = Component<
	"task-answer.text",
	{
		text: string
	}
>

type AnswerComponent = AnswerTextComponent

// FieldComponent

type FieldRichTextComponent = Component<
	"task-field.rich-text",
	{
		text: string
	}
>

type FieldCodeComponent = Component<
	"task-field.code",
	{
		code: string
		language: "csharp" | "cpp" | "javascript"
	}
>

type FieldImageComponent = Component<
	"task-field.image",
	{
		caption: string
		image: {
			data: ImageDto
		}
	}
>

type FieldComponent =
	| FieldCodeComponent
	| FieldRichTextComponent
	| FieldImageComponent

export type TaskDto = Resource<{
	answer: AnswerComponent[]
	fields: FieldComponent[]
}>
