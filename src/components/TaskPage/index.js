import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../utils/api';
import Task from '../Task';

export default function TaskPage(){

	const { id } = useParams();

	const [task, setTask] = useState({
		question: 'asd',
		code: '//eto kod',
		annotation: 'asd',
	});

	useEffect(() => {
		API.tasks.findOneById(+id)
			.then(data => {
				console.log(data);
				return data;
			})
			.then(data => setTask(data))
			.then(() => window.dispatchEvent(new CustomEvent("taskReady")))
	}, [id])

	return (
		<div>
			<Task 
				task={task} 
				setTask={setTask}
				editable={false}
			/>
		</div>
	);
}