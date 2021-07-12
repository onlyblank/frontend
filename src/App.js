import './App.css';
import React from 'react';
import CodeEditor from './components/CodeEditor';
import ExpandableTextarea from './components/ExpandableTextarea';
import ResettedInput from './components/ResettedInput';


class App extends React.Component{

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
			annotation: `На экран будет выведено:
Примечание:
Если возникнет ошибка компиляции, введите: ***
Если ошибок и исключений нет, но на экран не выведется ничего, введите: ---
Если возникнет ошибка исполнения или исключение, введите: +++`,
			answer: "нет ответа xddd",
		};

		this.state = {task};
		this.onTaskPropertyChange = this.onTaskPropertyChange.bind(this);
	}

	onTaskPropertyChange(event, property) {
		if(!this.state.task.hasOwnProperty(property))
			throw new Error(`property ${property} not found in Task object`);
		this.setState(state => {
			state.task[property] = event.target.value;
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
					<div className="settings__is-enabled">
						<label htmlFor="settings__is-enabled--checkbox">Вопрос активен</label>
						<input type="checkbox" name="" id="settings__is-enabled--checkbox"/>
					</div>
				</div>
	
				<div className="task">
					<div className="task__question-wrapper">
						<ExpandableTextarea 
							className="task__question"
							onChange={event => this.onTaskPropertyChange(event,"question")}
							value={task.question}
						/>
					</div>
					<CodeEditor code={task.code}/>
					<div className="task__annotation-wrapper">
						<ExpandableTextarea 
							className="task__annotation"
							onChange={event => this.onTaskPropertyChange(event,"annotation")}
							value={task.annotation}
						/>
					</div>
					<div className="task__author">
						<span>@doritosxxx</span>
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
