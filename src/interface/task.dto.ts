import { ImageDto } from "./image.dto"
import { Component, Resource } from "./schema"

// AnswerComponent

export type AnswerTextComponent = Component<
	"task-answer.text",
	{
		text: string
	}
>

export type AnswerComponent = AnswerTextComponent

// FieldComponent

export type FieldRichTextComponent = Component<
	"task-field.rich-text",
	{
		text: string
	}
>

export type FieldCodeComponent = Component<
	"task-field.code",
	{
		code: string
		language: "csharp" | "cpp" | "javascript"
	}
>

export type FieldImageComponent = Component<
	"task-field.image",
	{
		caption: string
		image: {
			data: ImageDto
		}
	}
>

export type FieldComponent =
	| FieldCodeComponent
	| FieldRichTextComponent
	| FieldImageComponent

// TaskDto

export type TaskDto = Resource<{
	answer: AnswerComponent[]
	fields: FieldComponent[]
}>
