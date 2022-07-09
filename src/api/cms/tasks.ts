import { TaskDto } from "../../interface/task.dto"
import { Response } from "../../interface/schema"
import { request } from "./request"

export const tasks = {
	async findById(id: number): Promise<TaskDto> {
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
									id: 2,
									__component: "task-field.rich-text",
									text: "# В результате выполнения программы",
								},
								{
									id: 3,
									__component: "task-field.code",
									code: 'Console.Write("test");',
									language: "csharp",
								},
							],
						},
					}),
				2000
			)
		)
		/*
		const response = await request<Response<TaskDto>>(`tasks/${id}`)
		return response.data
		*/
	},
}
