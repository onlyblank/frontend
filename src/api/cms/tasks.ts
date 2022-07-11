import { TaskDto } from "../../interface/task.dto"
import { Response } from "../../interface/schema"
import { request } from "./request"

async function mockTaskRequest(id: number): Promise<TaskDto> {
	return new Promise((res) =>
		setTimeout(
			() =>
				res({
					id: id,
					attributes: {
						answer: [
							{
								id: 2,
								__component: "task-answer.text",
								text: "test",
							},
						],
						fields: [
							{
								id: 1,
								__component: "task-field.rich-text",
								text: "В результате выполнения программы\n\nnext line\n\nanother line",
							},
							{
								id: 1,
								__component: "task-field.code",
								code: 'Console.Write("sometext")',
								language: "csharp",
							},
							{
								id: 2,
								__component: "task-field.rich-text",
								text: "Markdown test\n- case 1\n- case 2\n- case 3\n- another one\n- and another one",
							},
							{
								id: 2,
								__component: "task-field.code",
								code: 'var message = "More fields and this is very long code string some dummy text";\nvar one = 1;\nvar two = "2";\nvar three =  0x0003\n',
								language: "csharp",
							},
							{
								id: 3,
								__component: "task-field.rich-text",
								text: "1. ~~another one~~ strikethrough\n2. **another one** bold\n3. _and another one_ italic\n4. <u>and another one</u> underline",
							},
						],
					},
				}),
			2000
		)
	)
}

export const tasks = {
	async findById(id: number): Promise<TaskDto> {
		//return mockTaskRequest(id)

		const response = await request<Response<TaskDto>>(`tasks/${id}`)
		return response.data
	},
}
