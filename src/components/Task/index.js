import React from "react";
import { CodeEditor, ExpandableTextarea } from '../../components';

import './style.css';

export default function Task({ task, setTask, ...props }){

	function setTaskProperty(property, value){
		const taskCopy = {...task};
		taskCopy[property] = value;
		setTask(taskCopy);
	}

	return (<div className="task__wrapper">
		<div className="task">
			{task.question && <div className="task__question-wrapper">
				<ExpandableTextarea 
					className="task__question"
					onChange={event => setTaskProperty("question", event.target.value)}
					value={task.question}
				/>
			</div>}
			{task.code && <div className="task__code-editor-wrapper">
				<CodeEditor code={task.code}/>
			</div>}
			{task.annotation && <div className="task__annotation-wrapper">
				<ExpandableTextarea 
					className="task__annotation"
					onChange={event => setTaskProperty("annotation", event.target.value)}
					value={task.annotation}
				/>
			</div>}
		</div>
	</div>);
}
