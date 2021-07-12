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

	updateHeight(){
		const textarea = this.textarea.current;
		textarea.style.height = "auto";
		textarea.style.height = textarea.scrollHeight + "px";
	}

	onChange(event){
		this.updateHeight();
		this.props.onChange(event);
	}

	render(){
		// onChange must be excluded from `props` object.
		const {className, onChange, ...props} = this.props;
		return (<textarea
			rows={1}
			{...props}
			className={("textarea-reset " + className).trim()}
			onChange={this.onChange}
			ref={this.textarea}
		></textarea>);
	}
}