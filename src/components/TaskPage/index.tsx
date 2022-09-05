import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { TaskDto } from "../../interface/task.dto"
import Task from "../Task"
import { tasks } from "../../api/cms/tasks"

export default function TaskPage() {
	const { id } = useParams()

	const [task, setTask] = useState<TaskDto | null>(null)

	useEffect(() => {
		if (id === undefined) {
			return
		}
		tasks.findById(+id).then((taskDto) => {
			console.info(id, taskDto)
			setTask(taskDto)
			window.dispatchEvent(new CustomEvent('rendered'));
		})
	}, [id])

	return (
		<div>
			<Task task={task} />
		</div>
	)
}
