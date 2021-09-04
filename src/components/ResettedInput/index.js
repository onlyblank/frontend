import React from "react";
import './style.css';

export default class ResettedInput extends React.Component {
	render(){
		const {className, ...props} = this.props;
		return (<input 
			{...props}
			className={("input-reset " + className).trim()}
			type="text"
			spellCheck="false"
		/>)
	}
}