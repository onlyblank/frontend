import React from "react";

import './style.css'

export default class AuthorBox extends React.Component {
	render(){
		const {className, author, ...props} = this.props;
		return (
			<span 
				className={("author-box "+className).trim()} 
				{...props}
			>{author}</span>
		);

	}
}