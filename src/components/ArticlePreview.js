import React, { Component } from "react";
import "./ArticlePreview.css";

class Preview extends Component {
	constructor(props){
		super(props);
		this.state = {
			s: null
		};
		console.log(props.s);
	}


	render(){
		return(
			<div id="preview-container">
			</div>
		);
	}
}

export default Preview;
