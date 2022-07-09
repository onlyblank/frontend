import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { TaskDto } from "../../interface/task.dto"
import Task from "../Task"
import { tasks } from "../../api/cms/tasks"

export default function TaskPage() {
	const { id } = useParams()

	const [task, setTask] = useState<TaskDto | null>(null)

	useEffect(() => {
		async function getData(id: number) {
			const taskDto: TaskDto = await tasks.findById(id)
			console.info(taskDto)
			setTask(taskDto)
			// TODO: Emit ready event
		}
		if (id) {
			getData(+id)
		}
		// TODO Hook depends from `setTask`. Should I pass it into dependency array?
	}, [id])

	return (
		<div>
			<Task task={task} />
		</div>
	)
}
