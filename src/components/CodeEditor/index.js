import React from "react";
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/theme/dracula.css';

export default class CodeEditor extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			code: props.code,
		};
	}

	componentDidMount(){
		const editor = CodeMirror(document.querySelector(".task__code-wrapper"), {
			lineNumbers: true,
			mode: "text/x-csharp",
			theme: "dracula",
			value: this.state.code,
			lineWrapping: true,
			scrollbarStyle: "null",
		})

		editor.on("viewportChange", function(e){
			console.log(e);
		})
	}

	render(){
		return(
			<div className="task__code-wrapper"></div>
		)
	}
}