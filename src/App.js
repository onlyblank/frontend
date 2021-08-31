import './App.css';
import React from 'react';
import CodeEditor from './components/CodeEditor';
import ExpandableTextarea from './components/ExpandableTextarea';
import ResettedInput from './components/ResettedInput';
import AuthorBox from './components/AuthorBox';

class App extends React.Component {

	constructor(props){
		super(props);
		const task = {
			id: 1,
			question: "В результате выполнения фрагмента программы:",
			code: `using System;
class Program {
	static void Main() {
		int x = 5;
		Meth(ref x);
	}

	static void Meth(ref int x) {
		x--;
		if (x == 0)
			return;
		Meth(ref x);
		Console.Write(x);
	}
}`,
			annotation: `На экран будет выведено:`,
			answer: "нет ответа xddd",
			author: "@doritosxxx",
		};

		this.state = {
			task,
			taskRef: React.createRef()
		};
		this.onTaskPropertyChange = this.onTaskPropertyChange.bind(this);
		this.setTaskProperty = this.setTaskProperty.bind(this);
	}

	onTaskPropertyChange(event, property) {
		this.setTaskProperty(property, event.target.value);
	}

	setTaskProperty(property, value) {
		if(!this.state.task.hasOwnProperty(property))
			throw new Error(`property ${property} not found in Task object`);
		this.setState(state => {
			state.task[property] = value;
			return state;
		})
	}

	render(){
		const task = this.state.task;
		return (
			<main>
				<div className="settings">
					<div className="settings__categories">
						<label htmlFor="settings__categories--select"> Категории </label>
						<select name="" id="settings__categories--select">
							<option value="1">category with id 1</option>
							<option value="2">category with id 2</option>
							<option value="3">category with id 3</option>
						</select>
					</div>
					<div className="settings__is-task-enabled">
						<label htmlFor="settings__is-task-enabled--checkbox">Вопрос активен</label>
						<input type="checkbox" name="" id="settings__is-task-enabled--checkbox"/>
					</div>
					<div className="settings__is-code-enabled">
						<label htmlFor="settings__is-code-enabled--checkbox">Вопрос с кодом</label>
						<input 
							type="checkbox" 
							name="" 
							id="settings__is-code-enabled--checkbox"
							checked={task.code !== null}
							onChange={event => {
								this.setTaskProperty("code", event.target.checked ? "" : null)
							}}
						/>
					</div>
				</div>
	
				<div className="task-wrapper">
					<div className="task" ref={this.state.taskRef}>
						<div className="task__question-wrapper">
							<ExpandableTextarea 
								className="task__question"
								onChange={event => this.onTaskPropertyChange(event,"question")}
								value={task.question}
							/>
						</div>
						{task.code !== null && <div className="task__code-editor-wrapper">
							<CodeEditor code={task.code}/>
						</div>}
						<div className="task__annotation-wrapper">
							<ExpandableTextarea 
								className="task__annotation"
								onChange={event => this.onTaskPropertyChange(event,"annotation")}
								value={task.annotation}
							/>
						</div>
						{/* author */}
						{/* <div className="task__author">
							<AuthorBox author={task.author} />
						</div> */}
					</div>
				</div>
	
				<div className="answer">
					<div className="answer-row">
						<label id="answer--input">Ответ: </label>
						<ResettedInput 
							id="answer--input" 
							value={task.answer}
							onChange={event => this.onTaskPropertyChange(event,"answer")} 
						/>
					</div>
				</div>
			</main>
		);
	}
}

export default App;
