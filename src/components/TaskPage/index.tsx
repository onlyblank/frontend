import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { TaskDto } from "../../interface/task.dto"
import Task from "../Task"

export default function TaskPage() {
	const { id } = useParams()

	const [task, setTask] = useState<TaskDto | null>(null)

	/*
	useEffect(() => {
		API.tasks
			.findOneById(+id)
			.then((data) => {
				console.log(data)
				return data
			})
			.then((data) => setTask(data))
			.then(() => window.dispatchEvent(new CustomEvent("taskReady")))
	}, [id])
*/
	return (
		<div>
			<Task task={task} />
		</div>
	)
}
