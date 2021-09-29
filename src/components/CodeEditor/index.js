import React from "react";
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/theme/dracula.css';

import './style.css';

export default class CodeEditor extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			code: props.code,
			editor: null,
			wrapperRef: React.createRef(),
		};
	}

	componentDidMount(){
		const wrapper = this.state.wrapperRef.current;
		const editor = CodeMirror(wrapper, {
			lineNumbers: true,
			mode: "text/x-csharp",
			theme: "dracula",
			value: this.state.code,
			lineWrapping: true,
			scrollbarStyle: "null",
			viewportMargin: Infinity,
			readOnly: !!this.props.readOnly,
		});
		this.setState({ editor });
	}

	componentDidUpdate(){
		const code = this.props.code;
		this.state.editor.doc.setValue(code);
	}

	render(){
		return(
			<div className="task__code-wrapper" ref={this.state.wrapperRef}></div>
		)
	}
}