import React from "react";
import './style.css';

export default class ExpandableTextarea extends React.Component {

	constructor(props){
		super(props);

		this.onChange = this.onChange.bind(this);
		this.updateHeight = this.updateHeight.bind(this);
		this.textarea = React.createRef();
	}

	componentDidMount(){
		this.updateHeight();
	}

	componentDidUpdate(){
		this.updateHeight();
	}

	updateHeight(){
		const textarea = this.textarea.current;
		/*
		//textarea.style.height = "auto";
		console.log(textarea.value,  textarea.scrollHeight, textarea.clientHeight);
		//textarea.style.height = textarea.scrollHeight + "px";
		*/

		textarea.parentNode.dataset.replicatedValue = textarea.value;
		console.log(textarea.value);
	}

	onChange(event){
		this.updateHeight();
		if(typeof this.props.onChange === "function")
			this.props.onChange(event);
	}

	render(){
		// onChange must be excluded from `props` object.
		const {className, onChange, ...props} = this.props;
		return (<div className={("grow-wrap " + className).trim()}>
			<textarea
				rows={1}
				{...props}
				className={"textarea-reset"}
				onChange={this.onChange}
				ref={this.textarea}
				spellCheck="false"
			/>
		</div>);
	}
}